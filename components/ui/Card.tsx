import type { ComponentChildren } from "preact";

interface CardProps {
  children: ComponentChildren;
  className?: string;
}

/**
 * Reusable card component
 * - White background with subtle border
 * - Hover shadow effect
 */
export function Card({ children, className = "" }: CardProps) {
  return <div class={`card ${className}`}>{children}</div>;
}
