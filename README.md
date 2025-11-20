# DigitiNexus - Responsive Website

Responsive version of the DigitiNexus website built with React, TypeScript, and Vite.

## 🚀 Features

- Fully responsive design
- Modern UI with smooth animations (Framer Motion, GSAP)
- SEO optimized with comprehensive metadata
- Progressive Web App (PWA) support
- Custom cursor interactions
- 3D experience popup for desktop users

## 📦 Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **Tailwind CSS** - Styling (via CDN)
- **Lucide React** - Icons

## 📁 Project Structure

```
resp.digitinexus.com/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── ThreeDPopup.tsx # 3D experience popup
│   └── ...
├── App.tsx             # Main app component
├── index.html          # HTML entry point
├── index.tsx           # React entry point
└── vite.config.ts      # Vite configuration
```

## 🌐 Deployment

This project is configured to be deployed on:
- **Vercel** (recommended)
- **Netlify**
- Any static hosting service

The site will be available at `digitinexus.com` (main domain).

## 📝 Notes

- The 3D interactive version is available at `immersive.digitinexus.com`
- Mobile users visiting the immersive version are automatically redirected to the main site
