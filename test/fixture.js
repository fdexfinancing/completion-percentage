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

const dropdownRuleStruct = [
   {
      "parent":{
         "col":"col-md-8",
         "label":"<span class=\"icon\"><i class=\"fa fa-line-chart\"></i></span><span class=\"primary-blue\">Receitas, Crescimento e Oportunidades</span>",
         "placeholder":"Favor escolha NO MÁXIMO 2 FATORES que melhor represente sua empresa.",
         "type":"dropdown",
         "rule":"dropdownRule",
         "min_required":1
      },
      "input":[
         {
            "label":"Que as suas receitas não são tão afetadas pela atividade econômica.",
            "type":"checkbox",
            "model":"revenue_situation.economic_activity",
            "description_input":{
               "label":"",
               "type":"textarea",
               "model":"revenue_situation.economic_activity_explanation",
               "ng-if":"vm.$1.revenue_situation.economic_activity",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que o seu negócio é pouco cíclico.",
            "type":"checkbox",
            "model":"revenue_situation.bit_cyclic",
            "description_input":{
               "label":"",
               "type":"textarea",
               "model":"revenue_situation.bit_cyclic_explanation",
               "ng-if":"vm.$1.revenue_situation.bit_cyclic",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que a sua empresa possui contratos de longo prazo e backlog.",
            "type":"checkbox",
            "model":"revenue_situation.long_term_contract",
            "description_input":{
               "label":"",
               "type":"textarea",
               "model":"revenue_situation.long_term_contract_explanation",
               "ng-if":"vm.$1.revenue_situation.long_term_contract",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que a recorrência das suas receitas é grande.",
            "type":"checkbox",
            "model":"revenue_situation.high_recurrence",
            "description_input":{
               "label":"",
               "type":"textarea",
               "model":"revenue_situation.high_recurrence_explanation",
               "ng-if":"vm.$1.revenue_situation.high_recurrence",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que nos próximos anos as suas receitas irão apresentar um crescimento expressivo (maior que nos últimos 3 anos).",
            "type":"checkbox",
            "model":"revenue_situation.growth",
            "textarea":{
               "label":"",
               "type":"textarea",
               "model":"revenue_situation.growth_explanation",
               "ng-if":"vm.$1.revenue_situation.growth",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que o seu produto é crítico para a atividade fim dos seus clientes.",
            "type":"checkbox",
            "model":"revenue_situation.critical_products",
            "description_input":{
               "label":"",
               "type":"textarea",
               "model":"revenue_situation.critical_products_explanation",
               "ng-if":"vm.$1.revenue_situation.critical_products",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que a sua empresa possui uma grande capacidade de ajustar os preços.",
            "type":"checkbox",
            "model":"revenue_situation.flexible_prices",
            "description_input":{
               "label":"",
               "type":"textarea",
               "model":"revenue_situation.flexible_prices_explanation",
               "ng-if":"vm.$1.revenue_situation.flexible_prices",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que a sua empresa possui uma grande diversidade de receitas e uma baixa concentração de clientes.",
            "type":"checkbox",
            "model":"revenue_situation.revenue_diversity",
            "description_input":{
               "label":"",
               "type":"textarea",
               "model":"revenue_situation.revenue_diversity_explanation",
               "ng-if":"vm.$1.revenue_situation.revenue_diversity",
               "example":{
                  "title":"Exemplo de como responder",
                  "content":"Maior cliente foi responsável por 5% das receitas da empresa, que conta hoje com mais de 1.000 clientes ativos.",
                  "required_question":true,
                  "min_length":120
               }
            }
         },
         {
            "label":"Que a sua concorrência é limitada e vai continuar assim porque você possui grandes vantagens competitivas.",
            "type":"checkbox",
            "model":"revenue_situation.competitive_advantage",
            "description_input":{
               "label":"",
               "type":"textarea",
               "model":"revenue_situation.competitive_advantage_explanation",
               "ng-if":"vm.$1.revenue_situation.competitive_advantage",
               "required_question":true,
               "min_length":120
            }
         }
      ],
      "order":1
   },
   {
      "parent":{
         "col":"col-md-8",
         "label":"<span class=\"icon\"><i class=\"fa fa-bar-chart-o\"></i></span><span class=\"primary-blue\">Margens & Indicadores Operacionais</span>",
         "placeholder":"Favor escolha NO MÁXIMO 2 FATORES que melhor resumem a situação da empresa.",
         "type":"dropdown",
         "rule":"dropdownRule",
         "min_required":1
      },
      "input":[
         {
            "label":"Que, ao longo dos ciclos, a sua empresa tem operado com margens elevadas (Ebitda em torno de 15% ou superior).",
            "type":"checkbox",
            "model":"operating_indicator.high_margin",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"operating_indicator.high_margin_explanation",
               "ng-if":"vm.$1.operating_indicator.high_margin",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que as margens da sua empresa são estáveis e vão continuar assim.",
            "type":"checkbox",
            "model":"operating_indicator.stable_margin",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"operating_indicator.stable_margin_explanation",
               "ng-if":"vm.$1.operating_indicator.stable_margin",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que a margem Ebitda da sua empresa deverá aumentar pelo crescimento das vendas.",
            "type":"checkbox",
            "model":"operating_indicator.sell_increase",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"operating_indicator.sell_increase_explanation",
               "ng-if":"vm.$1.operating_indicator.sell_increase",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que a margem Ebitda da sua empresa deverá aumentar pelo corte de despesas.",
            "type":"checkbox",
            "model":"operating_indicator.cut_cost",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"operating_indicator.cut_cost_explanation",
               "ng-if":"vm.$1.operating_indicator.cut_cost",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que o seu ciclo de capital de giro é relativamente curto.",
            "type":"checkbox",
            "model":"operating_indicator.short_cycle",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"operating_indicator.short_cycle_explanation",
               "ng-if":"vm.$1.operating_indicator.short_cycle",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que a sua empresa opera com capital de giro positivo.",
            "type":"checkbox",
            "model":"operating_indicator.positive_working_capital",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"operating_indicator.positive_working_capital_explanation",
               "ng-if":"vm.$1.operating_indicator.positive_working_capital",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que os seus custos fixos são proporcionalmente baixos.",
            "type":"checkbox",
            "model":"operating_indicator.low_cost",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"operating_indicator.low_cost_explanation",
               "ng-if":"vm.$1.operating_indicator.low_cost",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que os seus resultados foram afetados por fatores pontuais e irão melhorar rapidamente.",
            "type":"checkbox",
            "model":"operating_indicator.improve_result",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"operating_indicator.improve_result_explanation",
               "ng-if":"vm.$1.operating_indicator.improve_result",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que a sua empresa é dominante, líder, \"top 5\" no seu nicho de atuação.",
            "type":"checkbox",
            "model":"operating_indicator.top_five",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"operating_indicator.top_five_explanation",
               "ng-if":"vm.$1.operating_indicator.top_five",
               "required_question":true,
               "min_length":120
            }
         }
      ],
      "order":2
   },
   {
      "parent":{
         "col":"col-md-8",
         "label":"<span class=\"icon\"><i class=\"fa fa-usd\"></i></span><span class=\"primary-blue\">Capital & Crédito</span>",
         "placeholder":"Favor escolha NO MÁXIMO 2 FATORES que melhor resumem a situação da empresa.",
         "type":"dropdown",
         "rule":"dropdownRule",
         "min_required":1
      },
      "input":[
         {
            "label":"Que a sua empresa possui um rating de crédito superior a BB+ (realizado por agência de rating).",
            "type":"checkbox",
            "model":"capital_situation.credit_rating",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"capital_situation.credit_rating_explanation",
               "ng-if":"vm.$1.capital_situation.credit_rating",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que a bancarização da sua empresa é de qualidade (inclui grandes bancos).",
            "type":"checkbox",
            "model":"capital_situation.quality_bancarizacion",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"capital_situation.quality_bancarizacion_explanation",
               "ng-if":"vm.$1.capital_situation.quality_bancarizacion",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que o custo médio do seu passivo bancário é baixo (taxa inferior ou igual a 20% a.a.).",
            "type":"checkbox",
            "model":"capital_situation.low_cost",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"capital_situation.low_cost_explanation",
               "ng-if":"vm.$1.capital_situation.low_cost",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que a sua empresa não enfrenta problemas para refinanciar dívidas de curto prazo.",
            "type":"checkbox",
            "model":"capital_situation.debit_short_term",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"capital_situation.debit_short_term_explanation",
               "ng-if":"vm.$1.capital_situation.debit_short_term",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que os bancos têm refinanciado as suas dívidas.",
            "type":"checkbox",
            "model":"capital_situation.refinanced_debit",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"capital_situation.refinanced_debit_explanation",
               "ng-if":"vm.$1.capital_situation.refinanced_debit",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que existe a possibilidade de utilizar-se outros produtos financeiros (ACC, M&A, desconto de recebíveis, etc.)",
            "type":"checkbox",
            "model":"capital_situation.other_financing_products",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"capital_situation.other_financing_products_explanation",
               "ng-if":"vm.$1.capital_situation.other_financing_products",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que recentemente a sua empresa recebeu um aporte de capital, o que possibilita mensurar o valor da companhia.",
            "type":"checkbox",
            "model":"capital_situation.capital_contribution",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"capital_situation.capital_contribution_explanation",
               "ng-if":"vm.$1.capital_situation.capital_contribution",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que a sua gestão é profissionalizada.",
            "type":"checkbox",
            "model":"capital_situation.profissional_management",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"capital_situation.profissional_management_explanation",
               "ng-if":"vm.$1.capital_situation.profissional_management",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que a sua necessidade de investimentos em ativo imobilizado é reduzida.",
            "type":"checkbox",
            "model":"capital_situation.low_investiment_need",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"capital_situation.low_investiment_need_explanation",
               "ng-if":"vm.$1.capital_situation.low_investiment_need",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que um financiamento longo resolveria a situação da sua empresa.",
            "type":"checkbox",
            "model":"capital_situation.long_financing",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"capital_situation.long_financing_explanation",
               "ng-if":"vm.$1.capital_situation.long_financing",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que a sua empresa precisa de dinheiro para crescer.",
            "type":"checkbox",
            "model":"capital_situation.need_money",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"capital_situation.need_money_explanation",
               "ng-if":"vm.$1.capital_situation.need_money",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que a sua empresa está em processo de reestruturação e que o mesmo já surtiu resultados mensuráveis.",
            "type":"checkbox",
            "model":"capital_situation.restructuring_process",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"capital_situation.restructuring_process_explanation",
               "ng-if":"vm.$1.capital_situation.restructuring_process",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que outras empresas, com situação financeira mais sólida, poderiam ser garantidoras da operação.",
            "type":"checkbox",
            "model":"capital_situation.guarantor_company",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"capital_situation.guarantor_company_explanation",
               "ng-if":"vm.$1.capital_situation.guarantor_company",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Que os acionistas, com bens suficientes para cobrir a operação, poderiam ser avalistas.",
            "type":"checkbox",
            "model":"capital_situation.guarantor_shareholder",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"capital_situation.guarantor_shareholder_explanation",
               "ng-if":"vm.$1.capital_situation.guarantor_shareholder",
               "required_question":true,
               "min_length":120
            }
         },
         {
            "label":"Se a sua empresa esta em recuperação judicial, que o plano da RJ já foi aprovado e homologado.",
            "type":"checkbox",
            "model":"capital_situation.rj_plan",
            "description_input":{
               "label":"Explicação",
               "type":"textarea",
               "model":"capital_situation.rj_plan_explanation",
               "ng-if":"vm.$1.capital_situation.rj_plan",
               "required_question":true,
               "min_length":120
            }
         }
      ],
      "order":3
   },
   {
      "parent":{
         "col":"col-md-12",
         "label":"<span class=\"icon\"><i class=\"fa fa-globe\"></i></span><span class=\"primary-blue\">Preencha este campo caso entenda que existem outros fatores, não mencionados anteriormente, que devem ser incluídos:</span>"
      },
      "input":[
         {
            "col":"col-md-8",
            "label":"",
            "type":"textarea",
            "model":"other_situation"
         }
      ],
      "order":4
   }
];

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
