import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { filterProducts } from "../pageObjects/FilterProducts.page";
import { commonPage } from "../pageObjects/Commons.page";

Given("estou na página de listagem de produtos.", () => {
    commonPage.login();
    filterProducts.validationPageProducts();
});

When("seleciono a opção de filtrar produtos por {string}.", (filtro) => {
    filterProducts.validationFilters(filtro);
});

Then("os produtos devem ser exibidos em ordem {string} de acordo com o filtro selecionado.", (ordem) => {
    filterProducts.validationOrderProducts(ordem);
});