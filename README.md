# 📚 Alura Books Server
API RESTful para gerenciamento de livros, desenvolvida como parte do curso da Alura.

<h2>🚀 Tecnologias Utilizadas</h2>

#### Node.js - Ambiente de execução JavaScript
#### Express.js - Framework web para Node.js
#### Postman - Plataforma de desenvolvimento de API


JSON File System - Armazenamento de dados em arquivo JSON

<h2>📋 Funcionalidades</h2>
✅ Listar todos os livros

✅ Buscar livro por ID

✅ Adicionar novo livro

✅ Atualizar livro existente

✅ Deletar livro

<h2>🛠️ Instalação e Execução</h2>
<h3>Pré-requisitos</h3>
Node.js (versão 14 ou superior)

npm ou yarn

<h3>Passos para executar localmente</h3>
1. Clone o repositório 

   ```bash
   git clone https://github.com/seu-usuario/alura-books-server.git
   cd alura-books-server
   ```
2. Instale as dependências
  ```bash
  npm install
  ```
  
3. Execute o servidor
  ```bash
  npm run start  
  ```
4. Acesse a API
```bash
  http://localhost:8000
  ```
   
<h3>📖 Estrutura do Projeto</h3>

```bash 
  alura-books-server/
  ├── controladores/
  │   └── livros.js
  ├── rotas/
  │   └── livros.js
  ├── servicos/
  │   └── livros.js
  ├── app.js
  ├── livros.json
  ├── package.json
  └── README.md
```

# 🎯 Endpoints da API

## 📗 Livros

### GET /livros

Retorna todos os livros

```bash 
  http://localhost:8000/livros
```

### GET /livros/:id
Retorna um livro específico

```bash 
  http://localhost:8000/livros/1
```

### POST /livros
Adiciona um novo livro
(Postman na aba body)

```bash
   http://localhost:8000/livros/
  {
    "id": 5,
    "nome": "Livro top das galáxias",
  }'
```

### PATCH /livros/:id
Atualiza um livro existente(Postman na aba body)

```bash   
  http://localhost:8000/livros/1 
  {
    "nome": "Novo Nome"
  }'
```

### DELETE /livros/:id
Remove um livro

```bash   
 http://localhost:8000/livros/1
```


## 👨‍💻 Desenvolvedor
### Rafael Cabral
Estudante de Tecnologia da Informação

## 📄 Licença
Este projeto está sob a licença ISC.

## ⭐ Se este projeto foi útil, deixe uma estrela no repositório!


