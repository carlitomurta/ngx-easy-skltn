# Como contribuir

[Translate to English](#how-to-start)

**_Importante_**, requer `node v10.x.x` ou maior, e `npm 6.x.x.`

---

### Clone o repositório

```bash
git clone https://github.com/CarlitoMurta/ngx-easy-skltn.git
cd ngx-easy-skltn
npm install
npm start
```

### Rodar os testes

```bash
npm test
```

---

## Solicitar Pull requests

**Por favor, siga as instruções para simplificar a avaliação da PR**

- Faça o `rebase` com a `master`.
- Rode `npm install` para ter certeza que suas dependencias estão atualizadas.
- Verifique se os testes passaram com `npm test` **e** o `lint` não acusou nenhum erro antes de abrir a **PR**.
- Se você criou uma nova funcionalidade, **por favor** inclua testes que validem seu comportamento.
- Faça referências à [issues](https://github.com/willmendesneto/ngx-skeleton-loader/issues) nos comentários da **PR**.

## Solicitando bugs

- Detalhe sobre o browser(s) utilizado e o sistema operacional
- Detalhe sobre a versão do `node` **e** `npm` que estiver utilizando

---

# How to start

**Note** requires node v10.x.x or higher and npm 6.x.x.

---

### Clone repository

```bash
git clone https://github.com/willmendesneto/ngx-skeleton-loader.git
cd ngx-skeleton-loader
npm install
npm start
```

### Running test

```bash
npm test
```

---

## Submitting Pull Requests

**Please follow these basic steps to simplify pull request reviews - if you don't you'll probably just be asked to anyway.**

- Please rebase your branch against the current master
- Run `npm install` to make sure your development dependencies are up-to-date
- Please ensure that the test suite passes **and** that code is lint free before submitting a PR by running:
- `npm test`
- If you've added new functionality, **please** include tests which validate its behaviour
- Make reference to possible [issues](https://github.com/willmendesneto/ngx-skeleton-loader/issues) on PR comment
- This module follows Angular commit message standard, so please make sure that you are following this standard.

## Submitting bug reports

- Please detail the affected browser(s) and operating system(s)
- Please be sure to state which version of node **and** npm you're using
- Please use try to simulate your bug based on [the demo on Stackblitz](https://ngx-skeleton-loader-sample.stackblitz.io)!
