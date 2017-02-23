const defaultRuleStruct = {
  "parent": {
    "col": "col-md-12",
    "label": "<span class=\"icon\"><i class=\"fa fa-globe\"></i></span><span class=\"primary-blue\">Preencha este campo caso entenda que existem outros fatores, não mencionados anteriormente, que devem ser incluídos:</span>",
    "rule": "defaultRule"
  },
  "input":[
    {"col": "col-md-8", "label": "", "type": "textarea", "model": "other_situation", "required_question": true, "min_length": 100},
    {"col": "col-md-8", "label": "", "type": "textarea", "model": "new_situation", "required_question": true, "min_length": 100}
  ]
};

const rowTemplateStruct = {
  "parent": {
    "col": "col-md-12",
    "label": "<h3>Clientes</h3><p>Quanto os seus 8 maiores clientes representaram do total das receitas da empresa no último ano?</p>",
    "type": "row_template",
    "btn_title": "cliente",
    "min_rows": 2,
    "min_required": 8,
    "rule": "rowTemplateRule"
  },
  "input":[
    {"col": "col-md-4", "label": "Cliente", "type": "text", "model": "customer_abc_$index.customer", "required_question": true},
    {"col": "col-md-3", "label": "Valor", "type": "number", "decimal": 2, "right_info": "%", "model": "customer_abc_$index.value", "required_question": true}
  ]
};

const dropdownRuleStruct = {
  "parent": {
    "col": "col-md-8",
    "label": "<span class=\"icon\"><i class=\"fa fa-line-chart\"></i></span><span class=\"primary-blue\">Receitas, Crescimento e Oportunidades</span>",
    "placeholder": "Favor escolha NO MÁXIMO 2 FATORES que melhor represente sua empresa.",
    "type": "dropdown",
    "rule": "dropdownRule",
    "min_required": 1
  },
  "input":[
    {
      "label": "Que as suas receitas não são tão afetadas pela atividade econômica.",
      "type": "checkbox",
      "model": "revenue_situation.economic_activity",
      "description_input": {
        "label": "",
        "type": "textarea",
        "model": "revenue_situation.economic_activity_explanation",
        "ng-if": "vm.$1.revenue_situation.economic_activity",
        "required_question": true,
        "min_length": 200
      }
    }, {
      "label": "Que as suas receitas não são tão afetadas pela atividade econômica.",
      "type": "checkbox",
      "model": "revenue_situation.bit_cyclic",
      "description_input": {
        "label": "",
        "type": "textarea",
        "model": "revenue_situation.bit_cyclic_explanation",
        "ng-if": "vm.$1.revenue_situation.bit_cyclic",
        "required_question": true,
        "min_length": 200
      }
    }, {
      "label": "Que as suas receitas não são tão afetadas pela atividade econômica.",
      "type": "checkbox",
      "model": "revenue_situation.economic_activity3",
      "description_input": {
        "label": "",
        "type": "textarea",
        "model": "revenue_situation.economic_activity3_explanation",
        "ng-if": "vm.$1.revenue_situation.economic_activity3",
        "required_question": true,
        "min_length": 200
      }
    }, {
      "label": "Que as suas receitas não são tão afetadas pela atividade econômica.",
      "type": "checkbox",
      "model": "revenue_situation.economic_activity4",
      "description_input": {
        "label": "",
        "type": "textarea",
        "model": "revenue_situation.economic_activity4_explanation",
        "ng-if": "vm.$1.revenue_situation.economic_activity",
        "required_question": true,
        "min_length": 200
      }
    }
  ]
};

const uploadRuleStruct = {
  "parent": {
    "col": "col-md-8",
    "label": "",
    "type": "upload_list",
    "rule": "uploadRule"
  },
  "input":[
    {
      "label": "Apresentação Institucional da Empresa",
      "type": "upload",
      "model": "documents.company_presentation",
      "option": [
        {"label":"Documento enviado","value":true},
        {"label":"Fazer upload","value":false}
      ],
      "id_document_type": "35",
      "required_question": true
    },
    {
      "label": "Apresentação Institucional da Empresa",
      "type": "upload",
      "model": "documents_1.company_presentation",
      "option": [
        {"label":"Documento enviado","value":true},
        {"label":"Fazer upload","value":false}
      ],
      "id_document_type": "36",
      "required_question": true
    }
  ]
};

module.exports =  {
  defaultRuleStruct,
  rowTemplateStruct,
  dropdownRuleStruct,
  uploadRuleStruct
};
