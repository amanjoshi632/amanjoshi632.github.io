import { HttpError, type PageProps } from "fresh";
import { loadContent } from "@/lib/content.ts";
import { Header } from "@/components/Header.tsx";
import { Button } from "@/components/ui/Button.tsx";

/**
 * Unified error page (Fresh 2 merges _404.tsx + _500.tsx into _error.tsx).
 * Renders the 404 design for not-found, a generic message otherwise.
 */
export default async function ErrorPage(props: PageProps) {
  const { site } = await loadContent();
  const error = props.error;
  const is404 = error instanceof HttpError && error.status === 404;

  const code = is404 ? "404" : "500";
  const heading = is404 ? "Page Not Found" : "Something Went Wrong";
  const message = is404
    ? "The page you're looking for doesn't exist or has been moved."
    : "An unexpected error occurred. Please try again later.";

  return (
    <>
      <Header name={site.name} />
      <main class="section" style="min-height: calc(100vh - var(--header-height) - 200px);">
        <div class="container text-center">
          <h1 class="text-5xl font-bold text-primary mb-2" style="opacity: 0.2;">{code}</h1>
          <h2 class="text-2xl font-semibold text-primary mb-4">{heading}</h2>
          <p class="text-lg text-muted mb-8 max-w-md mx-auto">
            {message}
          </p>
          <Button href="/" variant="primary">
            Go Back Home
          </Button>
        </div>
      </main>
    </>
  );
}
