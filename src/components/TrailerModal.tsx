import React, { useState } from 'react';
import { X, Play, Pause, Share2, Film, Check, Volume2, VolumeX } from 'lucide-react';
import { MEDIA_ASSETS } from '../data/mediaAssets';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const trailerAsset = MEDIA_ASSETS.FILM_TRAILER_PLACEHOLDER;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#0d0e12] border border-[#d4af37]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#23201a] bg-[#121318]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center">
              <Film className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="font-cinzel font-bold text-sm sm:text-base text-white tracking-wider">
                JOGIDAS KHUMAN — OFFICIAL TEASER
              </h3>
              <p className="text-[10px] tracking-widest text-[#d4af37] font-semibold">
                BAHARVATIYA — OUTLAWS OF SORATH
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-[#1a1c22] text-gray-300 hover:text-[#d4af37] transition-colors text-xs font-semibold flex items-center space-x-1.5"
              title="Share Trailer"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#1a1c22] text-gray-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Section */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            src={trailerAsset.currentUrl}
            className="w-full h-full object-cover"
          />

          {/* Video Controls Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full bg-black/60 border border-white/20 text-white hover:border-[#d4af37] transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="text-xs text-gray-300 font-mono tracking-wider">
                FILM_TRAILER_PLACEHOLDER
              </span>
            </div>

            <div className="text-[10px] font-bold tracking-widest text-[#d4af37] bg-black/80 px-3 py-1 rounded-full border border-[#d4af37]/30">
              AI-POWERED CINEMATIC TEASER
            </div>
          </div>
        </div>

        {/* Details Footer */}
        <div className="p-6 bg-[#0f1015] border-t border-[#1a1c22] space-y-3 overflow-y-auto">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-[#d4af37] tracking-widest uppercase">
              Directed & Produced by Garvi Gujarat AI Studio
            </span>
            <span className="text-xs text-gray-400">
              Media ID: <code className="text-gray-300 bg-[#17181f] px-2 py-0.5 rounded">{trailerAsset.replacementPath}</code>
            </span>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            “A story of honour, rebellion, sacrifice and the struggle of a man who became a legend.
            Jogidas Khuman marks the beginning of our ambitious historical storytelling universe — bringing the legendary Baharvatiya stories of Sorath to a new generation through cinematic AI-powered filmmaking.”
          </p>
        </div>
      </div>
    </div>
  );
};
