import { siteConfig } from "@/lib/config.ts";
import { SectionWrapper } from "@/components/ui/SectionWrapper.tsx";

/**
 * Contact section - Display only (no form)
 * - Email, phone, LinkedIn
 * - Location
 */
export function Contact() {
  const { contact } = siteConfig;

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

            {/* LinkedIn */}
            <div class="flex items-start gap-3">
              <div class="text-accent text-xl">in</div>
              <div>
                <p class="font-medium text-primary">LinkedIn</p>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-secondary hover:text-accent transition-colors"
                >
                  View Profile
                </a>
              </div>
            </div>

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
