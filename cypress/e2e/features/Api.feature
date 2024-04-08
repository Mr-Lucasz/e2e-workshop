
Feature: Teste Api

Scenario: Teste de API Login
Given que eu tenha um usuário cadastrado
When eu faço uma requisição para a API de login
Then a API deve me retornar um token de autenticação
