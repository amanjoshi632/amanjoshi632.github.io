import type { ComponentChildren } from "preact";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  children: ComponentChildren;
  className?: string;
  external?: boolean;
}

/**
 * Reusable button component
 * - Renders as <a> if href is provided, otherwise <button>
 * - Three variants: primary (navy), secondary (blue), outline
 */
export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const variantClass = `btn-${variant}`;
  const classes = `btn ${variantClass} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        class={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" class={classes}>
      {children}
    </button>
  );
}
