import { siteConfig } from "@/lib/config.ts";
import { Button } from "@/components/ui/Button.tsx";
import type { SiteContent } from "@/lib/content.ts";

interface HeroProps {
  site: SiteContent;
}

/**
 * Hero section - First thing visitors see
 * - Two-column layout: text left, photo right
 * - Name, title, subtitle, and CTA buttons
 * - Profile photo with professional styling
 */
export function Hero({ site }: HeroProps) {
  const { heroCta } = siteConfig;

  return (
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          {/* Text Content */}
          <div class="hero-text">
            <h1 class="hero-title">{site.name}</h1>
            <p class="hero-subtitle">{site.title}</p>
            <p class="hero-description">{site.description}</p>

            <div class="flex flex-wrap gap-3">
              {heroCta.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  variant={item.variant as "primary" | "secondary" | "outline"}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Profile Photo */}
          <div class="hero-photo">
            <img
              src="/profile.jpg"
              alt={`${site.name} - Professional headshot`}
              class="profile-image"
              width="280"
              height="350"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
