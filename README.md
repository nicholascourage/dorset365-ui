# Dorset365 UI

Nuxt frontend for Dorset365.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

Create your local environment file:

```bash
cp .env.example .env
```

The default local API origin is:

```env
NUXT_PUBLIC_API_BASE=http://api.dorset365.local
```

## Local domains

Add these hostnames to `/etc/hosts`:

```txt
127.0.0.1 dorset365.local
127.0.0.1 api.dorset365.local
```

The Laravel API Docker Nginx service should listen on port `80` and route:

- `http://dorset365.local` to this Nuxt dev server on port `3000`
- `http://api.dorset365.local` to the Laravel API public directory

## Development Server

Start the development server for the local-domain setup:

```bash
npm run dev:local
```

Then open:

```txt
http://dorset365.local
```

You can still start the standard Nuxt development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
