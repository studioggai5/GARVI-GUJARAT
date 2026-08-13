import React from 'react';
import { PageId } from '../types';
import { STUDIO_CONFIG } from '../data/studioConfig';
import { MEDIA_ASSETS } from '../data/mediaAssets';
import { Film, Award, Shield, Sparkles, Compass, User, Target, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const studioImage = MEDIA_ASSETS.ABOUT_STUDIO_IMAGE;
  const founderImage = MEDIA_ASSETS.FOUNDER_IMAGE_PLACEHOLDER;

  return (
    <div id="about-page" className="py-24 bg-[#0a0b0d] min-h-screen space-y-20">
      {/* Page Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-12">
        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase">
          THE CREATIVE STUDIO
        </span>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-wider">
          ABOUT GARVI GUJARAT AI STUDIO
        </h1>
        <p className="font-cormorant italic text-lg sm:text-2xl text-gray-300 max-w-3xl mx-auto">
          “Where Indian Stories Meet the Future of Cinema.”
        </p>
      </section>

      {/* 1. Who We Are & Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
            <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase block">
              OUR GENESIS
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              WHO WE ARE & OUR STORY
            </h2>

            <p>
              Garvi Gujarat AI Studio was founded with a singular, ambitious goal: to create original Indian entertainment that honors our rich history, legends, and folklore while embracing the most advanced creative technologies in the world.
            </p>

            <p>
              For decades, Gujarat and wider India have possessed monumental tales of heroism, sacrifice, maritime empires, and folk traditions that remained largely unexplored on the global cinematic stage due to high production constraints.
            </p>

            <p>
              By fusing cinematic storytelling with generative artificial intelligence, visual effects, and digital craftsmanship, Garvi Gujarat AI Studio unlocks unprecedented worldbuilding possibilities without sacrificing narrative depth or emotional truth.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-[#23201a] bg-[#121318]">
            <img
              src={studioImage.currentUrl}
              alt="Studio facility visual"
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded glass-panel text-[11px] text-gray-300 flex justify-between">
              <span>ABOUT_STUDIO_IMAGE</span>
              <span className="text-[#d4af37]">Cinematic Soundstage</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Vision & Our Mission */}
      <section className="bg-[#0e0f14] py-16 border-y border-[#1a1713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#121318] p-8 rounded-xl border border-[#23201a] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel font-bold text-xl text-white">OUR VISION</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                To establish an iconic Indian film and creative studio that builds timeless entertainment franchises—combining cultural heritage with cutting-edge AI technologies to entertain global audiences.
              </p>
            </div>

            <div className="bg-[#121318] p-8 rounded-xl border border-[#23201a] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel font-bold text-xl text-white">OUR MISSION</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                To pioneer AI-powered film production pipelines, empower creative talent, develop original Indian IPs like <strong className="text-white">Jogidas Khuman</strong>, and deliver commercial visual excellence for global partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Creative Philosophy & AI + Human Creativity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
            METHODOLOGY
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white">
            AI + HUMAN CREATIVITY
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Technology expands the canvas; human imagination paints the masterpiece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#121318] p-6 rounded-xl border border-[#23201a] space-y-3">
            <h4 className="font-cinzel font-bold text-base text-white text-[#d4af37]">01. AI PRE-VISUALIZATION</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              We construct digital concept art, character animatics, and 3D lighting blueprints prior to set assembly, reducing production waste and optimizing budgets.
            </p>
          </div>

          <div className="bg-[#121318] p-6 rounded-xl border border-[#23201a] space-y-3">
            <h4 className="font-cinzel font-bold text-base text-white text-[#d4af37]">02. DIGITAL ENVIRONMENTS</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Synthesizing historical fortresses, lost cities, and epic natural landscapes of Sorath with photorealistic lighting and depth compositing.
            </p>
          </div>

          <div className="bg-[#121318] p-6 rounded-xl border border-[#23201a] space-y-3">
            <h4 className="font-cinzel font-bold text-base text-white text-[#d4af37]">03. HUMAN DIRECTION</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Actors, directors, writers, and musicians remain the soulful core. AI is our visual instrument, guided entirely by human vision and emotion.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Founder & Producer Section */}
      <section id="founder-section" className="bg-[#090a0c] py-20 border-t border-[#1a1713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121318] rounded-2xl border border-[#d4af37]/30 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 xl:col-span-7 relative flex justify-center items-center bg-black/40 p-4 rounded-xl border border-[#23201a]">
                <img
                  src={founderImage.currentUrl}
                  alt={STUDIO_CONFIG.founderName}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[600px] object-contain rounded-xl border border-[#d4af37]/40 shadow-xl shadow-black/50"
                />
                <div className="absolute bottom-6 left-6 bg-black/80 px-3 py-1 rounded border border-[#d4af37]/30 text-[10px] text-[#d4af37] font-mono">
                  {STUDIO_CONFIG.founderBioPlaceholder}
                </div>
              </div>

              <div className="lg:col-span-6 xl:col-span-5 space-y-4">
                <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                  LEADERSHIP & VISION
                </span>

                <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white">
                  {STUDIO_CONFIG.founderName}
                </h2>

                <p className="text-xs font-semibold text-[#d4af37] tracking-widest uppercase">
                  {STUDIO_CONFIG.founderTitle}
                </p>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                  {STUDIO_CONFIG.founderBioText}
                </p>

                <div className="p-4 rounded-lg bg-[#181920] border-l-2 border-[#d4af37] text-xs text-gray-300 italic">
                  “Our commitment is to elevate Indian storytelling to universal visual standards, proving that history and technology can co-create legendary cinema.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Future Direction & CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
          LOOKING AHEAD
        </span>
        <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
          FUTURE DIRECTION
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
          Garvi Gujarat AI Studio is actively expanding its production slate across historical dramas, mythological sci-fi, commercial brand campaigns, and interactive content.
        </p>
        <button
          onClick={() => onNavigate('collaborate')}
          className="px-8 py-3.5 rounded-md bg-[#d4af37] text-black font-extrabold text-xs tracking-widest uppercase hover:brightness-110 transition-all inline-flex items-center space-x-2"
        >
          <span>JOIN OUR CREATIVE JOURNEY</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
