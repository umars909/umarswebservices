import React from 'react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import { ArrowUp, Heart, Code2, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigateToContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-200 bg-white py-12 text-stone-600">
      <div className="mx-auto max-w-6xl px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-stone-100">
          
          {/* Brand & Tagline */}
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-900 text-stone-50 font-mono text-xs font-bold">
                US
              </div>
              <span className="font-bold text-stone-900 text-base tracking-tight">
                {DEVELOPER_PROFILE.name}
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">
              Senior Full-Stack Web Developer & UI Architect. Crafting high-conversion websites and resilient web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-stone-600">
            <a href="#portfolio" className="hover:text-stone-950 transition-colors">Portfolio Gallery</a>
            <a href="#tech-stack" className="hover:text-stone-950 transition-colors">Tech Stack</a>
            <a href="#testimonials" className="hover:text-stone-950 transition-colors">Testimonials</a>
            <a href="#about" className="hover:text-stone-950 transition-colors">Services</a>
            <button onClick={onNavigateToContact} className="hover:text-stone-950 transition-colors">
              Direct Contact
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {DEVELOPER_PROFILE.name}. Handcrafted with React & TypeScript.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-stone-500">
              Avg. Page Load: &lt; 0.8s
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-stone-600 hover:text-stone-950 font-medium transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
