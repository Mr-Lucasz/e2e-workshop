# features/login.feature
Feature: Login 
 
      Scenario: Login with valid credentials
        Given I am on the login page
        When I enter valid credentials
        Then I should be logged in

      Scenario: Logout
        Given I am logged in
        When I click on the logout button
        Then I should be logged out
    




