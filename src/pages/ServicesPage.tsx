import React from 'react';
import { PageId } from '../types';
import { SERVICES_DATA } from '../data/studioConfig';
import { MEDIA_ASSETS } from '../data/mediaAssets';
import {
  Film,
  Cpu,
  Sparkles,
  Landmark,
  Image as ImageIcon,
  Layout,
  Box,
  Building,
  History,
  CheckCircle2,
  ArrowRight,
  Plus
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  // Service 03 Sub-Services configuration with dedicated details
  const vfxSubServices = [
    {
      title: 'AI Key Art & Posters',
      desc: 'Cinematic movie posters and promotional artwork.',
      icon: ImageIcon
    },
    {
      title: 'AI Storyboarding',
      desc: 'Professional pre-visualization for films and web series.',
      icon: Layout
    },
    {
      title: '3D Modeling & Assets',
      desc: 'Characters, props, environments, and digital assets.',
      icon: Box
    },
    {
      title: 'VFX & Compositing',
      desc: 'Professional visual effects and compositing for modern and historical productions.',
      icon: Sparkles
    },
    {
      title: 'Digital Environment Creation',
      desc: 'AI-assisted cities, forts, landscapes, and historical worlds.',
      icon: Building
    },
    {
      title: 'Historical Reconstruction',
      desc: 'Recreating lost architecture, battlefields, and heritage environments using AI and research.',
      icon: History
    }
  ];

  return (
    <div id="services-page" className="py-24 bg-[#0a0b0d] min-h-screen space-y-24">
      {/* 1. HERO / INTRODUCTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 pt-12">
        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase">
          OUR SERVICES
        </span>
        <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-wider leading-tight">
          Where AI Technology Meets Cinematic Storytelling
        </h1>
        <p className="font-cormorant italic text-lg sm:text-2xl text-amber-100 max-w-4xl mx-auto font-light leading-relaxed">
          Garvi Gujarat AI Studio combines AI-powered filmmaking, visual effects, digital production, and historical storytelling to create cinematic experiences for films, web series, digital content, filmmakers, production houses, brands, museums, and historical content creators.
        </p>
      </section>

      {/* 2. CORE SERVICES BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* SERVICE 01: AI FILM & DIGITAL PRODUCTION */}
        {(() => {
          const service01 = SERVICES_DATA[0];
          const asset01 = MEDIA_ASSETS[service01?.imagePlaceholderId || 'SERVICE_FILM_IMAGE'];
          return (
            <div
              id="service-01"
              className="bg-[#0e0f14] border border-[#23201a] hover:border-[#d4af37]/40 rounded-2xl overflow-hidden p-6 sm:p-10 lg:p-12 shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Visual */}
                <div className="lg:col-span-5 relative group rounded-xl overflow-hidden border border-[#d4af37]/30 bg-black/60 shadow-xl">
                  <img
                    src={asset01?.currentUrl || service01?.defaultImageUrl}
                    alt={service01?.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-80 sm:h-96 lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-[#d4af37]/40 text-[10px] font-bold text-[#d4af37] tracking-widest uppercase">
                    FEATURE & DIGITAL PRODUCTION
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                        <Film className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                        SERVICE 01
                      </span>
                    </div>
                    <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white">
                      {service01?.title || 'AI FILM & DIGITAL PRODUCTION'}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                    Create cinematic films and digital productions using AI-assisted workflows combined with professional filmmaking practices.
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-cinzel font-bold text-xs text-[#d4af37] tracking-widest uppercase">
                      SUB-SERVICES & OFFERINGS
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service01?.subCategories.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center space-x-2.5 p-3 rounded-lg bg-[#14151c] border border-[#23201a] hover:border-[#d4af37]/30 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-200 font-medium">{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="px-6 py-3 rounded-md bg-[#d4af37] text-black font-extrabold text-xs tracking-widest uppercase hover:brightness-110 transition-all inline-flex items-center space-x-2 shadow-lg shadow-black/50"
                    >
                      <span>DISCUSS FILM PRODUCTION</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* SERVICE 02: AI CREATIVE PRODUCTION */}
        {(() => {
          const service02 = SERVICES_DATA[1];
          const asset02 = MEDIA_ASSETS[service02?.imagePlaceholderId || 'SERVICE_AI_IMAGE'];
          return (
            <div
              id="service-02"
              className="bg-[#0e0f14] border border-[#23201a] hover:border-[#d4af37]/40 rounded-2xl overflow-hidden p-6 sm:p-10 lg:p-12 shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Content (Left) */}
                <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                        SERVICE 02
                      </span>
                    </div>
                    <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white">
                      {service02?.title || 'AI CREATIVE PRODUCTION'}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                    AI-assisted creative development for cinematic storytelling, visual development, and digital production. We empower storytellers, artists, and directors—accelerating concept exploration and visual development while keeping human imagination and emotion at the core.
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-cinzel font-bold text-xs text-[#d4af37] tracking-widest uppercase">
                      SUB-SERVICES & CAPABILITIES
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service02?.subCategories.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center space-x-2.5 p-3 rounded-lg bg-[#14151c] border border-[#23201a] hover:border-[#d4af37]/30 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-200 font-medium">{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="px-6 py-3 rounded-md bg-[#d4af37] text-black font-extrabold text-xs tracking-widest uppercase hover:brightness-110 transition-all inline-flex items-center space-x-2 shadow-lg shadow-black/50"
                    >
                      <span>INQUIRE FOR CREATIVE PRODUCTION</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Visual (Right) */}
                <div className="lg:col-span-5 relative group rounded-xl overflow-hidden border border-[#d4af37]/30 bg-black/60 shadow-xl order-1 lg:order-2">
                  <img
                    src={asset02?.currentUrl || service02?.defaultImageUrl}
                    alt={service02?.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-80 sm:h-96 lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-[#d4af37]/40 text-[10px] font-bold text-[#d4af37] tracking-widest uppercase">
                    CONCEPT & VISUAL DEVELOPMENT
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* SERVICE 03: AI & VFX SERVICES */}
        <div
          id="service-03"
          className="bg-[#0e0f14] border border-[#23201a] hover:border-[#d4af37]/40 rounded-2xl overflow-hidden p-6 sm:p-10 lg:p-12 shadow-2xl space-y-10 transition-all duration-300"
        >
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                SERVICE 03
              </span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white">
              AI & VFX SERVICES
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light max-w-3xl">
              Advanced AI and VFX solutions for filmmakers, production houses, brands, museums, and historical content creators.
            </p>
          </div>

          {/* 6 Sub-Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {vfxSubServices.map((sub, idx) => {
              const SubIcon = sub.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#121318] border border-[#23201a] hover:border-[#d4af37]/60 rounded-xl p-6 space-y-3 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-black/60 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                      <SubIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-cinzel font-bold text-base text-white group-hover:text-[#d4af37] transition-colors">
                      {sub.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-md bg-[#d4af37] text-black font-extrabold text-xs tracking-widest uppercase hover:brightness-110 transition-all inline-flex items-center space-x-2 shadow-lg shadow-black/50"
            >
              <span>INQUIRE FOR VFX SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* SERVICE 04: HISTORICAL DIGITAL PRODUCTION */}
        {(() => {
          const service04 = SERVICES_DATA[3];
          const asset04 = MEDIA_ASSETS[service04?.imagePlaceholderId || 'SERVICE_HISTORICAL_IMAGE'];
          return (
            <div
              id="service-04"
              className="bg-[#0e0f14] border-2 border-[#d4af37]/40 rounded-2xl overflow-hidden p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8 transition-all duration-300 relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Visual */}
                <div className="lg:col-span-5 relative group rounded-xl overflow-hidden border border-[#d4af37]/40 bg-black/60 shadow-2xl">
                  <img
                    src={asset04?.currentUrl || service04?.defaultImageUrl}
                    alt={service04?.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-80 sm:h-96 lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-[#d4af37]/50 text-[10px] font-bold text-[#fce080] tracking-widest uppercase">
                    HISTORICAL WORLDBUILDING
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37]">
                        <Landmark className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                        SERVICE 04 — STUDIO SPECIALIZATION
                      </span>
                    </div>
                    <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white">
                      {service04?.title || 'HISTORICAL DIGITAL PRODUCTION'}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                    Specialized digital production for bringing historical environments, locations, architecture, and cultural worlds to life through research, AI, and cinematic VFX.
                  </p>

                  {/* Formula Callout */}
                  <div className="bg-[#121318] p-4 rounded-xl border border-[#d4af37]/30 space-y-2">
                    <span className="text-[11px] font-mono text-[#d4af37] uppercase tracking-wider block">
                      OUR PRODUCTION METHODOLOGY:
                    </span>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-cinzel font-semibold text-white">
                      <span className="px-2.5 py-1 rounded bg-black/50 border border-[#23201a]">Historical Research</span>
                      <Plus className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span className="px-2.5 py-1 rounded bg-black/50 border border-[#23201a]">Artificial Intelligence</span>
                      <Plus className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span className="px-2.5 py-1 rounded bg-black/50 border border-[#23201a]">Cinematic VFX</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-1">
                    <h4 className="font-cinzel font-bold text-xs text-[#d4af37] tracking-widest uppercase">
                      SUB-SERVICES & CAPABILITIES
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service04?.subCategories.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center space-x-2.5 p-3 rounded-lg bg-[#14151c] border border-[#23201a] hover:border-[#d4af37]/40 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-200 font-medium">{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="px-6 py-3 rounded-md bg-gradient-to-r from-[#d4af37] via-[#fce080] to-[#b8860b] text-black font-extrabold text-xs tracking-widest uppercase hover:brightness-110 transition-all inline-flex items-center space-x-2 shadow-lg shadow-black/60"
                    >
                      <span>INQUIRE FOR HISTORICAL PRODUCTION</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="max-w-4xl mx-auto px-4 text-center pb-8">
        <div className="bg-[#121318] p-8 sm:p-12 rounded-2xl border border-[#d4af37]/40 space-y-6 shadow-2xl shadow-black/80">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase">
              COLLABORATION & INQUIRIES
            </span>
            <h2 className="font-cinzel font-extrabold text-3xl sm:text-4xl text-white">
              HAVE A PROJECT IN MIND?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
              Whether you are developing a film, web series, historical project, visual campaign, or AI-powered production, let's build the right cinematic solution together.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('collaborate')}
              className="px-8 py-4 rounded-md bg-gradient-to-r from-[#d4af37] via-[#fce080] to-[#b8860b] text-black font-extrabold text-xs sm:text-sm tracking-widest uppercase hover:brightness-110 transition-all inline-flex items-center space-x-2 shadow-xl shadow-black/60"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

