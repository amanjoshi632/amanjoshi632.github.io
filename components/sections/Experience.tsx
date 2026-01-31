import { SectionWrapper } from "@/components/ui/SectionWrapper.tsx";
import type { ExperienceContent } from "@/lib/content.ts";

interface ExperienceProps {
  experience: ExperienceContent;
}

/**
 * Experience section - Timeline layout
 * - Vertical timeline with dots
 * - Current role highlighted
 * - Company, title, period, achievements
 */
export function Experience({ experience }: ExperienceProps) {
  return (
    <SectionWrapper
      id="experience"
      title={experience.sectionTitle}
      subtitle={experience.sectionSubtitle}
    >
      <div class="timeline">
        {experience.entries.map((role, index) => (
          <div key={index} class="timeline-item">
            <div class={`timeline-dot ${role.current ? "timeline-dot-current" : ""}`} />

            <div class="card">
              <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3 class="card-title">{role.title}</h3>
                  <p class="card-subtitle">
                    {role.company}
                    {role.type && <span class="text-muted"> · {role.type}</span>}
                  </p>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge">{role.period}</span>
                  {role.current && <span class="badge badge-accent">Current</span>}
                </div>
              </div>

              <p class="text-secondary mb-4">{role.description}</p>

              <ul class="list-disc">
                {role.achievements.map((achievement, achIndex) => (
                  <li key={achIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
