import { PortfolioProject, TechItem, Testimonial, ResumeData } from '../types';

export const DEVELOPER_PROFILE = {
  name: "Umar Sahran",
  title: "Senior Full-Stack Web Developer & UI Architect",
  tagline: "Engineering resilient web applications, intuitive digital products, and high-conversion client websites.",
  shortBio: "I specialize in modern TypeScript, React, Next.js, and scalable Node.js architectures. With 7+ years of experience transforming ambitious product concepts into performant, accessible web realities, I build sites that load in under a second and convert effortlessly.",
  status: "Available for select freelance & contract projects",
  location: "San Francisco, CA (Remote Worldwide)",
  email: "usahran3@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  stats: [
    { label: "Production Websites & Apps", value: "48+" },
    { label: "Years Engineering Experience", value: "7+" },
    { label: "Avg. Lighthouse Score", value: "99" },
    { label: "Client Satisfaction Rate", value: "100%" }
  ]
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "apex-analytics",
    title: "Apex SaaS Intelligence Platform",
    tagline: "Real-time telemetry and revenue forecasting dashboard for B2B SaaS teams",
    category: "fullstack",
    categoryLabel: "Full-Stack Web App",
    description: "Architected a real-time data engine aggregating multi-channel subscription metrics, cohort retention, and MRR forecasts for modern software startups.",
    longDescription: "Apex requested a comprehensive overhaul of their customer analytics portal. The legacy application struggled with 200k+ data point visualizations, causing render freezes. We redesigned the data pipeline with WebSocket streaming, sub-second aggregation queries, and an ultra-lean client rendering tree with virtualized charts.",
    challenge: "Render tens of thousands of real-time telemetry nodes without dropping frame rates below 60fps on consumer devices.",
    solution: "Implemented Web Workers for off-main-thread matrix computations and rendered vector-accelerated canvas plots backed by edge cache layers.",
    featured: true,
    year: "2025",
    liveUrl: "https://example.com/apex-analytics",
    githubUrl: "https://github.com/example/apex-analytics-platform",
    techStack: ["React 19", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "WebSockets"],
    metrics: [
      { label: "Load Time", value: "0.62s" },
      { label: "Query Speedup", value: "4.8x" },
      { label: "Monthly Actives", value: "24k" }
    ],
    highlights: [
      "Sub-second data pipeline processing 15M records daily",
      "Instant multi-tenant role-based workspace permissions",
      "Accessible WCAG AA keyboard-driven analytical filters"
    ],
    role: "Lead Full-Stack Architect",
    architectureDetails: "React frontend with Vite bundling, micro-services backed by Node.js and Redis pub/sub queue, backed by relational PostgreSQL partitions.",
    mockupAccent: "border-emerald-500/30 bg-emerald-500/5 text-emerald-600"
  },
  {
    id: "nordic-atelier",
    title: "Nordic Artisans E-Commerce Flagship",
    tagline: "Headless luxury storefront with customized checkout and 3D product previews",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    description: "Designed and engineered a minimalist, headless Scandinavian design furniture store engineered for rapid global checkout and seamless mobile conversion.",
    longDescription: "Nordic Artisans wanted an e-commerce presence that mirrored their physical gallery in Copenhagen: serene, tactile, and frictionless. We replaced a slow monolithic template with a headless React architecture paired with Stripe Elements and localized currency detection.",
    challenge: "Deliver high-resolution editorial imagery and fluid interactive customizer without compromising mobile page speed.",
    solution: "Used responsive picture element pipelines, WebP/AVIF dynamic transcoding, and predictive prefetching for instant page navigation.",
    featured: true,
    year: "2024",
    liveUrl: "https://example.com/nordic-artisans",
    githubUrl: "https://github.com/example/nordic-artisans-storefront",
    techStack: ["Next.js", "TypeScript", "Stripe API", "Tailwind CSS", "GraphQL", "Zustand"],
    metrics: [
      { label: "Conversion Lift", value: "+34%" },
      { label: "Mobile Bounce Rate", value: "-22%" },
      { label: "Lighthouse Performance", value: "100" }
    ],
    highlights: [
      "Sub-second page transitions using modern client navigation",
      "Zero-layout-shift image optimization engine",
      "Unified multi-currency checkout via Stripe Elements"
    ],
    role: "Full-Stack Web Engineer",
    architectureDetails: "Headless storefront deployed to edge CDN, integrated with GraphQL micro-catalog and automated inventory webhooks.",
    mockupAccent: "border-amber-500/30 bg-amber-500/5 text-amber-700"
  },
  {
    id: "luminary-studio",
    title: "Luminary Architectural Studio",
    tagline: "High-contrast editorial portfolio with smooth fluid gallery transitions",
    category: "frontend",
    categoryLabel: "Frontend & UI",
    description: "Bespoke digital monograph for an award-winning architectural firm, showcasing residential and civic blueprints with gallery filtering and project inquiries.",
    longDescription: "A portfolio where the architectural craftsmanship speaks first. We built a tactile, minimalist visual system inspired by architectural monographs, featuring custom aspect-ratio grids, smooth layout reflows, and zero bloat.",
    challenge: "Balancing huge full-bleed imagery with fast mobile rendering on 4G connections.",
    solution: "Created an adaptive progressive disclosure gallery that streams assets based on viewport intersection and network capability.",
    featured: true,
    year: "2024",
    liveUrl: "https://example.com/luminary-studio",
    githubUrl: "https://github.com/example/luminary-architecture",
    techStack: ["React", "TypeScript", "Vite", "Motion", "Tailwind CSS"],
    metrics: [
      { label: "LCP", value: "0.58s" },
      { label: "New Client Inquiries", value: "+58%" },
      { label: "Average Session", value: "4m 12s" }
    ],
    highlights: [
      "Custom cursor interactions and fluid layout animations",
      "Interactive architectural blueprint inspector",
      "Dynamic project filtering with instant search"
    ],
    role: "Frontend Developer & UI Designer",
    architectureDetails: "Static site generation with client-side reactive filters and GPU-accelerated motion layers.",
    mockupAccent: "border-stone-500/30 bg-stone-500/5 text-stone-700"
  },
  {
    id: "pulse-health",
    title: "Pulse Clinical Workflow Portal",
    tagline: "HIPAA-conscious patient intake and clinician appointment scheduling system",
    category: "fullstack",
    categoryLabel: "Full-Stack Web App",
    description: "Engineered an accessible, secure patient scheduling and intake application reducing clinic intake wait times by 65%.",
    longDescription: "Pulse Health required a zero-friction portal allowing patients to securely complete medical history questionnaires and schedule appointments, while providing nurses with an auto-updating triage board.",
    challenge: "Strict accessibility standards (Section 508 / WCAG AAA) and ironclad input validation for medical forms.",
    solution: "Built a fully keyboard-navigable form wizard with auto-save drafts, instant error recovery, and encrypted REST API endpoints.",
    featured: false,
    year: "2024",
    liveUrl: "https://example.com/pulse-health",
    githubUrl: "https://github.com/example/pulse-health-portal",
    techStack: ["React", "TypeScript", "Express", "PostgreSQL", "Tailwind CSS", "Zod"],
    metrics: [
      { label: "Intake Time Saved", value: "18 mins" },
      { label: "WCAG Compliance", value: "AAA" },
      { label: "System Uptime", value: "99.98%" }
    ],
    highlights: [
      "Step-by-step form engine with schema-validated state",
      "Real-time clinician schedule sync with conflict prevention",
      "Full screen-reader optimization across all interactive elements"
    ],
    role: "Senior Full-Stack Engineer",
    architectureDetails: "Secure Express REST server with schema validation via Zod, JWT session security, and atomic PostgreSQL transactions.",
    mockupAccent: "border-sky-500/30 bg-sky-500/5 text-sky-700"
  },
  {
    id: "veloce-design-system",
    title: "Veloce Modular Design System",
    tagline: "Comprehensive component library, token engine, and documentation site",
    category: "design-systems",
    categoryLabel: "Design System",
    description: "Created an enterprise-grade accessible component library deployed across 12 internal client web applications.",
    longDescription: "A unified collection of 45+ accessible primitives, theme tokens, and layout guidelines engineered to accelerate development velocity from weeks to days while ensuring total brand consistency.",
    challenge: "Ensure complete token flexibility across light, dark, and high-contrast accessibility modes without CSS bundle inflation.",
    solution: "Architected a zero-runtime CSS variables engine with strict TypeScript prop contracts and automated visual regression testing.",
    featured: false,
    year: "2025",
    liveUrl: "https://example.com/veloce-design-system",
    githubUrl: "https://github.com/example/veloce-design-system",
    techStack: ["TypeScript", "React", "Storybook", "Tailwind CSS", "Radix Primitives"],
    metrics: [
      { label: "Engineering Velocity", value: "+40%" },
      { label: "Bundle Overhead", value: "< 14kB" },
      { label: "Accessibility", value: "100%" }
    ],
    highlights: [
      "45+ accessible, keyboard-operable UI components",
      "Automated automated WCAG compliance tests in CI pipeline",
      "Interactive component playground with live code generation"
    ],
    role: "Design System Engineer",
    architectureDetails: "Tree-shakeable npm package with ESM exports, semantic design tokens, and live interactive sandbox.",
    mockupAccent: "border-indigo-500/30 bg-indigo-500/5 text-indigo-700"
  },
  {
    id: "chronicle-journal",
    title: "Chronicle Independent Journal",
    tagline: "Ultra-fast editorial publishing platform with dynamic typography scaling",
    category: "frontend",
    categoryLabel: "Frontend & UI",
    description: "High-readability digital long-form magazine engineered with responsive typographic scales, dark mode reading ergonomics, and zero ad-clutter.",
    longDescription: "Built for focused reading of investigative journalism. Optimized for instant initial paint, reader font preference storage, and lightweight bookmarking without tracking scripts.",
    challenge: "Deliver book-quality typographical polish across varying device viewports and screen densities.",
    solution: "Used fluid clamp typography formulas, optical font kernings, and minimal DOM footprint for instantaneous layout calculations.",
    featured: false,
    year: "2024",
    liveUrl: "https://example.com/chronicle-journal",
    githubUrl: "https://github.com/example/chronicle-publishing",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    metrics: [
      { label: "FCP", value: "0.38s" },
      { label: "Reader Retention", value: "+47%" },
      { label: "Total Page Weight", value: "48 kB" }
    ],
    highlights: [
      "Zero render-blocking scripts for instantaneous content paint",
      "Adaptive reading modes (Clean White, Warm Sepia, Midnight Slate)",
      "Estimated reading time calculator and progress scroll tracker"
    ],
    role: "Frontend Engineer",
    architectureDetails: "Static edge delivery with client-side reading preferences stored in local storage.",
    mockupAccent: "border-stone-500/30 bg-stone-500/5 text-stone-700"
  }
];

