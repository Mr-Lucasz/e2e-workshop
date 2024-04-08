import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../pageObjects/Login.page";

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
