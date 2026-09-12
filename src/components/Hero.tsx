import React, { useState } from 'react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import { ArrowDown, CheckCircle2, Terminal, Sparkles, Send, ExternalLink, Zap } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onDirectContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onDirectContact }) => {
  const [activeSnippetTab, setActiveSnippetTab] = useState<'stack' | 'perf' | 'arch'>('stack');

  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-stone-200/80">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Main Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status indicator badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3.5 py-1 text-xs font-medium text-stone-700 shadow-2xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for new websites & web application projects</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-950 leading-[1.1] mb-6">
              Engineering <span className="underline decoration-stone-300 underline-offset-8">fast</span>, resilient websites & digital products.
            </h1>

            {/* Supporting Pitch */}
            <p className="text-lg sm:text-xl text-stone-600 font-normal leading-relaxed max-w-2xl mb-8">
              I partner with founders, creative studios, and ambitious teams to build high-performance web applications and bespoke client websites. Built with TypeScript, React, and lean backends that load in under 1 second.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={onDirectContact}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-stone-800 active:scale-98"
                id="hero-contact-button"
              >
                <Send className="h-4 w-4" />
                <span>Start a Project</span>
              </button>

              <button
                onClick={onExploreWork}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3.5 text-sm font-semibold text-stone-800 shadow-2xs transition-all hover:border-stone-400 hover:bg-stone-50 active:scale-98"
                id="hero-portfolio-button"
              >
                <span>View Portfolio Gallery</span>
                <ArrowDown className="h-4 w-4 text-stone-500" />
              </button>
            </div>

            {/* Key Quality Guarantees */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-stone-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Lighthouse 95+ Performance
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                100% Responsive & Accessible
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Clean, Maintainable Code
              </span>
            </div>

          </div>

          {/* Interactive Code & Architecture Showcase */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl border border-stone-800 bg-stone-950 text-stone-200 shadow-xl overflow-hidden font-mono text-xs">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-stone-800 bg-stone-900/90 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-amber-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-stone-400 text-[11px]">craft-engine.ts</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-stone-400">
                  <Zap className="h-3.5 w-3.5 text-amber-400" />
                  <span>Production Ready</span>
                </div>
              </div>

              {/* Code Tabs */}
              <div className="flex border-b border-stone-800 bg-stone-900/40 text-[11px]">
                <button
                  onClick={() => setActiveSnippetTab('stack')}
                  className={`px-3 py-2 border-r border-stone-800 transition-colors ${
                    activeSnippetTab === 'stack'
                      ? 'bg-stone-950 text-stone-100 font-semibold border-b-2 border-b-emerald-400'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  TechStack.ts
                </button>
                <button
                  onClick={() => setActiveSnippetTab('perf')}
                  className={`px-3 py-2 border-r border-stone-800 transition-colors ${
                    activeSnippetTab === 'perf'
                      ? 'bg-stone-950 text-stone-100 font-semibold border-b-2 border-b-emerald-400'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  WebVitals.config
                </button>
                <button
                  onClick={() => setActiveSnippetTab('arch')}
                  className={`px-3 py-2 transition-colors ${
                    activeSnippetTab === 'arch'
                      ? 'bg-stone-950 text-stone-100 font-semibold border-b-2 border-b-emerald-400'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  Deliverables.json
                </button>
              </div>

              {/* Terminal Code Body */}
              <div className="p-4 sm:p-5 text-stone-300 leading-relaxed overflow-x-auto min-h-[260px] flex flex-col justify-between">
                {activeSnippetTab === 'stack' && (
                  <div>
                    <div className="text-stone-500 mb-2">// Modern, bulletproof engineering standards</div>
                    <div>
                      <span className="text-purple-400">export const</span> <span className="text-sky-300">WebStandards</span>: <span className="text-emerald-300">EngineeringBlueprint</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-stone-400">language:</span> <span className="text-amber-200">"TypeScript 5.8 Strict"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-stone-400">clientFramework:</span> <span className="text-amber-200">"React 19 / Next.js"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-stone-400">stylingEngine:</span> <span className="text-amber-200">"Tailwind CSS v4"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-stone-400">backendServices:</span> <span className="text-amber-200">["Node.js", "PostgreSQL", "Redis"]</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-stone-400">accessibility:</span> <span className="text-emerald-300">"WCAG 2.1 AA Compliant"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-stone-400">deployment:</span> <span className="text-amber-200">"Zero-downtime Edge CDN"</span>
                    </div>
                    <div>&#125;;</div>
                  </div>
                )}

                {activeSnippetTab === 'perf' && (
                  <div>
                    <div className="text-stone-500 mb-2">// Strict performance budgets enforced on every build</div>
                    <div>
                      <span className="text-purple-400">const</span> <span className="text-sky-300">PerformanceTargets</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-stone-400">LCP_LargestContentfulPaint:</span> <span className="text-emerald-400">"&lt; 0.8s (Target: Green)"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-stone-400">FID_FirstInputDelay:</span> <span className="text-emerald-400">"&lt; 15ms"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-stone-400">CLS_CumulativeLayoutShift:</span> <span className="text-emerald-400">"0.00"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-stone-400">mobileLighthouseTarget:</span> <span className="text-amber-300">98</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-stone-400">bundleBudgetCSS:</span> <span className="text-emerald-400">"&lt; 25 kB gzipped"</span>
                    </div>
                    <div>&#125;;</div>
                  </div>
                )}

                {activeSnippetTab === 'arch' && (
                  <div>
                    <div className="text-stone-500 mb-2">// What you receive with every website engagement</div>
                    <div>&#123;</div>
                    <div className="pl-4">
                      <span className="text-sky-300">"services"</span>: [
                    </div>
                    <div className="pl-8 text-amber-200">"Custom Full-Stack Web Applications",</div>
                    <div className="pl-8 text-amber-200">"High-Conversion Client Marketing Websites",</div>
                    <div className="pl-8 text-amber-200">"E-Commerce & Stripe Checkout Systems",</div>
                    <div className="pl-8 text-amber-200">"Design Systems & Component Libraries"</div>
                    <div className="pl-4">],</div>
                    <div className="pl-4">
                      <span className="text-sky-300">"codebaseOwnership"</span>: <span className="text-emerald-400">"100% Transfer to Client"</span>
                    </div>
                    <div>&#125;</div>
                  </div>
                )}

                {/* Footer status within terminal */}
                <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-500">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-stone-400" />
                    <span>umar@devcraft:~$ git status --clean</span>
                  </div>
                  <span className="text-emerald-400 font-medium">✓ Ready to ship</span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Credibility Stats Bar */}
        <div className="mt-16 pt-10 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {DEVELOPER_PROFILE.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-stone-500 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
