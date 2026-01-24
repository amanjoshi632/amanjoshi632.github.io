import type { ComponentChildren } from "preact";

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ComponentChildren;
  className?: string;
  alternateBackground?: boolean;
}

/**
 * Consistent wrapper for page sections
 * - Adds section ID for anchor navigation
 * - Consistent padding and container width
 * - Optional title and subtitle header
 */
export function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = "",
  alternateBackground = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      class={`section ${alternateBackground ? "section-alt" : ""} ${className}`}
    >
      <div class="container">
        {(title || subtitle) && (
          <div class="section-header">
            {title && <h2 class="section-title">{title}</h2>}
            {subtitle && <p class="section-subtitle">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
