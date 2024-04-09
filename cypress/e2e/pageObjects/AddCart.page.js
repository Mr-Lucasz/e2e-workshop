import { addCartElements } from "../elements/elements.js";

addCart = {

    checkCartEmpty: () => {
        cy.get(addCartElements.cartQtd).should ('not.exist');
    },
    clickButtonAddtoCart: () => {
        cy.get(addCartElements.buttonAdd).click();
    },
    checkItemCart: () => {
        cy.get(addCartElements.cartQtd).should ('exist');

    },
    checkCartQuantity: (quantity) => {
  
    }
};

module.exports = { addCart }