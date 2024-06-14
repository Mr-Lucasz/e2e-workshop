# automation-test

## Descrição

Este repositório contém testes automatizados utilizando [Cypress](https://www.cypress.io/) para o site [Sauce Demo](https://www.saucedemo.com/). O objetivo é garantir a qualidade e a funcionalidade do site através de testes de ponta a ponta.

## Estrutura do Projeto

- **cypress/e2e/features/**: Contém os arquivos `.feature` para os testes escritos em Gherkin.
- **cypress/e2e/step_definitions/**: Contém as definições dos passos dos testes.
- **cypress/e2e/support/**: Contém arquivos de suporte e configurações adicionais.
- **cypress/fixtures/**: Contém dados de teste em formato JSON.
- **cypress/config/**: Contém arquivos de configuração por ambiente.

## Instalação

1. Clone o repositório:
```bash 
   git clone https://github.com/lucas-egswf/automation-test.git
   cd automation-test
Instale as dependências:

npm install
Scripts Disponíveis
test: Comando padrão que exibe uma mensagem de erro, pois não há testes unitários configurados.
cypress:open: Abre a interface gráfica do Cypress com as variáveis de ambiente configuradas.


npm run cypress:open
cypress:run: Executa os testes do Cypress em modo headless.


npm run cypress:run
Configuração do Cypress
A configuração principal do Cypress está no arquivo cypress.config.js. Ele define:

Padrões de arquivos de especificação.
Configurações de tempo limite.
Dimensões da viewport.
Configuração de segurança do Chrome.
Entre outras opções.

Elementos
Os elementos utilizados nos testes estão centralizados no arquivo elements.js para facilitar a manutenção e reutilização.
´´´
Exemplo:


´´´javascript

export const loginElements = {
  username: "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input",
  password: "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input",
  submit: "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button",
  // Outros elementos...
};
Contribuição
Sinta-se à vontade para contribuir com melhorias e sugestões para este projeto. Abra uma issue ou envie um pull request.

Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo 
LICENSE
 para mais detalhes.


