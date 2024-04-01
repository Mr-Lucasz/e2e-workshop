import {homeElements} from '../elements/elements.js';
import {login} from "../pageObjects/commons.page.js";

const homePage = {

    checkHomePage: () => {
        login.loginPage();
        cy.get(homeElements.checkHomePage).should("be.visible");
    },
    checkLabelPainel: () => {
        cy.get(homeElements.labelPainel).should("be.visible").contains("Cursos acessados recentemente");
    },
    checkNavbarPainel: () => {
        cy.get(homeElements.navbarPainel).should("be.visible").contains("Painel");
        cy.get(homeElements.navbarMinhasSalas).should("be.visible").contains("Minhas salas");
        cy.get(homeElements.navbarBuscarSalas).should("be.visible").contains("Buscar salas");
    },
    checkIconNotification: () => {
        cy.get(homeElements.iconNotification).should("be.visible");
    },
    checkMenuMessages: () => {
        cy.get(homeElements.menuMessages).should("be.visible");
    },

    checkUserMenuToggleUSer: () => {
        cy.get(homeElements.userMenuToggleAcessibilidade).should("be.visible").contains("Acessibilidade");
        cy.get(homeElements.userMenuTogglePerfil).should("be.visible").contains("Perfil");
        cy.get(homeElements.userMenuToggleNotas).should("be.visible").contains("Notas");
        cy.get(homeElements.userMenuToggleCalendario).should("be.visible").contains("Calendário");
        cy.get(homeElements.userMenuToggleMensagens).should("be.visible").contains("Mensagens");
        cy.get(homeElements.userMenuToggleArquivosPrivados).should("be.visible").contains("Arquivos privados");
        cy.get(homeElements.userMenuToggleRelatorios).should("be.visible").contains("Relatórios");
        cy.get(homeElements.userMenuTogglePreferencias).should("be.visible").contains("Preferências");
        cy.get(homeElements.userMenuToggleIdioma).should("be.visible").contains("Idioma");
        cy.get(homeElements.userMenuToggleSair).should("be.visible").contains("Sair");
    }
};