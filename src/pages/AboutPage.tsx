import React from 'react';
import { PageId } from '../types';
import { MEDIA_ASSETS } from '../data/mediaAssets';
import {
  Film,
  Sparkles,
  Clapperboard,
  Tv,
  Layers,
  Compass,
  Target,
  Quote,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  BookOpen,
  Landmark,
  Swords,
  Users,
  Building2,
  DollarSign,
  TrendingDown,
  Zap,
  Award,
  ArrowRight,
  Plus,
  Equal
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const founderImage = MEDIA_ASSETS.FOUNDER_IMAGE_PLACEHOLDER;

  return (
    <div id="about-page" className="py-24 bg-[#0a0b0d] min-h-screen space-y-24">
      {/* 1. HERO */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 pt-12">
        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase">
          ABOUT GARVI GUJARAT AI STUDIOS
        </span>
        <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-wider leading-tight">
          WHERE HERITAGE MEETS THE FUTURE OF CINEMA
        </h1>
        <p className="font-cormorant italic text-lg sm:text-2xl text-amber-100 max-w-3xl mx-auto font-light leading-relaxed">
          Garvi Gujarat AI Studios brings India's rich historical and cultural heritage to life through AI-powered filmmaking and cinematic storytelling.
        </p>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121318] rounded-2xl border border-[#23201a] p-8 sm:p-12 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              INTRODUCTION
            </span>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white">
              WHO WE ARE
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              <p>
                Garvi Gujarat AI Studios is an AI-powered entertainment and creative production studio dedicated to bringing India's rich historical and cultural heritage to life through cinematic storytelling.
              </p>
              <p>
                We combine AI filmmaking, visual effects, digital production, and historical research to create films, web series, documentaries, and immersive visual experiences for audiences in India and around the world.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-black/60 border border-[#d4af37]/30 rounded-xl p-4 sm:p-5 flex flex-col items-center text-center justify-center space-y-2 hover:border-[#d4af37] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                  <Film className="w-5 h-5" />
                </div>
                <span className="font-cinzel text-xs sm:text-sm font-bold text-white tracking-wider">
                  HISTORICAL FILMS
                </span>
              </div>

              <div className="bg-black/60 border border-[#d4af37]/30 rounded-xl p-4 sm:p-5 flex flex-col items-center text-center justify-center space-y-2 hover:border-[#d4af37] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                  <Clapperboard className="w-5 h-5" />
                </div>
                <span className="font-cinzel text-xs sm:text-sm font-bold text-white tracking-wider">
                  AI CINEMA
                </span>
              </div>

              <div className="bg-black/60 border border-[#d4af37]/30 rounded-xl p-4 sm:p-5 flex flex-col items-center text-center justify-center space-y-2 hover:border-[#d4af37] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="font-cinzel text-xs sm:text-sm font-bold text-white tracking-wider">
                  AI & VFX
                </span>
              </div>

              <div className="bg-black/60 border border-[#d4af37]/30 rounded-xl p-4 sm:p-5 flex flex-col items-center text-center justify-center space-y-2 hover:border-[#d4af37] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                  <Tv className="w-5 h-5" />
                </div>
                <span className="font-cinzel text-xs sm:text-sm font-bold text-white tracking-wider">
                  DIGITAL PRODUCTION
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CHALLENGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
            THE INDUSTRY BOTTLENECK
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white leading-snug">
            THOUSANDS OF STORIES. TOO FEW REACH THE SCREEN.
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            India's history is filled with extraordinary stories waiting to be told. Yet many historical stories remain outside mainstream cinema because of the enormous cost and complexity of historical production.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-[#121318] border border-[#23201a] hover:border-[#d4af37]/50 p-5 rounded-xl text-center space-y-3 transition-colors">
            <div className="w-10 h-10 mx-auto rounded-full bg-red-950/40 border border-red-800/40 flex items-center justify-center text-[#d4af37]">
              <Landmark className="w-5 h-5" />
            </div>
            <h3 className="font-cinzel text-xs sm:text-sm font-bold text-gray-200 uppercase tracking-wide">
              MASSIVE HISTORICAL SETS & FORTS
            </h3>
          </div>

          <div className="bg-[#121318] border border-[#23201a] hover:border-[#d4af37]/50 p-5 rounded-xl text-center space-y-3 transition-colors">
            <div className="w-10 h-10 mx-auto rounded-full bg-red-950/40 border border-red-800/40 flex items-center justify-center text-[#d4af37]">
              <Swords className="w-5 h-5" />
            </div>
            <h3 className="font-cinzel text-xs sm:text-sm font-bold text-gray-200 uppercase tracking-wide">
              LARGE-SCALE BATTLE SEQUENCES
            </h3>
          </div>

          <div className="bg-[#121318] border border-[#23201a] hover:border-[#d4af37]/50 p-5 rounded-xl text-center space-y-3 transition-colors">
            <div className="w-10 h-10 mx-auto rounded-full bg-red-950/40 border border-red-800/40 flex items-center justify-center text-[#d4af37]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-cinzel text-xs sm:text-sm font-bold text-gray-200 uppercase tracking-wide">
              THOUSANDS OF SOLDIERS & EXTRAS
            </h3>
          </div>

          <div className="bg-[#121318] border border-[#23201a] hover:border-[#d4af37]/50 p-5 rounded-xl text-center space-y-3 transition-colors">
            <div className="w-10 h-10 mx-auto rounded-full bg-red-950/40 border border-red-800/40 flex items-center justify-center text-[#d4af37]">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-cinzel text-xs sm:text-sm font-bold text-gray-200 uppercase tracking-wide">
              ANCIENT CITIES & PERIOD ARCHITECTURE
            </h3>
          </div>

          <div className="bg-[#121318] border border-[#23201a] hover:border-[#d4af37]/50 p-5 rounded-xl text-center space-y-3 sm:col-span-2 lg:col-span-1 transition-colors">
            <div className="w-10 h-10 mx-auto rounded-full bg-red-950/40 border border-red-800/40 flex items-center justify-center text-[#d4af37]">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="font-cinzel text-xs sm:text-sm font-bold text-gray-200 uppercase tracking-wide">
              HIGH VFX & PRODUCTION COSTS
            </h3>
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH */}
      <section className="bg-[#0e0f14] py-16 border-y border-[#1a1713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              THE SOLUTION
            </span>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white">
              MAKING HISTORICAL CINEMA POSSIBLE THROUGH AI
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              We combine AI-powered filmmaking, cinematic VFX, historical research, and real artistic performances to produce high-quality historical films more efficiently and affordably—without compromising storytelling or visual quality.
            </p>
          </div>

          {/* Visual Formula */}
          <div className="bg-[#121318] border border-[#d4af37]/40 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-9 gap-3 items-center text-center">
              <div className="md:col-span-2 bg-black/60 p-4 rounded-xl border border-[#23201a]">
                <BookOpen className="w-5 h-5 mx-auto text-[#d4af37] mb-2" />
                <span className="font-cinzel text-xs font-bold text-white block">HISTORICAL RESEARCH</span>
              </div>

              <div className="flex justify-center text-[#d4af37]">
                <Plus className="w-5 h-5" />
              </div>

              <div className="md:col-span-2 bg-black/60 p-4 rounded-xl border border-[#23201a]">
                <Cpu className="w-5 h-5 mx-auto text-[#d4af37] mb-2" />
                <span className="font-cinzel text-xs font-bold text-white block">ARTIFICIAL INTELLIGENCE</span>
              </div>

              <div className="flex justify-center text-[#d4af37]">
                <Plus className="w-5 h-5" />
              </div>

              <div className="md:col-span-2 bg-black/60 p-4 rounded-xl border border-[#23201a]">
                <Sparkles className="w-5 h-5 mx-auto text-[#d4af37] mb-2" />
                <span className="font-cinzel text-xs font-bold text-white block">VISUAL EFFECTS (VFX)</span>
              </div>
            </div>

            <div className="flex justify-center my-3 text-[#d4af37]">
              <Plus className="w-5 h-5" />
            </div>

            <div className="max-w-md mx-auto bg-black/60 p-4 rounded-xl border border-[#23201a] text-center">
              <Users className="w-5 h-5 mx-auto text-[#d4af37] mb-2" />
              <span className="font-cinzel text-xs font-bold text-white block">REAL ACTORS & PERFORMANCES</span>
            </div>

            <div className="flex justify-center my-4 text-[#d4af37]">
              <Equal className="w-6 h-6" />
            </div>

            <div className="max-w-lg mx-auto bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/30 to-[#d4af37]/20 border-2 border-[#d4af37] p-5 rounded-xl text-center shadow-lg shadow-black/60">
              <span className="font-cinzel text-sm sm:text-base font-extrabold text-[#fce080] tracking-widest block uppercase">
                AFFORDABLE HISTORICAL CINEMA
              </span>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#121318] p-5 rounded-xl border border-[#23201a] flex items-center space-x-3">
              <TrendingDown className="w-6 h-6 text-[#d4af37] shrink-0" />
              <span className="font-cinzel text-xs font-bold text-white tracking-wide uppercase">
                LOWER PRODUCTION COST
              </span>
            </div>

            <div className="bg-[#121318] p-5 rounded-xl border border-[#23201a] flex items-center space-x-3">
              <Zap className="w-6 h-6 text-[#d4af37] shrink-0" />
              <span className="font-cinzel text-xs font-bold text-white tracking-wide uppercase">
                FASTER PRODUCTION
              </span>
            </div>

            <div className="bg-[#121318] p-5 rounded-xl border border-[#23201a] flex items-center space-x-3">
              <Award className="w-6 h-6 text-[#d4af37] shrink-0" />
              <span className="font-cinzel text-xs font-bold text-white tracking-wide uppercase">
                CINEMATIC VISUAL QUALITY
              </span>
            </div>

            <div className="bg-[#121318] p-5 rounded-xl border border-[#23201a] flex items-center space-x-3">
              <Layers className="w-6 h-6 text-[#d4af37] shrink-0" />
              <span className="font-cinzel text-xs font-bold text-white tracking-wide uppercase">
                SCALABLE HISTORICAL STORYTELLING
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR MISSION & 6. OUR VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-[#121318] p-8 sm:p-10 rounded-2xl border border-[#23201a] space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase block">
                PURPOSE
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                OUR MISSION
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                Garvi Gujarat AI Studios' mission is to combine modern AI technology, Visual Effects (VFX), 3D Animation, digital filmmaking, and traditional cinematic art to create high-quality historical and cultural films that:
              </p>
              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-gray-300 font-light">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Bring Gujarat's history and legendary figures to a new generation.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Make large-scale historical storytelling possible within limited budgets.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Deliver cinematic quality suitable for theatres, OTT platforms, and international audiences.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Contribute to the modernization of the Gujarati film industry through AI and VFX technologies.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Provide affordable AI and VFX services to other filmmakers and creators.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-[#121318] p-8 sm:p-10 rounded-2xl border border-[#23201a] space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase block">
                DESTINATION
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                OUR VISION
              </h2>
              <div className="p-5 rounded-xl bg-black/60 border border-[#d4af37]/30">
                <p className="font-cinzel text-sm sm:text-base text-amber-100 font-semibold leading-relaxed">
                  To become India's most trusted AI-powered historical film production company, presenting Gujarat's history, folklore, and cultural heritage as world-class cinematic experiences.
                </p>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light pt-2">
                Our goal is not only to make films, but to revive historical stories that have gradually become confined to books and fading memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. AI IS OUR TOOL — NOT OUR PURPOSE */}
      <section className="bg-[#0e0f14] py-16 border-y border-[#1a1713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              OUR CORE PHILOSOPHY
            </span>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white tracking-wide">
              AI IS OUR TOOL — NOT OUR PURPOSE.
            </h2>
            <div className="p-4 sm:p-6 rounded-xl bg-black/40 border border-[#d4af37]/40 inline-block">
              <p className="font-cormorant italic text-xl sm:text-2xl text-amber-100 font-medium">
                “We don't use AI to replace storytellers. We use AI to empower storytelling.”
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#121318] p-6 sm:p-8 rounded-xl border border-[#23201a] text-center space-y-3 hover:border-[#d4af37]/50 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white">HISTORY</h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                Preserving forgotten stories and historical legends.
              </p>
            </div>

            <div className="bg-[#121318] p-6 sm:p-8 rounded-xl border border-[#23201a] text-center space-y-3 hover:border-[#d4af37]/50 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white">CULTURE</h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                Showcasing the rich traditions, values, and heritage of India.
              </p>
            </div>

            <div className="bg-[#121318] p-6 sm:p-8 rounded-xl border border-[#23201a] text-center space-y-3 hover:border-[#d4af37]/50 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                <Film className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white">CINEMA</h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                Creating cinematic experiences that inspire audiences across generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOUNDER STORY */}
      <section id="founder-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121318] rounded-2xl border border-[#d4af37]/30 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 relative flex justify-center items-center bg-black/40 p-4 rounded-xl border border-[#23201a]">
              <img
                src={founderImage.currentUrl}
                alt="Jayraj Solanki"
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[580px] object-contain rounded-xl border border-[#d4af37]/40 shadow-xl shadow-black/50"
              />
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                  FOUNDER STORY
                </span>
                <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  A DREAM TO PRESERVE HISTORY THROUGH AI CINEMA
                </h2>
                <div className="mt-2">
                  <p className="font-cinzel text-lg sm:text-xl font-bold text-amber-100">
                    JAYRAJ SOLANKI
                  </p>
                  <p className="text-xs font-medium text-[#d4af37] tracking-wider uppercase">
                    Founder — Garvi Gujarat AI Studios
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                <p>
                  “Growing up with a deep admiration for Gujarat's history, folklore, and legendary heroes, I often wondered why so many extraordinary stories had never reached the big screen.
                </p>
                <p>
                  These stories were rich in courage, sacrifice, culture, and human values, yet they remained confined to books and fading memories.
                </p>
                <p>
                  The biggest challenge was not a lack of great stories—it was the enormous cost of producing historical cinema. Massive sets, ancient forts, battle sequences, thousands of soldiers, and high production budgets made many projects difficult to create.
                </p>
                <p>
                  I saw Artificial Intelligence not as a replacement for filmmakers, but as a powerful creative tool that could make historical storytelling more accessible, affordable, and visually breathtaking.
                </p>
                <p>
                  With this vision, I founded Garvi Gujarat AI Studios—to preserve history, celebrate culture, and build a new era of AI-powered historical cinema.
                </p>
                <p className="text-amber-100 font-normal">
                  Our journey begins with Gujarat's legendary stories, but our vision is to bring India's rich heritage to audiences across the world through world-class cinematic experiences.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. OUR CREATIVE PRINCIPLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
            STANDARDS & ETHICS
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white">
            OUR CREATIVE PRINCIPLES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#121318] p-6 rounded-xl border border-[#23201a] space-y-3 hover:border-[#d4af37]/40 transition-colors">
            <span className="text-xs font-mono font-bold text-[#d4af37]">01</span>
            <h3 className="font-cinzel font-bold text-base text-white">
              STORY FIRST
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Technology serves the story—not the other way around.
            </p>
          </div>

          <div className="bg-[#121318] p-6 rounded-xl border border-[#23201a] space-y-3 hover:border-[#d4af37]/40 transition-colors">
            <span className="text-xs font-mono font-bold text-[#d4af37]">02</span>
            <h3 className="font-cinzel font-bold text-base text-white">
              RESPECT FOR HISTORY
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Every project should be developed with respect for historical research, folklore, and cultural heritage.
            </p>
          </div>

          <div className="bg-[#121318] p-6 rounded-xl border border-[#23201a] space-y-3 hover:border-[#d4af37]/40 transition-colors">
            <span className="text-xs font-mono font-bold text-[#d4af37]">03</span>
            <h3 className="font-cinzel font-bold text-base text-white">
              INNOVATION
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              We adopt new technology where it improves the story and the audience experience.
            </p>
          </div>

          <div className="bg-[#121318] p-6 rounded-xl border border-[#23201a] space-y-3 hover:border-[#d4af37]/40 transition-colors">
            <span className="text-xs font-mono font-bold text-[#d4af37]">04</span>
            <h3 className="font-cinzel font-bold text-base text-white">
              CINEMATIC QUALITY
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Every frame, sound, and visual should meet high cinematic standards.
            </p>
          </div>

          <div className="bg-[#121318] p-6 rounded-xl border border-[#23201a] space-y-3 hover:border-[#d4af37]/40 transition-colors md:col-span-2 lg:col-span-1">
            <span className="text-xs font-mono font-bold text-[#d4af37]">05</span>
            <h3 className="font-cinzel font-bold text-base text-white">
              ETHICS & TRANSPARENCY
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              The use of a real artist's face, voice, or digital identity must follow prior written permission and lawful agreements.
            </p>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6 pb-8">
        <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-wide">
          EVERY LEGEND DESERVES A FILM.
        </h2>
        <p className="text-sm sm:text-base text-gray-300 font-light max-w-xl mx-auto">
          Let's build the future of historical cinema together.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('projects')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-gradient-to-r from-[#d4af37] via-[#fce080] to-[#b8860b] text-black font-extrabold text-xs tracking-widest uppercase hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center space-x-2"
          >
            <span>EXPLORE OUR PROJECTS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('collaborate')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-md border border-[#d4af37] bg-black/60 text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-extrabold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>WORK WITH US</span>
          </button>
        </div>
      </section>
    </div>
  );
};

