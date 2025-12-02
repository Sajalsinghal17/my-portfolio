# 🚀 Sajal's Personal Portfolio Website

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</div>

<div align="center">
  <h3>🎯 A Modern, High-Performance Personal Portfolio</h3>
  <p><em>Showcasing technical expertise through cutting-edge web technologies and optimized user experience</em></p>
  
  [![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Portfolio-blue?style=for-the-badge)](https://sajal-singhal.vercel.app/)
  [![GitHub](https://img.shields.io/badge/📂_Source_Code-GitHub-black?style=for-the-badge)](https://github.com/Sajalsinghal17/my-portfolio)
</div>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🎨 Design Philosophy](#-design-philosophy)
- [📱 Responsive Design](#-responsive-design)
- [⚡ Performance](#-performance)
- [🔧 Development](#-development)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📞 Contact](#-contact)

---

## 🎯 Overview

This portfolio represents the intersection of **modern web development** and **exceptional user experience**. Built with performance-first principles, it showcases my journey as a Full-Stack Developer through an interactive, visually stunning interface that performs flawlessly across all devices.

### 🌟 What Makes This Portfolio Special

- **⚡ Lightning Fast**: Optimized for 95+ Lighthouse performance scores
- **🎨 Visually Stunning**: Modern animations and micro-interactions
- **📱 Mobile-First**: Seamless experience across all device sizes
- **♿ Accessible**: Built with accessibility best practices
- **🔧 Production-Ready**: Clean, maintainable, and scalable code

### 🌐 Live Demo

**[🔗 Visit Portfolio](https://sajal-singhal.vercel.app/)**

---

## ✨ Key Features

### 🎭 Interactive UI/UX
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Magnetic Elements**: Interactive hover effects and magnetic buttons
- **Parallax Scrolling**: Engaging scroll-based animations
- **Loading Experience**: Beautiful animated loading screen

### 📱 Responsive Excellence
- **Mobile-First Design**: Optimized for touch interactions
- **Adaptive Layouts**: Fluid grid systems that work on any screen size
- **Performance Optimized**: Reduced motion for better mobile performance
- **Touch-Friendly**: Optimized button sizes and interaction areas

### 🎯 Professional Sections
- **🏠 About**: Personal introduction with animated elements
- **💼 Skills**: Interactive skill showcase with proficiency indicators
- **🚀 Projects**: Detailed project portfolio with live demos
- **🎓 Education**: Academic background and achievements
- **🏆 Achievements**: Certifications and professional recognitions
- **📞 Contact**: Multiple contact methods and social links

### ⚡ Performance Features
- **Code Splitting**: Optimized bundle sizes for faster loading
- **Lazy Loading**: Components and images load on demand
- **Memoization**: React.memo and useMemo for optimal re-renders
- **Optimized Assets**: Compressed images and efficient asset loading

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool and dev server
- **JavaScript ES6+** - Modern JavaScript features

### Styling & Design
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing and optimization
- **Custom CSS** - Performance-optimized custom styles

### Animations & Interactions
- **Framer Motion** - Production-ready motion library
- **Lottie React** - High-quality animations
- **GSAP** - Professional-grade animations
- **Custom Hooks** - Reusable animation logic

### Development Tools
- **ESLint** - Code quality and consistency
- **Git & GitHub** - Version control and collaboration
- **VS Code** - Development environment
- **Chrome DevTools** - Performance optimization

### Deployment & Hosting
- **Vercel** - Serverless deployment platform
- **GitHub Actions** - CI/CD pipeline
- **Domain Management** - Custom domain configuration

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn**
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/Sajalsinghal17/my-portfolio.git

# Navigate to project directory
cd personal-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Server

```bash
# Start dev server (usually runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 📁 Project Structure

```
personal-website/
├── 📁 public/
│   ├── 📁 assets/
│   │   ├── 📁 awards/          # Achievement images
│   │   ├── 📁 certificates/    # Certification images
│   │   ├── 📁 logo/           # Brand assets
│   │   ├── 📁 projects/       # Project screenshots
│   │   └── 📁 skills/         # Technology icons
│   └── 📄 index.html
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 animations/     # Reusable animation components
│   │   │   ├── InteractiveElements.jsx
│   │   │   ├── ScrollAnimations.jsx
│   │   │   └── TextReveal.jsx
│   │   ├── 📁 ui/            # UI components
│   │   │   ├── button.jsx
│   │   │   └── ModernCard.jsx
│   │   ├── About.jsx         # About section
│   │   ├── Achievements.jsx  # Achievements showcase
│   │   ├── Contact.jsx       # Contact information
│   │   ├── Education.jsx     # Educational background
│   │   ├── Navbar.jsx        # Navigation component
│   │   ├── Projects.jsx      # Project portfolio
│   │   ├── Skills.jsx        # Skills showcase
│   │   └── SplitText.jsx     # Text animation component
│   ├── 📁 lib/
│   │   └── utils.js          # Utility functions
│   ├── 📁 lottie/           # Animation files
│   ├── App.jsx              # Main application component
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── 📄 package.json
├── 📄 tailwind.config.js
├── 📄 vite.config.js
└── 📄 README.md
```

---

## 🎨 Design Philosophy

### Modern Aesthetic
- **Minimalist Design**: Clean layouts with purposeful white space
- **Gradient Accents**: Subtle gradients for visual depth
- **Consistent Typography**: Poppins font family for readability
- **Color Harmony**: Carefully selected color palette

### User Experience
- **Intuitive Navigation**: Clear, accessible navigation patterns
- **Progressive Disclosure**: Information revealed contextually
- **Feedback Systems**: Visual feedback for all interactions
- **Loading States**: Smooth transitions between states

### Performance First
- **Mobile Optimization**: Reduced animations on mobile devices
- **Efficient Rendering**: Optimized component re-renders
- **Asset Optimization**: Compressed and optimized media files
- **Code Splitting**: Lazy-loaded components and routes

---

## 📱 Responsive Design

| Device Type | Breakpoint | Optimizations |
|-------------|------------|---------------|
| **📱 Mobile** | < 768px | Touch-optimized navigation, stacked layouts, reduced animations |
| **📟 Tablet** | 768px - 1024px | Grid-based layouts, adjusted spacing, hybrid interactions |
| **💻 Desktop** | > 1024px | Full feature set, advanced hover effects, multi-column layouts |
| **🖥️ Large Screens** | > 1440px | Enhanced spacing, larger typography, expanded layouts |

### Mobile-Specific Optimizations
- **Touch Targets**: Minimum 44px touch targets
- **Reduced Motion**: Respects user's motion preferences
- **Optimized Images**: WebP format with fallbacks
- **Efficient Animations**: Hardware-accelerated transforms

---

## ⚡ Performance

### Lighthouse Scores

| Metric | Score | Optimization |
|--------|-------|-------------|
| **Performance** | 95+ | Code splitting, lazy loading, optimized assets |
| **Accessibility** | 95+ | Semantic HTML, ARIA labels, keyboard navigation |
| **Best Practices** | 95+ | Modern web standards, security headers |
| **SEO** | 95+ | Meta tags, structured data, semantic markup |

### Performance Optimizations

#### Frontend Optimizations
- **React.memo()**: Prevents unnecessary re-renders
- **useMemo()**: Memoizes expensive calculations
- **useCallback()**: Optimizes event handlers
- **Code Splitting**: Dynamic imports for route-based splitting

#### Asset Optimizations
- **Image Optimization**: WebP format with fallbacks
- **Font Loading**: Optimized Google Fonts loading
- **CSS Optimization**: Purged unused Tailwind classes
- **Bundle Analysis**: Optimized chunk sizes

#### Runtime Optimizations
- **Virtual Scrolling**: For large lists (if applicable)
- **Debounced Inputs**: Optimized search and filter inputs
- **Intersection Observer**: Efficient scroll-based animations
- **RequestAnimationFrame**: Smooth animation loops

---

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server with HMR
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint for code quality

# Deployment
npm run deploy       # Deploy to production (if configured)
```

### Development Workflow

1. **Feature Development**
   ```bash
   git checkout -b feature/new-feature
   npm run dev
   # Develop your feature
   npm run lint
   git commit -m "feat: add new feature"
   ```

2. **Testing & Quality Assurance**
   ```bash
   npm run build      # Test production build
   npm run preview    # Test production locally
   npm run lint       # Check code quality
   ```

3. **Deployment**
   ```bash
   git push origin feature/new-feature
   # Create pull request
   # Merge to main triggers automatic deployment
   ```

### Code Quality Standards
- **ESLint Configuration**: Enforces consistent code style
- **Prettier Integration**: Automatic code formatting
- **Component Structure**: Consistent component organization
- **Performance Monitoring**: Regular performance audits

---

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect Repository**
   - Link your GitHub repository to Vercel
   - Configure build settings:
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

2. **Environment Variables**
   ```bash
   # Add any required environment variables in Vercel dashboard
   VITE_API_URL=your_api_url
   ```

3. **Custom Domain** (Optional)
   - Configure custom domain in Vercel dashboard
   - Update DNS settings as required

### Alternative Deployment Options

#### Netlify
```bash
# Build settings
Build command: npm run build
Publish directory: dist
```

#### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add deploy script to package.json
npm run deploy
```

### Performance Monitoring
- **Vercel Analytics**: Built-in performance monitoring
- **Lighthouse CI**: Automated performance testing
- **Error Tracking**: Production error monitoring

---

## 🤝 Contributing

I welcome contributions, suggestions, and feedback! Here's how you can contribute:

### Contribution Guidelines

1. **Fork the Repository**
   ```bash
   git fork https://github.com/Sajalsinghal17/my-portfolio.git
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Changes**
   - Follow existing code style and conventions
   - Add comments for complex logic
   - Test your changes thoroughly

4. **Commit Changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/amazing-feature
   # Create pull request with detailed description
   ```

### Types of Contributions Welcome

- 🐛 **Bug Fixes**: Report and fix bugs
- ✨ **Feature Enhancements**: Suggest and implement new features
- 📚 **Documentation**: Improve documentation and README
- 🎨 **Design Improvements**: UI/UX enhancements
- ⚡ **Performance**: Optimization suggestions
- ♿ **Accessibility**: Accessibility improvements

### Development Setup for Contributors

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/personal-website.git
cd personal-website

# Add upstream remote
git remote add upstream https://github.com/Sajalsinghal17/my-portfolio.git

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📞 Contact

<div align="center">

### Let's Connect and Build Something Amazing Together! 🚀

**Sajal Singhal** — Full-Stack Developer & Tech Enthusiast

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-Visit_Website-blue?style=for-the-badge)](https://sajal-singhal.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sajal-singhal-169b4b277/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Sajalsinghal17)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sajalsinghal172005@gmail.com)

</div>

### 🤝 Professional Opportunities

- **💼 Open to Internship Opportunities**
- **🚀 Available for Freelance Projects**
- **🤝 Interested in Collaboration**
- **📚 Always Learning New Technologies**

### 📧 Get In Touch

- **Email**: [sajalsinghal172005@gmail.com](mailto:sajalsinghal172005@gmail.com)
- **LinkedIn**: [linkedin.com/in/sajal-singhal](https://www.linkedin.com/in/sajal-singhal-169b4b277/)
- **GitHub**: [github.com/sajal-singhal](https://github.com/Sajalsinghal17)
- **Portfolio**: [sajal-singhal.vercel.app](https://https://sajal-singhal.vercel.app/)

---

<div align="center">

### 🌟 If you found this project interesting, please consider starring the repository!

<div style="margin: 20px 0;">
  <img src="https://img.shields.io/github/stars/Sajalsinghal17/my-portfolio?style=social" alt="GitHub stars">
  <img src="https://img.shields.io/github/forks/Sajalsinghal17/my-portfolio?style=social" alt="GitHub forks">
  <img src="https://img.shields.io/github/watchers/Sajalsinghal17/my-portfolio?style=social" alt="GitHub watchers">
</div>

**Made with ❤️ and ☕ by Sajal Singhal**

*Crafted with modern web technologies and a passion for exceptional user experiences*

---

### 📊 Repository Stats

![GitHub repo size](https://img.shields.io/github/repo-size/Sajalsinghal17/my-portfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/Sajalsinghal17/my-portfolio)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Sajalsinghal17/my-portfolio)

</div>

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2025 Sajal Singhal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

<div align="center">
  <p><strong>⭐ Star this repository if it helped you!</strong></p>
  <p><em>Thank you for visiting my portfolio repository. Happy coding! 🚀</em></p>
</div>