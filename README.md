# API com NodeJs e Mongodb

## Instalação e uso

Pré-requisitos Local:
 
* [Node.js](https://nodejs.org/en/)
* [Mongodb](https://www.mongodb.com/)

Pré-requisitos com Docker:

* [Docker](https://docs.docker.com/compose/)
* [Docker-compose](https://www.docker.com/)

https://docs.docker.com/compose/
https://www.docker.com/

Inicie o Mongo db antes de iniciar o server caso esteja usando o local.

Edite as variaveis no arquivo src/config/index.js, insira o link do mongodb e a porta do server:

```js
config.MONGOOSE_URL = 'mongodb://localhost:27017/dito';

config.MONGOOSE_URL_TEST= 'mongodb://localhost:27017/dito_test';

config.PORT= 4000;
```

Dentro da pasta do projeto use o comando:
```
$ npm install 
```
Inicie o server com o camando:
 ```sh
 $ npm start
 ```
Esse comando vai rodar o projeto com babel e nodemon. 

[Babel.js](https://babeljs.io/) é um JavaScript compiler. Ele pode trasformar um codigo escrito em  especificações ES6 em algo que o Nodejs pode entender totalmente.

Para rodar os testes:
 ```sh
 $ npm start
 ```

### Rotas da API

**POST /api/v1/events/**

Essa rota aramazena os eventos no banco, deve ser enviado no body as keys event e timestamp. Exemplo:

```sh
event: 'buy',
timestamp: '2016-09-22T16:57:31.231Z'
```
Exemplo de retorno:
```json
{
    "_id": "5bec39920741dc425b9daad1",
    "event": "sasdhlasdh",
    "timestamp": "2016-09-22T16:57:31.231Z",
    "__v": 0
}
```  

**GET /api/v1/events/**

Essa rota retorna os itens que estão armazenados no Banco de dados.  

Exemplo de retorno:  

```
{
 "data": [
    {
        "_id": "5bec39920741dc425b9daad1",
        "event": "sasdhlasdh",
        "timestamp": "2016-09-22T16:57:31.231Z",
        "__v": 0
    }
 ]
}
```  

**GET /api/v1/events/autocomplete/:searche**

Envie no minimo dois caracteres para a rota devolver uma lista com os items encontrados.  

Exemplo de retorno:  
```
{
    "data": [
        "buy",
    ]
}  
