import React from 'react';
import { PageId } from '../types';
import { SERVICES_DATA } from '../data/studioConfig';
import { MEDIA_ASSETS } from '../data/mediaAssets';
import { Film, Cpu, Sparkles, Tv, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div id="services-page" className="py-24 bg-[#0a0b0d] min-h-screen space-y-20">
      {/* Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-12">
        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase">
          STUDIO CAPABILITIES
        </span>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-wider">
          OUR CREATIVE & PRODUCTION SERVICES
        </h1>
        <p className="text-xs sm:text-base text-gray-400 max-w-3xl mx-auto">
          Combining cinematic filmmaking, artificial intelligence technology, visual effects, and original entertainment production.
        </p>
      </section>

      {/* Service Detailed Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {SERVICES_DATA.map((service, index) => {
          const mediaAsset = MEDIA_ASSETS[service.imagePlaceholderId];
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              className="bg-[#0e0f14] border border-[#23201a] rounded-2xl overflow-hidden p-6 sm:p-10 shadow-2xl space-y-8"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                {/* Media Image Placeholder */}
                <div className={`lg:col-span-5 relative group rounded-xl overflow-hidden border border-[#23201a] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img
                    src={service.defaultImageUrl}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded glass-panel flex justify-between text-[11px] text-gray-300">
                    <span className="font-mono text-[#d4af37]">{service.imagePlaceholderId}</span>
                    <span className="text-gray-400">Owner Media Slot</span>
                  </div>
                </div>

                {/* Info & Subcategories */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-2">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                      CATEGORY 0{index + 1}
                    </span>
                    <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-cinzel font-bold text-xs text-[#d4af37] tracking-widest uppercase">
                      CORE CAPABILITIES & OFFERINGS
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.subCategories.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center space-x-2.5 p-3 rounded-lg bg-[#14151c] border border-[#23201a]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                          <span className="text-xs text-gray-200 font-medium">{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="px-6 py-3 rounded bg-[#d4af37] text-black font-extrabold text-xs tracking-widest uppercase hover:brightness-110 transition-all inline-flex items-center space-x-2"
                    >
                      <span>INQUIRE FOR {service.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-[#121318] p-8 sm:p-12 rounded-2xl border border-[#d4af37]/40 space-y-4">
          <h3 className="font-cinzel font-bold text-2xl text-white">
            NEED A CUSTOM CINEMATIC PRODUCTION?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300">
            We partner with film studios, brands, investors, and agencies worldwide.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 rounded bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-extrabold text-xs tracking-widest uppercase"
          >
            GET IN TOUCH WITH PRODUCER
          </button>
        </div>
      </section>
    </div>
  );
};
