import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { addCart } from "../pageObjects/AddCart.page";
import { commonPage } from "../pageObjects/Commons.page";


Given("que estou na página de um produto", () => {
  commonPage.login();
});

When("não há itens no meu carrinho", () => {
  addCart.checkCartEmpty();
});

Then("eu clico no botão Add to Cart", () => {
  addCart.clickButtonAddtoCart();
});

When("um item é adicionado ao meu carrinho", () => {
  addCart.checkItemCart();
});

Then(
  "o ícone do carrinho exibe o número {string} para indicar que há um item no carrinho",
  (string) => {
    addCart.checkCartQuantity(string);
  }
);
