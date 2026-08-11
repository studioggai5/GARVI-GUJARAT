import React from 'react';
import { PageId } from '../types';
import { PROJECTS_DATA } from '../data/studioConfig';
import { MEDIA_ASSETS } from '../data/mediaAssets';
import { Play, Film, Shield, Users, ArrowRight, Sparkles, MapPin, Award } from 'lucide-react';

interface JogidasKhumanPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTrailer: () => void;
}

export const JogidasKhumanPage: React.FC<JogidasKhumanPageProps> = ({ onNavigate, onOpenTrailer }) => {
  const filmData = PROJECTS_DATA.find((p) => p.id === 'jogidas-khuman') || PROJECTS_DATA[0];

  return (
    <div id="jogidas-khuman-page" className="py-20 bg-[#0a0b0d] min-h-screen space-y-20">
      {/* 1. HERO BANNER */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src={filmData.defaultPosterUrl}
            alt="Jogidas Khuman hero visual"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-[#0a0b0d]/70 to-[#0a0b0d]" />
          <div className="absolute inset-0 vignette-overlay" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#121318]/90 border border-[#d4af37]/40 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              {filmData.universe}
            </span>
          </div>

          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-widest">
            {filmData.title}
          </h1>

          <p className="font-cormorant italic text-2xl sm:text-3xl text-gray-200">
            {filmData.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            “{filmData.tagline}”
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenTrailer}
              className="w-full sm:w-auto px-8 py-4 rounded bg-gradient-to-r from-[#d4af37] via-[#fce080] to-[#b8860b] text-black font-extrabold text-xs tracking-widest uppercase shadow-2xl flex items-center justify-center space-x-2"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>WATCH OFFICIAL TEASER</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded border border-[#d4af37]/60 text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center space-x-2"
            >
              <span>CASTING & PRODUCTION INQUIRY</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. FILM INTRODUCTION & STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#d4af37]/40 bg-[#121318]">
            <img
              src={filmData.defaultPosterUrl}
              alt="Jogidas Khuman Poster"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-black/80 px-3 py-1 rounded border border-[#d4af37]/30 text-[10px] text-[#d4af37] font-mono">
              FILM_PROJECT_IMAGE_PLACEHOLDER
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              THE LEGEND
            </span>

            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
              STORY & NARRATIVE
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              {filmData.longDescription}
            </p>

            <div className="p-5 rounded-xl bg-[#0f1015] border border-[#23201a] space-y-2">
              <h4 className="font-cinzel font-bold text-sm text-[#d4af37]">
                HISTORICAL WORLD & SORATH HERITAGE
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                {filmData.historicalContext}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN CHARACTERS */}
      <section className="bg-[#0e0f14] py-16 border-y border-[#1a1713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              CHARACTER ARCHETYPES
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
              MAIN CHARACTERS
            </h2>
            <p className="text-xs text-gray-400">
              The figures of honor, duty, and clan sacrifice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filmData.characters?.map((char, idx) => (
              <div key={idx} className="bg-[#121318] p-6 rounded-xl border border-[#23201a] space-y-3">
                <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest">
                  CHARACTER 0{idx + 1}
                </span>
                <h3 className="font-cinzel font-bold text-lg text-white">
                  {char.name}
                </h3>
                <p className="text-xs font-semibold text-[#d4af37]">
                  {char.role}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {char.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISUAL WORLD & PRODUCTION VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#121318] p-8 rounded-xl border border-[#23201a] space-y-4">
            <h3 className="font-cinzel font-bold text-xl text-white text-[#d4af37]">
              VISUAL WORLD & AI PRODUCTION
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Recreating 19th-century Kathiawar requires dense historical accuracy—from traditional attire, swords, and horse tack to authentic stone forts of Sorath. Garvi Gujarat AI Studio deploys custom AI visual models trained on architectural archives to deliver unmatched photorealism.
            </p>
          </div>

          <div className="bg-[#121318] p-8 rounded-xl border border-[#23201a] space-y-4">
            <h3 className="font-cinzel font-bold text-xl text-white text-[#d4af37]">
              ACTOR & CREATIVE OPPORTUNITY
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Casting and creative team partnerships are actively open for Jogidas Khuman and subsequent films in the Baharvatiya Universe. We invite actors, stunt performers, voice artists, and co-producers to connect with our team.
            </p>
          </div>
        </div>
      </section>

      {/* 5. COLLABORATION CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-[#17140c] via-[#241c0e] to-[#17140c] p-8 sm:p-12 rounded-2xl border border-[#d4af37]/40 space-y-4">
          <h3 className="font-cinzel font-bold text-2xl text-white">
            WANT TO BE A PART OF JOGIDAS KHUMAN?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300">
            Inquire for casting, co-production, theatrical distribution, or commercial sponsorship.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 rounded bg-[#d4af37] text-black font-extrabold text-xs tracking-widest uppercase hover:brightness-110 transition-all inline-flex items-center space-x-2"
          >
            <span>SUBMIT INQUIRY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
