## Simple Full-Stack CRUD with Next.js 14, PostgreSQL, and Prisma

This is a Next.js project bootstrapped with create-next-app. It demonstrates a simple full-stack CRUD application using Next.js 14, PostgreSQL, and Prisma.

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/KleitonEwerton/to-learn-nextjs.git
```

```bash
cd to-learn-nextjs
```

```bash
yarn install
```

or

```bash
yarn install
```

Then, run the development server:

```bash
npm run dev
```

```bash
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Inter, a custom Google Font.

## Database Configuration

This project uses PostgreSQL as its database. To get started, you can run a PostgreSQL instance with Docker:

```bash
docker-compose up -d
```

Alternatively, if you prefer using a local PostgreSQL instance, edit the .env file and update the DATABASE_URL with a valid PostgreSQL connection string:

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgresnest"
```

## Prisma Setup

To set up Prisma, follow these steps:

1. Initialize Prisma:

   ```bash
   npx prisma init
   ```

2. Generate Prisma client:
   ```bash
   npx prisma generate
   ```
3. Run migrations:
   `bash
 npx prisma migrate dev
 `
   Prisma will use the connection string specified in the DATABASE_URL environment variable.

## Scripts

The following scripts are available in the project:

- npm run dev - Runs the application in development mode.
- npm run build - Builds the application for production.
- npm run start - Starts the application in production mode.
- npm run lint - Runs ESLint to check for linting errors.

## Dependencies

- `Next.js` - A React framework for production.
- `React` - A JavaScript library for building user interfaces.
- `Prisma` - Next-generation ORM for Node.js and TypeScript.
- `PostgreSQL` - A powerful, open-source object-relational database system.
- `Tailwind CSS` - A utility-first CSS framework for rapid UI development.
- `Zod` - A TypeScript-first schema declaration and validation library.
