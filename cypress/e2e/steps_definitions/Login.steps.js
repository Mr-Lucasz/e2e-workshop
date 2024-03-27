import { Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../pageObjects/Login.page";


//   Then I should be logged in
Then('I should be logged in', () => {
    loginPage.login();
    }
);