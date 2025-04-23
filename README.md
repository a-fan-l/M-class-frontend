# M-Class Frontend Project

## Project Overview
This is a Next.js-based frontend application for M-Class, built with modern web technologies and best practices.

## Tech Stack
- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: 
  - TailwindCSS 4
  - SASS
  - Tailwind Merge
- **State Management**: Jotai
- **Animation**: Motion, Flubber
- **UI Components**: Radix UI
- **Internationalization**: next-intl
- **Theme**: next-themes
- **Data Fetching**: TanStack Query
- **Utility Libraries**:
  - Immer
  - Dayjs
  - AHooks
  - Class Variance Authority

## Project Structure
```
src/
├── app/          # Next.js app router pages
├── atoms/        # Jotai state atoms
├── components/   # Reusable UI components
├── config/       # Configuration files
├── constants/    # Constant values
├── hooks/        # Custom React hooks
├── i18n/         # Internationalization
├── locales/      # Translation files
├── styles/       # Global styles
├── tools/        # Utility tools
├── types/        # TypeScript type definitions
└── utils/        # Utility functions
```

## Development Setup
1. **Node.js Version**: >= 22
2. **Package Manager**: Yarn
3. **Development Server**: 
   ```bash
   yarn dev
   ```
   Runs on port 3008

## Build & Deployment
- Build: `yarn build`
- Start: `yarn start`
- Lint: `yarn lint`

## Features
- Internationalization support
- Dark/Light theme support
- Responsive design
- Modern UI components
- State management with Jotai
- Type safety with TypeScript

## Important Notes
- The project uses Next.js App Router
- TailwindCSS is configured with PostCSS
- ESLint and Prettier are set up for code quality
- Internationalization is handled through next-intl
- Theme switching is implemented with next-themes

## Dependencies
See `package.json` for detailed dependency information. 
