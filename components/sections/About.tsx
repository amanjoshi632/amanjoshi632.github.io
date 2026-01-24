import { siteConfig } from "@/lib/config.ts";
import { SectionWrapper } from "@/components/ui/SectionWrapper.tsx";

/**
 * About section - Professional introduction
 * - Bio paragraph
 * - Career goal
 * - Key highlights
 * - CPA status badge
 */
export function About() {
  const { about } = siteConfig;

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Audit-focused accounting professional with strong foundation in bookkeeping, reconciliations and compliance."
    >
      <div class="grid grid-2 gap-8">
        {/* Left column - Introduction */}
        <div>
          <p class="text-lg mb-6">{about.intro}</p>
          <p class="text-secondary mb-6">{about.careerGoal}</p>

          {/* CPA Status Badge */}
          <div class="flex items-center gap-2">
            <span class="badge badge-success">{about.cpaStatus}</span>
          </div>
        </div>

        {/* Right column - Highlights */}
        <div>
          <h3 class="font-semibold text-lg mb-4 text-primary">Key Highlights</h3>
          <ul class="list-disc">
            {about.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
