import { addCartElements } from "../elements/elements.js";
addCard = {
    checkCartEmpty: () => {
        cy.get(addCartElements.cartQtd).should ('not.exist');
    }
}

module.exports = { addCartPage }