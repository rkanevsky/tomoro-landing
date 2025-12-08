# Tomoro - Astro + Tailwind Version

A modern, responsive landing page for Tomoro built with Astro and Tailwind CSS.

## Features

- ✨ **Modern Stack**: Astro + Tailwind CSS
- 🎨 **Dark Theme**: Sleek dark design with orange accent (#ff3c00)
- 🖱️ **Custom Cursor**: Interactive cursor that enlarges on hover
- ⏰ **Live Clock**: Real-time clock display in header
- ✨ **Smooth Animations**: Rotating sphere and scrolling marquee
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast**: Static site generation with optimal performance

## Project Structure

```
src/
├── pages/
│   └── index.astro          # Main landing page
├── layouts/
│   └── Layout.astro         # Base layout with cursor logic
├── components/
│   ├── Header.astro         # Header with logo and clock
│   ├── Hero.astro           # Hero section with animated sphere
│   ├── Marquee.astro        # Scrolling marquee
│   ├── Features.astro       # Feature boxes (3 columns)
│   ├── Pricing.astro        # Pricing card and CTA buttons
│   ├── CTA.astro            # Call-to-action (part of Pricing)
│   └── Footer.astro         # Footer
└── styles/
    └── global.css           # Global styles and Tailwind imports
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Start the dev server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000` (or the next available port).

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Colors

Edit the colors in `tailwind.config.mjs`:

```js
colors: {
  dark: '#0a0a0a',      // Background
  light: '#e1e1e1',     // Text
  accent: '#ff3c00',    // Orange accent
  grid: '#2a2a2a',      // Grid lines
}
```

### Animations

Modify animations in `tailwind.config.mjs`:
- `animate-rotate-sphere` - Rotating 3D sphere
- `animate-scroll` - Marquee scrolling effect

### Components

Each section is a separate Astro component in `src/components/`, making it easy to customize or extend.

## Key Features Implemented

1. **Custom Cursor** (`src/layouts/Layout.astro`)
   - Follows mouse movement
   - Enlarges on hover over interactive elements
   - Hidden on actual hover to show original cursor

2. **Live Clock** (`src/components/Header.astro`)
   - Updates every second
   - Shows local time in UTC

3. **Responsive Grid**
   - Uses Tailwind's grid system
   - Adapts to mobile, tablet, and desktop

4. **Smooth Animations**
   - Rotating sphere with 3D transforms
   - Scrolling marquee text
   - Hover effects on buttons

## Browser Support

Works on all modern browsers supporting:
- CSS Grid
- 3D Transforms
- CSS Animations
- ES6 JavaScript

## License

© 2024 Tomoro Systems
