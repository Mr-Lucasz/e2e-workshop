# features/HomePage.feature
Feature: HomePage

    Scenario: Visit the homepage
        Given I am on the homepage
        Then I should see "Cursos acessados recentemente"
        And vejo a tab com a opções "Painel", "Minhas Salas" e "Buscar salas"
        And vejo o Icone de notificação
        And vejo Menu de mensagens
        And vejo "user-menu-toggle" com as <options>


        Examples:
            | options           |
            | Acessibilidade    |
            | Notas             |
            | Calendário        |
            | Mensagens         |
            | Arquivos privados |
            | Relatórios        |
            | Preferências      |
            | Sair              |


    Scenario: Filter by category in section Linha do Tempo

        Given I am on the homepage
        When check section com nome "Linha do Tempo"
        And I click "Timeline Day" filter
        And select opções de <filtrosDisponiveis>
        And também seleciono as opções de <orderType>
        And também pesquiso na serch bar por <search>
        Then I should see as ultimas atividades de acordo com os filtros selecionados

        Examples:
            | filtrosDisponiveis | orderType          | search             |
            | Todos              | Ordenar por data   | Entrega            |
            | Atrasado           | Ordenar por cursos |
            | Próximos 7 dias    |
            | Próximos 30 dias   |
            | Próximos 3 meses   |
            | Próximos 6 meses   |