export const TECH_STACK: TechItem[] = [
  // Frontend
  {
    name: "React 19 & Next.js",
    category: "frontend",
    level: "Core Mastery",
    experienceYears: 6,
    highlight: "Server components, hooks, concurrent rendering, and clean UI state orchestration.",
    iconName: "Atom",
    keyUseCases: ["Single-Page Applications", "SSR/SSG Web Apps", "Interactive Dashboards"]
  },
  {
    name: "TypeScript",
    category: "frontend",
    level: "Core Mastery",
    experienceYears: 6,
    highlight: "Strict type safety, generic utilities, zero runtime bugs, and rock-solid refactoring.",
    iconName: "FileCode2",
    keyUseCases: ["Enterprise Scale Codebases", "Type-safe APIs", "Component Design Systems"]
  },
  {
    name: "Tailwind CSS & Styling",
    category: "frontend",
    level: "Core Mastery",
    experienceYears: 5,
    highlight: "Clean utility-first CSS, custom design tokens, responsive breakpoints, fluid typography.",
    iconName: "Palette",
    keyUseCases: ["Modern Responsive Layouts", "Dark/Light Theming", "Micro-Interactions"]
  },
  {
    name: "Vite & Modern Bundlers",
    category: "frontend",
    level: "Advanced",
    experienceYears: 4,
    highlight: "Lightning-fast build pipelines, tree-shaking, code-splitting, asset optimization.",
    iconName: "Zap",
    keyUseCases: ["Production Optimization", "Hot Reload Workflows", "Module Bundling"]
  },

  // Backend
  {
    name: "Node.js & Express",
    category: "backend",
    level: "Core Mastery",
    experienceYears: 6,
    highlight: "Robust RESTful APIs, middleware architecture, streaming endpoints, authentication.",
    iconName: "Server",
    keyUseCases: ["Microservices", "RESTful API Gateways", "Webhook Processing"]
  },
  {
    name: "REST & GraphQL APIs",
    category: "backend",
    level: "Advanced",
    experienceYears: 5,
    highlight: "Predictable API contracts, OpenAPI specs, efficient schema querying, pagination.",
    iconName: "Network",
    keyUseCases: ["Third-party Integrations", "Client-Server Sync", "Granular Data Fetching"]
  },
  {
    name: "Authentication & Security",
    category: "backend",
    level: "Advanced",
    experienceYears: 5,
    highlight: "OAuth 2.0 flows, JWT validation, CSRF/CORS mitigation, secure session handling.",
    iconName: "ShieldCheck",
    keyUseCases: ["Role-Based Access Control", "Social Sign-in", "Protected API Routes"]
  },

  // Database
  {
    name: "PostgreSQL & Relational DBs",
    category: "database",
    level: "Advanced",
    experienceYears: 5,
    highlight: "Index optimization, schema migrations, complex joins, transactions, JSONB querying.",
    iconName: "Database",
    keyUseCases: ["Structured Business Data", "Financial Transactions", "User Accounts"]
  },
  {
    name: "Redis & In-Memory Cache",
    category: "database",
    level: "Proficient",
    experienceYears: 4,
    highlight: "Rate limiting, session stores, fast in-memory caching, pub/sub communication.",
    iconName: "Cpu",
    keyUseCases: ["Latency Reduction", "Rate Limiting", "Live Notifications"]
  },

  // DevOps & Cloud
  {
    name: "Docker & Containerization",
    category: "devops",
    level: "Advanced",
    experienceYears: 4,
    highlight: "Multi-stage builds, lean Docker images, environment parity, CI deployment.",
    iconName: "Box",
    keyUseCases: ["Reproducible Deployments", "Containerized Workflows", "Microservices"]
  },
  {
    name: "Cloud Deployment & Edge CDN",
    category: "devops",
    level: "Advanced",
    experienceYears: 5,
    highlight: "Cloud Run, Vercel, AWS, edge caching, HTTPS configuration, automated DNS.",
    iconName: "Cloud",
    keyUseCases: ["Global CDN Edge Delivery", "Auto-scaling Web Apps", "Domain Routing"]
  },
  {
    name: "CI/CD & Git Workflows",
    category: "devops",
    level: "Core Mastery",
    experienceYears: 7,
    highlight: "Automated test suites, branch protection, pull request automation, zero-downtime releases.",
    iconName: "GitBranch",
    keyUseCases: ["Automated Testing", "Staging Environments", "Production Releases"]
  },

  // Testing & Quality
  {
    name: "Web Performance & Core Web Vitals",
    category: "testing",
    level: "Core Mastery",
    experienceYears: 6,
    highlight: "LCP, FID/INP, and CLS optimization, asset compression, lazy loading, memory profiling.",
    iconName: "Gauge",
    keyUseCases: ["SEO Maximization", "Sub-second Page Speeds", "Mobile Fluidity"]
  },
  {
    name: "Accessibility (WCAG 2.1 AA)",
    category: "testing",
    level: "Core Mastery",
    experienceYears: 5,
    highlight: "Keyboard navigation, ARIA semantics, color contrast audits, screen-reader testing.",
    iconName: "CheckCircle2",
    keyUseCases: ["Inclusive Design", "Legal Compliance", "Accessible Forms"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Umar transformed our complex analytics dashboard from a sluggish interface into an instant, sub-second experience our enterprise customers rave about. Truly a rare breed of engineer who understands both deep systems architecture and crisp visual polish.",
    clientName: "Marcus Vance",
    clientRole: "VP of Product",
    company: "Apex Telemetry Inc.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    projectDelivered: "Apex SaaS Platform Overhaul",
    rating: 5,
    verified: true,
    outcomeMetric: "4.8x query speedup & +40% retention"
  },
  {
    id: "t2",
    quote: "Working with Umar was the smoothest engineering engagement in our company's history. He delivered our e-commerce site two weeks ahead of schedule, with perfect 100/100 Lighthouse scores. Our mobile checkout conversion shot up by 34% within the first month.",
    clientName: "Astrid Lindholm",
    clientRole: "Founder & Creative Director",
    company: "Nordic Artisans Atelier",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    projectDelivered: "Headless E-Commerce Flagship",
    rating: 5,
    verified: true,
    outcomeMetric: "+34% mobile checkout conversion"
  },
  {
    id: "t3",
    quote: "Not only is Umar technically exceptional in React and TypeScript, but he also proactively solved edge cases in our patient intake flows before we even noticed them. He takes full ownership of the product outcome.",
    clientName: "Dr. Elena Rostova",
    clientRole: "Chief Medical Officer",
    company: "Pulse Health Systems",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    projectDelivered: "HIPAA Clinical Workflow Portal",
    rating: 5,
    verified: true,
    outcomeMetric: "65% reduction in intake wait times"
  },
  {
    id: "t4",
    quote: "Umar built our architectural studio's digital portfolio. He respected our exacting visual standards while ensuring lightning-fast load times on mobile. We booked three seven-figure projects directly through the new inquiry system.",
    clientName: "Julian Croft",
    clientRole: "Principal Architect",
    company: "Luminary Studio Architecture",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    projectDelivered: "Monograph Web Portfolio",
    rating: 5,
    verified: true,
    outcomeMetric: "+58% qualified client leads"
  }
];

export const RESUME_DATA: ResumeData = {
  name: "Umar Sahran",
  title: "Senior Full-Stack Web Developer & UI Architect",
  contactEmail: "usahran3@gmail.com",
  location: "San Francisco, CA (Available Remote / Hybrid)",
  summary: "Senior Web Developer with 7+ years of expertise building high-performance web applications, scalable REST APIs, and bespoke client websites. Proven track record delivering 45+ production web apps with 99+ Lighthouse performance scores, accessible design system implementations, and measurable business growth.",
  experiences: [
    {
      role: "Lead Full-Stack Web Engineer",
      company: "Independent Consultancy & Studio",
      period: "2022 - Present",
      location: "San Francisco, CA (Remote)",
      accomplishments: [
        "Architected and deployed 20+ bespoke client websites and web applications across SaaS, luxury e-commerce, and healthcare sectors.",
        "Consistently attained 95+ Core Web Vitals and sub-second Largest Contentful Paint (LCP) across all delivered projects.",
        "Integrated custom Stripe payment gateways, multi-tenant databases, and headless CMS integrations generating $3M+ in combined client revenue.",
        "Established automated CI/CD pipelines, Dockerized deployments, and zero-downtime edge releases."
      ]
    },
    {
      role: "Senior Frontend Engineer",
      company: "Veloce Technologies",
      period: "2020 - 2022",
      location: "San Francisco, CA",
      accomplishments: [
        "Led a team of 4 frontend engineers building the company's core React/TypeScript design system used across 12 product modules.",
        "Reduced frontend bundle size by 42% through code-splitting, tree-shaking, and optimizing SVG rendering pipelines.",
        "Spearheaded company-wide accessibility initiative bringing all customer-facing views into full WCAG 2.1 AA compliance."
      ]
    },
    {
      role: "Full-Stack Web Developer",
      company: "Metropolis Digital Agency",
      period: "2018 - 2020",
      location: "Austin, TX",
      accomplishments: [
        "Developed responsive websites, marketing engines, and interactive web tools for Fortune 500 brands and high-growth startups.",
        "Built custom Node.js/Express backends, PostgreSQL schemas, and webhook synchronizations.",
        "Collaborated directly with client product managers and designers to translate Figma designs into pixel-perfect code."
      ]
    }
  ],
  education: [
    {
      degree: "B.S. in Computer Science",
      institution: "University of California, Berkeley",
      year: "2018",
      honors: "Magna Cum Laude • Specialization in Software Systems & Human-Computer Interaction"
    }
  ],
  coreCompetencies: [
    "TypeScript & JavaScript (ESNext)",
    "React 19, Next.js, Vite",
    "Node.js, Express, REST & GraphQL APIs",
    "PostgreSQL, Redis, Relational Schemas",
    "Tailwind CSS, Responsive Design, CSS Architecture",
    "Core Web Vitals & Performance Optimization",
    "WCAG 2.1 AA/AAA Accessibility",
    "Docker, Cloud Run, CI/CD, Git"
  ],
  certifications: [
    "AWS Certified Solutions Architect",
    "Meta Certified Frontend Developer",
    "W3C Web Accessibility Specialist"
  ]
};
