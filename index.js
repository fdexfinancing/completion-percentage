var ROW_TEMPLATE_RULE = 'rowTemplateRule';
var DEFAULT_RULE = 'defaultRule';
var DROPDOWN_RULE = 'dropdownRule';
var UPLOAD_RULE = 'uploadRule';
var SELECT_RULE = 'selectRule';

const defaultOptions = {
  decimal: 0
};

function calculatePercentage(mainStructure, data, options) {
  const result = [];
  options = options || defaultOptions;

  mainStructure.survsAreaList.forEach(area => {
    let areaPercentual = 0;
    let areaTotal = area.structure.all.length > 0 ? area.structure.all.length : 1;
    let requiredQuestions = area.structure.all.filter(summary => {
      if (!summary.parent) {
        return;
      }

      return summary.parent.rule !== undefined;
    });
    let questionWeigth = 1 / (requiredQuestions.length || areaTotal);

    area.structure.all.forEach(structure => {
      if (!structure.parent) {
        return;
      }

      areaPercentual += calculateQuestion(structure, data);
    });

    if (area.structure.all[0].parent) {
      result.push({
        area: area.name,
        percentage: Number(((questionWeigth * areaPercentual) * 100).toFixed(options.decimal))
      });
    }

  });

  return result;
}

function getRequiredQuestions(questions) {
  return questions.filter(question => {
    if (!(question.description_input || question).hasOwnProperty('required_question')) {
      return false;
    }

    return question.required_question || question.description_input.required_question;
  });
}

function calculateQuestion(structure, data) {

  if (!data || data === undefined || Object.keys(data) === 0) {
    return 0;
  }

  let requiredQuestions = getRequiredQuestions(structure.input);
  let rule = structure.parent.rule;
  let requiredQuestionsTotal = structure.parent.min_required || requiredQuestions.length;

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

        if (question.description_input) {
          questionData = data[questionArr[0]][(question.description_input || question).model.split('.')[1]];
        }

        if (isValidQuestion(rule, questionData, question)) {
          currentPercentage += questionWeigth;
        }
      }
    } else {
      if (data[questionArr[0]] && isValidQuestion(rule, data[questionArr[0]], question)) {
          currentPercentage += questionWeigth;
      }
    }
  });

  return currentPercentage > 1 ? 1 : currentPercentage;
}

function isValidQuestion(rule, data, question) {

  if (!data) {
    return false;
  }

  if (rule == DROPDOWN_RULE) {
    if (data === true  && question.min_length === true) {
      return data;
    }
  }

  if (rule === DEFAULT_RULE || rule === DROPDOWN_RULE) {
    return (data && data.length) >= (question.min_length || (question.description_input && question.description_input.min_length));
  }

  if (rule === ROW_TEMPLATE_RULE || rule === UPLOAD_RULE || rule == SELECT_RULE) {
    return data || data > 0;
  }

  return false;
}

window.module = window.module || {};

module.exports = {
  calculateQuestion,
  calculatePercentage
};
