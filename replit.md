# Overview

This is a Tamil Muhurtham Calculator web application built with React and Express. The application calculates auspicious timing (muhurtham) for ceremonies and events based on traditional Tamil astrological principles, specifically using Pushkara Amsa calculations. It provides detailed analysis of rasi (zodiac signs), navamsha ranges, and planetary influences to determine optimal timing for important activities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using **React with TypeScript** and follows a component-based architecture:

- **UI Framework**: Uses Radix UI primitives with shadcn/ui components for consistent design
- **Styling**: Tailwind CSS with custom color variables for Tamil astrological elements (fire, earth, air, water)
- **State Management**: React hooks (useState, useEffect) for local state management
- **Routing**: Wouter for lightweight client-side routing
- **Data Fetching**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

## Backend Architecture
The backend uses **Node.js with Express** in a minimal API structure:

- **Server Framework**: Express.js with TypeScript
- **Architecture Pattern**: Simple MVC-like structure with routes and storage layers
- **Storage Interface**: Abstract storage interface with in-memory implementation (designed to be replaced with database)
- **Development Setup**: Custom Vite integration for development mode with HMR support

## Data Storage Solutions
Currently implements an **in-memory storage** system with a well-defined interface:

- **Storage Interface**: Abstract IStorage interface for CRUD operations
- **Current Implementation**: MemStorage class using Maps for data persistence
- **Database Ready**: Drizzle ORM configured for PostgreSQL migration
- **Schema Definition**: Shared schema using Drizzle with Zod validation

## Authentication and Authorization
Basic user management structure is in place:

- **User Schema**: Defined with username/password fields
- **Storage Methods**: User creation and retrieval methods implemented
- **Session Management**: Uses connect-pg-simple for PostgreSQL session storage
- **Security**: Password hashing and validation ready for implementation

## Component Organization
The frontend follows a structured component hierarchy:

- **Page Components**: Home and NotFound pages with clean routing
- **Feature Components**: TamilMuhurthamCalculator as main application component
- **UI Components**: Comprehensive shadcn/ui component library
- **Utility Components**: Input controls, results display, analysis tabs
- **Shared Components**: Reusable UI elements across the application

## Astrological Calculation Engine
The application includes a sophisticated calculation system:

- **Rasi Data**: Complete zodiac sign information with Tamil names and element classifications
- **Navamsha Calculations**: Detailed planetary period calculations with nakshatra information
- **Time Conversions**: Degree-to-time conversion utilities for muhurtham calculations
- **Pushkara Logic**: Traditional Tamil astrological timing calculations

## Development Environment
The project is optimized for Replit development:

- **Hot Module Replacement**: Vite HMR integration for rapid development
- **TypeScript Configuration**: Strict type checking with path aliases
- **Development Tools**: Custom error overlay and cartographer integration for Replit
- **Build Pipeline**: Separate client and server build processes with ESBuild

## External Dependencies

### Core Framework Dependencies
- **React 18**: Main frontend framework with modern hooks
- **Express**: Node.js web framework for backend API
- **TypeScript**: Type safety across frontend and backend

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless component primitives
- **shadcn/ui**: Pre-built accessible component library
- **Lucide React**: Icon library for UI elements

### Data Management
- **Drizzle ORM**: Type-safe ORM for PostgreSQL
- **Neon Database**: PostgreSQL serverless database (configured)
- **Zod**: Schema validation library
- **TanStack Query**: Server state management

### Development Tools
- **Vite**: Build tool and development server
- **ESBuild**: Fast JavaScript bundler
- **Wouter**: Lightweight router for React

### Astrological Calculations
- **date-fns**: Date manipulation utilities
- **Custom calculation engine**: Built-in Tamil astrological formulas

### Session and Forms
- **connect-pg-simple**: PostgreSQL session store
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Form validation integration

## Deployment Configuration

### Vercel Deployment
The application is optimized for deployment on Vercel with the following configuration:

- **Platform**: Vercel (recommended)
- **Framework**: Auto-detected as Vite
- **Build Command**: `vite build`
- **Output Directory**: `dist`
- **Deployment URL**: https://pushkaranavamsalagnam.vercel.app

### Production Optimizations
- **SEO-optimized HTML**: Complete meta tags, Open Graph, Twitter cards
- **Structured Data**: JSON-LD schema for search engines
- **Mobile-friendly**: PWA-ready with proper meta tags
- **Performance**: Optimized font loading and minimal bundle size
- **Tamil Language Support**: Proper language attributes and Tamil typography

### GitHub Repository
- **Repository**: https://github.com/sivaramanrajagopal/Pushkaranavamsalagnam
- **Deployment Method**: GitHub → Vercel integration
- **Auto-deployment**: Enabled for main branch commits

## Recent Changes (2024)

### Version 1.0 - Production Ready
- ✅ Corrected nakshatra and pada mappings with proper lord rules validation
- ✅ Enhanced analysis tab with nakshatra lord-pada rule verification
- ✅ Comprehensive reference guide with element breakdowns  
- ✅ Developer information and usage guidelines in settings
- ✅ Traditional Tamil interface with Sanskrit mantras
- ✅ SEO optimization for search engine visibility
- ✅ Production deployment configuration for Vercel
- ✅ Complete documentation and README for GitHub

### Astrological Accuracy Improvements
- **Lord Rules**: Venus (Pada 3), Sun (Pada 1&4), Moon (Pada 2), Rahu (Pada 4), Jupiter (Pada 1,2,4), Saturn (Pada 2)
- **Element Grouping**: Proper fire, earth, air, water classifications
- **Navamsha Calculations**: Accurate degree-to-time conversions
- **Traditional Validation**: Based on authentic Tamil astrological texts