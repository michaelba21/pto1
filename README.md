# NeuroStack Solutions - Professional Web Development Website

A modern, responsive website for a freelance web development company specializing in AI-powered solutions, cybersecurity, and full-stack development.

## Features

- 🌙 Dark/light mode toggle with smooth transitions
- 📱 Responsive design with mobile navigation
- ⚡ Fast, modern React frontend with TypeScript
- 🗄️ PostgreSQL database with Drizzle ORM
- 🎨 Beautiful UI with Tailwind CSS and shadcn/ui
- 📧 Contact form with database persistence
- 🔒 Security-first approach with form validation

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Build Tools**: Vite, esbuild
- **Deployment**: Replit-ready

## Local Development Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- PostgreSQL database (or use a cloud service like Neon)

### Installation Steps

1. **Download or clone the project**
   - Download the project files to your local machine
   - Extract to a folder like `neurostack-website`

2. **Navigate to the project directory**
   ```bash
   cd neurostack-website
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   NODE_ENV=development
   ```

5. **Push database schema**
   ```bash
   npm run db:push
   ```

6. **Start the development server**
   ```bash
  cd neurostack-website
  npm installcd neurostack-website
  npm installnpm install
  npm run dev
   ```

7. **Open your browser**
   Visit `http://localhost:5000` to see the website

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes

### Database Setup

The project uses PostgreSQL with Drizzle ORM. You can either:

1. **Use a local PostgreSQL installation**
2. **Use a cloud service like Neon, Supabase, or PlanetScale**

Update the `DATABASE_URL` in your `.env` file with your database connection string.

### Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   └── lib/            # Utilities and hooks
├── server/                 # Backend Express server
│   ├── db.ts              # Database connection
│   ├── storage.ts         # Data access layer
│   └── routes.ts          # API routes
├── shared/                 # Shared types and schemas
└── package.json           # Dependencies and scripts
```

## Deployment

The project is configured for Replit deployment but can be deployed to any Node.js hosting platform:

1. Build the project: `npm run build`
2. Set environment variables on your hosting platform
3. Start the server: `npm start`

## Contact

For questions or support, contact NeuroStack Solutions at hello@neurostack.nl