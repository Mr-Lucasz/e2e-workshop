import { filterElements } from "../elements/elements.js";

filterProducts = {
    //  Scenario:Validando filtros de produtos
    //Given  estou na página de listagem de produtos.
    validationPageProducts: () =>{
        cy.get(filterElements.itemListProducts).should("be.visible");
        cy.get(filterElements.itemListProducts).should("be.visible");
        cy.get(filterElements.itemNameProduct).should("be.visible");
        cy.get(filterElements.itemPriceProduct).should("be.visible");
        cy.get(filterElements.selectFilter).should("be.visible");
        cy.get(filterElements.selectFilter).click();        
        cy.get(filterElements.filterAz).should("be.visible");
        cy.get(filterElements.filterZa).should("be.visible");
        cy.get(filterElements.filterPriceLowToHigh).should("be.visible");
        cy.get(filterElements.filterPriceHighToLow).should("be.visible");
        cy.get(filterElements.selectFilter).click();
    },

   // When seleciono a opção de filtrar produtos por <filtro>.
   valdiationFilters:(filter)=>{
    const filterValue = {
        'A-Z': filterElements.filterAz,
        'Z-A': filterElements.filterZa,
        'Menor Preço': filterElements.filterPriceLowToHigh,
        'Maior Preço': filterElements.filterPriceHighToLow
    }; 
    cy.get(filterValue[filter]).click();

   },

    //Then  os produtos devem ser exibidos em ordem <ordem> de acordo com o filtro selecionado.
    validationOrderProducts:(order)=>{
            cy.get(filterElements.itemListProducts).should('have.value',order);
            cy.get(filterElements.itemNameProduct).then($elements => {
                const texts = $elements.map((index, element) => Cypress.$(element).text()).get();
                
                // Verificação de ordem alfabética ascendente (A-Z)
                const isSortedAsc = texts.slice(0).sort((a, b) => a.localeCompare(b)).join(',') === texts.join(',');
                if (isSortedAsc) {
                    cy.log('Os itens estão em ordem alfabética ascendente (A-Z)');
                } else {
                    cy.log('Os itens NÃO estão em ordem alfabética ascendente (A-Z)');
                }
            
                // Verificação de ordem alfabética descendente (Z-A)
                const isSortedDesc = texts.slice(0).sort((a, b) => b.localeCompare(a)).join(',') === texts.join(',');
                if (isSortedDesc) {
                    cy.log('Os itens estão em ordem alfabética descendente (Z-A)');
                } else {
                    cy.log('Os itens NÃO estão em ordem alfabética descendente (Z-A)');
                }
            });

            cy.get(filterElements.itemPriceProduct).then($elementsPrice => {
                const prices = $elementsPrice.map((index, element) => Cypress.$(element).text()).get().map(price => parseFloat(price.replace('$', '')));
            
                // Verificação de ordem ascendente (menor para o maior)
                const isSortedAsc = prices.slice(0).sort((a, b) => a - b).join(',') === prices.join(',');
                if (isSortedAsc) {
                    cy.log('Os preços estão em ordem ascendente (menor para o maior)');
                } else {
                    cy.log('Os preços NÃO estão em ordem ascendente (menor para o maior)');
                }
            
                // Verificação de ordem descendente (maior para o menor)
                const isSortedDesc = prices.slice(0).sort((a, b) => b - a).join(',') === prices.join(',');
                if (isSortedDesc) {
                    cy.log('Os preços estão em ordem descendente (maior para o menor)');
                } else {
                    cy.log('Os preços NÃO estão em ordem descendente (maior para o menor)');
                }
            });

    },

};

module.exports = { filterProducts };