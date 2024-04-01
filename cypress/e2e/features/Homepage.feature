
Feature: Homepage

    Scenario: Visit the homepage
        Given I am on the homepage
        When I should see "Cursos acessados recentemente"
        When vejo a tab com as opções "Painel", "Minhas Salas" e "Buscar salas"
        When vejo o Icone de notificação
        When vejo Menu de mensagens
        Then vejo "user-menu-toggle" com a opção "<options>"

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


# Scenario: Filter by category in section Linha do Tempo

#     Given I am on the homepage
#     When check section com nome "Linha do Tempo"
#     And I click "Timeline Day" filter
#     And select opções de <filtrosDisponiveis>
#     And também seleciono as opções de <orderType>
#     And também pesquiso na serch bar por <search>
#     Then I should see as ultimas atividades de acordo com os filtros selecionados

#     Examples:
#         | filtrosDisponiveis | orderType          | search    |
#         | Todos              | Ordenar por data   | Entrega   |
#         | Atrasado           | Ordenar por cursos |           |
#         | Próximos 7 dias    |                    |           |
#         | Próximos 30 dias   |                    |           |
#         | Próximos 3 meses   |                    |           |
#         | Próximos 6 meses   |                    |           |










