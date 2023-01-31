# Blockbr

## Preview 👀

![event preview](./src/assets/blockbr.gif)

## About 🔎

This is an api based in typeorm node and typescript.

## Tech tools 🔧

The following tools and frameworks were used in the construction of the project:<br>

<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white'>
</p>

## How to run ⚙️

1. Clone this repository
2. Install dependencies

```bash
yarn install
```

3. Create postgres db and assign to DB_NAME in env file
4. Run migrations

```bash
yarn migration:run
```

5. You can optionally build the project running

```bash
yarn dev
```

6. Finally add PORT in env or get access by default in http://localhost:4000
