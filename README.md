# Store Manager

<details>
  <summary markdown="span"><strong>:us: English</strong></summary><br />
  
## :page_with_curl: About

This is the fifth project of the Back-end curriculum developed at Trybe.

In this project I developed a RESTful API using the MSC (model-service-controller) architecture of a sales management system in dropshipping format, where it is possible to create, view, delete and update products and sales. I also implemented unit tests with Mocha, Chai and Sinon.

<br />
  
## 🚀 Installation

<details>
<summary>Installing and running with Docker</summary>
<br />

To run this application you need to have **Git**, **Docker** and **Docker Compose** installed on your computer. Docker Compose needs to be version **1.29** or higher.

### 1 - Clone the repository:

```
git clone git@github.com:apoishi/trybe-store-manager.git
```

### 2 - Enter the repository folder you just cloned and use docker-compose to create the container:

     cd trybe-store-manager  

     docker-compose up -d --build

### 3 - Open the `store_manager` container terminal.

     docker exec -it store_manager bash

### 4 - In the terminal of the container, install the dependencies with the command:

     npm install

### 5 - Create and populate the database with the commands:

creating the tables

     npm run migration

Populating the database with data

     npm run seed
    
### 6 - Run the application with the command:

     npm start

### 7 - Check the test coverage run the command:

     npm run test:mocha
    
</details>
<br />

## :man_technologist: Skills

- Connect the application with a MySQL database;
- Structure the application in layers (Models, Services and Controllers);
- Properly delegate responsibilities to each layer;
- Write more easily reusable code;
- Apply REST standards;
- Write unit tests for the application.

<br />

## 🚂 Routes

### Products

<details>
   <summary><strong>GET /products</strong></summary>
   </br>
   • Return all products from the database.
</details>

<details>
   <summary><strong>GET /products/:id</strong></summary>
   </br>
   • Return a product by id from the database.
</details>

<details>
   <summary><strong>POST /products</strong></summary>
   </br>
   • Register a new product.
</details>

<details>
   <summary><strong>PUT /products/:id</strong></summary>
   </br>
   • Update a product by id in the database.
</details>

<details>
   <summary><strong>DELETE /products/:id</strong></summary>
   </br>
   • Delete a product by id in the database.
</details>

### Sales

<details>
   <summary><strong>GET /sales</strong></summary>
   </br>
   • Return all sales from the database.
</details>

<details>
   <summary><strong>GET /sales/:id</strong></summary>
   </br>
   • Return a sale by id from the database.
</details>

<details>
   <summary><strong>DELETE /sales/:id</strong></summary>
   </br>
   • Delete a sale by id in the database.
</details>
<br />

## :hammer_and_wrench: Tools

* Node
* Express
* DotEnv
* Joi
* MySQL
* Docker
* Mocha
* Chai
* Sinon
* Javascript

</details>

<details>
  <summary markdown="span"><strong>:brazil: Português</strong></summary><br />
  
## :page_with_curl: Sobre

Esse é o quinto projeto desenvolvido na Trybe do módulo de Back-end.

Nesse projeto desenvolvi uma API RESTful utilizando a arquitetura MSC (model-service-controller) de um sistema de gerenciamento de vendas no formato dropshipping, onde é possivel criar, visualizar, deletar e atualizar produtos e vendas. Também implementei testes unitários com Mocha, Chai e Sinon.
  
<br />

## 🚀 Instalação e execução

<details>
<summary>Instalação e execução com Docker</summary>
<br />

Para rodar está aplicação é necessário ter **Git**, **Docker** e o **Docker Compose** instalados no seu computador. O Docker Compose precisa estar na versão **1.29** ou superior.

### 1 - Clone o repositório:

```
git clone git@github.com:apoishi/trybe-store-manager.git
```

### 2 - Entre na pasta do repositório que você acabou de clonar e use o docker-compose para subir o container:

    cd trybe-store-manager   
    docker-compose up -d --build

### 3 - Abra o terminal do container `store_manager`.

    docker exec -it store_manager bash

### 4 - No terminal do container, instale as dependências com o comando:

    npm install

### 5 - Agora execute os comandos para criar e popular o banco de dados:

Criando as tabelas

    npm run migration

Populando o banco com dados

    npm run seed
    
### 6 - Execute a aplicação com o comando:

    npm start

### 7 - Para conferir a cobertura de testes execute o comando:

    npm run test:mocha
    
</details>
<br />

## :man_technologist: Habilidades

- Conectar a aplicação com um banco de dados MySQL;
- Estruturar a aplicação em camadas (Models, Services e Controllers);
- Delegar corretamente as responsabilidades para cada camada;
- Escrever um código mais facilmente reutilizável;
- Aplicar os padrões REST;
- Escrever testes unitários para a aplicação.

<br />

## 🚂 Rotas

### Products

<details>
  <summary><strong>GET /products</strong></summary>
  </br>
  • Traz todos os produtos do banco de dados.
</details>

<details>
  <summary><strong>GET /products/:id</strong></summary>
  </br>
  • Traz um produto por id do banco de dados.
</details>

<details>
  <summary><strong>POST /products</strong></summary>
  </br>
  • Cadastra um novo produto.
</details>

<details>
  <summary><strong>PUT /products/:id</strong></summary>
  </br>
  • Atualiza um produto por id.
</details>

<details>
  <summary><strong>DELETE /products/:id</strong></summary>
  </br>
  • Deleta um produto por id do banco de dados.
</details>

### Sales

<details>
  <summary><strong>GET /sales</strong></summary>
  </br>
  • Traz todas as vendas do banco de dados.
</details>

<details>
  <summary><strong>GET /sales/:id</strong></summary>
  </br>
  • Traz uma venda por id do banco de dados.
</details>

<details>
  <summary><strong>DELETE /sales/:id</strong></summary>
  </br>
  • Deleta uma venda por id do banco de dados.
</details>
<br />

## :hammer_and_wrench: Ferramentas

* Node
* Express
* DotEnv
* Joi
* MySQL
* Docker
* Mocha
* Chai
* Sinon
* Javascript

</details>
