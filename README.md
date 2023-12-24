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
- Node.js versão 20

## Rodar o projeto:
`git clone git@github.com:danrleidalfre/react-laravel-tasks.git`

`cd react-laravel-tasks/api`

`docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs`

`cp .env.example .env`

`./vendor/bin/sail artisan key:generate`

`./vendor/bin/sail/up -d`

`./vendor/bin/sail artisan migrate`

`cd ../app`

`npm i`

`npm run dev`

## Abrir o projeto: http://localhost:5173
