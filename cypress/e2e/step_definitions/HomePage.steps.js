import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../pageObjects/Homepage.page";

//var search

Given(/^I am on the homepage$/, () => {
  homePage.checkHomePage();
});

When(/^I should see "Cursos acessados recentemente"$/, () => {
  homePage.checkLabelPainel();
});

When(
  'vejo a tab com as opções "Painel", "Minhas Salas" e "Buscar salas"',
  () => {
    homePage.checkNavbarPainel();
  }
);

When(/^vejo o Icone de notificação$/, () => {
  homePage.checkIconNotification();
});

When(/^vejo Menu de mensagens$/, () => {
  homePage.checkMenuMessages();
});


Then(/^vejo "user-menu-toggle" com a opção (.+)$/, (option) => {
  homePage.checkUserMenuOption(option);
});

When(/^check section com nome "Linha do Tempo"$/, () => {
  homePage.checkSectionLinhaDoTempo();
});

When(/^I click "Timeline Day" filter$/, () => {
  homePage.clickTimelineDayFilter();
});

When(/^select opções de (.*)$/, (filtrosDisponiveis) => {
  switch (filtrosDisponiveis) {
    case "Todos":
      homePage.selectFilterOptionTodos();
      break;
    case "Atrasado":
      homePage.selectFilterOptionAtrasado();
      break;
    case "Próximos 7 dias":
      homePage.selectFilterOption7day();
      break;
    case "Próximos 30 dias":
      homePage.selectFilterOption30day();
      break;
    case "Próximos 3 meses":
      homePage.selectFilterOption3month();
      break;
    case "Próximos 6 meses":
      homePage.selectFilterOption6month();
      break;
    default:
      throw new Error(`Filtro desconhecido: ${filtrosDisponiveis}`);
  }
});

When(/^também seleciono as opções de (.*)$/, (orderType) => {
  switch (orderType) {
    case "Ordenar por data":
      homePage.selectOrderTypeData();
      break;
    case "Ordenar por cursos":
      homePage.selectOrderTypeCursos();
      break;
    default:
      throw new Error(`Filtro desconhecido: ${orderType}`);
  }
});

When(/^também pesquiso na serch bar por (.*)$/, (search) => {
  homePage.searchInSearchBar(search);
});

Then(
  /^I should see as ultimas atividades de acordo com os filtros selecionados$/,
  () => {
    homePage.checkLastActivitiesList();
  }
);
