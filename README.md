# One Digital Office

Premium marketing website for **One Digital Office**, a digital innovation studio.
Built with **React (Vite) + TypeScript + TailwindCSS** on the frontend and **Node.js + Express + TypeScript** on the backend.

## Structure

- `/client`: Frontend Application
- `/server`: Backend API

## Prerequisites

- Node.js (v18+)
- npm

## Getting Started

### 1. Setup

Run the following in the root directory:

```bash
# Install Client Dependencies
cd client
npm install

# Install Server Dependencies
cd ../server
npm install
```

### 2. Environment Variables

Create a `.env` file in `/server` (copy `.env.example` if available, or use the contents below):

```env
PORT=3000
# Optional: SMTP for Email
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user
SMTP_PASS=password
CONTACT_EMAIL=admin@onedigitaloffice.com
```

### 3. Running Locally

You need two terminal windows:

**Terminal 1 (Server):**
```bash
cd server
npm run dev
```
Server runs on `http://localhost:3000`

**Terminal 2 (Client):**
```bash
cd client
npm run dev
```
Client runs on `http://localhost:5173`

## Features

- **Premium UI**: Custom Tailwind configuration for an ultra-modern dark mode aesthetic.
- **Animations**: Powered by Framer Motion for smooth entrances and transitions.
- **Services & Work**: Dynamic content (currently seeded in backend, scalable to DB).
- **Contact Form**: Functional API endpoint (`/api/lead`) with Zod validation.

## Next Enhancements

- **CMS Integration**: Connect to Sanity.io or Contentful for Case Studies/Blog.
- **Database**: Connect `server/src/routes.ts` to real Firestore/Postgres instances.
- **Analytics**: Integrate Google Analytics 4.
- **Testing**: Expand Playwright coverage.

## Deployment

**Frontend**: Deploy `/client` to Vercel or Netlify.
**Backend**: Deploy `/server` to Railway, Render, or Heroku.
