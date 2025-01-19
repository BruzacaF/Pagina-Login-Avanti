# Projeto Página de Login

## Visão Geral

Este projeto é uma página de login simples construída com HTML, CSS e JavaScript. Inclui um formulário onde os usuários podem inserir seu e-mail e senha para fazer login. A página fornece feedback sobre a validade dos campos de entrada e exibe mensagens de sucesso ou erro apropriadas.

## Funcionalidades

- **Validação de E-mail e Senha**: As funções JavaScript `verificarEmail` e `verificarSenha` são usadas para validar os campos de e-mail e senha.
- **Atualizações Dinâmicas da UI**: A interface do usuário é atualizada dinamicamente para mostrar mensagens de sucesso ou erro com base nos resultados da validação.


## Estrutura de Arquivos

- `index.html`: O principal arquivo HTML contendo a estrutura da página de login.
- `style.css`: O arquivo CSS contendo estilos e animações para a página de login.
- `main.js`: O arquivo JavaScript contendo a lógica para validação do formulário e atualizações da UI.

## Como Usar

1. **Clonar o Repositório**: Clone este repositório para sua máquina local usando `git clone <repository-url>`.
2. **Abrir o Projeto**: Navegue até o diretório do projeto e abra `index.html` no seu navegador web preferido ou usando a extensão live server do VScode
3. **Inserir Credenciais**: Insira seu e-mail e senha nos respectivos campos.
4. **Enviar o Formulário**: Clique no botão "Login" para enviar o formulário.
5. **Ver Feedback**: A página exibirá uma mensagem de sucesso se as credenciais estiverem no formato certo, ou uma mensagem de erro se não estiverem.

## Regras de Validação

- **E-mail**: Deve ser um formato de e-mail válido terminando com `.com` ou `.com.br`.
- **Senha**: Deve ter pelo menos 6 caracteres.

