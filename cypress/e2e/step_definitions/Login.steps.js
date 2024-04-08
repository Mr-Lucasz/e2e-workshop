import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../pageObjects/Login.page";

//   Scenario: Login bem-sucedido

Given("que o usuário está na página de login", () => {
  loginPage.acessaLogin();
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

// Scenario: Tentativa de login com senha incorreta

When(
  "eu insiro um nome de usuário válido e uma senha incorreta e eu clico no botão de login, permaneço na página de login",
  () => {
    loginPage.insereSenhaIncorreta();
  }
);

Then("eu devo ver uma mensagem de erro de {string}", (msgError) => {
  if (
    msgError ===
    "Epic sadface: Username and password do not match any user in this service"
  ) {
    loginPage.checkMensagemErro(msgError);
  } else if (msgError === "Epic sadface: Username is required") {
    loginPage.checkMensagemErroUserEmpty(msgError);
  } else if (msgError === "Epic sadface: Password is required") {
    loginPage.checkMensagemErroUserEmpty(msgError);
  }
});

// Scenario: Tentativa de login sem preencher nome de usuário ou senha

Given("que eu sou um usuário registrado e eu estou na página de login", () => {
  cy.visit(Cypress.env("BASE_URL"));
});

When(
  "eu não preencho o campo de nome de usuário permaneço na página de login",
  () => {
    loginPage.insereFieldUserEmpty();
  }
);

When("eu não preencho o campo de senha permaneço na página de login", () => {
  loginPage.insereFieldPasswordEmpty();
});
