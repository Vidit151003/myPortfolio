# Interactive Portfolio Pro

A modern, professional portfolio website built with React, TypeScript, and cutting-edge web technologies. This portfolio showcases projects, skills, and experience with smooth animations and a beautiful dark/light theme.

## 🚀 Tech Stack

This project is built with:

- **Vite** - Lightning-fast build tool and dev server
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## 📦 Installation

### Prerequisites

- Node.js 16+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Setup

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd interactive-portfolio-pro-main

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## 🛠️ Available Scripts
interactive-portfolio-pro-mai
- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run build:dev`** - Build in development mode
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality
- **`npm test`** - Run tests once
- **`npm run test:watch`** - Run tests in watch mode

## 📁 Project Structure

```
src/
├── components/         # Reusable React components
│   ├── ui/            # shadcn/ui components
│   ├── Hero.tsx       # Hero section
│   ├── About.tsx      # About section
│   ├── Projects.tsx   # Projects showcase
│   ├── Skills.tsx     # Skills display
│   ├── Experience.tsx # Work experience
│   ├── Education.tsx  # Education history
│   └── Contact.tsx    # Contact form
├── pages/             # Page components
│   ├── Index.tsx      # Main portfolio page
│   └── NotFound.tsx   # 404 page
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── assets/            # Images and static files
└── test/              # Test files
```

## 🎨 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Smooth Animations** - Professional animations powered by Framer Motion
- **Modern UI** - Clean, professional design with shadcn/ui components
- **Type-Safe** - Full TypeScript support for better developer experience
- **Fast Performance** - Optimized with Vite for instant HMR and quick builds
- **SEO Friendly** - Proper meta tags and semantic HTML

## 🚀 Deployment

### Build for Production

```sh
npm run build
```

The optimized production build will be in the `dist/` directory.

### Deployment Options

You can deploy this portfolio to various platforms:

- **Vercel** - Deploy with zero configuration
- **Netlify** - Simple drag-and-drop deployment
- **GitHub Pages** - Free hosting for static sites
- **Cloudflare Pages** - Fast global CDN

## 🧪 Testing

This project uses Vitest for testing:

```sh
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch
```

## 📝 Customization

1. **Personal Information**: Update content in components like `Hero.tsx`, `About.tsx`, etc.
2. **Projects**: Modify the projects array in `Projects.tsx`
3. **Skills**: Update skills in `Skills.tsx`
4. **Theme**: Customize colors in `tailwind.config.ts`
5. **Meta Tags**: Update SEO information in `index.html`

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or feedback, please reach out through the contact form on the portfolio.
