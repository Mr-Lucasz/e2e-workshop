import { homeElements } from "../elements/elements.js";
import {commonPage } from "./commons.page.js";
require('cypress-xpath');

const homePage = {

  checkHomePage: () => {
    commonPage.loginPage();
    cy.get(homeElements.checkHomePage).should("be.visible");
  },
  checkLabelPainel: () => {
    cy.get(homeElements.labelPainel)
      .should("be.visible")
      .contains("Cursos acessados recentemente");
  },
  checkNavbarPainel: () => {
    cy.get(homeElements.navbarPainel).should("be.visible").contains("Painel");
    cy.xpath(homeElements.navbarMinhasSalas).should('be.visible').contains('Minhas salas');
    cy.xpath(homeElements.navbarBuscarSalas)
      .should("be.visible")
      .contains("Buscar salas");
  },
  checkIconNotification: () => {
    cy.get(homeElements.iconNotification).should("be.visible");
  },
  checkMenuMessages: () => {
    cy.xpath(homeElements.menuMessages).should("be.visible");
  },

  checkUserMenuOption: (option) => {
    cy.get(homeElements.logoutButtonMenuItemToggle).should("be.visible").click();
    const menuItems = {
      "Acessibilidade": { element: homeElements.userMenuToggleAcessibilidade, content: "Acessibilidade" },
      "Perfil": { element: homeElements.userMenuTogglePerfil, content: "Perfil" },
      "Notas": { element: homeElements.userMenuToggleNotas, content: "Notas" },
      "Calendário": { element: homeElements.userMenuToggleCalendario, content: "Calendário" },
      "Mensagens": { element: homeElements.userMenuToggleMensagens, content: "Mensagens" },
      "Arquivos Privados": { element: homeElements.userMenuToggleArquivosPrivados, content: "Arquivos Privados" },
      "Relatórios": { element: homeElements.userMenuToggleRelatorios, content: "Relatórios" },
      "Preferências": { element: homeElements.userMenuTogglePreferencias, content: "Preferências" },
      "Idioma": { element: homeElements.userMenuToggleIdioma, content: "Idioma" },
      "Sair": { element: homeElements.userMenuToggleSair, content: "Sair" }
    };
   if (menuItems[option]) {
      cy.get(menuItems[option].element).should("be.visible").contains(menuItems[option].content);
    }else{
      cy.log("Opção não encontrada");
    }
  },  

  // Scenario: Filter by category in section Linha do Tempo

  // When check section com nome "Linha do Tempo"
  checkSectionLinhaDoTempo: () => {
    cy.get(homeElements.sectionLinhaDoTempo)
      .should("be.visible")
      .contains("Linha do Tempo");
  },
  // And I click "Timeline Day" filter
  clickTimelineDayFilter: () => {
    cy.get(homeElements.timelineDayFilter).click();
  },

  // And select opções de <filtrosDisponiveis>
  selectFilterOption: (filtrosDisponiveis) => {
    cy.get(homeElements.timelineDayFilter).click();
  },

  // And também seleciono as opções de <orderType>
  selectOrderType: (orderType) => {
    cy.get(homeElements.orderType).click();
  },
  // And também pesquiso na serch bar por <search>
  searchInSearchBar: (search) => {
    cy.get(homeElements.searchBar).click().type(search);
  },
  // Then I should see as ultimas atividades de acordo com os filtros selecionados
  checkLastActivitiesList: () => {
    cy.get(homeElements.sectionLastActivitiesList).should("be.visible");
    cy.get(homeElements.sectionLastActivitiesListItems).should("be.visible");
    cy.get(homeElements.sectionLastActivitiesListItemsTitle).should(
      "be.visible"
    );
  },
};

module.exports = { homePage };