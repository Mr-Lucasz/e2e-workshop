//steps_defintions/Login.steps.js
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../pageObjects/Login.page";


//Given I am on the login page
Given(/^I am on the login page$/, () => {
    loginPage.login();
    }
);

//   When I log in with valid credentials
Given(/^I log in with valid credentials$/, () => {
    loginPage.login();
    }
);

//   Then I should be logged out
Then(/^I should be logged out$/, () => {
    loginPage.logout();
    }
);