# Nexst Starter (NextJS + NestJS)

A starter that includes all you need to quickly build amazing projects. 

Every best options from create-next-app
- 🚀 **React 18**
- **TypeScript** - Just better than pure JavaScript
- 📏 **ESLint** — Pluggable JavaScript linter
- ⚙️ **Tailwind CSS 3** - A utility-first CSS framework
- **Not App router** - might change in a few years, but definitely not now

PLUS every sweet API-related things that NestJS has to offer!
- **Swagger API Docs** - What every developer needs, but NextJS is kind of missing. Although I tried to create something for my own (https://github.com/levi218/next-openapi), it didn't go too well and need more attention at the moment.
- **MikroORM, set up with SQLite** - no need other dependencies like Docker, MySQL,... to start on your project. Simply clone this and start coding!
- Other things are not included, but it's NestJS so the options are there: Validation, Middleware, Sockets, ...

Extra
- **Build script** - Allow building the project in NextJS standalone mode, so that we can build then deploy it easily

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The example API route can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello).

Swagger can be accessed on [http://localhost:3000/api/swagger](http://localhost:3000/api/swagger).

## Database
See more on MikroORM site

Generate a fresh sqlite database file
```
yarn mikro-orm schema:fresh --run
```

Creating migration
```
(first time)
yarn mikro-orm migration:create --initial 
(after)
yarn mikro-orm migration:create
```

The sqlite database file is intended to be committed to the repo.

## Deployment
When deploying on the server, simply need to pull the source on the VM, then run the script build.
Then you can run ```node .next/standalone/server.js``` using pm2 or other process manager.

The build script will backup the database (stored in .next/standalone folder), clean up, rebuild and then recover the database file from backup. This process is specific to sqlite, if you decided to change to something more permanent like MySQL or Postgres, simply running ```yarn build``` might be faster.