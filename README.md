# 🎯 Mohit Kumar Nayak | Portfolio Website

A modern, responsive portfolio website built with **React**, **TypeScript**, and **Vite**. This showcases professional experience, projects, skills, and contact information in a beautiful, interactive interface.

---

## ✨ Features

- **Modern UI**: Clean, professional design with smooth animations using Framer Motion
- **Dark/Light Mode**: Toggle between dark and light themes for better user experience
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Interactive Components**: Smooth scrolling, accordion menus, and interactive sections
- **SEO Friendly**: Optimized metadata and structured HTML for search engines
- **Fast Performance**: Built with Vite for lightning-fast development and production builds

---

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── HeroSection.tsx         # Welcome/intro section
│   ├── AboutSection.tsx        # About me section
│   ├── SkillsSection.tsx       # Technical skills display
│   ├── ExperienceSection.tsx   # Work experience
│   ├── EducationSection.tsx    # Education details
│   ├── ProjectsSection.tsx     # Portfolio projects
│   ├── ContactSection.tsx      # Contact form
│   ├── Navbar.tsx              # Navigation bar
│   ├── ThemeToggle.tsx         # Dark/Light mode switcher
│   └── ui/                     # UI component library (shadcn)
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── App.tsx              # Main app component
```

---

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - Accessible UI components
- **Framer Motion** - Animations
- **Radix UI** - Headless component library
- **React Hook Form** - Form handling

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed on your system:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Bun](https://bun.sh/) or npm/yarn (Node package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Mohit-Kumar-Nayak-Portfolio
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

4. **Open in browser**
   - The app will be available at `http://localhost:5173`
   - Changes will hot-reload automatically

---

## 📦 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Build in development mode
npm run build:dev

# Preview production build locally
npm run preview

# Lint code for errors and style issues
npm lint
```

---

## 🎨 Customization Guide (For Beginners)

### Changing Title & Meta Information
Edit `index.html`:
```html
<title>Your Name | Portfolio</title>
<meta name="description" content="Your custom description here">
```

### Updating Content Sections
All content is in `src/components/`:
- Edit `HeroSection.tsx` for the intro
- Edit `AboutSection.tsx` for about info
- Edit `SkillsSection.tsx` for your skills
- Edit `ProjectsSection.tsx` for your projects

### Customizing Colors
Edit `tailwind.config.ts` to change theme colors globally, or modify component files directly.

### Adding Your Resume
Place your PDF in `public/` folder and link it from components:
```tsx
<a href="/your-resume.pdf" download>Download Resume</a>
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended - Free & Easy)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Select your repository
4. Click "Deploy" → Done!

### Deploy to Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New Site from Git"
4. Select your repository → Deploy

### Deploy to Other Platforms
The `npm run build` command creates a `dist/` folder with static files that can be deployed to any hosting service (GitHub Pages, AWS, Azure, etc.)

---

## 📝 Notes for Beginners

- **HMR (Hot Module Reload)**: Your changes in code will instantly appear in the browser without refreshing
- **Tailwind CSS**: This project uses utility-first CSS. Learn more at [tailwindcss.com](https://tailwindcss.com)
- **TypeScript**: If new to TypeScript, don't worry! Start simple and gradually add type annotations
- **shadcn/ui**: Pre-built, accessible components. Check `src/components/ui/` to see what's available

---

## 🐛 Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Dependencies not installing?**
```bash
rm -rf node_modules bun.lockb
bun install  # or npm install
```

**Build failing?**
- Check for TypeScript errors: `npm run lint`
- Clear cache: `rm -rf .next dist`
- Reinstall: `bun install` or `npm install`

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)

---

## 🤝 Contributing

Found a bug or have suggestions? Feel free to open an issue or submit a pull request!

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👤 About

**Mohit Kumar Nayak** - Full-Stack Developer, Data Analytics Enthusiast, and Machine Learning Explorer

- 📧 Email: [your-email@example.com]
- 🔗 LinkedIn: [your-linkedin-profile]
- 🐙 GitHub: [your-github-profile]

---

**Made with ❤️ using React, TypeScript, and Vite**
