/**
 * Site configuration - Non-CMS managed settings
 * Theme, navigation, CTAs, and footer stay here
 * Content is loaded from /content/*.json files via lib/content.ts
 */

export const siteConfig = {
  // Theme colors (CSS uses these via custom properties)
  theme: {
    primary: "#1F2933", // Charcoal
    secondary: "#6B7280", // Cool Grey
    accent: "#0EA5A4", // Teal
    background: "#FAFAFA", // Off-White
    surface: "#FFFFFF", // White (cards)
  },

  // Navigation (anchor links for single-page scroll)
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  // Hero CTA buttons (layout concern, not content)
  heroCta: [
    { label: "View Resume", href: "#resume", variant: "primary" },
    { label: "View Projects", href: "#projects", variant: "outline" },
    { label: "Contact Me", href: "#contact", variant: "secondary" },
  ],

  // Footer configuration
  footer: {
    tagline: "Open to Big4 Audit & Assurance opportunities",
    quickLinks: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
