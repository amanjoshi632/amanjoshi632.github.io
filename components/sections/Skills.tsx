import { SectionWrapper } from "@/components/ui/SectionWrapper.tsx";
import type { SkillsContent } from "@/lib/content.ts";

interface SkillsProps {
  skills: SkillsContent;
}

/**
 * Skills section - 4 category grid
 * - Accounting & Financial Reporting
 * - Audit & Assurance
 * - Tax & Compliance
 * - Tools & Technology
 */
export function Skills({ skills }: SkillsProps) {
  // Convert skills object to array for iteration (excluding section metadata)
  const skillCategories = Object.entries(skills)
    .filter(([key]) => !["sectionTitle", "sectionSubtitle"].includes(key))
    .map(([key, category]) => ({
      key,
      ...(category as { title: string; items: string[] }),
    }));

  return (
    <SectionWrapper
      id="skills"
      title={skills.sectionTitle}
      subtitle={skills.sectionSubtitle}
      alternateBackground
    >
      <div class="grid grid-4 gap-6">
        {skillCategories.map((category) => (
          <div key={category.key} class="skill-category">
            <h3 class="skill-category-title">{category.title}</h3>
            <ul class="skill-list">
              {category.items.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
