# Package to display surv completion percentual
[![Build Status](https://travis-ci.org/fdexfinancing/completion-percentage.svg?branch=master)](https://travis-ci.org/fdexfinancing/completion-percentage)

## JSON structure and rules description

#### Textarea Rule Markup
```
questions -> rule?
   input -> description_input <- required_question? min_length?
```

#### Dropdown Rule Markup

```
dropdown-> min_required? rule?
  checkbox -> description_input <- required_question? min_length?
```

### Available Rules

- *Default Rule* - The default rule is 0 or 100% percent - Distribute weigth in each other - section qty
- *Dropdown Rule* - In dropdown rule the percentage is granular
- *RowTemplate Rule* - In row template the percentage calculus is granular
- *Upload Rule* - In upload template rule the percentage calculus is granular

Textarea Template (Default Template)

  ```json
  {
      "parent": {
          "col": "col-md-12",
          "label": "<span class=\"icon\"><i class=\"fa fa-globe\"></i></span><span class=\"primary-blue\">Preencha este campo caso entenda que existem outros fatores, não mencionados anteriormente, que devem ser incluídos:</span>",
          "rule": "defaultRule"
      },
      "input":[
          {"col": "col-md-8", "label": "", "type": "textarea", "model": "other_situation", "required_question": true, "min_length": 100}
      ]
  }
  ```

Textarea Template (Default Template) Full - Sample
  ```json
  {
       "parent": {
           "col": "col-md-12",
           "force_label": true,
           "label": "<h2>Descrição Da empresa e Performance Recente</h2> <p>Apresentar resumidamente a sua empresa incluindo informações como: </p>",
           "rule": "defaultRule"
       },
       "input":[
           {"col": "col-md-8", "label": "<span class=\"primary-blue\"> O histórico da empresa e um resumo de suas atividades e produtos/serviços.</span>", "type": "textarea", "model": "company_description",
               "example": {"title": "Exemplo de como responder", "content": "Fundada em 1990 na cidade de São Paulo/SP, a Empresa Exemplo atua desde sua origem na fabricação de móveis para escritório. Atualmente, a empresa conta com 2 fábricas com área construída de 20.000 m², bem como 5 lojas próprias nas regiões Sul e Sudeste, suas regiões de maior atuação."}},
       ]
   }
  ```

Row Template
  ```json
  {
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
   }
 ```

Dropdown Template
```json
 {
     "parent": {
         "col": "col-md-8",
         "label": "<span class=\"icon\"><i class=\"fa fa-line-chart\"></i></span><span class=\"primary-blue\">Receitas, Crescimento e Oportunidades</span>",
         "placeholder": "Favor escolha NO MÁXIMO 2 FATORES que melhor represente sua empresa.",
         "type": "dropdown",
         "rule": "dropdownRule",
         "min_required": 4
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
           }
     ]
 }
 ```
Upload Template
 ```json
 {
      "parent": {
          "col": "col-md-8",
          "label": "",
          "type": "upload_list",
          "rule": "uploadRule"
      },
      "input":[
          {
            "label": "Apresentação Institucional da Empresa",
            "type": "upload", "model": "documents.company_presentation",
            "option": [
              {"label":"Documento enviado","value":true},
              {"label":"Fazer upload","value":false}
            ],
            "id_document_type": "35",
            "required_question": true
          }
      ]
  }
  ```

### Response
```
[
  {"area": "Dados Iniciais", "percentage": 25},
  {"area": "Análise Quantitativa", "percentage": 25},
  {"area": "Análise Qualitativa", "percentage": 0},
  {"area": "Documentos", "percentage": 0}
]
```

#### Observations

To see entries data structure, please read the tests
