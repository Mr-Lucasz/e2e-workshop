//steps_defintions/Login.steps.js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage} from "../pageObjects/Login.page";
import {commonPage} from "../pageObjects/commons.page";

// Scenario: Login with valid credentials
// Given I am on the login page
Given(/^I am on the login page$/, () => {
  loginPage.loginPage();
});
// When I enter valid credentials
When(/^I enter valid credentials$/, () => {
  loginPage.loginValidCredentials();
});
// Then I should be logged in
Then(/^I should be logged in$/, () => {
  loginPage.loginCheckLoggedIn();
});

// Scenario: Logout
// Given I am logged in
Given(/^I am logged in$/, () => {
  commonPage.loginPage();
  
});
// When I click on the logout button
When(/^I click on the logout button$/, () => {
  loginPage.logout();
});
// Then I should be logged out
Then(/^I should be logged out$/, () => {
  loginPage.checkLogout();
});
