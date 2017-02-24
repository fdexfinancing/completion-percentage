module.exports = {
   "result":{
      "id":1,
      "title":"Questionário qualitativo",
      "observation":"IMPORTANTE: não é preciso responder todas as perguntas de uma única vez, para salvar as suas respostas basta \"clicar\" em \"SALVAR\" no final da página.",
      "created_at":"2016-08-10T21:49:58.356Z",
      "updated_at":"2016-08-10T21:49:58.356Z",
      "is_active":true,
      "survsAreaList":[
         {
            "id":1,
            "id_survs":1,
            "name":"Resumo",
            "description":"<h2>Certificado F(x)</h2> <p>O certificado F(x) foi criado para que as possibilidades de crédito sejam ampliadas ao máximo de acordo com as necessidades da empresa. Quanto maior a qualidade das informações ao final da avaliação, maiores as chances de chegarmos ao financiador certo</p>",
            "state":"summary",
            "url":"resumo",
            "order":1,
            "survsQuestionList":[

            ],
            "structure":{
               "all":[
                  {
                     "order":1
                  }
               ]
            }
         },
         {
            "id":2,
            "id_survs":1,
            "name":"Dados Iniciais",
            "description":"<h2>Dados Iniciais</h> <p>As informações descritas abaixo serão utilizadas no nosso algoritmo para verificar quantos potenciais financiadores existem para a operação que você deseja concluir</p>",
            "state":"data",
            "url":"dados-iniciais",
            "order":2,
            "survsQuestionList":[

            ],
            "structure":{
               "all":[
                  {
                     "parent":{
                        "col":"col-md-12",
                        "label":"<p>Como serão utilizados os recursos a serem captados pela empresa? Relacionar utilização e valores.</p>",
                        "type":"row_template",
                        "btn_title":"finalidade",
                        "min_rows":2,
                        "min_required":1,
                        "rule":"rowTemplateRule",
                        "example":{
                           "title":"",
                           "content":"Utilize os campos ao lado para descrever, de uma forma breve, o valor e a finalidade da captação."
                        }
                     },
                     "input":[
                        {
                           "col":"col-md-2",
                           "label":"Recursos",
                           "type":"select",
                           "model":"utilization_$index.resource",
                           "option":{
                              "src":"resources",
                              "required_question":true,
                              "values":[
                                 {
                                    "index":1,
                                    "display":"Capital de giro"
                                 },
                                 {
                                    "index":2,
                                    "display":"Pagamento de dívidas que estão vencendo"
                                 },
                                 {
                                    "index":3,
                                    "display":"Pré-pagamento de dívidas muito onerosas"
                                 },
                                 {
                                    "index":4,
                                    "display":"Investimento em expansão"
                                 },
                                 {
                                    "index":5,
                                    "display":"Investimento em uma nova planta"
                                 }
                              ]
                           }
                        },
                        {
                           "col":"col-md-3",
                           "label":"Valor",
                           "type":"number",
                           "decimal":2,
                           "left_info":"R$",
                           "model":"utilization_$index.value",
                           "required_question":true
                        },
                        {
                           "col":"col-md-3",
                           "label":"Informação",
                           "type":"text",
                           "model":"utilization_$index.info",
                           "required_question":true
                        }
                     ],
                     "order":2
                  },
                  {
                     "parent":{
                        "col":"col-md-12",
                        "force_label":true,
                        "label":"<h2>Descrição Da empresa e Performance Recente</h2> <p>Apresentar resumidamente a sua empresa incluindo informações como: </p>",
                        "rule":"defaultRule"
                     },
                     "input":[
                        {
                           "col":"col-md-8",
                           "label":"<span class=\"primary-blue\"> O histórico da empresa e um resumo de suas atividades e produtos/serviços.</span>",
                           "type":"textarea",
                           "model":"company_description",
                           "required_question":true,
                           "min_length":200,
                           "example":{
                              "title":"Exemplo de como responder",
                              "content":"Fundada em 1990 na cidade de São Paulo/SP, a Empresa Exemplo atua desde sua origem na fabricação de móveis para escritório. Atualmente, a empresa conta com 2 fábricas com área construída de 20.000 m², bem como 5 lojas próprias nas regiões Sul e Sudeste, suas regiões de maior atuação."
                           }
                        },
                        {
                           "col":"col-md-8",
                           "label":"<span class=\"primary-blue\"> Descrição das principais linhas de produtos destacando-se também a sua relevância sobre as receitas (% do total).</span>",
                           "type":"textarea",
                           "model":"company_description_products",
                           "required_question":true,
                           "min_length":200,
                           "example":{
                              "title":"Exemplo de como responder",
                              "content":"A Empresa Exemplo conta com um portfolio com 150 produtos, com destaque para estações de trabalho (responsáveis por 35% da receita), armários (20% da receita) e mesas de reunião (15% da receita)."
                           }
                        },
                        {
                           "col":"col-md-8",
                           "label":"<span class=\"primary-blue\"> Quais setores que a sua empresa atende.</span>",
                           "type":"textarea",
                           "model":"company_description_sector",
                           "required_question":true,
                           "min_length":200,
                           "example":{
                              "title":"Exemplo de como responder",
                              "content":"Os principais clientes da Empresa Exemplo são empresas privadas com mais de 50 funcionários, responsáveis por mais da metade do faturamento da companhia. Outro segmento de destaque são os órgãos públicos, que correspondem a 30% das receitas."
                           }
                        },
                        {
                           "col":"col-md-8",
                           "label":"<span class=\"primary-blue\"> Quais as suas vantagens competitivas em relação aos seus concorrentes.</span>",
                           "type":"textarea",
                           "model":"company_description_advantages",
                           "required_question":true,
                           "min_length":200,
                           "example":{
                              "title":"Exemplo de como responder",
                              "content":"A Empresa Exemplo é uma das maiores do segmento em sua região, e sua escala permite obter condições de negociação junto a seus fornecedores. Além disso, seu parque fabril foi renovado recentemente, dando flexibilidade ao processo produtivo e permitindo diversas opções de personalização."
                           }
                        }
                     ],
                     "order":3
                  },
                  {
                     "parent":{
                        "col":"col-md-12",
                        "force_label":true,
                        "label":"<p>Detalhar a performance ao longo dos últimos 2 anos, com foco nos:</p>",
                        "rule":"defaultRule",
                        "min_length":200
                     },
                     "input":[
                        {
                           "col":"col-md-8",
                           "label":"<span class=\"primary-blue\"> Fatores responsáveis pela variação das receitas.</span>",
                           "type":"textarea",
                           "model":"company_performance",
                           "required_question":true,
                           "min_length":200,
                           "example":{
                              "title":"Exemplo de como responder",
                              "content":"Receitas caíram em função da perda de um cliente estratégico. Queda foi compensada pelo aumento da participação no mercado de pequenas empresas, fruto de nova estratégica comercial."
                           }
                        },
                        {
                           "col":"col-md-8",
                           "label":"<span class=\"primary-blue\"> Fatores responsáveis pela variação da margem operacional.</span>",
                           "type":"textarea",
                           "model":"company_performance_margin",
                           "required_question":true,
                           "min_length":200,
                           "example":{
                              "title":"Exemplo de como responder",
                              "content":"Custos foram reduzidos em 6% devido à modernização do processo produtivo e melhoria no layout da fábrica."
                           }
                        },
                        {
                           "col":"col-md-8",
                           "label":"<span class=\"primary-blue\"> Fatores responsáveis pela variação na posição de caixa da empresa.</span>",
                           "type":"textarea",
                           "model":"company_performance_pos",
                           "required_question":true,
                           "min_length":200,
                           "example":{
                              "title":"Exemplo de como responder",
                              "content":"Abertura de duas novas lojas levou ao aumento nas despesas com vendas, em função da contratação de nova equipe."
                           }
                        }
                     ],
                     "order":4
                  },
                  {
                     "parent":{
                        "col":"col-md-12",
                        "force_label":true,
                        "label":"<p>Em termos de receitas, de resultados operacionais e geração de caixa:</p>",
                        "rule":"defaultRule"
                     },
                     "input":[
                        {
                           "col":"col-md-8",
                           "label":"<span class=\"primary-blue\"> O que é possível esperar ao final do ano corrente? Qual a expectativa de receita e margens para este exercício?</span>",
                           "type":"textarea",
                           "model":"company_projection",
                           "required_question":true,
                           "min_length":200
                        }
                     ],
                     "order":5
                  }
               ]
            }
         },
         {
            "id":5,
            "id_survs":1,
            "name":"Análise Quantitativa",
            "description":"<h2>Análise Quantitativa</h> <p>Dado que estamos em contato constante com uma grande base de financiadores, estimamos quais os fatores qualitativos tornam uma operação de crédito mais atrativa para eles. Nosso objetivo aqui é fazer com que sua empresa se apresente da forma mais atrativa, e por isso sugerimos alguns aspectos qualitativos comuns às boas oportunidades. <br /> Nas próximas três questões, você deve assinalar os itens que melhor definem a empresa e sua atividade econômica, bem como descrevê-los de maneira sucinta e clara</p>",
            "state":"quantitative",
            "url":"analise-quantitativa",
            "order":4,
            "survsQuestionList":[

            ],
            "structure":{
               "all":[
                  {
                     "parent":{
                        "col":"col-md-12",
                        "label":"<h3>Clientes</h3><p>Quanto os seus 8 maiores clientes representaram do total das receitas da empresa no último ano?</p>",
                        "type":"row_template",
                        "btn_title":"cliente",
                        "min_rows":2,
                        "min_required":8,
                        "rule":"rowTemplateRule"
                     },
                     "input":[
                        {
                           "col":"col-md-4",
                           "label":"Cliente",
                           "type":"text",
                           "model":"customer_abc_$index.customer",
                           "required_question":true
                        },
                        {
                           "col":"col-md-3",
                           "label":"Valor",
                           "type":"number",
                           "decimal":2,
                           "right_info":"%",
                           "model":"customer_abc_$index.value",
                           "required_question":true
                        }
                     ],
                     "order":2
                  },
                  {
                     "parent":{
                        "col":"col-md-12",
                        "label":"<h3>Fornecedores</h3><p>Quanto os seus 8 maiores fornencedores representaram do total das compras da empresa no último ano?</p>",
                        "type":"row_template",
                        "btn_title":"fornecedor",
                        "min_rows":2,
                        "min_required":8,
                        "rule":"rowTemplateRule"
                     },
                     "input":[
                        {
                           "col":"col-md-4",
                           "label":"Fornecedor",
                           "type":"text",
                           "model":"provider_abc_$index.provider",
                           "required_question":true
                        },
                        {
                           "col":"col-md-3",
                           "label":"Valor",
                           "type":"number",
                           "decimal":2,
                           "right_info":"%",
                           "model":"provider_abc_$index.value",
                           "required_question":true
                        }
                     ],
                     "order":3
                  }
               ]
            }
         },
         {
            "id":4,
            "id_survs":1,
            "name":"Análise Qualitativa",
            "description":"<h2>Análise Qualitativa</h> <p>Dado que estamos em contato constante com uma grande base de financiadores, estimamos quais os fatores qualitativos tornam uma operação de crédito mais atrativa para eles. Nosso objetivo aqui é fazer com que sua empresa se apresente da forma mais atrativa, e por isso sugerimos alguns aspectos qualitativos comuns às boas oportunidades. <br /> Nas próximas três questões, você deve assinalar os itens que melhor definem a empresa e sua atividade econômica, bem como descrevê-los de maneira sucinta e clara</p>",
            "state":"qualitative",
            "url":"analise-qualitativa",
            "order":5,
            "survsQuestionList":[

            ],
            "structure":{
               "all":[
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
               ]
            }
         },
         {
            "id":7,
            "id_survs":1,
            "name":"Documentos",
            "description":"<h2>Documentos</h> <p>Os documentos listados abaixo são requeridos pelos financiadores participantes da plataforma na maior parte dos casos. Para facilitar o processo de análise das partes envolvidas na listagem, favor realizar upload abaixo</p>",
            "state":"survDocuments",
            "url":"documentos",
            "order":7,
            "survsQuestionList":[

            ],
            "structure":{
               "all":[
                  {
                     "parent":{
                        "col":"col-md-8",
                        "label":"",
                        "type":"upload_list",
                        "rule":"uploadRule"
                     },
                     "input":[
                        {
                           "label":"Apresentação Institucional da Empresa",
                           "type":"upload",
                           "model":"documents.company_presentation",
                           "option":[
                              {
                                 "label":"Documento enviado",
                                 "value":true
                              },
                              {
                                 "label":"Fazer upload",
                                 "value":false
                              }
                           ],
                           "id_document_type":"35",
                           "required_question":true
                        },
                        {
                           "label":"Mini currículo dos principais executivos",
                           "type":"upload",
                           "model":"documents.curriculum_board",
                           "option":[
                              {
                                 "label":"Documento enviado",
                                 "value":true
                              },
                              {
                                 "label":"Fazer upload",
                                 "value":false
                              }
                           ],
                           "id_document_type":"29",
                           "required_question":true
                        },
                        {
                           "label":"Última versão do Contrato Social / Estatuto Social",
                           "type":"upload",
                           "model":"documents.social_contract",
                           "option":[
                              {
                                 "label":"Documento enviado",
                                 "value":true
                              },
                              {
                                 "label":"Fazer upload",
                                 "value":false
                              }
                           ],
                           "id_document_type":"30",
                           "required_question":true
                        },
                        {
                           "label":"Balanço Patrimonial de ",
                           "type":"upload",
                           "model":"documents.balance_sheet_1",
                           "option":[
                              {
                                 "label":"Documento enviado",
                                 "value":true
                              },
                              {
                                 "label":"Fazer upload",
                                 "value":false
                              }
                           ],
                           "id_document_type":"1",
                           "position":"0",
                           "required_question":true
                        },
                        {
                           "label":"Balanço Patrimonial de ",
                           "type":"upload",
                           "model":"documents.balance_sheet_1",
                           "option":[
                              {
                                 "label":"Documento enviado",
                                 "value":true
                              },
                              {
                                 "label":"Fazer upload",
                                 "value":false
                              }
                           ],
                           "id_document_type":"1",
                           "position":"1",
                           "required_question":true
                        },
                        {
                           "label":"Balanço Patrimonial de ",
                           "type":"upload",
                           "model":"documents.balance_sheet_1",
                           "option":[
                              {
                                 "label":"Documento enviado",
                                 "value":true
                              },
                              {
                                 "label":"Fazer upload",
                                 "value":false
                              }
                           ],
                           "id_document_type":"1",
                           "position":"2",
                           "required_question":true
                        },
                        {
                           "label":"DRE de ",
                           "type":"upload",
                           "model":"documents.balance_sheet_2",
                           "option":[
                              {
                                 "label":"Documento enviado",
                                 "value":true
                              },
                              {
                                 "label":"Fazer upload",
                                 "value":false
                              }
                           ],
                           "id_document_type":"2",
                           "position":"0",
                           "required_question":true
                        },
                        {
                           "label":"DRE de ",
                           "type":"upload",
                           "model":"documents.balance_sheet_2",
                           "option":[
                              {
                                 "label":"Documento enviado",
                                 "value":true
                              },
                              {
                                 "label":"Fazer upload",
                                 "value":false
                              }
                           ],
                           "id_document_type":"2",
                           "position":"1",
                           "required_question":true
                        },
                        {
                           "label":"DRE de ",
                           "type":"upload",
                           "model":"documents.balance_sheet_2",
                           "option":[
                              {
                                 "label":"Documento enviado",
                                 "value":true
                              },
                              {
                                 "label":"Fazer upload",
                                 "value":false
                              }
                           ],
                           "id_document_type":"2",
                           "position":"2",
                           "required_question":true
                        },
                        {
                           "label":"Abertura do endividamento bancário (incluir fonte, valor, taxa, prazo, sistema de amortização)",
                           "type":"upload",
                           "model":"documents.bank_debit",
                           "option":[
                              {
                                 "label":"Documento enviado",
                                 "value":true
                              },
                              {
                                 "label":"Fazer upload",
                                 "value":false
                              }
                           ],
                           "id_document_type":"24",
                           "required_question":true
                        },
                        {
                           "label":"Faturamento mensal dos últimos 36 meses",
                           "type":"upload",
                           "model":"documents.revenues",
                           "option":[
                              {
                                 "label":"Documento enviado",
                                 "value":true
                              },
                              {
                                 "label":"Fazer upload",
                                 "value":false
                              }
                           ],
                           "id_document_type":"23",
                           "required_question":true
                        },
                        {
                           "label":"Declaração de Imposto de Renda (Pessoa Jurídica)",
                           "type":"upload",
                           "model":"documents.ir_decalration",
                           "option":[
                              {
                                 "label":"Documento enviado",
                                 "value":true
                              },
                              {
                                 "label":"Fazer upload",
                                 "value":false
                              }
                           ],
                           "id_document_type":"32",
                           "required_question":true
                        },
                        {
                           "label":"Declaração de Imposto de Renda (Sócios)",
                           "type":"upload",
                           "model":"documents.ir_decalration_partners",
                           "option":[
                              {
                                 "label":"Documento enviado",
                                 "value":true
                              },
                              {
                                 "label":"Fazer upload",
                                 "value":false
                              }
                           ],
                           "id_document_type":"33",
                           "required_question":true
                        }
                     ],
                     "order":1
                  }
               ]
            }
         }
      ]
   }
};
