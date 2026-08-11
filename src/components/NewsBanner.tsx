import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PageId } from '../types';

interface NewsBannerProps {
  onNavigate: (page: PageId) => void;
  onOpenTrailer: () => void;
}

export const NewsBanner: React.FC<NewsBannerProps> = ({ onNavigate, onOpenTrailer }) => {
  return (
    <div id="studio-news-banner" className="bg-gradient-to-r from-[#17130b] via-[#241c0e] to-[#17130b] border-y border-[#d4af37]/30 py-2.5 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center space-x-2">
          <span className="flex items-center space-x-1 bg-[#d4af37] text-black font-extrabold text-[10px] px-2 py-0.5 rounded tracking-wider uppercase">
            <Sparkles className="w-3 h-3 fill-current" />
            <span>STUDIO ANNOUNCEMENT</span>
          </span>
          <span className="text-gray-200 font-medium truncate max-w-md sm:max-w-xl">
            First Teaser Released: <strong className="text-white font-cinzel">JOGIDAS KHUMAN — Outlaws of Sorath</strong>
          </span>
        </div>

        <button
          onClick={onOpenTrailer}
          className="inline-flex items-center space-x-1.5 text-[#d4af37] hover:text-white font-bold tracking-wider text-[11px] group transition-colors"
        >
          <span>WATCH TEASER</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
