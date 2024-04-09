import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { filterProducts } from "../pageObjects/FilterProducts.page";
import { commonPage } from "../pageObjects/Commons.page";

Given("estou na página de listagem de produtos.", () => {
    commonPage.login();
    filterProducts.validationPageProducts();
});

When("seleciono a opção de filtrar produtos por A-Z.", () => {
    filterProducts.valdiationFilters("A-Z");
});
When("seleciono a opção de filtrar produtos por Z-A.", () => {
    filterProducts.valdiationFilters("A-Z");
});
When("seleciono a opção de filtrar produtos por Menor Preço.", () => {
    filterProducts.valdiationFilters("Menor Preço");
});
When("seleciono a opção de filtrar produtos por Maior Preço.", () => {
    filterProducts.valdiationFilters("Maior Preço");
});

Then("os produtos devem ser exibidos em ordem A-Z de acordo com o filtro selecionado.", () => {
    filterProducts.validationOrderProducts("A-Z");
});
Then("os produtos devem ser exibidos em ordem Z-A de acordo com o filtro selecionado.", () => {
    filterProducts.validationOrderProducts("Z-A");
});
Then("os produtos devem ser exibidos em ordem Menor Preço de acordo com o filtro selecionado.", () => {
    filterProducts.validationOrderProducts("Menor Preço");
});
Then("os produtos devem ser exibidos em ordem Maior Preço de acordo com o filtro selecionado.", () => {
    filterProducts.validationOrderProducts("Maior Preço");
});


