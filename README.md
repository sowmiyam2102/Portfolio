# Sowmiya M - Personal Portfolio

A premium, modern, and fully interactive developer portfolio website built using React, Vite, Tailwind CSS v4, Framer Motion, and Lucide React. 

The site features fluid typography, theme toggling, interactive timeline, projects gallery filtering, contact form validation, and glassmorphic micro-animations.

## 🚀 Features

- **Sleek Glassmorphic Design**: Curated dark and light themes using Tailwind v4.
- **Interactive Framer Motion Transitions**: Section fade-ins, card hover effects, project filters, and animated navigation highlights.
- **Responsive Mobile Drawer Menu**: Clean mobile layouts with smooth toggle states.
- **Timeline component**: Interactive resume and career timeline.
- **Validated Contact Form**: Handles inputs validation with responsive error displays and success overlays.
- **GitHub Pages Ready**: Out-of-the-box build configurations and automated deployment scripts.

---

## 📂 Project Structure

```
├── public/                 # Static public assets (favicons, manifest, etc.)
├── src/
│   ├── assets/             # Component-specific SVGs and media files
│   ├── components/         # Reusable interactive layout elements
│   │   ├── Button.jsx      # Animated actions support (primary, secondary, outline, glow)
│   │   ├── Card.jsx        # Glassmorphic card container with hover transitions
│   │   ├── Footer.jsx      # Minimalist footer with copyright and back-to-top button
│   │   ├── Navbar.jsx      # Fixed scrolling tracker with theme switches & drawer menu
│   │   └── ThemeToggle.jsx # Framer-motion driven dark/light theme trigger
│   ├── data/
│   │   └── portfolioData.js# Structured copy dataset for bio, projects, and work history
│   ├── sections/           # Large modular viewport layouts
│   │   ├── About.jsx       # Biography statement & skills progress boards
│   │   ├── Contact.jsx     # Form validations & direct messaging interfaces
│   │   ├── Experience.jsx  # Career timeline nodes
│   │   ├── Hero.jsx        # Floating call-to-actions, typing states, & social cards
│   │   └── Projects.jsx    # Categorized filter blocks for recent creations
│   ├── App.jsx             # Layout structure container
│   ├── index.css           # Global styles and Tailwind CSS v4 configuration
│   └── main.jsx            # React root container mounting
├── index.html              # Custom Google Fonts loading & viewport tags
├── package.json            # Configuration and deployment directives
├── vite.config.js          # Vite configuration with Tailwind plugin & base path setups
└── README.md               # Documentation
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Installation

1. Clone or copy this repository:
   ```bash
   git clone https://github.com/sowmiyam2102/sowmiya-portfolio.git
   cd sowmiya-portfolio
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

---

## 📦 Building and Deployment

### GitHub Pages

This project is pre-configured to build and deploy to GitHub Pages under the URL path `/sowmiya-portfolio/`.

To compile the production build and publish to your GitHub repository:

```bash
npm run deploy
```

This command runs `predeploy` (which builds the app and outputs static files to the `/dist` folder) and then runs `deploy` (which automatically pushes the build to the `gh-pages` branch on your GitHub repository).
