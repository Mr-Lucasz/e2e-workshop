import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { filterProducts } from "../pageObjects/FilterProducts.page";
import { loginPage } from "../pageObjects/Login.page";

//   Scenario: Login bem-sucedido

Given("estou na página de listagem de produtos", () => {
    loginPage.insereCredenciaisValidas();
    filterProducts.validationPageProducts();
});

When(
  "eu insiro um nome de usuário e senha válidos e clico no botão de login",
  () => {
    loginPage.insereCredenciaisValidas();
  }
);

Then(
  "eu devo ser redirecionado para a página inicial do usuário e ver a Home do usuário",
  () => {
    loginPage.redirecionaHome();
    loginPage.logout();
  }
);


