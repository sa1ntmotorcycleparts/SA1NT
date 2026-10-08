# SA1NT — Motorcycle Parts Marketplace

SA1NT is a Node.js/Express motorcycle-parts marketplace with a cinematic racing UI, real server-side authentication, customer accounts, admin controls, product management, merch catalog, promos, wishlist and cart flows.

## What is included

- Real email/password authentication with bcrypt + JWT
- Optional Google Identity Services authentication
- Server-side admin role checks
- Admin product catalog with image upload, pricing, stock, sale price, badges and featured status
- Customer account UI, wishlist and cart
- SA1NT merch catalog
- Admin design studio
- Mobile-first Android/iOS browser layout and PWA metadata
- Cinematic intro, login and logout scenes

## Run locally

Requirements: Node.js 20+ LTS.

```bash
cd server
npm install
npm start
```

Open `http://localhost:3000`.

For development:

```bash
cd server
npm run dev
```

## Environment

Copy `server/.env.example` to `server/.env` and set real deployment values. Never commit `server/.env`.

Required production settings:

- `JWT_SECRET`: long random secret (32+ characters)
- `ADMIN_EMAIL`: initial administrator email
- `ADMIN_PASSWORD`: strong initial administrator password
- `ADMIN_NAME`: administrator display name
- `GOOGLE_CLIENT_ID`: Google Web Client ID, when Google sign-in is enabled
- `NODE_ENV=production`
- `PORT`: supplied by the hosting provider, if applicable

The server creates the initial administrator account on first boot when `ADMIN_EMAIL` and `ADMIN_PASSWORD` are supplied.

## GitHub

Push the repository root as-is. Do not add `.env`, `server/data/`, or `node_modules/` to the repository. The included `.gitignore` already excludes them.

## Production hosting

Use a Node-capable web host. Configure the start command as:

```text
npm start
```

The service should expose port `PORT` and use HTTPS in production.

## Important

Do not open `index.html` directly with `file://`. Authentication and protected admin APIs require the Express server.

The public catalog starts empty by design. Products are published by the administrator; no sample motorcycle-part inventory or sample customer account is included.
