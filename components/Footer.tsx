import { siteConfig } from "@/lib/config.ts";

/**
 * Footer component
 * - Name and tagline
 * - Quick links
 * - Copyright
 */
export function Footer() {
  const { name, contact, footer } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer class="footer">
      <div class="container">
        <div class="grid grid-3 gap-8">
          {/* Brand */}
          <div>
            <h3 class="font-heading font-bold text-xl text-white mb-2">{name}</h3>
            {footer.tagline && (
              <p class="text-sm" style="color: rgba(255,255,255,0.7);">
                {footer.tagline}
              </p>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 class="font-semibold text-white mb-3">Quick Links</h4>
            <ul class="flex flex-col gap-2">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 class="font-semibold text-white mb-3">Connect</h4>
            <ul class="flex flex-col gap-2">
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div class="footer-bottom text-center">
          <p>&copy; {currentYear} {name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
