# Flowgentra AI Documentation

Flowgentra AI

This is the **official documentation website** for **Flowgentra AI**, a Rust library for building AI agent workflows with graph-based execution. This documentation covers installation, usage, API reference, examples, and guides for building AI agents with Flowgentra.

## Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) + [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Syntax Highlighting**: [Shiki](https://shiki.matsu.io/)
- **Build Tool**: Vite with SWC for fast development and optimized production builds

## Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) + [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Syntax Highlighting**: [Shiki](https://shiki.matsu.io/)
- **Build Tool**: Vite with SWC for fast development and optimized production builds

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

The documentation website will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
flowgentra-docs/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, etc.
│   ├── components/        # Reusable React components
│   ├── context/           # React context providers
│   ├── data/              # Documentation data and configuration
│   ├── pages/             # Page components
│   ├── App.jsx            # Main app component
│   ├── index.css          # Global styles
│   └── main.jsx           # App entry point
├── eslint.config.js       # ESLint configuration
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md             # This file
```

## Contributing

This documentation website is part of the Flowgentra AI project. To contribute:

1. Make changes to the documentation content or website components
2. Test locally with `npm run dev`
3. Ensure the build passes with `npm run build`
4. Submit a pull request

## Related Projects

- [flowgentra-ai-py](https://github.com/oussamabenhariz/flowgentra-ai-py) - Python bindings and documentation
- [flowgentra-ai-rs](https://github.com/oussamabenhariz/flowgentra-ai-rs) - Core Rust library
