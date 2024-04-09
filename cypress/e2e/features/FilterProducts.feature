Feature: Opções de Filtragem de Produtos

    Scenario Outline: Validando filtros de produtos
        Given estou na página de listagem de produtos.
        When seleciono a opção de filtrar produtos por <filtro>.
        Then os produtos devem ser exibidos em ordem <ordem> de acordo com o filtro selecionado.

    Examples:
        | filtro      | ordem      |
        | "A-Z"       | "A-Z"      |
        | "Z-A"       | "Z-A"      |
        | "Menor Preço" | "Menor Preço" |
        | "Maior Preço" | "Maior Preço" |