import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { addCart } from "../pageObjects/AddCart.page";
import { commonPage} from "../pageObjects/Commons.page";

Given("que estou na página de um produto", () => {
    commonPage.login();
});

When("não há itens no meu carrinho", () => {
    addCart.checkCartEmpty();
});


// Feature: Adição de Item ao Carrinho

//     Scenario: Adicionar um item ao carrinho ao clicar no botão "Add to Cart"
//         Given que estou na página de um produto
//         When não há itens no meu carrinho
//         When eu clico no botão "Add to Cart"
//         Then um item é adicionado ao meu carrinho
//         Then o ícone do carrinho exibe o número "1" para indicar que há um item no carrinho