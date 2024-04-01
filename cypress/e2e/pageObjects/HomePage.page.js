import { homeElements } from "../elements/elements.js";
import { login } from "../pageObjects/commons.page.js";

const homePage = {
  checkHomePage: () => {
    login.loginPage();
    cy.get(homeElements.checkHomePage).should("be.visible");
  },
  checkLabelPainel: () => {
    cy.get(homeElements.labelPainel)
      .should("be.visible")
      .contains("Cursos acessados recentemente");
  },
  checkNavbarPainel: () => {
    cy.get(homeElements.navbarPainel).should("be.visible").contains("Painel");
    cy.get(homeElements.navbarMinhasSalas)
      .should("be.visible")
      .contains("Minhas salas");
    cy.get(homeElements.navbarBuscarSalas)
      .should("be.visible")
      .contains("Buscar salas");
  },
  checkIconNotification: () => {
    cy.get(homeElements.iconNotification).should("be.visible");
  },
  checkMenuMessages: () => {
    cy.get(homeElements.menuMessages).should("be.visible");
  },

  checkVisibilityAndContent: (element, content) => {
    cy.get(element)
      .should("be.visible")
      .contains(content);
  },
  
   checkUserMenuToggleUSer: () => {
    const menuItems = [
      { element: homeElements.userMenuToggleAcessibilidade, content: "Acessibilidade" },
      { element: homeElements.userMenuTogglePerfil, content: "Perfil" },
      { element: homeElements.userMenuToggleNotas, content: "Notas" },
      { element: homeElements.userMenuToggleCalendario, content: "Calendário" },
      { element: homeElements.userMenuToggleMensagens, content: "Mensagens" },
      { element: homeElements.userMenuToggleArquivosPrivados, content: "Arquivos privados" },
      { element: homeElements.userMenuToggleRelatorios, content: "Relatórios" },
      { element: homeElements.userMenuTogglePreferencias, content: "Preferências" },
      { element: homeElements.userMenuToggleIdioma, content: "Idioma" },
      { element: homeElements.userMenuToggleSair, content: "Sair" },
    ];
  
    menuItems.forEach(item => checkVisibilityAndContent(item.element, item.content));
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