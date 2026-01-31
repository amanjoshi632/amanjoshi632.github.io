import { SectionWrapper } from "@/components/ui/SectionWrapper.tsx";
import type { EducationContent } from "@/lib/content.ts";

interface EducationProps {
  education: EducationContent;
}

/**
 * Education section
 * - Degree cards with institution and year
 * - Optional highlights
 */
export function Education({ education }: EducationProps) {
  return (
    <SectionWrapper
      id="education"
      title={education.sectionTitle}
      subtitle={education.sectionSubtitle}
      alternateBackground
    >
      <div class="grid grid-2 gap-6">
        {education.entries.map((edu, index) => (
          <div key={index} class="card">
            <h3 class="card-title">{edu.degree}</h3>
            <p class="card-subtitle">{edu.institution}</p>
            <span class="badge mb-3">{edu.year}</span>

            {edu.highlights && edu.highlights.length > 0 && (
              <div class="flex flex-wrap gap-2 mt-3">
                {edu.highlights.map((highlight, hIndex) => (
                  <span key={hIndex} class="badge badge-accent">{highlight}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
