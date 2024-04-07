import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../pageObjects/Login.page";

// Given que o usuário está na página de login
// When eu insiro um nome de usuário e senha válidos e clico no botão de login
// Then eu devo ser redirecionado para a página inicial do usuário e ver a Home do usuário

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

Given("que eu sou um usuário registrado e eu estou na página de login", () => {
  loginPage.acessaLogin();
});

When(
  "eu insiro um nome de usuário válido e uma senha incorreta e eu clico no botão de login",
  () => {
    loginPage.insereSenhaIncorreta();
  }
);

Then("eu devo ver uma mensagem de erro de {string}", (msgError) => {
  loginPage.checkMensagemErro(msgError);
  loginPage.logout();
});

// Scenario: Tentativa de login sem preencher nome de usuário ou senha
//Given que eu sou um usuário registrado e eu estou na página de login
// When eu não preencho o campo de nome de usuário permaneço na página de login
// Then eu devo ver uma mensagem de erro de "Epic sadface: Username is required"
// When eu não preencho o campo de senha permaneço na página de login
//  Then eu devo ver uma mensagem de erro de "Epic sadface: Password is required"

Given("que eu sou um usuário registrado e eu estou na página de login", () => {
  loginPage.acessaLogin();
});

When("eu não preencho o campo de nome de usuário", () => {
  loginPage.insereFieldUserEmpty();
});

Then("eu devo ver uma mensagem de erro de {string}", (msgError) => {
  loginPage.checkMensagemErroUserEmpty(msgError);
  loginPage.logout();
});

When("eu não preencho o campo de senha", () => {
  loginPage.insereFieldUserEmpty();
});

Then("eu devo ver uma mensagem de erro de {string}", (msgError) => {
  loginPage.checkMensagemErroUserEmpty(msgError);
  loginPage.logout();
});
