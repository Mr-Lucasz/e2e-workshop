import { addCartElements } from "../elements/elements.js";
addCart = {
    checkCartEmpty: () => {
        cy.get(addCartElements.cartQtd).should ('not.exist');
    }
}

module.exports = { addCart }