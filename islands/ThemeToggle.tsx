import { useEffect, useState } from "preact/hooks";

/**
 * Theme Toggle Island
 * - Respects system preference by default
 * - Allows manual override
 * - Persists preference in localStorage
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [mounted, setMounted] = useState(false);

  // On mount, read saved preference
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        globalThis.matchMedia("(prefers-color-scheme: dark)").matches);

    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Determine current visual theme for icon display
  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      typeof globalThis !== "undefined" &&
      globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <button class="theme-toggle" aria-label="Toggle theme">
        <span style="width: 20px; height: 20px;" />
      </button>
    );
  }

  return (
    <button
      class="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        // Sun icon for dark mode (click to go light)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Moon icon for light mode (click to go dark)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
