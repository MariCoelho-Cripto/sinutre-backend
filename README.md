# sinutre-back

Backend do **SiNutre — Sistema de Ingestão de Macronutrientes**.

Stack: **TypeScript + Express + Prisma + PostgreSQL**.

> Versão didática usada em aula. Por enquanto cobre apenas:
> - Login via GitHub OAuth
> - Cadastro de uma refeição

Estrutura mínima: apenas **rotas** e **controllers** (sem testes).

## Setup

```bash
npm install
cp .env.example .env   # preencha as variáveis
npx prisma migrate dev
npm run dev
```
