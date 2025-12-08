# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

This is an **Astro + Tailwind CSS** static site generator project for the Tomoro landing page. Astro provides file-based routing and server-side rendering, while Tailwind CSS handles styling.

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server (hot reload on file changes)
npm run dev

# Build for production (generates optimized static files in dist/)
npm run build

# Preview production build locally
npm run preview
```

## Project Architecture

### Structure
- **src/pages/** - File-based routing; `index.astro` is the homepage
- **src/layouts/** - `Layout.astro` is the base HTML wrapper for all pages, includes custom cursor logic
- **src/components/** - Reusable Astro components for page sections
- **src/styles/** - Global CSS and Tailwind configuration
- **public/** - Static assets (images, etc.)

### Key Design Patterns

1. **Component Composition**: Each section (Header, Hero, Features, Pricing, etc.) is its own Astro component. The main page (`src/pages/index.astro`) imports and composes these components within the Layout.

2. **Custom Cursor**: Implemented in `src/layouts/Layout.astro` as a client-side script. A fixed div follows the mouse with `mousemove` event listener. Interactive elements (links, buttons, and elements with `data-hover` attribute) trigger the cursor to enlarge on hover. This requires:
   - Custom cursor styling with transitions in the `<style is:global>` block
   - The `cursor: none;` rule on all elements to hide the default cursor

3. **Styling Strategy**:
   - Tailwind for component styling (via classes)
   - `tailwind.config.mjs` extends with custom colors (`dark`, `light`, `accent`, `grid`) and animations
   - `src/styles/global.css` uses `@layer` to add base element styling and component utilities
   - Global transitions on all elements provide smooth animations

4. **Animations**:
   - `animate-rotate-sphere` - 10s infinite 3D rotation for the hero sphere
   - `animate-scroll` - 20s infinite horizontal scroll for the marquee
   - Both defined as keyframes in Tailwind config

## Customization Points

### Colors
Edit `tailwind.config.mjs` to change the theme:
- `dark: '#0a0a0a'` - Background color
- `light: '#e1e1e1'` - Text color
- `accent: '#ff3c00'` - Orange accent for interactive elements
- `grid: '#2a2a2a'` - Grid line color

### Animations
Modify or add keyframes in `tailwind.config.mjs` under `theme.extend.keyframes`.

### Adding New Components
1. Create a new `.astro` file in `src/components/`
2. Import and use it in `src/pages/index.astro`
3. Style with Tailwind classes or add to `global.css`

## Common Patterns

- **Hover Interaction**: Add `data-hover` attribute to elements that need the cursor to enlarge
- **Live Clock**: The Header component uses a client-side script to update time every second
- **Responsive Grid**: Uses Tailwind's responsive classes (`sm:`, `md:`, `lg:`) for mobile-first design

## Build Output

The production build outputs to `dist/`, containing optimized static HTML, CSS, and JavaScript. This is a fully static site suitable for deployment to any CDN or web host.
