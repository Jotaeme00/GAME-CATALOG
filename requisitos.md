# Requisitos do Projeto - Catálogo de Jogos

## Visão Geral

Este documento descreve os requisitos funcionais e não funcionais do projeto "Catálogo de Jogos". O objetivo deste projeto é criar uma aplicação web que permita aos usuários gerenciar um catálogo de jogos, incluindo adicionar, listar, visualizar detalhes e excluir jogos.

## Requisitos Funcionais

### 1. Adicionar Jogo
- **Descrição**: O sistema deve permitir que o usuário adicione um novo jogo ao catálogo.
- **Entradas**:
  - Título do jogo (texto)
  - Gênero do jogo (texto)
  - Data de lançamento (data)
  - Plataforma (texto)
- **Saídas**: O novo jogo deve ser adicionado à lista de jogos e exibido na página principal.
- **Rota**: `/games` (método `POST`)

### 2. Listar Jogos
- **Descrição**: O sistema deve exibir uma lista de todos os jogos no catálogo.
- **Saídas**: A lista deve incluir título, gênero, data de lançamento e plataforma de cada jogo.
- **Rota**: `/games` (método `GET`)

### 3. Visualizar Detalhes de um Jogo
- **Descrição**: O sistema deve permitir que o usuário visualize os detalhes de um jogo específico.
- **Entradas**: ID do jogo
- **Saídas**: Exibição dos detalhes completos do jogo selecionado.
- **Rota**: `/games/:id` (método `GET`)

### 4. Excluir Jogo
- **Descrição**: O sistema deve permitir que o usuário exclua um jogo do catálogo.
- **Entradas**: ID do jogo
- **Saídas**: O jogo deve ser removido do catálogo e não deve mais aparecer na lista de jogos.
- **Rota**: `/games/delete/:id` (método `POST`)

### 5. Interface de Usuário
- **Descrição**: O sistema deve fornecer uma interface web que permita a interação fácil e intuitiva com as funcionalidades descritas acima.
- **Componentes**:
  - Formulário para adicionar jogos.
  - Lista de jogos.
  - Links para visualizar e excluir jogos.

## Requisitos Não Funcionais

### 1. Plataforma
- **Descrição**: O sistema deve ser implementado utilizando Node.js puro, sem frameworks de servidor como Express.
- **Motivação**: Para garantir aprendizado e prática de programação utilizando recursos nativos do Node.js.

### 2. Persistência de Dados
- **Descrição**: O sistema deve manter os dados dos jogos em uma estrutura de dados em memória (array) durante a execução do servidor.
- **Motivação**: Simplicidade de implementação e foco no funcionamento básico da aplicação.

### 3. Usabilidade
- **Descrição**: A interface deve ser amigável e de fácil navegação.
- **Motivação**: Garantir uma boa experiência do usuário, com foco na clareza e simplicidade.

### 4. Segurança Básica
- **Descrição**: As ações de adição e exclusão de jogos devem ser protegidas contra ataques de injeção de código simples.
- **Motivação**: Minimizar riscos de segurança em uma aplicação básica.

### 5. Performance
- **Descrição**: O sistema deve ser capaz de gerenciar um número razoável de jogos (até 1000 jogos) sem degradação significativa de performance.
- **Motivação**: Garantir que o sistema seja capaz de lidar com uma quantidade de dados suficiente para testes realistas.

## Requisitos Técnicos

### 1. Node.js
- **Versão Mínima**: 14.x
- **Descrição**: A aplicação deve ser construída usando JavaScript rodando em Node.js, sem o uso de frameworks adicionais como Express.

### 2. NPM
- **Dependências**: O projeto pode usar pacotes NPM essenciais, como `uuid` para geração de IDs únicos.

### 3. Git
- **Descrição**: O controle de versão deve ser gerenciado com Git, e o código deve ser versionado em um repositório público ou privado.

### 4. Ambiente de Desenvolvimento
- **Descrição**: O desenvolvimento deve ser realizado em um ambiente Unix-based (Linux, macOS) ou Windows com WSL.

## Estrutura de Arquivos

- `app.js` - Arquivo principal do servidor.
- `REQUISITOS.md` - Documento de requisitos do projeto (este documento).
- `package.json` - Arquivo de configuração do projeto Node.js.
- `package-lock.json` - Arquivo de bloqueio de versões das dependências (gerado automaticamente).
- `public/` - Diretório para arquivos estáticos (como CSS).
- `views/` - Diretório para templates HTML (caso utilizado).

## Conclusão

Este documento fornece um esboço completo dos requisitos para o desenvolvimento do projeto "Catálogo de Jogos". Qualquer mudança ou adição deve ser registrada e discutida antes da implementação.
