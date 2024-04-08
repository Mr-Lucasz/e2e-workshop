//steps_defintions/Login.steps.js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPageApi} from "../pageObjects/LoginApi.page";


// Scenario: Teste de API Login
// Given que eu tenha um usuário cadastrado
// When eu faço uma requisição para a API de login
// Then a API deve me retornar um token de autenticação]

Given("que eu tenha um usuário cadastrado", () => {
    loginPageApi.accessPage();
  });

When("eu faço uma requisição para a API de login", () => {
    loginPageApi.loginValidCredentials();
    loginPageApi.submitLogin();
  });

Then("a API deve me retornar um token de autenticação", () => {
    loginPageApi.redirectHome();
  });