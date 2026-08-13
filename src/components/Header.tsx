import React, { useState, useEffect } from 'react';
import { Play, Menu, X, ChevronRight, Film, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { STUDIO_CONFIG } from '../data/studioConfig';
import { MEDIA_ASSETS } from '../data/mediaAssets';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenTrailer: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenTrailer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'jogidas-khuman', label: 'JOGIDAS KHUMAN' },
    { id: 'collaborate', label: 'COLLABORATE' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0b0d]/90 backdrop-blur-md border-b border-[#23201a] py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0a0b0d]/90 via-[#0a0b0d]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3 text-left group focus:outline-none"
        >
          <div className="w-11 h-11 rounded-lg bg-[#050505] border border-[#d4af37]/40 p-0.5 shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:border-[#d4af37] group-hover:scale-105 transition-all duration-300 overflow-hidden flex items-center justify-center shrink-0">
            <img
              src={MEDIA_ASSETS.STUDIO_LOGO?.currentUrl || '/src/assets/images/studio_logo_1786540872261.jpg'}
              alt="Garvi Gujarat AI Studio Official Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div>
            <span className="block font-cinzel font-bold text-[15px] sm:text-[18px] tracking-[0.2em] text-[#d4af37] group-hover:text-white transition-colors">
              GARVI GUJARAT
            </span>
            <span className="block text-[10px] tracking-[0.4em] font-medium text-[#f5f5f0]/70 uppercase">
              AI STUDIOS
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs xl:text-sm font-semibold tracking-widest transition-all duration-200 relative py-1 focus:outline-none ${
                  isActive
                    ? 'text-[#d4af37]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Watch Trailer Button & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <button
            id="watch-trailer-nav-btn"
            onClick={onOpenTrailer}
            className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 text-xs font-bold tracking-widest group shadow-[0_0_15px_rgba(212,175,55,0.15)]"
          >
            <Play className="w-3.5 h-3.5 fill-current transition-transform group-hover:scale-110" />
            <span>WATCH TRAILER</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#1a1c22] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#d4af37]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0a0b0d]/95 backdrop-blur-xl border-b border-[#23201a] py-6 px-6 shadow-2xl animate-fadeIn z-50">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center justify-between py-2 text-sm font-semibold tracking-widest text-left border-b border-[#18191f] ${
                  currentPage === link.id ? 'text-[#d4af37]' : 'text-gray-300'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#d4af37]/60" />
              </button>
            ))}

            <button
              id="mobile-watch-trailer-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrailer();
              }}
              className="mt-4 flex items-center justify-center space-x-2 w-full py-3 rounded-md bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-bold text-xs tracking-widest shadow-lg"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>WATCH JOGIDAS KHUMAN TRAILER</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
