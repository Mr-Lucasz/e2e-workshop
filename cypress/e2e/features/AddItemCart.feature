    Feature: Teste Add To Cart
    
    Scenario: Adicionar um item ao carrinho
        Given que estou na página de um produto
        When não há itens no meu carrinho
        Then eu clico no botão Add to Cart
        When um item é adicionado ao meu carrinho
        Then o ícone do carrinho exibe o número "1" para indicar que há um item no carrinho
