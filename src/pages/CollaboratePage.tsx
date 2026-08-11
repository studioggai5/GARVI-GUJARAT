import React from 'react';
import { PageId } from '../types';
import { COLLABORATION_CATEGORIES } from '../data/studioConfig';
import { Users, Briefcase, Tv, Building2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface CollaboratePageProps {
  onNavigate: (page: PageId) => void;
}

export const CollaboratePage: React.FC<CollaboratePageProps> = ({ onNavigate }) => {
  return (
    <div id="collaborate-page" className="py-24 bg-[#0a0b0d] min-h-screen space-y-20">
      {/* Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-12">
        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase">
          STUDIO PARTNERSHIPS
        </span>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-wider">
          COLLABORATE WITH GARVI GUJARAT AI STUDIO
        </h1>
        <p className="text-xs sm:text-base text-gray-400 max-w-2xl mx-auto">
          We are building a new generation of Indian entertainment through technology, imagination, and powerful storytelling. Select your collaboration pathway below.
        </p>
      </section>

      {/* Pathways Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {COLLABORATION_CATEGORIES.map((cat, idx) => {
          const icons = [Users, Briefcase, Tv, Building2, Sparkles];
          const IconComp = icons[idx % icons.length];

          return (
            <div
              key={cat.id}
              className="bg-[#0e0f14] border border-[#23201a] hover:border-[#d4af37]/50 rounded-2xl p-6 sm:p-10 transition-all shadow-xl space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1c1d26] pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#181922] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-cinzel font-bold text-xl sm:text-2xl text-white">
                      {cat.title}
                    </h2>
                    <p className="text-xs font-semibold text-[#d4af37]">
                      {cat.targetAudience}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 rounded bg-[#d4af37] text-black font-extrabold text-xs tracking-widest uppercase hover:brightness-110 transition-all shrink-0 flex items-center justify-center space-x-2"
                >
                  <span>{cat.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                {cat.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="font-cinzel text-xs font-bold text-[#d4af37] tracking-widest uppercase">
                  COLLABORATION OPPORTUNITIES & ADVANTAGES
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cat.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start space-x-2.5 p-3 rounded bg-[#14151c] border border-[#23201a]">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-300">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Direct Contact Banner */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-[#121318] p-8 sm:p-12 rounded-2xl border border-[#d4af37]/40 space-y-4">
          <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-white">
            HAVE A CUSTOM PROPOSAL OR MEDIA INQUIRY?
          </h3>
          <p className="text-xs text-gray-300">
            Reach out directly to Founder & Producer Jayraj Solanki and our executive studio team.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 rounded bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-extrabold text-xs tracking-widest uppercase"
          >
            CONTACT STUDIO TEAM
          </button>
        </div>
      </section>
    </div>
  );
};
