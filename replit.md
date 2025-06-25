# Oceane Center - Agricultural Export Website

## Overview
This is a full-stack web application for Oceane Center, a Benin-based agricultural export company. The application serves as a marketing website showcasing their premium agricultural products and providing a contact form for potential customers. Built with a modern React frontend and Express.js backend, it features a clean, professional design with mobile responsiveness.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ESM modules)
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Validation**: Zod schemas for request validation
- **Development**: tsx for TypeScript execution
- **Production**: esbuild for server bundling

### Database Architecture
- **Database**: PostgreSQL (configured for Neon Database)
- **Schema Management**: Drizzle Kit for migrations
- **Tables**: 
  - `users` - User authentication (future use)
  - `contact_inquiries` - Contact form submissions

## Key Components

### Frontend Components
- **Navigation**: Sticky header with smooth scrolling navigation
- **Hero Section**: Full-screen promotional banner with CTA buttons
- **Company Profile**: Business information and credentials display
- **Products Section**: Product showcase with pricing and features
- **Advantages Section**: Key selling points with icons and descriptions
- **Contact Section**: Form for customer inquiries with validation
- **Footer**: Company information and product links

### Backend Services
- **Contact API**: Handles form submissions (`/api/contact`)
- **Storage Service**: Database operations with fallback to in-memory storage
- **Route Registration**: Centralized API route management
- **Error Handling**: Global error middleware with proper status codes

### UI Components
Complete shadcn/ui implementation including:
- Form components (Input, Textarea, Select, Button)
- Layout components (Card, Sheet, Dialog)
- Feedback components (Toast, Alert)
- Navigation components (Accordion, Tabs)

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form data validated using Zod schema
3. API request sent to `/api/contact` endpoint
4. Backend validates data and stores in database
5. Success response triggers toast notification
6. Form resets for new submissions

### Product Display
1. Static product data defined in components
2. Products rendered with images, features, and pricing
3. Responsive grid layout adapts to screen size
4. Interactive elements for user engagement

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Routing**: wouter
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Forms**: react-hook-form, @hookform/resolvers
- **Validation**: zod, drizzle-zod
- **State**: @tanstack/react-query
- **UI Components**: @radix-ui components, lucide-react icons
- **Utilities**: date-fns, nanoid

### Backend Dependencies
- **Server**: express, tsx (development)
- **Database**: drizzle-orm, @neondatabase/serverless
- **Session**: connect-pg-simple (configured but not actively used)
- **Build**: esbuild (production)

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **Vite**: Fast development server with HMR
- **Drizzle Kit**: Database schema management
- **PostCSS**: CSS processing with Autoprefixer

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev`
- **Server**: tsx with hot reload on port 5000
- **Frontend**: Vite dev server with proxy to backend
- **Database**: PostgreSQL connection via DATABASE_URL

### Production Build
- **Frontend Build**: `vite build` - optimized React bundle
- **Backend Build**: `esbuild` - single bundled server file
- **Static Serving**: Express serves built frontend files
- **Deployment**: Configured for Replit autoscale deployment

### Environment Configuration
- **Replit Modules**: nodejs-20, web, postgresql-16
- **Port Mapping**: Internal 5000 → External 80
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`

## Changelog
- June 25, 2025. Initial setup

## User Preferences
Preferred communication style: Simple, everyday language.