# DB Theory Lab - Educational Suite

A comprehensive educational platform for analyzing functional dependencies and normalizing relational database schemas to 3NF or BCNF using step-by-step algorithms.

## Features

- **Dashboard**: Overview of your active relations, functional dependencies, and candidate keys
- **Relations Management**: Create and manage relational schemas with multiple attributes
- **Algorithm Suite**: Execute various database normalization algorithms:
  - Attribute Closure
  - Equivalence Analysis
  - Inclusion Dependency Checking
  - Irreducible Set Detection
  - Candidate Key Discovery

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4, Radix UI Components
- **State Management**: Zustand
- **Data Fetching**: TanStack React Query
- **Database**: Supabase
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
# Copy .env.example to .env.local and configure your Supabase credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js app routes
│   ├── dashboard/    # Dashboard page
│   ├── relaciones/   # Relations management
│   ├── algoritmos/   # Algorithm execution suite
│   ├── historia/     # History and analytics
│   └── configuracion/ # Settings
├── components/       # React components
│   ├── acciones/     # Algorithm components
│   └── ui/          # UI component library
├── hooks/           # React hooks
├── lib/            # Utilities and helpers
├── store/          # Zustand stores
├── tipos/          # TypeScript interfaces
└── utils/          # Business logic functions
```

## Features

### Dashboard

- Real-time statistics on active relations
- Quick access to recent projects
- Performance metrics
- Algorithm quick start

### Relations Management

- Create and edit relational schemas
- Define attributes and functional dependencies
- Visual schema representation
- Batch operations

### Algorithm Suite

- **Attribute Closure**: Calculate attribute closure given functional dependencies
- **Equivalence**: Check if two sets of functional dependencies are equivalent
- **Inclusion Dependency**: Verify inclusion dependencies between relations
- **Irreducible Set**: Find minimal equivalent FD sets
- **Candidate Keys**: Identify all candidate keys for a relation

## Keyboard Shortcuts

- `Ctrl/Cmd + D` - Go to Dashboard
- `Ctrl/Cmd + R` - Go to Relations
- `Ctrl/Cmd + A` - Go to Algorithms

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues or questions, please open an issue on GitHub or contact the development team.

---

**DB Theory Lab** - Designed for Database Education © 2025

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
