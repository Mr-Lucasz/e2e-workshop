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
  }
);
