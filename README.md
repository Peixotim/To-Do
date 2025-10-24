# To-Do List API - NestJS

Um projeto simples de **To-Do List** construído com **NestJS**, demonstrando conceitos de CRUD, uso de serviços, controllers e boas práticas de organização de código.

---

## 🔹 Tecnologias Utilizadas

* [NestJS](https://nestjs.com/) - Framework Node.js para construir aplicações escaláveis.
* [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript com tipagem estática.
* Node.js
* NPM ou PNPM

---

## 🚀 Funcionalidades

* Criar tarefas (`POST /tasks`)
* Listar todas as tarefas (`GET /tasks`)
* Atualizar tarefas (`PATCH /tasks/:id`)
* Remover tarefas (`DELETE /tasks/:id`)

---

## ⚡ Estrutura do Projeto

```
src/
│
├── tasks/
│   ├── tasks.controller.ts
│   ├── tasks.service.ts
│   └── tasks.entity.ts
│
├── app.module.ts
└── main.ts
```

* **tasks.controller.ts**: Define os endpoints da API.
* **tasks.service.ts**: Contém a lógica de negócio.
* **tasks.entity.ts**: Define a estrutura das tarefas.

---

## 💻 Instalação

1. Clone o repositório:

```bash
git clone <seu-repo-url>
cd nome-do-projeto
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Rode o projeto:

```bash
npm run start:dev
# ou
yarn start:dev
```

4. Acesse a API em: `http://localhost:3000`

---

## 📝 Exemplo de Requisições

* **Criar tarefa**:

```http
POST /tasks
Content-Type: application/json

{
  "name": "Estudar NestJS",
  "description": "Finalizar o projeto To-Do List",
  "status": "pendente",
  "dateCreation": "2025-10-24"
}
```

* **Listar tarefas**:

```http
GET /tasks
```

* **Atualizar tarefa**:

```http
PATCH /tasks/1
Content-Type: application/json

{
  "status": "concluída"
}
```

* **Remover tarefa**:

```http
DELETE /tasks/1
```

---

## 🌟 Melhorias Futuras

* Persistência em banco de dados (PostgreSQL, MongoDB)
* Autenticação de usuários
* Filtros por status da tarefa
* Paginação e ordenação de tarefas

---

## 📄 Licença

Este projeto está licenciado sob a MIT License.
