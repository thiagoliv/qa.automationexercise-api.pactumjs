# Projeto de Testes Automatizados com PactumJS, Mocha e Mochawesome

## Requisitos para executar o projeto

Para rodar o projeto localmente, você precisará ter as seguintes dependências instaladas:

- **Node.js** (versão 20 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

### Passos para configurar o ambiente local:

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/thiagoliv/qa.automationexercise-api.pactumjs.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd qa.automationexercise-api.pactumjs
   ```

3. Instale as dependências necessárias:
   ```bash
   npm install
   ```

4. Para rodar os testes localmente, utilize o comando:
   ```bash
   npm test
   ```

   Isso executará os testes usando o **Mocha** e gerará um relatório com o **Mochawesome**.

### Gerar o relatório de testes localmente:

Após rodar os testes localmente, um relatório em HTML será gerado no diretório `mochawesome-report`. Para visualizar o relatório:

1. Navegue até a pasta `mochawesome-report`:
   ```bash
   cd mochawesome-report
   ```

2. Abra o arquivo `mochawesome.html` no navegador para visualizar os resultados.

---

## Execução dos testes no GitHub Actions

Este projeto está configurado para ser executado automaticamente no **GitHub Actions** sempre que houver um push para a branch `main` ou quando um **pull request** for criado.

### Como funciona o CI no GitHub Actions:

1. Ao realizar um push para o repositório ou abrir um pull request, o GitHub Actions executa automaticamente os testes em um ambiente de CI.

2. Ele instala as dependências, executa os testes e gera os relatórios utilizando o **Mochawesome**.

3. Os relatórios de testes são disponibilizados como artefatos, que podem ser baixados diretamente da interface do GitHub Actions.

### Como acessar o relatório no GitHub Actions:

1. Após a execução do workflow, vá até a aba **Actions** do repositório no GitHub.
2. Selecione o workflow mais recente.
3. No final da execução, você encontrará um link para fazer download do relatório gerado como artefato (arquivo HTML).

---

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
.
├── .github/
│   └── workflows/
│       └── ci.yml               # Configuração do GitHub Actions
├── mochawesome-report/          # Relatórios gerados pelo Mochawesome (gerado automaticamente)
├── node_modules/                # Dependências do projeto
├── src/
│   ├── integration/             # Testes automatizados de integração
│   │   ├── createUser.spec.js   # Testes para criação de usuários
│   │   ├── deleteRandomAccount.spec.js # Testes para exclusão de conta
│   │   └── getList.spec.js      # Testes para listagem de produtos
│   ├── schemas/                 # Schemas para validação de respostas
│   │   ├── products/
│   │   │   └── getList.js       # Schema para listagem de produtos
│   │   └── user/
│   │       ├── createUser.js    # Schema para criação de usuários
│   │       └── deleteRandomAccount.js # Schema para exclusão de conta
│   └── support/                 # Utilitários e helpers
│       ├── generateAccount.js   # Função para gerar dados de contas
│       └── messages.js          # Mensagens utilizadas nos testes
├── .gitignore                   # Ignora arquivos desnecessários no Git
├── package.json                 # Configurações de dependências e scripts
├── pactumConfig.js              # Configuração do Pactum
└── README.md                    # Documentação do projeto
```

## Executando os Testes

Para executar os testes localmente, utilize o comando:
```bash
npm test
```

### Gerar o relatório de testes
O relatório será gerado automaticamente em `mochawesome-report/mochawesome.html` após a execução dos testes.

## Pipeline com GitHub Actions

Os testes são executados automaticamente via **GitHub Actions** para cada **push** ou **pull request** na branch `main`. Após a execução, os relatórios são disponibilizados como artefatos para download.

1. Acesse a aba **Actions** no repositório do GitHub.
2. Clique no job mais recente.
3. Baixe o relatório gerado como artefato.

## Casos de Teste Automatizados

Os seguintes casos de teste foram automatizados e organizados como suites:
- **Cadastro de Usuário (Create User)**
- **Exclusão de Conta (Delete Account)**
- **Listagem de Produtos (Get Products List)**

## Scripts Disponíveis

No arquivo `package.json`, estão configurados os seguintes scripts:

- **`npm test`**: Executa todos os testes automatizados e gera o relatório Mochawesome.

## Ferramentas Utilizadas

- **Pactum**: Framework para automação de testes de API.
- **Mocha**: Test runner para JavaScript.
- **Mochawesome**: Gerador de relatórios de testes com Mocha.
- **GitHub Actions**: CI/CD para automação de execução de testes e geração de relatórios.

## Contribuição

Para contribuir com o projeto:
1. Faça um fork do repositório.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`.
3. Faça um commit das suas alterações: `git commit -m 'Minha nova feature'`.
4. Faça um push para a branch: `git push origin minha-feature`.
5. Abra um pull request.
