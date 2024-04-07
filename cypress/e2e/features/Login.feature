        Funcionalidade: Login no sistema

        Como um usuário registrado
        Eu quero me logar no sistema
        Para que eu possa acessar funcionalidades exclusivas para usuários autenticados

        Scenario: Login bem-sucedido
        Given que o usuário está na página de login
        When eu insiro um nome de usuário e senha válidos e clico no botão de login
        Then eu devo ser redirecionado para a página inicial do usuário ver a Home do usuário

        Scenario: Tentativa de login com senha incorreta
        Given que eu sou um usuário registrado e eu estou na página de login
        When eu insiro um nome de usuário válido e uma senha incorreta e eu clico no botão de login, permaneço na página de login
        Then eu devo ver uma mensagem de erro de "Epic sadface: Username and password do not match any user in this service"

        Scenario: Tentativa de login sem preencher nome de usuário ou senha
        Given que eu sou um usuário registrado e eu estou na página de login
        When eu não preencho o campo de nome de usuário permaneço na página de login
        Then eu devo ver uma mensagem de erro de "Epic sadface: Username is required"
        When eu não preencho o campo de senha permaneço na página de login
        Then eu devo ver uma mensagem de erro de "Epic sadface: Password is required"