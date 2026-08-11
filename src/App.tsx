import React, { useState } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NewsBanner } from './components/NewsBanner';
import { TrailerModal } from './components/TrailerModal';
import { LegalModal } from './components/LegalModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { JogidasKhumanPage } from './pages/JogidasKhumanPage';
import { CollaboratePage } from './pages/CollaboratePage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isTrailerOpen, setIsTrailerOpen] = useState<boolean>(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenTrailer={() => setIsTrailerOpen(true)} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'projects':
        return <ProjectsPage onNavigate={handleNavigate} onOpenTrailer={() => setIsTrailerOpen(true)} />;
      case 'jogidas-khuman':
        return <JogidasKhumanPage onNavigate={handleNavigate} onOpenTrailer={() => setIsTrailerOpen(true)} />;
      case 'collaborate':
        return <CollaboratePage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} onOpenTrailer={() => setIsTrailerOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0b0d] text-[#e5e7eb] flex flex-col font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Top Header Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenTrailer={() => setIsTrailerOpen(true)}
      />

      {/* Main Content View Container */}
      <main className="flex-grow pt-[70px]">
        {/* Studio Announcement Ribbon */}
        <NewsBanner
          onNavigate={handleNavigate}
          onOpenTrailer={() => setIsTrailerOpen(true)}
        />

        {/* Dynamic Page Component */}
        <div className="transition-opacity duration-300">
          {renderPage()}
        </div>
      </main>

      {/* Studio Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalType(type)}
      />

      {/* Trailer Video Player Modal */}
      <TrailerModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
      />

      {/* Legal Privacy & Terms Modal */}
      <LegalModal
        type={legalType}
        onClose={() => setLegalType(null)}
      />
    </div>
  );
}
