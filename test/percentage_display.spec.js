const {calculatePercentage, calculateQuestion} = require('../index');
const {defaultRuleStruct, rowTemplateStruct, dropdownRuleStruct, uploadRuleStruct} = require('./fixture');
const allSurvsStruct = require('./all_survs_fixture');

test('percentage functions should be defined', () => {
  expect(calculatePercentage).toBeDefined();
  expect(calculateQuestion).toBeDefined();
});

test('Should get a percentage display for DefaultRule', () => {
    let data = {
      new_situation: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      other_situation: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };

    expect(calculateQuestion(defaultRuleStruct, data)).toEqual(1);
});

test('Should get 0% display for DefaultRule', () => {
    let data = {
      new_situation: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };

    expect(calculateQuestion(defaultRuleStruct, data)).toEqual(0);
});

test('Should get percentage for RowTemplateRule', () => {
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

test('Should get granular percentage for RowTemplateRule', () => {
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

test('Should get hundred percent of DropdownRule', () => {
  let data = { "revenue_situation":{"economic_activity":true,"bit_cyclic":true,
  "economic_activity3": true, "economic_activity4": true, "economic_activity_explanation":'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',"bit_cyclic_explanation":'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', "economic_activity3_explanation":'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
"economic_activity4_explanation":'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},"other_situation":"YTeste"};

  expect(calculateQuestion(dropdownRuleStruct, data)).toEqual(1);
});

test('Should get 75 percent of DropdownRule', () => {
  let data = { "revenue_situation":{"economic_activity":true,"bit_cyclic":true,"economic_activity_explanation":'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',"bit_cyclic_explanation":'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},"other_situation":"YTeste"};

  expect(calculateQuestion(dropdownRuleStruct, data)).toEqual(0.5);
});

test('Should get hundred percent of UploadRule', () => {
  let data = {
    'documents': {'company_presentation': 'test'},
    'documents_1': {'company_presentation': 'test'}
  };

  expect(calculateQuestion(uploadRuleStruct, data)).toEqual(1);
});

test('Should get 50% percent of UploadRule', () => {
  let data = {
    'documents': {'company_presentation': 'test'}
  };

  expect(calculateQuestion(uploadRuleStruct, data)).toEqual(0.50);
});

test('Should calculte for all areas', () => {
  const expectedResult = [
    {"area": "Dados Iniciais", "percentage": 25},
    {"area": "Análise Quantitativa", "percentage": 25},
    {"area": "Análise Qualitativa", "percentage": 0},
    {"area": "Documentos", "percentage": 0}
  ];

  const data = {"utilization_1":{"resource":{"index":1,"display":"Capital de giro"},"value":10000,"info":"Teste"},"utilization_2":{"resource":{"index":2,"display":"Pagamento de dívidas que estão vencendo"},"value":110000,"info":"Teste"},"utilization_3":{"resource":{"index":3,"display":"Pré-pagamento de dívidas muito onerosas"},"value":10000,"info":"Teste"},"company_description":"Teste","company_description_products":"Teste 1234","company_description_sector":"Teste","company_description_advantages":"Teste","company_performance":"Teste","company_performance_margin":"Teste","company_performance_pos":"Teste","company_projection":"Teste","customer_abc_1":{"customer":"Cliente 1","value":1000},"customer_abc_2":{"customer":"Cliente 2","value":10099.99},"provider_abc_1":{"provider":"Fornecedor 1","value":100000},"provider_abc_2":{"provider":"Fornecedor 2","value":19999.99},"revenue_situation":{"economic_activity":true,"bit_cyclic":true,"economic_activity_explanation":"Dropdown exemplo","bit_cyclic_explanation":"Dropdown exemplo"},"other_situation":"YTeste"};

  expect(calculatePercentage(allSurvsStruct.result, data)).toEqual(expectedResult);
});
