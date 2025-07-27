# Rajit Agrawal - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast performance with Vite
- 🎯 TypeScript for type safety
- 🎨 Beautiful UI components with shadcn/ui
- 📱 Mobile-first responsive design
- 🌙 Dark/light theme support
- 📄 Multiple sections: Hero, About, Experience, Projects, Skills, Contact

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Forms**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm, yarn, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <your-repo-name>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### GitHub Pages

1. Add a GitHub Actions workflow for automatic deployment:

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created automatically by the workflow)

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy automatically on push to main branch

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

### Other Static Hosting

The built files in the `dist` directory can be deployed to any static hosting service like:
- Firebase Hosting
- AWS S3 + CloudFront
- Cloudflare Pages
- Surge.sh

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact section
│   ├── Experience.tsx  # Experience section
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation component
│   ├── Projects.tsx    # Projects section
│   └── Skills.tsx      # Skills section
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
├── App.tsx             # Main App component
└── main.tsx            # Entry point
```

## Customization

### Content
Update the content in each component file to match your information:
- `src/components/Hero.tsx` - Hero section content
- `src/components/About.tsx` - About section content
- `src/components/Experience.tsx` - Work experience
- `src/components/Projects.tsx` - Project showcase
- `src/components/Skills.tsx` - Skills and technologies
- `src/components/Contact.tsx` - Contact information

### Styling
- Colors and themes can be customized in `tailwind.config.ts`
- Component styles are in the respective component files
- Global styles are in `src/index.css`

### Configuration
- Vite configuration: `vite.config.ts`
- TypeScript configuration: `tsconfig.json`
- ESLint configuration: `eslint.config.js`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help with deployment, please open an issue on GitHub.
