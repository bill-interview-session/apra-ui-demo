# Demo App

Build a search application that searches on a collection of photo data and display the result in a table format to a user.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run production mode with registry (docker)

Start in the first time
```
cd .docker

sh compose.sh
```

Start if the container exist
```
docker start demo-app
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

## Technology stacks
- SPA: react.js (NextJS)
- Query Language: GraphQL (graphql-request, @tanstack/react-query)
- CSS components (Antd)
- Lint: eclint, eslint, prettier
- Registry: docker, docker compose
- Process manager: pm2
- CI/CD: github action
- Git: hooks (husky)
