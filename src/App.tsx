import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioGallery } from './components/PortfolioGallery';
import { TechStack } from './components/TechStack';
import { ServicesProcess } from './components/ServicesProcess';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [prefilledProject, setPrefilledProject] = useState<string | undefined>(undefined);

  const handleNavigateToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactForSimilar = (projectName: string) => {
    setPrefilledProject(projectName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-stone-900 selection:text-white flex flex-col font-sans">
      
      {/* Top sticky navigation */}
      <Navbar 
        onNavigateToContact={handleNavigateToContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onExploreWork={handleExploreWork}
          onDirectContact={handleNavigateToContact}
        />

        {/* Selected Portfolio Gallery with Interactive Case Studies */}
        <PortfolioGallery 
          onContactForSimilar={handleContactForSimilar}
        />

        {/* Primary Tech Stack Showcase */}
        <TechStack />

        {/* Coding Skills, Website Creation & Development Process */}
        <ServicesProcess 
          onDirectContact={handleNavigateToContact}
        />

        {/* Client Testimonials for Credibility */}
        <Testimonials />

        {/* Direct Contact Form & Alternatives */}
        <ContactSection 
          prefilledProject={prefilledProject}
        />
      </main>

      {/* Footer */}
      <Footer 
        onNavigateToContact={handleNavigateToContact}
      />

    </div>
  );
}
