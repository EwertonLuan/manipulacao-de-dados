# Manipulando dados com NodeJs

## Instalação e uso

Pré-requisitos Local: 
* [Node.js](https://nodejs.org/en/)

Pré-requisitos com Docker:

* [Docker](https://docs.docker.com/compose/)
* [Docker-compose](https://www.docker.com/)

Inicie o Mongodb antes de iniciar o server caso esteja usando local.

Edite as variaveis no arquivo src/config/index.js, insira o link do mongodb e a porta do server:

```js
config.MONGOOSE_URL = 'mongodb://localhost:27017/dito';

config.MONGOOSE_URL_TEST= 'mongodb://localhost:27017/dito_test';

config.PORT= 4000;
```

### Ambiente Local

Dentro da pasta do projeto use o comando:
```
$ npm install 
```
Para iniciar o server:
 ```sh
 $ npm start
 ```

Para rodar os testes:
 ```sh
 $ npm test
 ```

### Ambiente com Docker

Configure os arquivos docker-compose com a mesma porta do server, dentro dos arquivos mude "ports" 

Primeiro construa a imagem:
```
 $ docker build -t node_api .
 ```

Para iniciar o server:
```
 $ docker-compose up
 ```
 
 Para rodar os testes:
```
 $ docker-compose -f docker-compose.test.yml
 ```

### Rotas da API

Inicio das rotas: **http://localhost:5000**

**GET /api/v1/timeline**

Essa rota consume uma API e retorna os dados organizados.

Exemplo de retorno:  

```
{
    "timeline": [
        {
            "timestamp": "2016-09-22T13:57:31.2311892-03:00",
            "revenue": 250,
            "transaction_id": "3029384",
            "store_name": "Patio Savassi",
            "products": [
                {
                    "name": "Camisa Azul",
                    "price": 100
                },
                {
                    "name": "Calça Rosa",
                    "price": 150
                }
            ]
        }
    ]
}
```  
