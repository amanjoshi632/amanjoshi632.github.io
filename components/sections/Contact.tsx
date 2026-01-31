import { SectionWrapper } from "@/components/ui/SectionWrapper.tsx";
import type { ContactContent } from "@/lib/content.ts";

interface ContactProps {
  contact: ContactContent;
}

/**
 * Contact section - Display only (no form)
 * - Email, phone, location (fixed)
 * - Dynamic links (LinkedIn, GitHub, etc.)
 */
export function Contact({ contact }: ContactProps) {
  return (
    <SectionWrapper
      id="contact"
      title="Get in Touch"
      subtitle="Open to discussing audit and accounting opportunities."
    >
      <div class="max-w-2xl mx-auto">
        <div class="card p-6">
          <div class="grid grid-2 gap-6">
            {/* Email */}
            <div class="flex items-start gap-3">
              <div class="text-accent text-xl">✉</div>
              <div>
                <p class="font-medium text-primary">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  class="text-secondary hover:text-accent transition-colors"
                >
                  {contact.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            {contact.phone && (
              <div class="flex items-start gap-3">
                <div class="text-accent text-xl">☎</div>
                <div>
                  <p class="font-medium text-primary">Phone</p>
                  <a
                    href={`tel:${contact.phone}`}
                    class="text-secondary hover:text-accent transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
            )}

            {/* Dynamic Links */}
            {contact.links?.map((link) => (
              <div class="flex items-start gap-3" key={link.url}>
                <div class="text-accent text-xl">{link.icon || "🔗"}</div>
                <div>
                  <p class="font-medium text-primary">{link.title}</p>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-secondary hover:text-accent transition-colors"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}

            {/* Location */}
            {contact.location && (
              <div class="flex items-start gap-3">
                <div class="text-accent text-xl">📍</div>
                <div>
                  <p class="font-medium text-primary">Location</p>
                  <p class="text-secondary">{contact.location}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
