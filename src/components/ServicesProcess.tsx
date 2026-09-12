import React from 'react';
import { 
  Laptop, 
  Code, 
  Layers, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Terminal, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface ServicesProcessProps {
  onDirectContact: () => void;
}

export const ServicesProcess: React.FC<ServicesProcessProps> = ({ onDirectContact }) => {
  const services = [
    {
      title: "Bespoke Website Creation",
      icon: Laptop,
      description: "Fast, custom websites designed to communicate your value proposition clearly, capture qualified leads, and score 95+ on Google Lighthouse.",
      deliverables: ["Custom responsive design", "Sub-second LCP paint", "Headless CMS or static build", "Automated SEO meta tags"]
    },
    {
      title: "Full-Stack Web Applications",
      icon: Code,
      description: "End-to-end web applications built with TypeScript, React, Node.js, and relational databases engineered for security, scale, and uptime.",
      deliverables: ["Role-based authentication", "REST & GraphQL APIs", "PostgreSQL schema design", "Real-time updates & webhooks"]
    },
    {
      title: "Design Systems & UI Engineering",
      icon: Layers,
      description: "Modular component libraries and accessible design tokens that streamline design-to-code velocity and maintain strict brand consistency.",
      deliverables: ["WCAG 2.1 AA compliant", "Reusable React primitives", "Design token hierarchy", "Zero-runtime Tailwind CSS"]
    },
    {
      title: "Performance & Code Audits",
      icon: Zap,
      description: "Diagnostic performance optimizations for existing web platforms struggling with sluggish load times, bundle bloat, or poor search ranking.",
      deliverables: ["Core Web Vitals remediation", "Codebase refactoring", "Bundle tree-shaking", "Image & asset compression"]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Architecture & Blueprint",
      description: "We define core user flows, technical stack requirements, database schemas, and performance budgets before writing any code."
    },
    {
      number: "02",
      title: "Iterative Rapid Build",
      description: "Weekly interactive staging deployments. You see live, testable progress with clean, well-commented TypeScript code."
    },
    {
      number: "03",
      title: "Audit & Accessibility Check",
      description: "Rigorous testing across mobile devices, screen readers, keyboard navigation, and network throttles to guarantee perfection."
    },
    {
      number: "04",
      title: "Edge Deploy & Handover",
      description: "Zero-downtime CDN deployment, domain setup, automated CI/CD pipeline, and complete intellectual property and source code handover."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-stone-200/80">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-stone-700" />
            <span>Core Capabilities & Development Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
            End-to-End Website & Application Engineering
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            From initial wireframes to production deployment, I handle every facet of modern web creation with obsessive attention to speed, aesthetics, and code quality.
          </p>
        </div>

        {/* Services 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-stone-200 bg-white p-7 shadow-2xs hover:border-stone-400 transition-all"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-100 text-stone-900 mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-stone-950 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-stone-100">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-stone-400 block mb-2">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Step Process Section */}
        <div className="rounded-2xl border border-stone-200 bg-stone-100/50 p-7 sm:p-10">
          <div className="max-w-xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              The Creation Pipeline
            </span>
            <h3 className="text-2xl font-bold text-stone-950 mt-1">
              How we take your website from idea to launch
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col justify-between">
                <div>
                  <span className="font-mono text-2xl font-extrabold text-stone-400">
                    {step.number}
                  </span>
                  <h4 className="font-bold text-stone-900 text-base mt-2 mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-stone-600">
              Have a tight deadline? Fast-track engagements are available.
            </span>
            <button
              onClick={onDirectContact}
              className="inline-flex items-center gap-1.5 rounded-lg bg-stone-900 px-4 py-2 text-xs font-semibold text-white hover:bg-stone-800 transition-colors"
            >
              <span>Schedule Project Kickoff</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
