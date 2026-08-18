import React from 'react';
import { PageId } from '../types';
import { STUDIO_CONFIG, SERVICES_DATA, PROJECTS_DATA } from '../data/studioConfig';
import { MEDIA_ASSETS } from '../data/mediaAssets';
import visionBackground from '../assets/images/vision-background.jpg.jpeg';
import { Play, ArrowRight, Film, Cpu, Sparkles, Tv, Shield, Users, Mail, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenTrailer: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenTrailer }) => {
  const heroVideo = MEDIA_ASSETS.HERO_VIDEO_PLACEHOLDER;
  const heroImage = MEDIA_ASSETS.HERO_IMAGE_PLACEHOLDER;
  const aboutImage = MEDIA_ASSETS.ABOUT_STUDIO_IMAGE;
  const filmProjectImage = MEDIA_ASSETS.FILM_PROJECT_IMAGE_PLACEHOLDER;
  const visionBg = MEDIA_ASSETS.VISION_BACKGROUND_PLACEHOLDER;

  return (
    <div id="home-page" className="space-y-0">
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Cinematic Hero Background Image with natural golden-hour brightness & clarity */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={visionBackground}
            alt="Garvi Gujarat AI Studio - Cinematic Historical Landscape"
            className="w-full h-full object-cover object-center scale-100 filter brightness-105 contrast-[1.03] saturate-[1.08] transition-transform duration-1000"
          />
          {/* Subtle localized radial scrim behind center content for readability without darkening the fort or landscape */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,11,13,0.45)_0%,_rgba(10,11,13,0.15)_55%,_transparent_85%)]" />
          {/* Gentle bottom transition to the next section */}
          <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 py-20 animate-fadeIn">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#121318]/85 border border-[#d4af37]/50 backdrop-blur-md shadow-lg shadow-black/40">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              CINEMATIC AI PRODUCTION STUDIO
            </span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-wider leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            GARVI GUJARAT <span className="text-gold-gradient block sm:inline drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">AI STUDIO</span>
          </h1>

          <div className="space-y-2 max-w-3xl mx-auto">
            <p className="text-xs sm:text-base md:text-lg tracking-[0.25em] font-semibold text-[#fce080] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              {STUDIO_CONFIG.primaryTagline}
            </p>
            <p className="font-cormorant italic text-xl sm:text-2xl md:text-3xl text-amber-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              “{STUDIO_CONFIG.secondaryTagline}”
            </p>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-gray-100 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] bg-black/30 backdrop-blur-[2px] p-3 rounded-lg border border-white/5">
            We create films, series, visual experiences and original intellectual properties by combining cinematic storytelling with the power of Artificial Intelligence.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="hero-explore-work-btn"
              onClick={() => onNavigate('projects')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-gradient-to-r from-[#d4af37] via-[#fce080] to-[#b8860b] text-black font-extrabold text-xs tracking-widest uppercase hover:brightness-110 transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.45)] flex items-center justify-center space-x-2"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-watch-trailer-btn"
              onClick={onOpenTrailer}
              className="w-full sm:w-auto px-8 py-3.5 rounded-md border border-[#d4af37] bg-[#0a0b0d]/80 backdrop-blur-md text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-extrabold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl shadow-black/60"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>WATCH JOGIDAS KHUMAN TRAILER</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE SECTION */}
      <section id="who-we-are" className="py-24 bg-[#0d0e12] relative overflow-hidden border-t border-[#1a1713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                ABOUT THE STUDIO
              </span>

              <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white leading-tight">
                WE ARE GARVI GUJARAT AI STUDIO
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                <p>
                  Garvi Gujarat AI Studio is an AI-powered entertainment and creative production studio dedicated to creating original Indian stories for modern audiences.
                </p>
                <p>
                  From historical cinema and web series to AI-generated visuals, VFX, animation, advertising and digital content, we bring storytelling, technology and cinematic craftsmanship together under one creative studio.
                </p>
                <div className="p-4 rounded-lg bg-[#14151a] border-l-2 border-[#d4af37]">
                  <p className="font-semibold text-white">
                    Our goal is simple: To tell powerful Indian stories with the visual ambition of global cinema.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="about-studio-btn"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-md border border-[#d4af37]/60 text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-bold text-xs tracking-widest uppercase transition-all duration-300"
                >
                  <span>ABOUT THE STUDIO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Studio Visual (ABOUT_STUDIO_IMAGE) */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#d4af37]/30 to-transparent blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-xl overflow-hidden border border-[#23201a] bg-[#121318]">
                <img
                  src={aboutImage.currentUrl}
                  alt="Garvi Gujarat AI Studio soundstage"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg glass-panel border border-[#d4af37]/20 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white font-cinzel">ABOUT_STUDIO_IMAGE</p>
                    <p className="text-[10px] text-gray-400">Next-gen film soundstage & AI rendering setup</p>
                  </div>
                  <span className="text-[10px] text-[#d4af37] font-mono">/assets/studio-images</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE CREATE SECTION */}
      <section id="what-we-create" className="py-24 bg-[#0a0b0d] border-t border-[#1a1713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              STUDIO CAPABILITIES
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
              WHAT WE CREATE
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              End-to-end cinematic entertainment, generative AI visuals, and high-impact commercial productions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service, idx) => {
              const icons = [Film, Cpu, Sparkles, Tv];
              const IconComp = icons[idx % icons.length];
              return (
                <div
                  key={service.id}
                  className="group relative bg-[#0f1015] border border-[#23201a] hover:border-[#d4af37]/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-[#181920] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="font-cinzel font-bold text-lg text-white group-hover:text-[#d4af37] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-gray-400 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#1a1c22] mt-6">
                    <button
                      onClick={() => onNavigate('services')}
                      className="text-xs font-bold text-[#d4af37] inline-flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>LEARN MORE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR FIRST ORIGINAL FILM SECTION */}
      <section id="jogidas-khuman-highlight" className="py-24 bg-[#08090b] relative border-t border-[#1a1713] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/40 bg-[#0e0f14] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Poster Column - Enlarged for dominant image display */}
              <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-full flex items-center justify-center bg-black/90 p-4 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#d4af37]/20">
                <img
                  src={filmProjectImage.currentUrl}
                  alt="Jogidas Khuman poster"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[600px] object-contain rounded-xl border border-[#d4af37]/40 shadow-2xl"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#d4af37]/40 text-[10px] font-bold text-[#d4af37] tracking-widest uppercase z-10">
                  ORIGINAL FEATURE FILM
                </div>
              </div>

              {/* Text Column - Compact layout */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center space-y-5">
                <div className="space-y-2">
                  <span className="text-xs font-extrabold tracking-[0.2em] text-[#d4af37] uppercase">
                    OUR FIRST ORIGINAL FILM
                  </span>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-wider">
                    JOGIDAS KHUMAN
                  </h2>
                  <p className="text-xs font-bold tracking-widest text-gray-300 uppercase">
                    THE FIRST FILM FROM THE BAHARVATIYA SERIES
                  </p>
                  <p className="text-xs font-semibold text-[#d4af37] tracking-wider">
                    BAHARVATIYA — OUTLAWS OF SORATH
                  </p>
                </div>

                <blockquote className="p-4 rounded-lg bg-[#14161d] border-l-2 border-[#d4af37] text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                  “A legendary story from the land of Saurashtra. A story of honour, rebellion, sacrifice and the struggle of a man who became a legend. Jogidas Khuman marks the beginning of our ambitious historical storytelling universe — bringing the legendary Baharvatiya stories of Sorath to a new generation through cinematic AI-powered filmmaking.”
                </blockquote>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    id="watch-jogidas-trailer-btn"
                    onClick={onOpenTrailer}
                    className="px-6 py-3 rounded-md bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-extrabold text-xs tracking-widest uppercase hover:brightness-110 transition-all flex items-center space-x-2 shadow-lg"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>WATCH TRAILER</span>
                  </button>

                  <button
                    id="explore-jogidas-film-btn"
                    onClick={() => onNavigate('jogidas-khuman')}
                    className="px-6 py-3 rounded-md border border-[#d4af37]/60 text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-bold text-xs tracking-widest uppercase transition-all flex items-center space-x-2"
                  >
                    <span>EXPLORE THE FILM</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR VISION SECTION */}
      <section id="our-vision" className="py-24 relative overflow-hidden border-t border-[#1a1713]">
        <div className="absolute inset-0 z-0">
          <img
            src={visionBg.currentUrl}
            alt="Cinematic vision background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0d] via-[#0a0b0d]/80 to-[#0a0b0d]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
            OUR VISION
          </span>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white tracking-wide">
            PRESERVING THE PAST. CREATING THE FUTURE.
          </h2>

          <p className="text-xs sm:text-base text-gray-300 leading-relaxed font-light">
            India has thousands of extraordinary stories waiting to be told. Legends, warriors, kingdoms, forgotten heroes, folklore and history have the power to inspire generations — but many of these stories have never received the cinematic scale they deserve.
          </p>

          <p className="text-xs sm:text-base text-gray-300 leading-relaxed font-light">
            Garvi Gujarat AI Studio aims to change that. We use emerging AI technologies as creative tools to develop cinematic worlds that were once difficult, expensive or impossible to create.
          </p>

          <div className="pt-4 inline-block px-8 py-4 rounded-xl bg-[#121318]/90 border border-[#d4af37]/40 backdrop-blur-md">
            <p className="font-cinzel text-sm sm:text-lg font-bold text-[#d4af37]">
              Our ambition is to build original Indian entertainment IP with a global visual language.
            </p>
          </div>
        </div>
      </section>

      {/* 6. STORY FIRST. TECHNOLOGY SECOND. */}
      <section id="philosophy-pillars" className="py-24 bg-[#0d0e12] border-t border-[#1a1713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              CREATIVE PHILOSOPHY
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
              STORY FIRST. TECHNOLOGY SECOND.
            </h2>
            <p className="font-cormorant italic text-lg sm:text-xl text-gray-300">
              “We believe technology should serve the story — never replace it.”
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#121318] p-6 rounded-xl border border-[#23201a] space-y-3">
              <span className="text-[10px] font-bold tracking-widest text-[#d4af37] uppercase">01 / FOUNDATION</span>
              <h3 className="font-cinzel font-bold text-lg text-white">STORYTELLING</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Strong characters, powerful narratives and authentic cultural worlds.
              </p>
            </div>

            <div className="bg-[#121318] p-6 rounded-xl border border-[#23201a] space-y-3">
              <span className="text-[10px] font-bold tracking-widest text-[#d4af37] uppercase">02 / INNOVATION</span>
              <h3 className="font-cinzel font-bold text-lg text-white">AI TECHNOLOGY</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Next-generation tools for visual development, production and creative experimentation.
              </p>
            </div>

            <div className="bg-[#121318] p-6 rounded-xl border border-[#23201a] space-y-3">
              <span className="text-[10px] font-bold tracking-widest text-[#d4af37] uppercase">03 / FINISHING</span>
              <h3 className="font-cinzel font-bold text-lg text-white">CINEMATIC CRAFT</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Direction, editing, VFX, sound, music, colour and visual storytelling.
              </p>
            </div>

            <div className="bg-[#121318] p-6 rounded-xl border border-[#23201a] space-y-3">
              <span className="text-[10px] font-bold tracking-widest text-[#d4af37] uppercase">04 / HEART</span>
              <h3 className="font-cinzel font-bold text-lg text-white">HUMAN CREATIVITY</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Because every great film begins with an idea, an emotion and a vision.
              </p>
            </div>
          </div>

          {/* Highlighted Quote Statement */}
          <div className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-[#17140c] via-[#261f10] to-[#17140c] border border-[#d4af37]/40 shadow-xl">
            <p className="font-cinzel font-bold text-lg sm:text-2xl text-gold-gradient">
              AI gives us new possibilities. Story gives those possibilities meaning.
            </p>
          </div>
        </div>
      </section>

      {/* 7. ORIGINAL INDIAN IP SECTION */}
      <section id="building-ip" className="py-24 bg-[#0a0b0d] border-t border-[#1a1713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                FRANCHISE DEVELOPMENT
              </span>

              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                BUILDING ORIGINAL INDIAN IP
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
                <div className="p-4 rounded-lg bg-[#121318] border border-[#23201a]">
                  <h4 className="font-cinzel font-bold text-white text-sm mb-1 text-[#d4af37]">
                    FEATURE UNIVERSE: BAHARVATIYA — OUTLAWS OF SORATH
                  </h4>
                  <p className="text-gray-400">
                    The Baharvatiya series explores the extraordinary lives, conflicts and legends of the men who became symbols of rebellion across the historic land of Sorath.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#121318] border border-[#23201a]">
                  <h4 className="font-cinzel font-bold text-white text-sm mb-1">
                    OUR FIRST FILM: JOGIDAS KHUMAN
                  </h4>
                  <p className="text-gray-400">
                    This is only the beginning. We are developing a larger storytelling universe inspired by the history, legends and cultural heritage of Gujarat and India.
                  </p>
                </div>
              </div>

              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-md bg-[#d4af37] text-black font-extrabold text-xs tracking-widest uppercase hover:brightness-110 transition-all"
              >
                <span>EXPLORE OUR PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Grid of Future Projects */}
            <div className="grid grid-cols-2 gap-4">
              {PROJECTS_DATA.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => onNavigate('projects')}
                  className="cursor-pointer group relative rounded-xl overflow-hidden border border-[#23201a] hover:border-[#d4af37] transition-all bg-[#121318]"
                >
                  <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center p-1">
                    <img
                      src={proj.defaultPosterUrl}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 pointer-events-none" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[9px] font-bold text-[#d4af37] uppercase tracking-wider block">
                      {proj.status}
                    </span>
                    <h4 className="font-cinzel font-bold text-xs text-white line-clamp-1">
                      {proj.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. WORK WITH US SECTION */}
      <section id="work-with-us" className="py-24 bg-[#0d0e12] border-t border-[#1a1713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              STUDIO COLLABORATIONS
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
              LET'S CREATE SOMETHING EXTRAORDINARY
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              We are building a new generation of Indian entertainment through technology, imagination and powerful storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#121318] p-6 rounded-xl border border-[#23201a] flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-cinzel font-bold text-base text-white text-[#d4af37]">ACTORS</h3>
                <p className="text-xs text-gray-400">Join our original films and series.</p>
              </div>
              <button
                onClick={() => onNavigate('collaborate')}
                className="w-full py-2.5 rounded border border-[#d4af37]/60 text-[#d4af37] font-bold text-[11px] tracking-widest uppercase hover:bg-[#d4af37] hover:text-black transition-all"
              >
                ACTOR COLLABORATION
              </button>
            </div>

            <div className="bg-[#121318] p-6 rounded-xl border border-[#23201a] flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-cinzel font-bold text-base text-white text-[#d4af37]">PRODUCERS & INVESTORS</h3>
                <p className="text-xs text-gray-400">Partner with us to develop ambitious original entertainment IP.</p>
              </div>
              <button
                onClick={() => onNavigate('collaborate')}
                className="w-full py-2.5 rounded border border-[#d4af37]/60 text-[#d4af37] font-bold text-[11px] tracking-widest uppercase hover:bg-[#d4af37] hover:text-black transition-all"
              >
                PARTNER WITH US
              </button>
            </div>

            <div className="bg-[#121318] p-6 rounded-xl border border-[#23201a] flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-cinzel font-bold text-base text-white text-[#d4af37]">BRANDS & BUSINESSES</h3>
                <p className="text-xs text-gray-400">Create cinematic AI-powered commercial content.</p>
              </div>
              <button
                onClick={() => onNavigate('collaborate')}
                className="w-full py-2.5 rounded border border-[#d4af37]/60 text-[#d4af37] font-bold text-[11px] tracking-widest uppercase hover:bg-[#d4af37] hover:text-black transition-all"
              >
                COMMERCIAL PROJECTS
              </button>
            </div>

            <div className="bg-[#121318] p-6 rounded-xl border border-[#23201a] flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-cinzel font-bold text-base text-white text-[#d4af37]">DISTRIBUTORS & OTT</h3>
                <p className="text-xs text-gray-400">Explore content and licensing opportunities.</p>
              </div>
              <button
                onClick={() => onNavigate('collaborate')}
                className="w-full py-2.5 rounded border border-[#d4af37]/60 text-[#d4af37] font-bold text-[11px] tracking-widest uppercase hover:bg-[#d4af37] hover:text-black transition-all"
              >
                CONTENT & LICENSING
              </button>
            </div>
          </div>

          <div className="mt-16 text-center space-y-4">
            <h3 className="font-cinzel font-bold text-xl text-white">
              HAVE A PROJECT OR WANT TO COLLABORATE?
            </h3>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 rounded-md bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-extrabold text-xs tracking-widest uppercase shadow-xl hover:brightness-110 transition-all inline-flex items-center space-x-2"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 9. CONTACT PREVIEW SECTION */}
      <section id="contact-preview" className="py-24 bg-[#07080a] border-t border-[#1a1713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                CONTACT STUDIO
              </span>

              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                LET'S TALK
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                For film, production, acting, investment, licensing, commercial projects or creative collaborations, get in touch with Garvi Gujarat AI Studio.
              </p>

              <div className="p-6 rounded-xl bg-[#121318] border border-[#23201a] space-y-4">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block">
                    FOUNDER & PRODUCER
                  </span>
                  <p className="font-cinzel font-bold text-lg text-white text-[#d4af37]">
                    {STUDIO_CONFIG.founderName}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                  <div className="p-3 rounded bg-[#171820] border border-[#23201a]">
                    <span className="text-gray-400 block text-[10px]">EMAIL ADDRESS</span>
                    <code className="text-[#d4af37] font-mono">{STUDIO_CONFIG.emailPlaceholder}</code>
                  </div>
                  <div className="p-3 rounded bg-[#171820] border border-[#23201a]">
                    <span className="text-gray-400 block text-[10px]">PHONE / WHATSAPP</span>
                    <code className="text-[#d4af37] font-mono">{STUDIO_CONFIG.phonePlaceholder}</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Box Preview */}
            <div className="bg-[#0f1015] p-8 rounded-2xl border border-[#23201a] space-y-6">
              <h3 className="font-cinzel font-bold text-lg text-white">
                SEND AN INQUIRY
              </h3>
              <p className="text-xs text-gray-400">
                Direct channel to Producer Jayraj Solanki & Studio Production Team.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-4 rounded-md bg-[#d4af37] text-black font-extrabold text-xs tracking-widest uppercase hover:brightness-110 transition-all flex items-center justify-center space-x-2"
              >
                <span>OPEN CONTACT FORM</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
