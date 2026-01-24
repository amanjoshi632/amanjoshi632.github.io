import { siteConfig } from "@/lib/config.ts";
import { SectionWrapper } from "@/components/ui/SectionWrapper.tsx";

/**
 * Certifications section
 * - Ongoing certifications (CPA) with status badge
 * - Completed certifications with year
 */
export function Certifications() {
  const { certifications } = siteConfig;

  return (
    <SectionWrapper
      id="certifications"
      title="Professional Qualifications"
      subtitle="Industry certifications and professional development."
    >
      <div class="grid grid-2 gap-8">
        {/* Ongoing Certifications */}
        <div>
          <h3 class="font-semibold text-lg mb-4 text-primary">In Progress</h3>
          <div class="flex flex-col gap-4">
            {certifications.ongoing.map((cert, index) => (
              <div key={index} class="card">
                <div class="flex items-start justify-between gap-2">
                  <div>
                    <h4 class="font-semibold text-primary">{cert.name}</h4>
                    <p class="text-sm text-muted">{cert.issuer}</p>
                  </div>
                  <span class="badge badge-success">{cert.status}</span>
                </div>
                {cert.expected && (
                  <p class="text-sm text-secondary mt-2">
                    Expected: {cert.expected}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Completed Certifications */}
        <div>
          <h3 class="font-semibold text-lg mb-4 text-primary">Completed</h3>
          <div class="flex flex-col gap-3">
            {certifications.completed.map((cert, index) => (
              <div key={index} class="card p-4">
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="font-medium text-primary">{cert.name}</h4>
                    <p class="text-sm text-muted">{cert.issuer}</p>
                  </div>
                  <span class="badge">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
