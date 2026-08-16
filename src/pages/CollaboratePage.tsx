import React from 'react';
import { PageId } from '../types';
import {
  Users,
  Film,
  TrendingUp,
  Tv,
  Globe,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  Award,
  ChevronRight,
  CheckCircle2,
  Video,
  MonitorPlay
} from 'lucide-react';

interface CollaboratePageProps {
  onNavigate: (page: PageId) => void;
}

export const CollaboratePage: React.FC<CollaboratePageProps> = ({ onNavigate }) => {
  const partnershipCategories = [
    {
      id: 'artists-actors',
      number: '01',
      title: 'ARTISTS & ACTORS',
      tagline: 'CREATIVE PERFORMANCE',
      description: 'Performance, voice, and creative collaborations.',
      icon: Users,
      supportingAreas: [
        'Acting',
        'Voice',
        'Creative performance',
        'Artistic collaboration'
      ],
      ctaText: 'COLLABORATE WITH US'
    },
    {
      id: 'production-studios',
      number: '02',
      title: 'PRODUCTION STUDIOS',
      tagline: 'CO-PRODUCTION & TECH',
      description: 'Co-productions, technology sharing, and joint ventures.',
      icon: Film,
      supportingAreas: [
        'Co-production',
        'Technology collaboration',
        'Joint ventures',
        'Production partnerships'
      ],
      ctaText: 'EXPLORE PARTNERSHIP'
    },
    {
      id: 'producers-investors',
      number: '03',
      title: 'PRODUCERS & INVESTORS',
      tagline: 'FILM FINANCING & IP',
      description: 'Film financing and strategic partnerships.',
      icon: TrendingUp,
      supportingAreas: [
        'Film financing',
        'Strategic investment',
        'Original IP partnerships',
        'Long-term production opportunities'
      ],
      ctaText: 'DISCUSS INVESTMENT'
    },
    {
      id: 'ott-platforms',
      number: '04',
      title: 'OTT PLATFORMS',
      tagline: 'STREAMING & LICENSING',
      description: 'Content licensing and original productions.',
      icon: Tv,
      supportingAreas: [
        'Content licensing',
        'Original productions',
        'Regional content',
        'National and global streaming opportunities'
      ],
      ctaText: 'DISCUSS CONTENT'
    },
    {
      id: 'distributors',
      number: '05',
      title: 'DISTRIBUTORS',
      tagline: 'GLOBAL DISTRIBUTION',
      description: 'Theatrical, digital, and international distribution partnerships.',
      icon: Globe,
      supportingAreas: [
        'Theatrical distribution',
        'Digital distribution',
        'International distribution',
        'Film festival and overseas opportunities'
      ],
      ctaText: 'DISCUSS DISTRIBUTION'
    }
  ];

  const pillars = [
    {
      number: '01',
      icon: ShieldCheck,
      title: 'HISTORICAL AUTHENTICITY',
      description: 'Deep respect for historical research and cultural heritage.'
    },
    {
      number: '02',
      icon: Cpu,
      title: 'AI-POWERED PRODUCTION',
      description: 'Modern AI-powered filmmaking and digital production workflows.'
    },
    {
      number: '03',
      icon: Award,
      title: 'CINEMATIC QUALITY',
      description: 'Professional standards across storytelling, visuals and sound.'
    },
    {
      number: '04',
      icon: Layers,
      title: 'SCALABLE PRODUCTION',
      description: 'A production approach designed to make ambitious historical storytelling more accessible and scalable.'
    }
  ];

  const futureSlate = [
    { name: 'Jogidas Khuman', status: 'Flagship Project' },
    { name: 'Kadu Makrani', status: 'In Development' },
    { name: 'Khapro Khodiyo', status: 'In Development' },
    { name: 'Ram Valo', status: 'In Development' },
    { name: 'Jodha Manek', status: 'In Development' },
    { name: 'Many more historical legends', status: 'Slate Expansion' }
  ];

  const distributionPathways = [
    {
      channel: 'THEATRICAL',
      tag: 'BIG SCREEN',
      icon: Film,
      description: 'Cinema releases across India and selected international markets.'
    },
    {
      channel: 'OTT',
      tag: 'STREAMING',
      icon: Tv,
      description: 'Licensing to regional, national and global streaming platforms.'
    },
    {
      channel: 'DIGITAL',
      tag: 'GLOBAL REACH',
      icon: MonitorPlay,
      description: 'YouTube and digital media for worldwide audiences.'
    },
    {
      channel: 'INTERNATIONAL',
      tag: 'GLOBAL MARKETS',
      icon: Globe,
      description: 'Film festivals, overseas markets and global content partners.'
    }
  ];

  const ecosystemItems = [
    { title: 'Original Films', icon: Film, desc: 'Feature films built with cinematic scale and folklore richness.' },
    { title: 'OTT Licensing', icon: Tv, desc: 'Premium episodic series and direct digital acquisitions.' },
    { title: 'Theatrical Distribution', icon: Video, desc: 'Large-scale big-screen theatrical releases.' },
    { title: 'YouTube & Digital Media', icon: MonitorPlay, desc: 'Dedicated digital content and teaser releases.' },
    { title: 'AI Creative Services', icon: Sparkles, desc: 'High-end concept visualization and digital character assets.' },
    { title: 'VFX & Digital Production', icon: Layers, desc: 'Digital environment recreation, lighting, and visual effects.' }
  ];

  return (
    <div id="collaborate-page" className="bg-[#07080a] text-gray-200 min-h-screen pt-24 pb-28 space-y-32">
      {/* 1. HERO SECTION — CINEMATIC ATMOSPHERE */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#12131b] via-[#0d0e13] to-[#07080a] border border-[#d4af37]/25 p-8 sm:p-14 lg:p-24 shadow-2xl text-center space-y-8">
          {/* Atmospheric background glow and light shafts */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#d4af37]/12 via-[#d4af37]/3 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-1/4 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Eyebrow badge */}
          <div className="relative inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#161722] border border-[#d4af37]/40 text-[#d4af37] text-xs font-bold tracking-[0.2em] uppercase shadow-lg shadow-black/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COLLABORATE WITH GARVI GUJARAT AI STUDIOS</span>
          </div>

          {/* Dominant Heading */}
          <div className="relative space-y-6 max-w-4xl mx-auto">
            <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-wider leading-[1.15]">
              BUILD THE FUTURE OF <span className="text-[#d4af37]">HISTORICAL CINEMA</span> TOGETHER
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              Garvi Gujarat AI Studios welcomes strategic partnerships with artists, filmmakers, production houses, producers, investors, distributors and digital platforms to bring India&apos;s historical stories to audiences worldwide.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#d4af37] text-black font-extrabold text-xs tracking-widest uppercase hover:brightness-110 shadow-lg shadow-[#d4af37]/25 hover:shadow-[#d4af37]/40 transition-all duration-300 flex items-center justify-center space-x-2 shrink-0"
            >
              <span>START A CONVERSATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-[#d4af37]/40 bg-[#12131a]/90 text-gray-200 font-bold text-xs tracking-widest uppercase hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-[#161724] transition-all duration-300 shrink-0"
            >
              EXPLORE OUR WORK
            </button>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION — WHERE HERITAGE MEETS INNOVATION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase block">
            OUR PHILOSOPHY
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white tracking-wide leading-snug">
            WHERE HERITAGE MEETS INNOVATION
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light max-w-2xl mx-auto pt-2">
            Garvi Gujarat AI Studios combines historical authenticity, cutting-edge AI technology, cinematic storytelling, and a scalable production model to create high-quality historical content with global potential.
          </p>
        </div>

        <div className="pt-8 border-t border-[#1f202b] max-w-md mx-auto">
          <p className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.3em] text-[#d4af37] uppercase leading-loose">
            PRESERVING THE PAST.<br />
            CREATING THE FUTURE.
          </p>
        </div>
      </section>

      {/* 3. PARTNERSHIP OPPORTUNITIES — CINEMATIC ASYMMETRIC PORTAL LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase">
            PARTNERSHIP OPPORTUNITIES
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white tracking-wide">
            BUILDING THE FUTURE OF AI HISTORICAL CINEMA TOGETHER
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto font-light">
            We collaborate across the entertainment ecosystem, uniting talent, technology, and strategic partners.
          </p>
        </div>

        {/* Dynamic Studio Portals: 2 Featured Upper Rows + 3 Strategic Pillars */}
        <div className="space-y-6">
          {/* Upper Row: 2 Major Pillars (Creative & Studio) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {partnershipCategories.slice(0, 2).map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="bg-gradient-to-b from-[#111219] to-[#0a0b0f] border border-[#23201a] hover:border-[#d4af37]/70 rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:shadow-2xl hover:shadow-[#d4af37]/5"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[#1c1d27] pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-11 h-11 rounded-xl bg-[#171824] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-[#d4af37] tracking-widest uppercase block">
                            {card.tagline}
                          </span>
                          <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white tracking-wide">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#d4af37]/50 tracking-widest">
                        CARD {card.number}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                      {card.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-bold text-[#d4af37] tracking-wider uppercase block">
                        Supporting Areas:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {card.supportingAreas.map((area, areaIdx) => (
                          <div key={areaIdx} className="flex items-center space-x-2 text-xs text-gray-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                            <span>{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="w-full py-3.5 rounded-xl bg-[#14151e] border border-[#d4af37]/30 group-hover:border-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black text-gray-200 font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>{card.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Lower Row: 3 Commercial & Distribution Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnershipCategories.slice(2, 5).map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="bg-gradient-to-b from-[#0f1017] to-[#090a0d] border border-[#23201a] hover:border-[#d4af37]/70 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:shadow-2xl hover:shadow-[#d4af37]/5"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between border-b border-[#1a1b24] pb-3.5">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-10 h-10 rounded-lg bg-[#161722] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-[10px] font-bold text-[#d4af37]/70 tracking-wider uppercase">
                          CARD {card.number}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-cinzel text-base sm:text-lg font-bold text-white tracking-wide">
                        {card.title}
                      </h3>
                      <p className="text-xs text-gray-300 leading-relaxed font-light">
                        {card.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-[#181922]">
                      <span className="text-[11px] font-bold text-[#d4af37] tracking-wider uppercase block">
                        Supporting Areas:
                      </span>
                      <ul className="space-y-1.5">
                        {card.supportingAreas.map((area, areaIdx) => (
                          <li key={areaIdx} className="flex items-center space-x-2 text-xs text-gray-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="w-full py-3 rounded-xl bg-[#12131a] border border-[#d4af37]/30 group-hover:border-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black text-gray-200 font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>{card.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY PARTNER SECTION — SOPHISTICATED EDITORIAL GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b0c10] border border-[#23201a] rounded-3xl p-8 sm:p-12 lg:p-16 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase">
              STUDIO ADVANTAGES
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
              WHY PARTNER WITH GARVI GUJARAT AI STUDIOS?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0f1016] border border-[#1d1e28] hover:border-[#d4af37]/50 p-6 rounded-2xl space-y-4 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#161722] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                      <PillarIcon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-gray-500">
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="font-cinzel font-bold text-sm sm:text-base text-white tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CINEMATIC UNIVERSE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0c0d12] via-[#13141d] to-[#0c0d12] border border-[#d4af37]/35 p-8 sm:p-12 lg:p-16 space-y-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase block">
              LONG-TERM VISION
            </span>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white tracking-wide">
              FROM ONE STORY TO A CINEMATIC UNIVERSE
            </h2>
            <p className="text-sm sm:text-base text-[#d4af37] font-medium">
              The story of Jogidas Khuman is only the beginning.
            </p>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Garvi Gujarat AI Studios aims to build the Sorathi Baharvatiya Universe — a connected cinematic world inspired by the legendary heroes, outlaws, kingdoms and historical events of Saurashtra.
            </p>
          </div>

          <div className="relative pt-6 border-t border-[#1f202b] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                DEVELOPING SLATE / FUTURE PROJECTS
              </span>
              <button
                onClick={() => onNavigate('projects')}
                className="text-xs text-[#d4af37] hover:underline flex items-center space-x-1 font-bold"
              >
                <span>View Full Projects Slate</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {futureSlate.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#07080a] border border-[#1f202b] hover:border-[#d4af37]/40 text-center space-y-1.5 transition-all"
                >
                  <p className="font-cinzel font-bold text-xs sm:text-sm text-white truncate">
                    {item.name}
                  </p>
                  <span className="text-[10px] text-[#d4af37] block font-mono">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MULTI-PLATFORM OPPORTUNITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase">
            DISTRIBUTION CHANNELS
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white tracking-wide">
            ONE STORY. EVERY SCREEN. WORLDWIDE.
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto font-light">
            Garvi Gujarat AI Studios develops high-impact content structured for comprehensive multi-platform distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {distributionPathways.map((path, idx) => {
            const PathIcon = path.icon;
            return (
              <div
                key={idx}
                className="bg-[#0c0d12] border border-[#1f202a] hover:border-[#d4af37]/60 rounded-2xl p-6 space-y-4 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#14151f] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                    <PathIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 tracking-wider">
                    {path.tag}
                  </span>
                </div>
                <h3 className="font-cinzel font-bold text-base text-white tracking-wider">
                  {path.channel}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  {path.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. BUSINESS COLLABORATION MODEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase">
            STUDIO ECOSYSTEM
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white tracking-wide">
            MULTIPLE OPPORTUNITIES. ONE VISION.
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto font-light">
            Our multi-faceted studio model enables diverse avenues for high-value creative and commercial partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecosystemItems.map((eco, idx) => {
            const EcoIcon = eco.icon;
            return (
              <div
                key={idx}
                className="bg-[#0c0d12] border border-[#1f202a] hover:border-[#d4af37]/40 rounded-2xl p-6 space-y-3 transition-all flex items-start space-x-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#14151f] border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                  <EcoIcon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-cinzel font-bold text-sm sm:text-base text-white">
                    {eco.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-light">
                    {eco.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. FINAL CTA SECTION — CINEMATIC CONCLUSION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-[#13141e] to-[#07080a] border border-[#d4af37]/40 rounded-3xl p-8 sm:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#d4af37]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 relative max-w-3xl mx-auto">
            <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-wide leading-tight">
              LET&apos;S BUILD THE FUTURE OF <span className="text-[#d4af37]">HISTORICAL CINEMA</span> TOGETHER
            </h2>
            <p className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.3em] text-[#d4af37] uppercase">
              PRESERVING THE PAST. CREATING THE FUTURE.
            </p>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light pt-2 max-w-2xl mx-auto">
              Whether you are an artist, filmmaker, production studio, producer, investor, OTT platform or distributor, we would like to explore how we can build something meaningful together.
            </p>
          </div>

          <div className="pt-6 relative">
            <button
              onClick={() => onNavigate('contact')}
              className="px-10 py-4 rounded-xl bg-[#d4af37] text-black font-extrabold text-xs tracking-widest uppercase hover:brightness-110 shadow-xl shadow-[#d4af37]/25 hover:shadow-[#d4af37]/40 transition-all inline-flex items-center space-x-2 shrink-0"
            >
              <span>START A CONVERSATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
