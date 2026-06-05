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
cp .env.example .env          # preencha GITHUB_CLIENT_ID/SECRET e JWT_SECRET
docker compose up -d          # sobe Postgres em localhost:5432
npx prisma migrate dev        # cria as tabelas
npm run dev
```

Para derrubar o banco: `docker compose down` (mantém os dados).
Para apagar tudo: `docker compose down -v`.
