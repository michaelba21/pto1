# NeuroStack Solutions - Replit Development Guide

## Overview

NeuroStack Solutions is a modern full-stack web application built as a professional portfolio and business website for a freelance web development service. The application showcases AI-powered web development, cybersecurity, and automation services with a focus on fast delivery and security-first approach.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite with hot module replacement
- **State Management**: TanStack Query for server state management
- **UI Components**: Radix UI primitives with custom styling
- **Theme System**: Custom dark/light theme provider with CSS variables

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **API Design**: RESTful endpoints with proper error handling

### Build System
- **Development**: Vite dev server with Express backend proxy
- **Production**: esbuild for server bundling, Vite for client build
- **Deployment**: Replit autoscale deployment target
- **TypeScript**: Strict mode enabled with path mapping

## Key Components

### Database Schema
Located in `shared/schema.ts`:
- **Users table**: Authentication with username/password
- **Contact submissions table**: Form submissions with metadata
- **Validation**: Zod schemas for type-safe data validation
- **Database migrations**: Drizzle migrations in `/migrations` directory

### API Routes
Located in `server/routes.ts`:
- `POST /api/contact`: Contact form submission endpoint
- `GET /api/contact`: Admin endpoint for retrieving submissions
- Error handling with Zod validation
- Comprehensive logging middleware

### Storage Layer
- **Interface**: `IStorage` defines storage contract
- **Implementation**: `DatabaseStorage` using PostgreSQL via Drizzle ORM
- **Database**: PostgreSQL with Neon Database serverless connection
- **Tables**: `users` and `contact_submissions` with proper relations

### Frontend Pages
- **Home**: Hero section with service highlights
- **About**: Company information and statistics
- **Services**: Detailed service offerings
- **Contact**: Contact form with validation
- **Blog**: Content marketing and case studies
- **404**: Custom not found page

### UI Component System
- **Base**: shadcn/ui components built on Radix UI
- **Customization**: Tailwind CSS with CSS variables
- **Theme**: New York style variant
- **Icons**: Lucide React icon library
- **Typography**: Inter font family

## Data Flow

### Contact Form Submission
1. User fills contact form on `/contact` page
2. Client-side validation with React Hook Form + Zod
3. Form data submitted to `POST /api/contact`
4. Server validates with `insertContactSubmissionSchema`
5. Data stored via storage layer interface
6. Success/error response with toast notifications

### Theme Management
1. Theme state managed in React context
2. Theme preference stored in localStorage
3. CSS classes applied to document root
4. CSS variables drive component styling

### Development Workflow
1. Vite dev server serves client on port 5000
2. Express server handles API routes
3. Hot module replacement for fast development
4. TypeScript compilation with path mapping

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **UI Framework**: Radix UI components, shadcn/ui
- **Database**: Drizzle ORM, Neon Database driver
- **Server**: Express.js, connect-pg-simple
- **Validation**: Zod for runtime type checking
- **Build Tools**: Vite, esbuild, TypeScript

### Development Tools
- **Replit Integration**: Custom Vite plugins for Replit environment
- **Code Quality**: TypeScript strict mode, ESLint configuration
- **Performance**: TanStack Query for caching and state management

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 runtime
- **Database**: PostgreSQL 16 module
- **Port Configuration**: Internal port 5000, external port 80
- **File Watching**: Vite HMR with Express middleware integration

### Production Build
- **Client Build**: `vite build` generates static assets
- **Server Build**: `esbuild` bundles server code to `dist/`
- **Start Command**: `node dist/index.js` with production environment
- **Static Serving**: Express serves built client assets

### Environment Variables
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit-specific identifier for development features

### Deployment Pipeline
1. `npm run build` creates production bundles
2. Client assets built to `dist/public/`
3. Server code bundled to `dist/index.js`
4. Replit autoscale handles deployment and scaling

## Changelog
- June 19, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.