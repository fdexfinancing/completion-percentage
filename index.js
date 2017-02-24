var ROW_TEMPLATE_RULE = 'rowTemplateRule';
var DEFAULT_RULE = 'defaultRule';
var DROPDOWN_RULE = 'dropdownRule';
var UPLOAD_RULE = 'uploadRule';

function calculatePercentage(mainStructure, data) {
  const result = [];

  mainStructure.survsAreaList.forEach(area => {
    let areaPercentual = 0;
    let areaTotal = area.structure.all.length > 0 ? area.structure.all.length : 1;
    let questionWeigth = 1 / areaTotal;

    area.structure.all.forEach(structure => {
      if (!structure.parent) {
        return;
      }

      areaPercentual += calculateQuestion(structure, data);
    });

    if (area.structure.all[0].parent) {
      result.push({
        area: area.name,
        percentage: (questionWeigth * areaPercentual) * 100
      });
    }

  });

  return result;
}

function calculateQuestion(structure, data) {
  let requiredQuestions = structure.input.filter(question => {
    if (!(question.description_input || question).hasOwnProperty('required_question')) {
      return false;
    }

    return question.required_question || question.description_input.required_question;
  });
  let rule = structure.parent.rule;
  let requiredQuestionsTotal = structure.parent.min_required || requiredQuestions.length;

  if (rule === DROPDOWN_RULE) {
    requiredQuestionsTotal = requiredQuestions.length;
  }

  requiredQuestionsTotal = requiredQuestionsTotal > 0 ? requiredQuestionsTotal : 1;

  let questionWeigth = 1 / requiredQuestionsTotal;
  let currentPercentage = 0;

  requiredQuestions.forEach(question => {
    let questionArr = question.model.split('$index.');

    if (questionArr.length === 1) {
      questionArr = question.model.split('.');
    }

    if (questionArr.length > 1) {
      if (rule === ROW_TEMPLATE_RULE) {
        currentPercentage = 0;

        for(let i = 1; i <= structure.parent.min_required; i++) {

          if (!data[questionArr[0] + i]) {
            return;
          }

          let questionData = data[questionArr[0] + i][questionArr[1]];

          if (isValidQuestion(rule, questionData, question)) {
            currentPercentage += questionWeigth;
          }
        }
      } else {

        let questionData = data[questionArr[0]] ? data[questionArr[0]][questionArr[1]] : false;

        if (!questionData) {
          return false;
        }

        questionData = data[questionArr[0]][(question.description_input || question).model.split('.')[1]];

        if (isValidQuestion(rule, questionData, question)) {
          currentPercentage += questionWeigth;
        }
      }
    } else {
      if (data[questionArr[0]]) {
        if (isValidQuestion(rule, data[questionArr[0]], question)) {
          currentPercentage += questionWeigth;
        }
      }
    }
  });

  return currentPercentage;
}

function isValidQuestion(rule, data, question) {

  if (rule === DEFAULT_RULE || rule === DROPDOWN_RULE) {
    return data.length >= (question.min_length || question.description_input.min_length);
  }

  if (rule === ROW_TEMPLATE_RULE || rule === UPLOAD_RULE) {
    return data || data > 0;
  }

  return false;
}

module.exports = {
  calculateQuestion,
  calculatePercentage
};
