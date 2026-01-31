# Aman Joshi - Portfolio Website

A modern, single-page portfolio website for Aman Joshi, a CPA/Audit professional. Built with Deno Fresh, featuring a clean design, dark mode toggle, and mobile-responsive layout showcasing professional experience, skills, certifications, and projects.

## Features

- **Single-Page Layout** - Smooth scroll navigation with anchor links for seamless user experience
- **Dark Mode Toggle** - System-aware theme switching with localStorage persistence (no flash)
- **Mobile Responsive** - Adaptive layout with mobile navigation drawer and optimized touch interactions
- **Decap CMS Integration** - Git-based headless CMS for easy content editing without code changes
- **Dynamic Content** - Page title, section titles/subtitles, contact links, and all content loaded from CMS JSON files
- **Fully Editable Sections** - Every section's title and subtitle customizable via CMS admin panel
- **SEO Optimized** - Open Graph meta tags, semantic HTML, and optimized page structure
- **Component-Based Architecture** - Reusable UI components and section-based organization
- **Type-Safe** - Full TypeScript support with strict mode enabled
- **Professional Sections** - Hero, About, Skills, Experience, Projects, Certifications, Education, Contact

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Deno Fresh 1.7.3 | Modern web framework with server-side rendering and islands architecture |
| Preact 10.22.0 | Lightweight React alternative for interactive components |
| TypeScript | Type-safe development with strict compiler options |
| Decap CMS 3.x | Git-based headless CMS for content management |
| Signals | Reactive state management for theme toggle and mobile nav |
| Google Fonts | Inter (headings) and Open Sans (body) for professional typography |
| CSS Custom Properties | Theme system with dark/light mode support |

## Getting Started

### Prerequisites

- Deno 1.37+ installed ([installation guide](https://deno.land/manual/getting_started/installation))
- Git for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/amanjoshi632/amanjoshi632.github.io.git
cd amanjoshi632.github.io

# No npm install needed - Deno handles dependencies automatically
```

### Running Locally

```bash
# Terminal 1: Start Decap CMS local proxy (for content editing)
npx decap-server

# Terminal 2: Start Fresh development server
deno task start

# Site: http://localhost:8000
# CMS Admin: http://localhost:8000/admin/index.html
```

> **Note:** The Decap proxy server is only needed when editing content locally. For just viewing the site, only `deno task start` is required.

### Building for Production

```bash
# Build static assets
deno task build

# Preview production build
deno task preview
```

### Other Commands

```bash
# Format code
deno task fmt

# Run linter
deno task lint

# Fix linting issues
deno task lint:fix

# Type check all files
deno task check

# Update Fresh framework
deno task update
```

## Project Structure

```
amanjoshi632.github.io/
├── components/           # UI components
│   ├── sections/        # Page sections (Hero, About, Skills, etc.)
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   ├── ui/              # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── SectionWrapper.tsx
│   ├── Header.tsx       # Site header with navigation
│   └── Footer.tsx       # Site footer
├── islands/             # Interactive components (Preact islands)
│   ├── ThemeToggle.tsx  # Dark/light mode switcher
│   └── MobileNav.tsx    # Mobile navigation drawer
├── routes/              # Fresh routes
│   ├── _app.tsx         # App wrapper (HTML head, fonts, theme)
│   ├── index.tsx        # Homepage (renders all sections)
│   └── _404.tsx         # Custom 404 page
├── lib/                 # Utilities and configuration
│   ├── config.ts        # Non-CMS config (nav, theme, CTAs)
│   └── content.ts       # CMS content loader and types
├── content/             # CMS-managed JSON content
│   ├── site.json        # Name, title, description
│   ├── about.json       # About section content
│   ├── skills.json      # Skills categories
│   ├── experience.json  # Work history
│   ├── projects.json    # Projects
│   ├── certifications.json
│   ├── education.json
│   └── contact.json     # Email, phone, social links
├── static/              # Static assets (CSS, images, favicon)
│   └── admin/           # Decap CMS admin panel
│       ├── index.html   # CMS entry point
│       └── config.yml   # CMS schema and backend config
├── deno.json            # Deno configuration, tasks, and imports
├── fresh.config.ts      # Fresh framework configuration
├── fresh.gen.ts         # Auto-generated manifest (do not edit)
├── main.ts              # Production entry point
└── dev.ts               # Development server entry point
```

## Customization

### Editing Content via CMS

Most content is managed through Decap CMS at `/admin/index.html`:

- **Site Info** - Name, title, description, profile photo, resume
- **About** - Section title/subtitle, introduction, career goals, highlights
- **Skills** - Section title/subtitle, 4 skill categories with items
- **Experience** - Section title/subtitle, work history with achievements
- **Projects** - Section title/subtitle, project entries with highlights
- **Certifications** - Section title/subtitle, ongoing and completed certifications
- **Education** - Section title/subtitle, education history
- **Contact** - Section title/subtitle, email, phone, location, and unlimited social links

> **Note:** Every section has editable `sectionTitle` and `sectionSubtitle` fields, allowing complete customization of headings without code changes.

### Code-Only Configuration

Some layout elements are configured in `lib/config.ts`:

- Navigation links
- Hero CTA buttons
- Footer tagline and quick links
- Theme colors

### Theme Colors

Modify the `theme` object in `lib/config.ts`:

```typescript
theme: {
  primary: "#1F2933",    // Charcoal (headings, buttons)
  secondary: "#6B7280",  // Cool Grey (subtext)
  accent: "#0EA5A4",     // Teal (links, accents)
  background: "#FAFAFA", // Off-White (page background)
  surface: "#FFFFFF",    // White (card backgrounds)
}
```

### Adding New Sections

1. Create component in `components/sections/YourSection.tsx`
2. Import and add to `routes/index.tsx`
3. Update navigation in `lib/config.ts`

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| GITHUB_CLIENT_ID | Production | GitHub OAuth App client ID (for CMS) |
| GITHUB_CLIENT_SECRET | Production | GitHub OAuth App client secret (for CMS) |
| DENO_DEPLOYMENT_ID | No | Auto-set by Deno Deploy |
| PORT | No | Server port (defaults to 8000) |

## Deployment

### Deno Deploy (Recommended)

1. Push code to GitHub
2. Connect repository to [Deno Deploy](https://deno.com/deploy)
3. Set entry point to `main.ts`
4. Add environment variables in Deno Deploy dashboard
5. Deploy automatically on git push

### CMS Production Setup

1. Create GitHub OAuth App at GitHub → Settings → Developer Settings → OAuth Apps
2. Set callback URL to `https://your-domain.deno.dev/callback`
3. Add `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` to Deno Deploy
4. Set `local_backend: false` in `static/admin/config.yml`
5. Update `base_url` in config.yml to match your deployment URL

### Other Platforms

Compatible with any platform supporting Deno:
- Deno Deploy
- Cloudflare Workers (with Deno runtime)
- Self-hosted with Docker

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Server-side rendering with selective hydration (islands architecture)
- Optimized Google Fonts loading with preconnect
- No flash of unstyled content (FOUC) or theme flash
- Minimal JavaScript footprint (islands only where needed)

## Author

abhishek1337chatterjee <abhishek1337chatterjee@gmail.com>
