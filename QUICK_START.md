# **Início Rápido - Curso de Automação E2E**

> **Configure seu ambiente e comece a aprender em menos de 5 minutos!** 
> 
> **Este guia te levará do zero ao primeiro teste executando em tempo recorde!**

---

## **Setup Super Rápido (5 minutos)**

### **Pré-requisitos**
- **Node.js 18+** instalado
- **Git** para clonar o repositório
- **Editor de código** (VS Code recomendado)

### **Verificar Instalações**
```bash
# Verifique se o Node.js está instalado
node --version

# Verifique se o npm está instalado
npm --version

# Verifique se o Git está instalado
git --version
```

**Se todos os comandos retornarem versões, você está pronto!**

---

## **Passo a Passo Rápido**

### **1. Clone o Repositório (1 minuto)**
```bash
# Clone o curso
git clone https://github.com/lucas-egswf/automation-test.git

# Entre na pasta
cd automation-test
```

### **2. Instale as Dependências (2 minutos)**
```bash
# Instale todas as dependências
npm install
```

**Aguarde a instalação terminar...**

### **3. Configure as Variáveis de Ambiente (1 minuto)**
```bash
# Copie o arquivo de exemplo
copy env.example .env

# Ou no Linux/Mac:
# cp env.example .env
```

**Edite o arquivo `.env` se necessário**

### **4. Execute seu Primeiro Teste (1 minuto)**
```bash
# Abra o Cypress
npm run cypress:open
```

**Parabéns! Você está rodando o Cypress!**

---

## **Primeiro Teste em 30 Segundos**

### **No Cypress Test Runner:**

1. **Clique** em "E2E Testing"
2. **Escolha** um browser (Chrome recomendado)
3. **Clique** em "Start E2E Testing"
4. **Clique** em "Login.feature" na lista de testes
5. **Clique** em "Run 1 integration spec"

**Assista seu primeiro teste executar automaticamente!**

---

## **Configurações Recomendadas**

### **VS Code Extensions**
```json
// .vscode/extensions.json já está configurado!
// Instale automaticamente:
// - Cucumber (Gherkin)
// - Cypress Snippets
// - Prettier
// - ESLint
```

### **Configurações do Editor**
```json
// .vscode/settings.json já está configurado!
// - Formatação automática
// - Linting automático
// - Associações de arquivos
```

---

## **Solução de Problemas Comuns**

### **Erro: "cypress command not found"**
```bash
# Solução: Instale o Cypress globalmente
npm install -g cypress

# Ou use npx
npx cypress open
```

### **Erro: "Cannot find module"**
```bash
# Solução: Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

### **Erro: "Chrome not found"**
```bash
# Solução: Use outro browser ou instale o Chrome
npm run cypress:run:firefox
# ou
npm run cypress:run:edge
```

### **Erro: "Base URL not found"**
```bash
# Solução: Configure a URL base
set CYPRESS_BASE_URL=https://www.saucedemo.com
# ou edite o arquivo .env
```

---

## **Próximos Passos**

### **Após o Setup Rápido:**

1. **Leia o [README.md](README.md)** - Visão geral do curso
2. **Siga o [STUDY_ROADMAP.md](STUDY_ROADMAP.md)** - Roteiro de estudos
3. **Use o [PROGRESS_CHECKLIST.md](PROGRESS_CHECKLIST.md)** - Acompanhe seu progresso
4. **Consulte o [LEARNING_GUIDE.md](LEARNING_GUIDE.md)** - Guia detalhado

### **Comandos Úteis para Começar:**
```bash
# Executar testes por módulo
npm run test:module1    # Primeiro módulo - Fundamentos
npm run test:module2    # Segundo módulo - APIs
npm run test:module3    # Terceiro módulo - Interações
npm run test:module4    # Quarto módulo - Fluxos Complexos

# Executar todos os testes
npm run test:all

# Modo interativo para desenvolvimento
npm run cypress:open

# Limpar cache se necessário
npx cypress cache clear
```

---

## **Dicas para Iniciantes**

### **Comece Pequeno:**
- **Dia 1:** Apenas execute o primeiro teste
- **Dia 2:** Entenda o que o teste está fazendo
- **Dia 3:** Modifique algo pequeno no teste
- **Dia 4:** Crie um teste simples do zero

### **Use o Modo Interativo:**
- **Cypress Open** é seu melhor amigo no início
- **Assista** os testes executando em tempo real
- **Pause** e inspecione elementos quando necessário
- **Debug** passo a passo

### **Documente seu Aprendizado:**
- **Anote** conceitos que você aprendeu
- **Screenshot** de erros para referência futura
- **Comente** seu código conforme aprende
- **Compartilhe** suas descobertas com a comunidade

---

## **Parabéns por Começar!**

**Você acabou de dar o primeiro passo para se tornar um QA Automation Expert!**

**O ambiente está configurado e funcionando!**

**Agora é hora de aprender e praticar!**

---

## **Precisa de Ajuda?**

### **Recursos de Suporte:**
- **[SUPPORT.md](SUPPORT.md)** - Guia completo de suporte
- **[GitHub Issues](https://github.com/lucas-egswf/automation-test/issues)** - Reporte bugs
- **[GitHub Discussions](https://github.com/lucas-egswf/automation-test/discussions)** - Faça perguntas
- **[Documentação Cypress](https://docs.cypress.io/)** - Referência oficial

### **Comunidade:**
- **Discord:** [Link para comunidade]
- **Telegram:** [Link para grupo]
- **LinkedIn:** [Link para grupo profissional]

---

<div align="center">

**Transforme sua carreira com automação!**

**Feito com ❤️ para a comunidade de QA**

</div>
