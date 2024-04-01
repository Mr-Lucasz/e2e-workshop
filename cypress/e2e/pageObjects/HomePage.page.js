import {homeElements} from '../elements/elements.js';
import {login} from "../pageObjects/commons.page.js";

const homePage = {

    checkHomePage: () => {
        login.loginPage();
        cy.get(homeElements.checkHomePage).should("be.visible");
    },
};