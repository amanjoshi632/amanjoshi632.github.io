import { type PageProps } from "$fresh/server.ts";
import { siteConfig } from "@/lib/config.ts";

// Script to prevent flash of wrong theme (runs before page renders)
const themeScript = `
  (function() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  })();
`;

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{siteConfig.name} | {siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />

        {/* Theme script - runs before CSS to prevent flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />

        {/* Open Graph */}
        <meta property="og:title" content={`${siteConfig.name} | ${siteConfig.title}`} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.url} />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* Google Fonts - Inter for headings, Open Sans for body */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Styles */}
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
