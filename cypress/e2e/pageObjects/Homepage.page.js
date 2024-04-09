import { homeElements } from "../elements/elements.js";
import { commonPage } from "./commons.page.js";
require("cypress-xpath");

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
    cy.xpath(homeElements.navbarMinhasSalas)
      .should("be.visible")
      .contains("Minhas salas");
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
    cy.get(homeElements.userToggleMenu).click();
  
    const menuItems = {
      "Acessibilidade": homeElements.userMenuToggleAcessibilidade,
      "Perfil": homeElements.userMenuTogglePerfil,
      "Notas": homeElements.userMenuToggleNotas,
      "Calendário": homeElements.userMenuToggleCalendario,
      "Mensagens": homeElements.userMenuToggleMensagens,
      "Arquivos Privados": homeElements.userMenuToggleArquivosPrivados, 
      "Relatórios": homeElements.userMenuToggleRelatorios,
      "Preferências": homeElements.userMenuTogglePreferencias,
      "Idioma": homeElements.userMenuToggleIdioma,
      "Sair": homeElements.userMenuToggleSair
    };
  
    if (option === "Arquivos Privados") {
      cy.xpath(menuItems[option]).should("be.visible");
    } else {
      cy.get(menuItems[option]).should("be.visible");
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
