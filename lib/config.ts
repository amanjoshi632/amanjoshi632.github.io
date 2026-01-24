/**
 * Site configuration - Edit this file to customize your portfolio
 * All content is centralized here for easy maintenance
 */
export const siteConfig = {
  // Basic info
  name: "Aman Joshi",
  title: "Audit & Accounting Professional | US CPA Candidate",
  description:
    "Building a career in Audit & Assurance with hands-on experience in accounting, compliance and financial services.",
  url: "https://amanjoshi.deno.dev",

  // Theme colors (CSS uses these via custom properties)
  theme: {
    primary: "#1F2933",    // Charcoal
    secondary: "#6B7280",  // Cool Grey
    accent: "#0EA5A4",     // Teal
    background: "#FAFAFA", // Off-White
    surface: "#FFFFFF",    // White (cards)
  },

  // Navigation (anchor links for single-page scroll)
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  // Hero section
  hero: {
    subtitle:
      "Building a career in Audit & Assurance with hands-on experience in accounting, compliance and financial services.",
    cta: [
      { label: "View Resume", href: "#resume", variant: "primary" },
      { label: "View Projects", href: "#projects", variant: "outline" },
      { label: "Contact Me", href: "#contact", variant: "secondary" },
    ],
  },

  // About section
  about: {
    intro:
      "Audit-focused accounting professional with a strong foundation in bookkeeping, reconciliations, and compliance. Currently pursuing US CPA certification while building practical experience across accounting and financial services.",
    careerGoal:
      "Targeting Big4 Audit & Assurance roles with a focus on statutory and global audit engagements.",
    highlights: [
      "Strong foundation in Indian GAAP and financial reporting",
      "Hands-on experience with audit documentation and compliance",
      "Proficient in Tally ERP, Excel, and MS Office Suite",
      "Background in financial services and client advisory",
    ],
    cpaStatus: "US CPA Candidate – Expected April 2026",
  },

  // Skills section (4 categories)
  skills: {
    accounting: {
      title: "Accounting & Financial Reporting",
      items: [
        "Bookkeeping (Indian GAAP)",
        "Financial Statements",
        "Trial Balance & Finalisation",
        "Reconciliations",
      ],
    },
    audit: {
      title: "Audit & Assurance",
      items: [
        "Vouching & Verification",
        "Substantive Testing",
        "Audit Schedules",
        "Working Papers & Documentation",
      ],
    },
    tax: {
      title: "Tax & Compliance",
      items: [
        "GST Workings",
        "TDS Computation",
        "Income Tax Documentation",
        "Regulatory Compliance",
      ],
    },
    tools: {
      title: "Tools & Technology",
      items: [
        "Tally ERP",
        "Microsoft Excel (Pivot, VLOOKUP)",
        "MS Office Suite",
        "Financial Modeling",
      ],
    },
  },

  // Experience section (timeline)
  experience: [
    {
      title: "Independent Accounting & Audit Support Consultant",
      company: "Self-Employed",
      type: "Part-Time",
      period: "Dec 2024 – Present",
      current: true,
      description:
        "Providing accounting and audit support services to small businesses and CA firms.",
      achievements: [
        "Preparing audit schedules and working papers for statutory audits",
        "Handling GST and TDS compliance documentation",
        "Maintaining books of accounts using Tally ERP",
        "Assisting with financial statement preparation and reconciliations",
      ],
    },
    {
      title: "PCG Advisor (Executive)",
      company: "Motilal Oswal Financial Services",
      type: "Full-Time",
      period: "Mar 2024 – Nov 2024",
      current: false,
      description:
        "Client advisory role in the Private Client Group, handling HNI client portfolios.",
      achievements: [
        "Managed client relationships and portfolio advisory services",
        "Ensured compliance with SEBI regulations and internal policies",
        "Prepared client reports and settlement documentation",
        "Gained exposure to capital markets and financial instruments",
      ],
    },
    {
      title: "Freelance Accounting & Business Support",
      company: "Various Clients",
      type: "Part-Time",
      period: "Nov 2021 – Oct 2023",
      current: false,
      description:
        "Provided bookkeeping and business support services to small businesses.",
      achievements: [
        "Managed day-to-day bookkeeping using Tally ERP",
        "Prepared MIS reports and bank reconciliations",
        "Handled billing, invoicing, and payment follow-ups",
        "Coordinated with clients for document collection and compliance",
      ],
    },
  ],

  // Projects section
  projects: [
    {
      title: "Corporate Social Responsibility Analysis – Reliance Industries Ltd",
      type: "Academic Project",
      description:
        "Comprehensive analysis of CSR spending patterns and compliance for Reliance Industries Limited.",
      highlights: [
        "Analyzed 5 years of CSR expenditure data from annual reports",
        "Evaluated compliance with Section 135 of Companies Act, 2013",
        "Performed ratio analysis and trend identification",
        "Identified key focus areas and spending patterns",
      ],
      skills: ["Financial Analysis", "Ratio Analysis", "Compliance Review", "Research"],
    },
  ],

  // Certifications section
  certifications: {
    ongoing: [
      {
        name: "US CPA (Certified Public Accountant)",
        issuer: "AICPA",
        status: "In Progress",
        expected: "April 2026",
      },
    ],
    completed: [
      {
        name: "Investment Foundations Certificate",
        issuer: "CFA Institute",
        year: "2023",
      },
      {
        name: "NISM Series VIII – Equity Derivatives",
        issuer: "NISM",
        year: "2024",
      },
      {
        name: "Advanced Excel for Finance",
        issuer: "Corporate Finance Institute",
        year: "2023",
      },
    ],
  },

  // Education section
  education: [
    {
      degree: "Master of Commerce (M.Com)",
      institution: "IGNOU",
      year: "2024",
      highlights: ["Distance Learning", "Finance Specialization"],
    },
    {
      degree: "Bachelor of Commerce (Honours)",
      institution: "University of Calcutta",
      year: "2021",
      highlights: ["Accounting & Finance Major"],
    },
  ],

  // Contact section
  contact: {
    email: "amanjoshi@example.com",
    phone: "+91 98765 43210",
    linkedin: "https://linkedin.com/in/amanjoshi",
    location: "Kolkata, India",
  },

  // Footer
  footer: {
    tagline: "Open to Big4 Audit & Assurance opportunities",
    quickLinks: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
