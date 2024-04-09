import { filterElements } from "../elements/elements.js";

const FILTERS = {
  "A-Z": filterElements.filterAz,
  "Z-A": filterElements.filterZa,
  "Menor Preço": filterElements.filterPriceLowToHigh,
  "Maior Preço": filterElements.filterPriceHighToLow,
};

filterProducts = {
  //Given  estou na página de listagem de produtos.
  validationPageProducts: () => {
    cy.get(filterElements.itemListProducts).should("be.visible");
    cy.get(filterElements.itemNameProducts).should("be.visible");
    cy.get(filterElements.itemPriceProduct).should("be.visible");
    cy.get(filterElements.selectFilter).should("be.visible");
    cy.get(filterElements.selectFilter).select(1);
  },

  // When seleciono a opção de filtrar produtos por <filtro>.
  validationFilters: (filter) => {
    cy.get(FILTERS[filter]).click({ force: true });
  },

  //Then  os produtos devem ser exibidos em ordem <ordem> de acordo com o filtro selecionado.
  validationOrderProducts: (order) => {
    // Função para normalizar os valores dentro das matrizes
    const normalizeArray = (array) =>
      array.map((item) => item.trim().toLowerCase());
    // Verifica se os itens estão em ordem alfabética ascendente (A-Z)
    if (order === "A-Z") {
      cy.get(filterElements.itemNameProducts).then(($elements) => {
        const texts = [];

        $elements.each((index, element) => {
          texts.push(Cypress.$(element).text().trim());
        });

        const sortedTexts = texts.sort((a, b) =>
          a.localeCompare(b, "en", { sensitivity: "base" })
        );

        for (let i = 0; i < texts.length; i++) {
          expect(texts[i]).to.equal(sortedTexts[i]);
        }

        cy.log("Os itens estão em ordem alfabética ascendente (A-Z)");
      });
    }

    // Verifica se os itens estão em ordem alfabética descendente (Z-A)
    if (order === "Z-A") {
      cy.get(filterElements.itemNameProducts).then(($elements) => {
        const texts = $elements
          .map((index, element) => Cypress.$(element).text())
          .get();
        const sortedTexts = [...texts].sort((a, b) => b.localeCompare(a));
        expect(normalizeArray(texts)).to.deep.equal(
          normalizeArray(sortedTexts)
        );
        cy.log("Os itens estão em ordem alfabética descendente (Z-A)");
      });
    }

    // Verifica se os preços estão em ordem ascendente (menor para o maior)
    if (order === "Menor Preço") {
      cy.get(filterElements.itemPriceProduct).then(($elementsPrice) => {
        const prices = [];

        $elementsPrice.each((index, element) => {
          const priceText = Cypress.$(element)
            .find("seletor_do_preço")
            .text()
            .trim();
          const priceValue = parseFloat(priceText.replace("$", "").trim());

          if (!isNaN(priceValue)) {
            prices.push(priceValue);
          }
        });

        if (prices.length > 0) {
          const sortedPrices = [...prices].sort((a, b) => a - b);

          expect(prices).to.have.lengthOf(sortedPrices.length);

          for (let i = 0; i < prices.length; i++) {
            expect(prices[i]).to.equal(sortedPrices[i]);
          }

          cy.log("Os preços estão em ordem ascendente (menor para o maior)");
        } else {
          cy.log("Não foram encontrados preços válidos para ordenar");
        }
      });
    }

    // Verifica se os preços estão em ordem descendente (maior para o menor)
    if (order === "Maior Preço") {
      cy.get(filterElements.itemPriceProduct).then(($elementsPrice) => {
        const prices = $elementsPrice
          .map((index, element) => {
            return parseFloat(
              Cypress.$(element).text().replace("$", "").trim()
            );
          })
          .get();

        const sortedPrices = [...prices].sort((a, b) => b - a);

        expect(prices).to.have.members(sortedPrices);

        cy.log("Os preços estão em ordem descendente (maior para o menor)");
      });
    }
  },
};

module.exports = { filterProducts };
