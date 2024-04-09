# features/login.feature
Feature: Login

  Funcionalidade: Login do usuário

  Scenario: Usuário efetua login com credenciais válidas
    Given que o usuário está na página de loginApi
    When eu faço uma requisição para a API de login
    Then a API deve me retornar um token de autenticação

#Scenario: Logout
# Given I am logged in
#When I click on the logout button
#Then I should be logged out





