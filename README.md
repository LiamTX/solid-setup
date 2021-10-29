# Migrador Web

## Getting started
### Pré-requisitos
Para executar este projeto no modo de desenvolvimento, você precisará ter um ambiente básico com NodeJS 8+ instalado.

### Instalação de dependências
```
$ yarn
```

ou

```
$ npm install
```

### Configuração de variaveis de ambiente
Adicione crie e ao seu .env as seguintes variaveis para conexão com o banco de dados mongo:
```
DB_TYPE="mongodb"
DB_HOST="{host do db}"
DB_PORT={porta do db}
DB_USERNAME="{username do db}"
DB_PASSWORD="{password do db}"
DB_DATABASE="{nome do db}"
```

### Buildando o projeto
```
$ yarn build
```

ou 

```
$ npm run build
```

### Iniciando o projeto
Em dev mode:
```
$ yarn dev
```

ou

```
npm run dev
```

Em prod mode:
```
$ yarn start
```

ou 

```
$ npm run start
```
