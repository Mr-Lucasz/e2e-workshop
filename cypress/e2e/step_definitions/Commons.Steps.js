import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { commonsPage } from "../pageObjects/Commons.page";

Given("que o usuário está na página de login", () => {
  commonsPage.accessPage();
});