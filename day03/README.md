# Project

Este projeto segue a trilha NodeJS do bootcamp NLW#5 promovido pela Rocketseat.
O objetivo é criar uma API para uma Chat aplication.


## Descrição do projeto

Trabalharemos com Yarn para instalar as dependências, então o primeiro passo e instalar o Yarn.


## Preparando o ambiente

### 1. Instalar Yarn

1.1. Adicionar a Chave GPG
'''bash
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
'''

1.2. Adicionar o Repositório Yarn
'''bash
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
'''

1.3. Atualizar o Sistema e Instalar o Yarn
'''bash
$ sudo apt update
$ sudo apt install yarn nodejs
'''

1.4. Conferir a Versão do Yarn
'''bash
$ yarn –version
'''

### 2. Inicializar o projeto utilizando Yarn

Utilizando "-y" para configuração padrão.

'''bash
$ yarn init -y
'''

### 3. Instalar o Express

'''bash
$ yarn add express
'''

### 4. Instalar as dependências de desenvolvimento "-D"

Tipagens do express:
'''bash
$ yarn add @types/express -D
'''

TypeScript:
'''bash
$ yarn add typescript -D
'''

### 5. Cria o arquivo de configuração do TypeScript
'''bash
$ yarn tsc --init
'''

### 6. Alterar no tsconfig.json

Desativa verificações adicionais na aplicação. O TypeScript já as faz durante o Load para Prod.
'''json
"strict" : false
'''

### 7. Instalar o interpretador do TypeScript para o Node
'''bash
$ yarn add ts-node-dev
'''

### 8. Instalar a ferramenta de comunicação HTTP (Postman)

Caso não possua o snap:
'''bash
sudo rm /etc/apt/preferences.d/nosnap.pref
sudo apt update
sudo apt install snapd
'''

Postman:
'''bash
sudo snap install postman
'''

### 9. Instalar a extensão "Json Viewer" no Chrome (opcional)

'''http
https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh/related?hl=pt-BR
'''

## Codificando

### 1. Inserindo script para o ambiente de Dev
'''json
  "scripts": {
    "dev": "ts-node-dev src/server.ts"
  },
'''

### 2. Criando server.ts

Criar a pasta "src", e dentro dela criar o arquivo "server.ts" com o seguinte conteúdo:

'''ts
import express, { response } from "express"; // método de chamada possível graças ao "ts-node-dev"

const app = express();
const PORT = 3333;

// Rotas
/***
 * GET    : Busca
 * POST   : Cria
 * PUT    : Altera
 * DELETE : Exclui
 * PATCH  : Alterações específicas
 ***/

app.get("/", (Request, response) => {
    return response.json({
        message: "Olá NLS 05!",
    })
})

app.post("/", (Request, response) => {
    return response.json({
        message: "Usuário gravado com sucesso!",
    })
})

// Inicializa aplicação
app.listen(PORT, () => console.log("Server running on port ", PORT));
'''

### 3. Executanro a aplicação
'''bash
yarn bash
'''
