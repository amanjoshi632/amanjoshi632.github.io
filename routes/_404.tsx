import { Header } from "@/components/Header.tsx";
import { Button } from "@/components/ui/Button.tsx";

export default function NotFound() {
  return (
    <>
      <Header />
      <main class="section" style="min-height: calc(100vh - var(--header-height) - 200px);">
        <div class="container text-center">
          <h1 class="text-5xl font-bold text-primary mb-2" style="opacity: 0.2;">404</h1>
          <h2 class="text-2xl font-semibold text-primary mb-4">Page Not Found</h2>
          <p class="text-lg text-muted mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button href="/" variant="primary">
            Go Back Home
          </Button>
        </div>
      </main>
    </>
  );
}
