import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { addCart } from "../pageObjects/AddCart.page";
import { commonPage} from "../pageObjects/Commons.page";
import { add } from "cypress/types/lodash";

Given("que estou na página de um produto", () => {
    commonPage.login();
});

When("não há itens no meu carrinho", () => {
    addCart.checkCartEmpty();
});

When("eu clico no botão Add to Cart",() => {
    addCart.clickButtonAddtoCart();
});

Then("um item é adicionado ao meu carrinho", () => {
    addCart.checkItemCart();
});


//         Then 
//         Then o ícone do carrinho exibe o número "1" para indicar que há um item no carrinho