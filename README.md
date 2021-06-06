# Game List App - Desafio

## O repositório

Neste repositório contém todo código desenvolvido por mim, para [este desafio](https://github.com/fsilvajoel/DesafioShadowCompasso).

## Game List

O projeto simula um banco de dados utilizando a biblioteca JSON-Server, onde estão listados 10 jogos com: ID, Nome, Imagem, Ano de Lançamento, Categoria e Nota para cada jogo na lista.

Para consumir os dados do "back-end", foi utilizado a biblioteca React para construção do layout.

## Instruções de uso

### Requisitos

- [Node.JS](https://nodejs.org/en/download/) `Dê preferência à última versão LTS`

- [JSON-Server](https://www.npmjs.com/package/json-server) `npm install -g json-server`

- [Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable) `npm install --global yarn`

### Testando

- [x] Após clonar o repositório, entre na pasta `games-critical-score` e execute o comando `yarn`.

#### _Somente após todas dependências estarem corretamente instaladas_:

- [ ] Abra dois terminais na pasta `games-critical-score`.
- [ ] No primeiro terminal, execute o comando `yarn server`.
- [ ] No segundo terminal, execute o comando `yarn start`.

## Comandos

#### `yarn`

_`Obrigatório estar no diretório games-critical-score`_

> Instala todas dependências necessárias para utilizar o React.

#### `yarn server`

> Inicia o Json-server na porta 8000

#### `yarn start`

> Inicia o React na porta 3000
