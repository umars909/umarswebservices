import React, { useEffect } from 'react';
import { PortfolioProject } from '../types';
import { X, ExternalLink, Github, CheckCircle2, Zap, ArrowRight, Layers, Award } from 'lucide-react';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onContactForSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContactForSimilar }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      id="project-case-study-modal"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-stone-200 bg-white shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-200 bg-white/95 px-6 py-4 backdrop-blur-xs">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-700">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-stone-400">•</span>
            <span className="text-xs font-medium text-stone-500">{project.year}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-900"
              aria-label="Close modal"
              id="close-project-modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              {project.title}
            </h2>
            <p className="mt-2 text-base text-stone-600 font-medium">
              {project.tagline}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-stone-900 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-stone-800 transition-colors"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-stone-300 bg-white px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>Source Architecture</span>
                </a>
              )}
              <span className="text-xs text-stone-500 ml-auto font-mono">
                Role: <strong className="text-stone-800 font-semibold">{project.role}</strong>
              </span>
            </div>
          </div>

          {/* Key Measurable Outcomes Grid */}
          <div className="rounded-xl border border-stone-200 bg-stone-50/80 p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-amber-600" />
              Verified Performance & Business Impact
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {project.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-extrabold text-stone-900">
                    {metric.value}
                  </span>
                  <span className="text-xs font-medium text-stone-500 mt-0.5">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-rose-100 bg-rose-50/40 p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
                The Engineering Challenge
              </span>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                The Architectural Solution
              </span>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deep Case Study Narrative */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-2">
              Implementation Overview
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Deliverables & Highlights */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-3">
              Technical Highlights & Deliverables
            </h3>
            <ul className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-stone-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Employed */}
          <div className="pt-4 border-t border-stone-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5" />
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-stone-200 bg-stone-100 px-2.5 py-1 text-xs font-mono font-medium text-stone-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-stone-500 font-mono">
              Architecture: {project.architectureDetails}
            </p>
          </div>

          {/* Bottom Action */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
            <span className="text-xs text-stone-500">
              Need a web solution built to this standard?
            </span>
            <button
              onClick={() => {
                onClose();
                onContactForSimilar(project.title);
              }}
              className="inline-flex items-center gap-1.5 rounded-lg bg-stone-900 px-4 py-2 text-xs font-semibold text-white hover:bg-stone-800 transition-colors"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
