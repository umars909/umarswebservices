import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioProject, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, ArrowRight, Github, Search, Eye, Sparkles, Filter } from 'lucide-react';

interface PortfolioGalleryProps {
  onContactForSimilar: (projectName: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onContactForSimilar }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack Apps' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'design-systems', label: 'Design Systems' },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-20 md:py-28 border-b border-stone-200/80">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
              <Sparkles className="h-3.5 w-3.5 text-stone-700" />
              <span>Selected Works & Engineering Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
              Clean, High-Performance Web Applications & Websites
            </h2>
            <p className="mt-3 text-stone-600 text-base leading-relaxed">
              Every project is engineered for sub-second load times, total mobile responsiveness, and measurable business growth. Inspect case studies, architecture patterns, and live demos below.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or keyword..."
              className="w-full rounded-xl border border-stone-300 bg-white py-2 pl-9 pr-4 text-xs text-stone-800 placeholder:text-stone-400 focus:border-stone-500 focus:outline-hidden focus:ring-1 focus:ring-stone-500"
              id="portfolio-search-input"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300 hover:text-stone-900'
              }`}
              id={`filter-btn-${cat.id}`}
            >
              {cat.label}
              {cat.id === 'all' ? ` (${PORTFOLIO_PROJECTS.length})` : ''}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-stone-300 p-12 text-center">
            <p className="text-sm font-medium text-stone-600">No projects found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs font-semibold text-stone-900 underline underline-offset-4"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-2xs transition-all hover:border-stone-400 hover:shadow-md"
                id={`project-card-${project.id}`}
              >
                <div>
                  {/* Card Visual Mockup / Browser Frame */}
                  <div className="relative mb-5 overflow-hidden rounded-xl border border-stone-200 bg-stone-100 p-4 transition-transform group-hover:scale-[1.01]">
                    {/* Fake browser topbar */}
                    <div className="flex items-center justify-between pb-3 border-b border-stone-200/80 mb-3 text-[10px] text-stone-400 font-mono">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-stone-300"></div>
                        <div className="h-2 w-2 rounded-full bg-stone-300"></div>
                        <div className="h-2 w-2 rounded-full bg-stone-300"></div>
                      </div>
                      <span className="truncate max-w-[140px]">{project.id}.dev</span>
                    </div>

                    {/* Mockup Preview Content */}
                    <div className="h-32 rounded-lg bg-stone-50 border border-stone-200/70 p-3 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-medium text-stone-500 uppercase">
                          {project.categoryLabel}
                        </span>
                        <span className="text-[10px] font-mono text-stone-400">
                          {project.year}
                        </span>
                      </div>

                      <div className="my-auto">
                        <h4 className="font-bold text-stone-800 text-sm tracking-tight truncate">
                          {project.title}
                        </h4>
                        <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Micro metric display */}
                      <div className="flex items-center gap-2 pt-2 border-t border-stone-200/50 text-[10px] text-stone-600 font-mono">
                        <span className="font-semibold text-stone-900">{project.metrics[0].value}</span>
                        <span>{project.metrics[0].label}</span>
                        <span className="text-stone-300">•</span>
                        <span className="font-semibold text-stone-900">{project.metrics[1].value}</span>
                        <span>{project.metrics[1].label}</span>
                      </div>
                    </div>
                  </div>

                  {/* Category & Title */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs font-mono text-stone-400">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-stone-900 group-hover:text-stone-950 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-stone-200 bg-stone-50 px-2 py-0.5 text-[11px] font-mono text-stone-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="rounded-md border border-stone-200 bg-stone-50 px-1.5 py-0.5 text-[10px] font-mono text-stone-400">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 hover:text-stone-700 transition-colors"
                    id={`btn-case-study-${project.id}`}
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-1.5 text-stone-400 hover:bg-stone-100 hover:text-stone-800 transition-colors"
                        title="View Architecture Code"
                      >
                        <Github className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-1.5 text-stone-400 hover:bg-stone-100 hover:text-stone-800 transition-colors"
                        title="Open Live Preview"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onContactForSimilar={onContactForSimilar}
      />
    </section>
  );
};
