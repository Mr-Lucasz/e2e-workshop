//pagesObjects/Login.page.js
import { loginElements } from "../elements/elements.js";
//importando json fixture
import dashboardResponse from "../../fixtures/dashboardResponse.json";

const loginPageApi = {
  //Scenario: Teste de API Login
  // Given que eu tenha um usuário cadastrado
  // When eu faço uma requisição para a API de login
  // Then a API deve me retornar um token de autenticação

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
    //check status code body payload(token)
    cy.wait("@login").then((interception) => {
      expect(interception.response.statusCode).to.eq(302);
      //check response body
      let token = new URLSearchParams(interception.request.body).get("_token");
      expect(token).to.not.be.null;
    });
  },

  //response body: {"data":[{"id":4,"group":"Pending Self Reviews","pendingActionCount":1},{"id":5,"group":"Candidates To Interview","pendingActionCount":1}],"meta":[],"rels":[]}
  redirectHome: () => {
    cy.intercept(
      {
        method: "GET",
        url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary",
      },
      { fixture: "dashboardResponse.json" }
    ).as("getDashboard");
    cy.wait("@getDashboard").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.response.body).to.have.property("data");
      expect(interception.response.body).to.have.property("meta");
      expect(interception.response.body).to.have.property("rels");
    });
  },
};

module.exports = { loginPageApi };
