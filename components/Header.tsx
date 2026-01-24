import { siteConfig } from "@/lib/config.ts";
import ThemeToggle from "@/islands/ThemeToggle.tsx";
import MobileNav from "@/islands/MobileNav.tsx";

interface HeaderProps {
  name: string;
}

/**
 * Sticky header with navigation
 * - Logo/name links to top of page
 * - Anchor links for smooth scroll navigation
 * - Theme toggle button
 * - Desktop nav visible on md+, hidden on mobile
 */
export function Header({ name }: HeaderProps) {
  return (
    <header class="header">
      <nav class="container flex items-center justify-between" style="height: var(--header-height);">
        {/* Logo / Name */}
        <a href="/" class="font-heading font-bold text-xl text-primary">
          {name}
        </a>

        {/* Desktop Navigation + Theme Toggle */}
        <div class="desktop-nav flex items-center gap-2">
          <ul class="flex gap-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} class="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation (Island with toggle functionality) */}
        <div class="mobile-nav">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
