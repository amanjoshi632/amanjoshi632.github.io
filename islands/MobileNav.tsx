import { useState } from "preact/hooks";
import { siteConfig } from "@/lib/config.ts";
import ThemeToggle from "@/islands/ThemeToggle.tsx";

/**
 * Mobile Navigation Island
 * - Hamburger menu toggle
 * - Dropdown navigation menu
 * - Includes theme toggle
 */
export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile nav controls */}
      <div class="mobile-nav-controls">
        <ThemeToggle />
        <button
          class="mobile-nav-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            // X icon when open
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            // Hamburger icon when closed
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <nav class="mobile-nav-menu open">
          <ul>
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={handleLinkClick}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
