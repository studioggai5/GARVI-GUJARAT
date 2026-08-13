import React from 'react';
import { PageId } from '../types';
import { STUDIO_CONFIG } from '../data/studioConfig';
import { MEDIA_ASSETS } from '../data/mediaAssets';
import { Film, Youtube, Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#07080a] text-gray-400 border-t border-[#1a1713] relative overflow-hidden pt-16 pb-12">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#18191f]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-[#050505] border border-[#d4af37]/40 p-0.5 shadow-[0_0_15px_rgba(212,175,55,0.2)] overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src={MEDIA_ASSETS.STUDIO_LOGO?.currentUrl || '/src/assets/images/studio_logo_1786540872261.jpg'}
                  alt="Garvi Gujarat AI Studios Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div>
                <h3 className="font-cinzel font-bold text-lg text-white tracking-wider">
                  GARVI GUJARAT AI STUDIOS
                </h3>
                <p className="text-[10px] tracking-[0.25em] text-[#d4af37] font-semibold uppercase">
                  AI STUDIOS — WHERE GUJARAT'S HISTORY MEETS THE FUTURE OF CINEMA
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              {STUDIO_CONFIG.secondaryTagline} Combining epic Indian storytelling, cinematic filmmaking, and artificial intelligence to build timeless entertainment IPs.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={STUDIO_CONFIG.socials.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube Channel"
                className="w-9 h-9 rounded-full bg-[#121318] border border-[#23201a] flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_CONFIG.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Page"
                className="w-9 h-9 rounded-full bg-[#121318] border border-[#23201a] flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_CONFIG.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Page"
                className="w-9 h-9 rounded-full bg-[#121318] border border-[#23201a] flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_CONFIG.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-full bg-[#121318] border border-[#23201a] flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-cinzel text-xs font-bold text-white tracking-widest uppercase mb-4 text-[#d4af37]">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-white transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('jogidas-khuman')} className="hover:text-white transition-colors">
                  Jogidas Khuman
                </button>
              </li>
            </ul>
          </div>

          {/* Collaborations */}
          <div>
            <h4 className="font-cinzel text-xs font-bold text-white tracking-widest uppercase mb-4 text-[#d4af37]">
              ENGAGE
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button onClick={() => handleNav('collaborate')} className="hover:text-white transition-colors">
                  Actors & Talent
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('collaborate')} className="hover:text-white transition-colors">
                  Producers & Investors
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('collaborate')} className="hover:text-white transition-colors">
                  Brands & Advertisers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('collaborate')} className="hover:text-white transition-colors">
                  OTT & Licensing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  Contact Studio
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Film Spotlight */}
          <div className="bg-[#121318] p-5 rounded-xl border border-[#23201a] space-y-3">
            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-widest bg-[#d4af37]/20 text-[#d4af37] uppercase">
              CURRENT HIGHLIGHT
            </span>
            <h5 className="font-cinzel text-sm font-bold text-white">
              JOGIDAS KHUMAN
            </h5>
            <p className="text-xs text-gray-400 line-clamp-2">
              The First Film from the Baharvatiya — Outlaws of Sorath Series.
            </p>
            <button
              onClick={() => handleNav('jogidas-khuman')}
              className="inline-flex items-center space-x-1 text-xs text-[#d4af37] font-semibold hover:underline"
            >
              <span>Explore Feature Film</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
          <p>© 2026 Garvi Gujarat AI Studio. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-gray-300 transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
