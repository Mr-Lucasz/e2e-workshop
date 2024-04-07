        Funcionalidade: Login no sistema

        Como um usuário registrado
        Eu quero me logar no sistema
        Para que eu possa acessar funcionalidades exclusivas para usuários autenticados

        Cenário: Login bem-sucedido
        Given que o usuário está na página de login
        When eu insiro um nome de usuário e senha válidos e clico no botão de login
        Then eu devo ser redirecionado para a página inicial do usuário
        Then eu vejo uma mensagem de "Login bem-sucedido"

Cenário: Tentativa de login com senha incorreta
Dado que eu sou um usuário registrado
E eu estou na página de login
Quando eu insiro um nome de usuário válido e uma senha incorreta
E eu clico no botão de login
Então eu devo permanecer na página de login
E eu vejo uma mensagem de erro de "Nome de usuário ou senha inválido"

Cenário: Tentativa de login com nome de usuário que não existe
Dado que eu estou na página de login
Quando eu insiro um nome de usuário que não existe e uma senha qualquer
E eu clico no botão de login
Então eu devo permanecer na página de login
E eu vejo uma mensagem de erro de "Nome de usuário ou senha inválido"

Cenário: Tentativa de login sem preencher nome de usuário e senha
Dado que eu estou na página de login
Quando eu não insiro o nome de usuário e a senha
E eu clico no botão de login
Então eu devo permanecer na página de login
E eu vejo uma mensagem de erro de "Nome de usuário e senha são obrigatórios"