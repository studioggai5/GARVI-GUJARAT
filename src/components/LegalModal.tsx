import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0d0e12] border border-[#d4af37]/30 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#23201a] bg-[#121318]">
          <div className="flex items-center space-x-3">
            {isPrivacy ? (
              <Shield className="w-5 h-5 text-[#d4af37]" />
            ) : (
              <FileText className="w-5 h-5 text-[#d4af37]" />
            )}
            <h3 className="font-cinzel font-bold text-base text-white tracking-wider">
              {isPrivacy ? 'PRIVACY POLICY' : 'TERMS & CONDITIONS'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#1a1c22] text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-xs text-gray-300 leading-relaxed">
          {isPrivacy ? (
            <>
              <p className="text-gray-400">
                Effective Date: August 2026 | Garvi Gujarat AI Studio
              </p>
              <h4 className="text-sm font-bold text-white font-cinzel">1. Information Collection</h4>
              <p>
                Garvi Gujarat AI Studio respects your privacy. We collect minimal personal information provided directly by users through inquiry forms, such as your name, email address, phone number, and project details.
              </p>
              <h4 className="text-sm font-bold text-white font-cinzel">2. Use of Information</h4>
              <p>
                Information submitted via collaboration and contact channels is strictly used for evaluating actor casting, investment partnerships, commercial inquiries, and studio licensing requests.
              </p>
              <h4 className="text-sm font-bold text-white font-cinzel">3. Confidentiality & IP Rights</h4>
              <p>
                All project submissions, intellectual property descriptions, and character artwork showcased on this platform are owned exclusively by Garvi Gujarat AI Studio unless otherwise stated.
              </p>
              <h4 className="text-sm font-bold text-white font-cinzel">4. Contact Us</h4>
              <p>
                For questions regarding privacy practices, please contact our administrative team via the studio contact page.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-400">
                Last Updated: August 2026 | Garvi Gujarat AI Studio
              </p>
              <h4 className="text-sm font-bold text-white font-cinzel">1. Acceptance of Terms</h4>
              <p>
                By accessing or using the website of Garvi Gujarat AI Studio, you agree to comply with and be bound by these Terms & Conditions.
              </p>
              <h4 className="text-sm font-bold text-white font-cinzel">2. Intellectual Property</h4>
              <p>
                All original film concepts, trailers, images, character designs (including "Jogidas Khuman" and the "Baharvatiya — Outlaws of Sorath" series), logos, and written content are protected intellectual property.
              </p>
              <h4 className="text-sm font-bold text-white font-cinzel">3. Collaboration Inquiries</h4>
              <p>
                Submitting an inquiry for acting, production investment, or commercial collaboration does not constitute a binding legal contract or financial commitment until formal agreements are signed.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-[#121318] border-t border-[#1a1c22] text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#d4af37] text-black font-bold text-xs tracking-wider"
          >
            I UNDERSTAND
          </button>
        </div>
      </div>
    </div>
  );
};
