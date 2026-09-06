# 🆘 Suporte e Ajuda

> **Precisa de ajuda? Estamos aqui para você!** 🤝
>
> Este documento contém todas as informações necessárias para obter suporte e ajuda com o Workshop de Automação E2E.

## 📋 Índice

- [❓ Como Obter Ajuda](#-como-obter-ajuda)
- [📚 Recursos de Aprendizado](#-recursos-de-aprendizado)
- [🔧 Solução de Problemas](#-solução-de-problemas)
- [📞 Canais de Contato](#-canais-de-contato)
- [🌟 Comunidade](#-comunidade)
- [📖 FAQ](#-faq)

## ❓ Como Obter Ajuda

### 🚀 **Antes de Pedir Ajuda**

1. **📖 Leia a documentação** - Muitas perguntas já foram respondidas
2. **🔍 Pesquise nas issues** - Use a busca do GitHub
3. **🧪 Teste localmente** - Certifique-se de que o problema é reproduzível
4. **📝 Documente o problema** - Prepare informações detalhadas

### 📋 **Informações para Incluir**

Quando pedir ajuda, inclua:

- **Descrição clara** do problema
- **Passos para reproduzir** o problema
- **Comportamento esperado** vs. **comportamento atual**
- **Sistema operacional** e versões
- **Logs de erro** (se houver)
- **Screenshots** (se aplicável)

## 📚 Recursos de Aprendizado

### 🎯 **Documentação Oficial**

- **[Cypress Documentation](https://docs.cypress.io/)** - Guia completo do Cypress
- **[Cucumber Documentation](https://cucumber.io/docs/)** - Documentação do Cucumber
- **[BDD Guide](https://cucumber.io/docs/bdd/)** - Guia de Behavior Driven Development

### 📖 **Tutoriais e Cursos**

- **[Cypress Learning](https://docs.cypress.io/examples/examples/tutorials)** - Tutoriais oficiais
- **[Cucumber School](https://school.cucumber.io/)** - Cursos gratuitos do Cucumber
- **[JavaScript Testing](https://javascript.info/testing)** - Fundamentos de testes em JS

### 🎥 **Vídeos e Webinars**

- **[Cypress YouTube Channel](https://www.youtube.com/c/Cypressio)** - Canal oficial
- **[Cucumber YouTube](https://www.youtube.com/c/CucumberBDD)** - Vídeos do Cucumber
- **[QA Community Videos](https://www.youtube.com/results?search_query=cypress+testing)** - Comunidade QA

### 📚 **Livros Recomendados**

- **"Test Automation with Cypress"** - Filip Hric
- **"BDD in Action"** - John Smart
- **"JavaScript Testing with Jest"** - Artem Sapegin

## 🔧 Solução de Problemas

### 🐛 **Problemas Comuns**

#### **Cypress não inicia**

```bash
# Solução 1: Limpar cache
npx cypress cache clear

# Solução 2: Reinstalar dependências
rm -rf node_modules package-lock.json
npm install

# Solução 3: Verificar versão do Node.js
node --version  # Deve ser 18+
```

#### **Testes falhando**

```bash
# Solução 1: Executar em modo debug
npx cypress open --config video=false

# Solução 2: Verificar seletores
cy.get('[data-test="element"]').should('be.visible')

# Solução 3: Aumentar timeouts
cy.get('.element', { timeout: 10000 })
```

#### **Problemas com Cucumber**

```bash
# Solução 1: Verificar configuração
npm run cypress:open

# Solução 2: Limpar cache do preprocessor
rm -rf node_modules/.cache

# Solução 3: Verificar sintaxe Gherkin
# Use extensão Cucumber no VS Code
```

### 🔍 **Debugging**

#### **Modo Debug do Cypress**

```javascript
// Adicione .debug() para pausar execução
cy.get(".element").debug();

// Use .pause() para pausar em modo interativo
cy.pause();

// Log de comandos
cy.log("Executando passo...");
```

#### **Console Logs**

```javascript
// Log no console do navegador
cy.window().then((win) => {
  win.console.log("Debug info:", data);
});

// Log no terminal
console.log("Terminal log:", data);
```

## 📞 Canais de Contato

### 🐙 **GitHub**

- **Issues:** [Reporte bugs](https://github.com/Mr-Lucasz/automation-test/issues/new)
- **Discussions:** [Participe das discussões](https://github.com/Mr-Lucasz/automation-test/discussions)
- **Pull Requests:** [Contribua com código](https://github.com/Mr-Lucasz/automation-test/pulls)

### 💬 **Comunidades Online**

- **Stack Overflow:** [Tag: cypress](https://stackoverflow.com/questions/tagged/cypress)
- **Reddit:** [r/QualityAssurance](https://www.reddit.com/r/QualityAssurance/)
- **Discord:** [QA Community](https://discord.gg/qa-community)

### 📧 **Contato Direto**

- **Email:** [INSERIR_EMAIL]
- **LinkedIn:** [Perfil do Lucas](https://linkedin.com/in/Mr-Lucasz)
- **Twitter:** [@lucas_egswf](https://twitter.com/lucas_egswf)

## 🌟 Comunidade

### 🤝 **Como Contribuir**

1. **Fork** o projeto
2. **Clone** seu fork
3. **Crie** uma branch para sua feature
4. **Desenvolva** e teste
5. **Commit** suas mudanças
6. **Push** e abra um Pull Request

### 🏆 **Reconhecimento**

Contribuidores ativos receberão:

- 📛 Badge de "Contribuidor"
- 🏆 Menção especial no README
- 📧 Agradecimento pessoal
- 🎉 Inclusão na lista de colaboradores

### 📅 **Eventos e Meetups**

- **QA Meetups** - Participe de eventos locais
- **Conferências** - Cypress Conf, TestBash, etc.
- **Webinars** - Eventos online da comunidade

## 📖 FAQ

### **❓ Perguntas Frequentes**

#### **Q: Como começar com Cypress?**

**A:** Comece com o [tutorial oficial](https://docs.cypress.io/guides/getting-started/writing-your-first-test), depois explore nossos exemplos.

#### **Q: Qual a diferença entre Cypress e Selenium?**

**A:** Cypress é mais moderno, focado em testes E2E para aplicações web, com melhor debugging e performance.

#### **Q: Como implementar BDD com Cucumber?**

**A:** Use nossos templates de features e step definitions como referência. O Cucumber permite escrever testes em linguagem natural.

#### **Q: Posso usar TypeScript?**

**A:** Sim! O projeto suporta TypeScript. Veja a configuração no `cypress.config.js`.

#### **Q: Como executar testes em CI/CD?**

**A:** Use nosso workflow do GitHub Actions (`.github/workflows/ci.yml`) como referência.

#### **Q: Como debugar testes que falham?**

**A:** Use `cypress open` para modo interativo, adicione `.debug()` e `.pause()` no código, e verifique screenshots/vídeos.

---

## 🎯 **Próximos Passos**

1. **📖 Leia** a documentação completa
2. **🧪 Execute** os testes localmente
3. **🔧 Experimente** com diferentes cenários
4. **🤝 Participe** da comunidade
5. **📝 Compartilhe** seu conhecimento

---

<div align="center">

**🚀 Juntos, construímos uma comunidade de QA mais forte!**

**💡 Sua pergunta pode ajudar outros desenvolvedores!**

</div>
