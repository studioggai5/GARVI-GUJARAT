import React, { useState } from 'react';
import { PageId } from '../types';
import { PROJECTS_DATA } from '../data/studioConfig';
import { Play, ArrowRight, Filter } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTrailer: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenTrailer }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filteredProjects = selectedFilter === 'ALL'
    ? PROJECTS_DATA
    : selectedFilter === 'FEATURED'
    ? PROJECTS_DATA.filter((p) => p.isFeatured)
    : PROJECTS_DATA.filter((p) => p.status === selectedFilter);

  const featuredProject = PROJECTS_DATA.find((p) => p.isFeatured) || PROJECTS_DATA[0];
  const upcomingProjects = PROJECTS_DATA.filter((p) => !p.isFeatured);

  return (
    <div id="projects-page" className="py-24 bg-[#0a0b0d] min-h-screen space-y-16">
      {/* Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-12">
        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase">
          OUR PROJECTS
        </span>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-wider">
          OUR CINEMATIC PROJECTS
        </h1>
        <p className="text-xs sm:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Explore the cinematic worlds being developed by Garvi Gujarat AI Studio, beginning with our flagship Baharvatiya story and expanding into a growing slate of historical stories inspired by Gujarat and Saurashtra.
        </p>
      </section>

      {/* Featured Original Film: Jogidas Khuman */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
            FEATURED PROJECT
          </span>
        </div>

        <div className="bg-[#0e0f14] border border-[#d4af37]/50 rounded-2xl overflow-hidden shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-full flex items-center justify-center bg-black/90 p-4 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#d4af37]/20">
              <img
                src={featuredProject.defaultPosterUrl}
                alt={featuredProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[600px] object-contain rounded-xl border border-[#d4af37]/40 shadow-2xl"
              />
              <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded-full border border-[#d4af37]/40 text-[10px] font-bold text-[#d4af37] tracking-widest uppercase z-10">
                FEATURED ORIGINAL IP
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase">
                  {featuredProject.universe}
                </span>

                <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
                  {featuredProject.title}
                </h2>

                <p className="text-xs font-bold tracking-widest text-gray-300 uppercase">
                  {featuredProject.subtitle}
                </p>

                <div className="inline-block px-3 py-1 rounded bg-[#171820] text-gray-300 text-xs font-mono border border-[#23201a]">
                  Genre: {featuredProject.genre} | Status: <span className="text-[#d4af37] font-bold">{featuredProject.status}</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-2 font-light">
                  {featuredProject.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#1a1c22]">
                <button
                  onClick={onOpenTrailer}
                  className="px-6 py-3 rounded bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-extrabold text-xs tracking-widest uppercase flex items-center space-x-2"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>WATCH TEASER</span>
                </button>

                <button
                  onClick={() => onNavigate('jogidas-khuman')}
                  className="px-6 py-3 rounded border border-[#d4af37]/60 text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-bold text-xs tracking-widest uppercase transition-all flex items-center space-x-2"
                >
                  <span>FULL FILM DETAILS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Historical Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1f2029]">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase block">
              CINEMATIC SLATE
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              UPCOMING HISTORICAL PROJECTS
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-4 h-4 text-[#d4af37] hidden sm:inline-block mr-1" />
            {['ALL', 'FEATURED', 'In Development'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all ${
                  selectedFilter === filter
                    ? 'bg-[#d4af37] text-black'
                    : 'bg-[#121318] text-gray-400 hover:text-white border border-[#23201a]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => {
            const isJogidas = project.id === 'jogidas-khuman';

            return (
              <div
                key={project.id}
                className="bg-[#0e0f14] border border-[#23201a] hover:border-[#d4af37]/60 rounded-xl overflow-hidden group flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Poster Image */}
                  <div className="relative aspect-video overflow-hidden bg-black p-2 flex items-center justify-center">
                    <img
                      src={project.defaultPosterUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f14] via-transparent to-transparent opacity-60 pointer-events-none" />

                    <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded text-[10px] font-bold text-[#d4af37] border border-[#d4af37]/30 tracking-widest uppercase">
                      {project.status}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[10px] text-[#d4af37] font-semibold tracking-widest block uppercase">
                        {project.universe}
                      </span>
                      <h3 className="font-cinzel font-bold text-base sm:text-lg text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <p className="text-xs text-gray-300 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0">
                  {isJogidas ? (
                    <button
                      onClick={() => onNavigate('jogidas-khuman')}
                      className="w-full py-2.5 rounded bg-[#d4af37] text-black font-extrabold text-xs tracking-widest uppercase hover:brightness-110 transition-all flex items-center justify-center space-x-1"
                    >
                      <span>EXPLORE FILM PAGE</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => onNavigate('collaborate')}
                      className="w-full py-2.5 rounded border border-[#23201a] text-gray-300 font-bold text-xs tracking-widest uppercase hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
                    >
                      CO-DEVELOPMENT INQUIRY
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
