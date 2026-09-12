import React, { useState } from 'react';
import { TECH_STACK } from '../data/portfolioData';
import { TechCategory, TechItem } from '../types';
import { 
  Code2, 
  Layers, 
  Server, 
  Database, 
  Cloud, 
  CheckCircle2, 
  Gauge, 
  ShieldCheck, 
  Cpu,
  ArrowUpRight,
  Terminal
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory | 'all'>('all');

  const categories: { id: TechCategory | 'all'; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'all', label: 'All Technologies', icon: Layers },
    { id: 'frontend', label: 'Frontend & UI', icon: Code2 },
    { id: 'backend', label: 'Backend & APIs', icon: Server },
    { id: 'database', label: 'Databases & Cache', icon: Database },
    { id: 'devops', label: 'DevOps & Cloud', icon: Cloud },
    { id: 'testing', label: 'Performance & A11y', icon: Gauge },
  ];

  const filteredItems = TECH_STACK.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <section id="tech-stack" className="py-20 md:py-28 border-b border-stone-200/80 bg-stone-100/40">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
            <Code2 className="h-3.5 w-3.5 text-stone-700" />
            <span>Engineered for Reliability & Speed</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
            Primary Tech Stack & Architecture
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            I avoid hype-driven churn in favor of proven, battle-tested tools. Every layer is selected to guarantee lightning-fast load times, strict type safety, and painless long-term maintenance.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3.5 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300 hover:text-stone-900'
                }`}
                id={`tech-cat-btn-${cat.id}`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col justify-between rounded-xl border border-stone-200 bg-white p-5 shadow-2xs hover:border-stone-400 transition-all"
              id={`tech-item-${tech.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <div>
                {/* Card Top: Name and Level badge */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <h3 className="font-bold text-stone-900 text-base tracking-tight">
                    {tech.name}
                  </h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ${
                      tech.level === 'Core Mastery'
                        ? 'border border-emerald-500/30 bg-emerald-50 text-emerald-800'
                        : tech.level === 'Advanced'
                        ? 'border border-sky-500/30 bg-sky-50 text-sky-800'
                        : 'border border-stone-300 bg-stone-100 text-stone-700'
                    }`}
                  >
                    {tech.level}
                  </span>
                </div>

                {/* Highlight narrative */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {tech.highlight}
                </p>
              </div>

              {/* Use case tags & experience years */}
              <div className="pt-3 border-t border-stone-100">
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {tech.keyUseCases.map((uc) => (
                    <span
                      key={uc}
                      className="rounded bg-stone-100 px-2 py-0.5 text-[10px] font-mono text-stone-600"
                    >
                      {uc}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <span>Production Experience</span>
                  <span className="font-semibold text-stone-700">{tech.experienceYears}+ Years</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Architectural Principles Box */}
        <div className="mt-12 rounded-2xl border border-stone-300/80 bg-white p-6 sm:p-8 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-sm mb-2">
                <Gauge className="h-4 w-4 text-emerald-600" />
                <span>Sub-Second Performance</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Zero bloated tracking scripts, responsive AVIF/WebP graphics pipelines, and minimal bundle sizes ensure instantaneous rendering on mobile 4G networks.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-sm mb-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Strict Type Safety</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                End-to-end TypeScript contracts from database queries to UI components prevent silent runtime crashes and ensure seamless team refactoring.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-sm mb-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>WCAG AA Accessibility</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Semantic HTML5, ARIA compliance, full keyboard navigability, and high-contrast color systems open your site to all users and boost SEO rank.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
