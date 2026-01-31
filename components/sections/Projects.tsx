import { SectionWrapper } from "@/components/ui/SectionWrapper.tsx";
import type { ProjectsContent } from "@/lib/content.ts";

interface ProjectsProps {
  projects: ProjectsContent;
}

/**
 * Projects section - Academic and practical projects
 * - Single project: full-width card with 2-column internal layout
 * - Multiple projects: grid layout
 */
export function Projects({ projects }: ProjectsProps) {
  const isSingleProject = projects.entries.length === 1;

  return (
    <SectionWrapper
      id="projects"
      title={projects.sectionTitle}
      subtitle={projects.sectionSubtitle}
      alternateBackground
    >
      {/* Use full-width for single project, grid for multiple */}
      <div class={isSingleProject ? "max-w-3xl mx-auto" : "grid grid-2 gap-6"}>
        {projects.entries.map((project, index) => (
          <div key={index} class="card">
            {/* Header with title and badge */}
            <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
              <h3 class="card-title text-xl">{project.title}</h3>
              <span class="badge" style="white-space: nowrap;">{project.type}</span>
            </div>

            <p class="text-secondary mb-6">{project.description}</p>

            {/* Two-column layout for highlights and skills on larger screens */}
            <div class={isSingleProject ? "grid grid-2 gap-6" : ""}>
              <div>
                <h4 class="font-semibold text-sm mb-3 text-primary">Key Highlights</h4>
                <ul class="list-disc">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div class={isSingleProject ? "" : "mt-4"}>
                <h4 class="font-semibold text-sm mb-3 text-primary">Skills Applied</h4>
                <div class="flex flex-wrap gap-2">
                  {project.skills.map((skill, sIndex) => (
                    <span key={sIndex} class="badge badge-accent">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
