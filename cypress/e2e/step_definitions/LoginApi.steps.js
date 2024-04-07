//steps_defintions/Login.steps.js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPageApi} from "../pageObjects/LoginApi.page";
import {commonPage} from "../pageObjects/commons.page";
  
  Given("que o usuário está na página de login", () => {
    loginPageApi.accessPage();
  }
  );
  
  When("o usuário insere um nome de usuário e senha válidos", () => {
    loginPageApi.loginValidCredentials();
  }
  );
  
  When("o usuário clica no botão de login", () => {
    loginPageApi.submitLogin();
  }
  );
  
  Then("o usuário deve ser redirecionado para a página inicial", () => {
    loginPageApi.redirectHome();
  }
  );
  
  Then("a API de login deve responder com um token de acesso", () => {
    loginPageApi.checkToken();
  }
  );
