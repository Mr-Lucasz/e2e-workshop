Feature: Opções de Filtragem de Produtos

  #  Scenario:Filtragem em Ordem Alfabética de A a Z
  #      Given  estou na página de listagem de produtos.
  #      When seleciono a opção de filtrar produtos de A a Z.
  #     Then  os produtos devem ser exibidos em ordem alfabética de A a Z.

  #  Scenario:Filtragem em Ordem Alfabética de Z a A
  #      Given  estou na página de listagem de produtos.
  #      When seleciono a opção de filtrar produtos de Z a A.
  #      Then  os produtos devem ser exibidos em ordem alfabética de Z a A.

  #  Scenario:Filtragem por Preço do Mais Baixo para o Mais Alto

  #      Given  estou na página de listagem de produtos.
  #      When seleciono a opção de filtrar produtos por preço do mais baixo para o mais alto.
  #      Then  os produtos devem ser exibidos em ordem ascendente de preço, com o produto de menor preço aparecendo primeiro.

  #  Scenario:Filtragem por Preço do Mais Alto para o Mais Baixo
  #      Given estou na página de listagem de produtos.
  #      When seleciono a opção de filtrar produtos por preço do mais alto para o mais baixo.
  #     Then  os produtos devem ser exibidos em ordem descendente de preço, com o produto de maior preço aparecendo primeiro.

        #passando para outline scenarios
        Scenario:Validando filtros de produtos
        Given  estou na página de listagem de produtos.
        When seleciono a opção de filtrar produtos por <filtro>.
        Then  os produtos devem ser exibidos em ordem <ordem> de acordo com o filtro selecionado.

        Examples:

        |filtro|ordem|
        |A-Z|A-Z|
        |Z-A|Z-A|
        |Menor Preço|Menor Preço|
        |Maior Preço|Maior Preço|
    