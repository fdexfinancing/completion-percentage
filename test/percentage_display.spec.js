const {calculatePercentage, calculateQuestion} = require('../index');
const {defaultRuleStruct, rowTemplateStruct, dropdownRuleStruct, uploadRuleStruct} = require('./fixture');
const allSurvsStruct = require('./all_survs_fixture');

test('functions should be defined', () => {
  expect(calculatePercentage).toBeDefined();
  expect(calculateQuestion).toBeDefined();
});

test('return int 1 when evaluate DefaultRule', () => {
    let data = {
      new_situation: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      other_situation: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };

    expect(calculateQuestion(defaultRuleStruct, data)).toEqual(1);
});

test('return float 0.5 when evaluate DefaultRule', () => {
    let data = {
      new_situation: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };

    expect(calculateQuestion(defaultRuleStruct, data)).toEqual(0.5);
});

test('return int 1 when evaluate RowTemplateRule', () => {
  let data = {
    'customer_abc_1.customer': {customer: 10 },
    'customer_abc_1':{value: 10},
    'customer_abc_2':{value: 10},
    'customer_abc_3':{value: 10},
    'customer_abc_4':{value: 10},
    'customer_abc_5':{value: 10},
    'customer_abc_6':{value: 10},
    'customer_abc_7':{value: 10},
    'customer_abc_8':{value: 10}
  };

  expect(calculateQuestion(rowTemplateStruct, data)).toEqual(1);
});

test('return float 0.75 when evaluate RowTemplateRule', () => {
  let data = {
    'customer_abc_1': {customer: 10} ,
    'customer_abc_1':{value: 10},
    'customer_abc_2':{value: 10},
    'customer_abc_3':{value: 10},
    'customer_abc_4':{value: 10},
    'customer_abc_5':{value: 10},
    'customer_abc_6':{value: 10}
  };

  expect(calculateQuestion(rowTemplateStruct, data)).toEqual(0.75);
});

test('return int 1 when evaluate DropDownRule', () => {
  let data = { "revenue_situation":{"economic_activity":true,"bit_cyclic":true,
  "economic_activity3": true, "economic_activity4": true, "economic_activity_explanation":'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',"bit_cyclic_explanation":'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', "economic_activity3_explanation":'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
"economic_activity4_explanation":'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},"other_situation":"YTeste"};

  expect(calculateQuestion(dropdownRuleStruct[0], data)).toEqual(1);
});

test('return float 0.5 when evaluate DropdownRule', () => {
  let data = { "revenue_situation":{"economic_activity":true,"bit_cyclic":true,"economic_activity_explanation":'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',"bit_cyclic_explanation":'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},"other_situation":"YTeste"};
  let areaPercentage = 0;

  dropdownRuleStruct.forEach(structure => {
    areaPercentage += calculateQuestion(structure, data);
  });

  expect(areaPercentage / dropdownRuleStruct.length).toEqual(0.25);
});

test('return int 1 when evaluate UploadRule', () => {
  let data = {
    'documents': {'company_presentation': 'test'},
    'documents_1': {'company_presentation': 'test'}
  };

  expect(calculateQuestion(uploadRuleStruct, data)).toEqual(1);
});

test('return float 0.50 when evaluate UploadRule', () => {
  let data = {
    'documents': {'company_presentation': 'test'}
  };

  expect(calculateQuestion(uploadRuleStruct, data)).toEqual(0.50);
});

test('return empty structure for void data', () => {
  const expectedResult = [
    {"area": "Dados Iniciais", "percentage": 0},
    {"area": "Análise Quantitativa", "percentage": 0},
    {"area": "Análise Qualitativa", "percentage": 0},
    {"area": "Documentos", "percentage": 0}
  ];

  const data = {};

  expect(calculatePercentage(allSurvsStruct.result, data)).toEqual(expectedResult);
});

test('return percentages by area', () => {
  const expectedResult = [
    {"area": "Dados Iniciais", "percentage": 33},
    {"area": "Análise Quantitativa", "percentage": 25},
    {"area": "Análise Qualitativa", "percentage": 100},
    {"area": "Documentos", "percentage": 0}
  ];

  const data = {"id":6518,"id_survs":1,"id_survs_status":1,"id_company":190,"info":{"customer_abc_1":{"customer":"teste","value":1000},"customer_abc_2":{"customer":"tesrte 2","value":10000},"customer_abc_3":{"customer":"AAAAAAAAAAAA","value":12.11},"customer_abc_4":{"value":0},"provider_abc_1":{"value":12321.21,"provider":"ASDAS"},"provider_abc_2":{"value":0},"utilization_1":{"value":0},"utilization_2":{"value":0},"company_description":"AsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsad","company_description_products":"AsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsad","company_description_sector":"AsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsad","company_description_advantages":"AsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsad","company_performance":"AsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsadAsad","revenue_situation":{"high_recurrence":true,"long_term_contract":true,"high_recurrence_explanation":"asdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasda","long_term_contract_explanation":"asdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasda"},"operating_indicator":{"sell_increase":true,"stable_margin":true,"sell_increase_explanation":"asdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasda","stable_margin_explanation":"asdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasda","cut_cost":true,"short_cycle":true,"positive_working_capital":true,"positive_working_capital_explanation":"asdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasda","short_cycle_explanation":"asdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasda","cut_cost_explanation":"asdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasda"},"capital_situation":{"credit_rating":true,"credit_rating_explanation":"asdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasda"},"other_situation":"asdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasda"},"created_at":"2017-02-24T16:29:47.280Z","updated_at":"2017-02-24T16:29:47.280Z","statusObj":{"id":1,"status":"Em andamento","created_at":"2015-12-22T21:18:09.840Z","updated_at":"2015-12-22T21:18:09.840Z","is_active":true,"status_description":"Em andamento"}};

  expect(calculatePercentage(allSurvsStruct.result, data.info)).toEqual(expectedResult);
});
