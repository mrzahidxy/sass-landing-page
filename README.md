# Subscription Landing Page

A modern, responsive landing page for subscription-based products built with Next.js 14, TypeScript, Tailwind CSS, and React.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Components](#components)
- [Deployment](#deployment)
- [Scripts](#scripts)
- [License](#license)

## Overview

This is a landing page for a subscription-based product called "TaskMasterPro". The site includes marketing sections, pricing information, resources, and conversion modals to capture leads and drive sales.

## Features

- Responsive design that works on all device sizes
- Server-side rendering and static generation for optimal performance
- Interactive modals for trial signups, sales inquiries, and checkout
- Dynamic pricing section with multiple plans
- Resource library with dynamic routing
- FAQ section with common questions
- Testimonials from satisfied customers
- Type-safe development with TypeScript

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://reactjs.org/) - Component-based UI library
- [Lucide React](https://lucide.dev/) - Icon library

## Getting Started

### Prerequisites

- Node.js 16 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd subs-landing
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

```
subs-landing/
├── app/                 # App Router pages and layouts
│   ├── pricing/         # Pricing page
│   ├── resources/       # Resources section with dynamic routes
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   └── landing/         # Landing page components
│       ├── modals/      # Modal components for conversions
│       ├── navigation/  # Navigation components
│       └── sections/    # Landing page sections
├── lib/                 # Utility functions and data
├── types/               # TypeScript types
└── public/              # Static assets
```

## Pages

1. **Home** (`/`) - Main landing page with all marketing sections
2. **Pricing** (`/pricing`) - Detailed pricing plans comparison
3. **Resources** (`/resources`) - Resource library with articles
4. **Resource Articles** (`/resources/[slug]`) - Individual resource articles

## Components

### Sections
- HeroSection - Main hero with call-to-action
- FeaturesSection - Product features showcase
- PricingSection - Pricing plans display
- TestimonialsSection - Customer testimonials
- FaqSection - Frequently asked questions
- CtaSection - Final call-to-action
- Footer - Site footer

### Modals
- TrialModal - Free trial signup form
- SalesModal - Contact sales form
- CheckoutSheet - Payment processing form

## Deployment

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

The app is ready to be deployed to any hosting platform that supports Next.js, such as Vercel, Netlify, or AWS.

## Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint
- `npm run type-check` - Runs TypeScript type checking

## License

This project is licensed under the MIT License.