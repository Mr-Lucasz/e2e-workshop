//steps_defintions/Login.steps.js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage} from "../pageObjects/LoginApi.page";
import {commonPage} from "../pageObjects/commons.page";
  
  Given("que o usuário está na página de login", () => {
    loginPage.accessPage();
  }
  );
  
  When("o usuário insere um nome de usuário e senha válidos", () => {
    loginPage.loginValidCredentials();
  }
  );
  
  When("o usuário clica no botão de login", () => {
    loginPage.submitLogin();
  }
  );
  
  Then("o usuário deve ser redirecionado para a página inicial", () => {
    loginPage.redirectHome();
  }
  );
  
  Then("a API de login deve responder com um token de acesso", () => {
    loginPage.checkToken();
  }
  );
