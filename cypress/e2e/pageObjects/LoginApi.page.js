//pagesObjects/Login.page.js
import { loginElements } from "../elements/elements.js";
import { commons } from "./commons.page.js";

const loginPage = {
  // Scenario: Usuário efetua login com credenciais válidas
  // Given que o usuário está na página de login
  // When o usuário insere um nome de usuário e senha válidos
  // When o usuário clica no botão de login
  // Then o usuário deve ser redirecionado para a página inicial
  // Then a API de login deve responder com um token de acesso

  accessPage: () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  },

  loginValidCredentials: () => {
    cy.get(loginElements.username).click().type("Admin");
    cy.get(loginElements.password).type("admin123");
  },
  //https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate
  //payload: _token=48.AWgZRqgstG-BO8gCtjMDKw8DiXAVrxPkODqnKFIcE4o.LAlUMs4bxiyyUKY2wlFmfmBt-kllwlmec2vtTytNQ8k2Py0Z2V_8AbNTuw&username=Admin&password=admin123
  submitLogin: () => {
    cy.intercept(
      "POST",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate"
    ).as("login");
    cy.get(loginElements.submit).click();
  },

  redirectHome: () => {
    cy.wait("@login").then((interception) => {
      expect(interception.response.statusCode).to.eq(302);
    });
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  },

  // Then a API de login deve responder com um token de acesso
  
  checkToken: () => {
    cy.wait("@login").then((interception) => {
      expect(interception.request.body).to.include('_token');
    });
  },
};

module.exports = { loginPage };
