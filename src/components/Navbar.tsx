import React, { useState } from 'react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

interface NavbarProps {
  onNavigateToContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToContact }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#portfolio' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'About', href: '#about' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand identity */}
        <a 
          href="#hero" 
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="group flex items-center gap-3 text-stone-900 transition-colors"
          id="nav-brand-logo"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-stone-900 text-stone-50 font-mono text-sm font-bold tracking-tight transition-transform group-hover:scale-105">
            US
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-stone-900 text-sm tracking-tight">
                {DEVELOPER_PROFILE.name}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Available
              </span>
            </div>
            <p className="text-[11px] text-stone-500">Web Developer & UI Architect</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="transition-colors hover:text-stone-950"
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onNavigateToContact}
            className="flex items-center gap-1.5 rounded-lg bg-stone-900 px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-stone-800 active:scale-98"
            id="nav-contact-cta"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg border border-stone-300 bg-white p-2 text-stone-700 shadow-xs hover:bg-stone-50"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="border-b border-stone-200 bg-white px-6 py-5 sm:hidden shadow-lg animate-in slide-in-from-top duration-150">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-1.5 text-base font-medium text-stone-700 hover:text-stone-950"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-stone-100">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigateToContact();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-stone-900 py-2.5 text-sm font-semibold text-white"
              >
                <span>Direct Contact Form</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
