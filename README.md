# TaskApp: Gerenciamento de Tarefas e Tags

## Funcionalidades:
- Adicionar, Editar e Excluir Tags
- Adicionar, Editar e Excluir Tarefas
- Vincular uma ou mais Tags a uma Tarefa
- Marcar Tarefa como concluída
- Tema Light e Dark

![TaskApp](https://github.com/danrleidalfre/react-laravel-tasks/assets/31357224/d78b2bc8-f683-4939-bb59-28aba33a27a6)

## Requisitos:
- Docker
- Composer versão 2.6
- Node.js versão 20

## Rodar o projeto:
`git clone git@github.com:danrleidalfre/react-laravel-tasks.git`

`cd react-laravel-tasks/api`

`composer install`

`docker compose up -d`

`docker exec api-laravel.tasks_api-1 php artisan migrate`

`cd ../app`

`npm i`

`npm run dev`

## Abrir o projeto: http://localhost:5173
