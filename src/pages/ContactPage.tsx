import React, { useState } from 'react';
import { PageId, ContactInquiryForm } from '../types';
import { STUDIO_CONFIG } from '../data/studioConfig';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, Copy, Check, Building2, User } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactInquiryForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'Film / Series',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields (Name, Email, Message).');
      return;
    }
    setIsSubmitted(true);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div id="contact-page" className="py-24 bg-[#0a0b0d] min-h-screen space-y-16">
      {/* Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-12">
        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase">
          CONNECT WITH US
        </span>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-wider">
          LET'S TALK
        </h1>
        <p className="text-xs sm:text-base text-gray-400 max-w-2xl mx-auto">
          For film, production, acting, investment, licensing, commercial projects or creative collaborations, get in touch with Garvi Gujarat AI Studio.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Studio Contact Information & Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0e0f14] border border-[#23201a] rounded-2xl p-8 space-y-6">
              <div className="space-y-1 border-b border-[#1f2029] pb-4">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  STUDIO LEADERSHIP
                </span>
                <h3 className="font-cinzel font-bold text-2xl text-white">
                  {STUDIO_CONFIG.founderName}
                </h3>
                <p className="text-xs font-semibold text-[#d4af37]">
                  {STUDIO_CONFIG.founderTitle}
                </p>
              </div>

              <div className="space-y-4 text-xs">
                {/* Email Placeholder Block */}
                <div className="p-4 rounded-xl bg-[#14151d] border border-[#23201a] flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] text-gray-400 font-mono block">EMAIL ADDRESS</span>
                    <code className="text-[#d4af37] font-mono text-sm block">{STUDIO_CONFIG.emailPlaceholder}</code>
                  </div>
                  <button
                    onClick={() => copyToClipboard(STUDIO_CONFIG.emailPlaceholder, 'email')}
                    className="p-2 rounded bg-[#1c1e29] text-gray-300 hover:text-white"
                    title="Copy Placeholder"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Placeholder Block */}
                <div className="p-4 rounded-xl bg-[#14151d] border border-[#23201a] flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] text-gray-400 font-mono block">PHONE NUMBER</span>
                    <code className="text-[#d4af37] font-mono text-sm block">{STUDIO_CONFIG.phonePlaceholder}</code>
                  </div>
                  <button
                    onClick={() => copyToClipboard(STUDIO_CONFIG.phonePlaceholder, 'phone')}
                    className="p-2 rounded bg-[#1c1e29] text-gray-300 hover:text-white"
                    title="Copy Placeholder"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Placeholder Block */}
                <div className="p-4 rounded-xl bg-[#14151d] border border-[#23201a] flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] text-gray-400 font-mono block">WHATSAPP CHANNEL</span>
                    <code className="text-[#d4af37] font-mono text-sm block">{STUDIO_CONFIG.whatsappPlaceholder}</code>
                  </div>
                  <button
                    onClick={() => copyToClipboard(STUDIO_CONFIG.whatsappPlaceholder, 'whatsapp')}
                    className="p-2 rounded bg-[#1c1e29] text-gray-300 hover:text-white"
                    title="Copy Placeholder"
                  >
                    {copiedField === 'whatsapp' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Social Links Placeholder */}
                <div className="p-4 rounded-xl bg-[#14151d] border border-[#23201a] space-y-2">
                  <span className="text-[10px] text-gray-400 font-mono block">SOCIAL CHANNELS</span>
                  <p className="text-xs text-gray-300">
                    YouTube: <a href={STUDIO_CONFIG.socials.youtube} target="_blank" rel="noreferrer" className="text-[#d4af37] underline">@garvigujarataistudio</a>
                  </p>
                  <p className="text-xs text-gray-300">
                    Instagram: <a href={STUDIO_CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="text-[#d4af37] underline">@garvigujarat_aistudio</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0e0f14] border border-[#d4af37]/30 rounded-2xl p-8 sm:p-10 shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-cinzel font-bold text-2xl text-white">
                    INQUIRY TRANSMITTED SUCCESSFULLY
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry for <strong className="text-[#d4af37]">{formData.inquiryType}</strong> has been logged. Producer Jayraj Solanki & our studio development team will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        inquiryType: 'Film / Series',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded bg-[#1c1d27] text-[#d4af37] border border-[#d4af37]/40 font-bold text-xs uppercase"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-cinzel font-bold text-2xl text-white mb-1">
                      SEND AN INQUIRY
                    </h3>
                    <p className="text-xs text-gray-400">
                      Fill out the form below to initiate communication with Garvi Gujarat AI Studio.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-300 tracking-wider">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-lg bg-[#14151d] border border-[#23201a] focus:border-[#d4af37] text-white text-xs outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-300 tracking-wider">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="yourname@domain.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#14151d] border border-[#23201a] focus:border-[#d4af37] text-white text-xs outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-300 tracking-wider">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 rounded-lg bg-[#14151d] border border-[#23201a] focus:border-[#d4af37] text-white text-xs outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-300 tracking-wider">
                        COMPANY / ORGANIZATION
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Production house / Agency name"
                        className="w-full px-4 py-3 rounded-lg bg-[#14151d] border border-[#23201a] focus:border-[#d4af37] text-white text-xs outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-300 tracking-wider">
                      INQUIRY TYPE *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#14151d] border border-[#23201a] focus:border-[#d4af37] text-white text-xs outline-none transition-colors"
                    >
                      <option value="Film / Series">Film / Series Production</option>
                      <option value="Acting / Casting">Acting / Casting Opportunity</option>
                      <option value="Investment / Production Partnership">Investment / Co-Production Partnership</option>
                      <option value="Commercial Project">Commercial / Advertising Project</option>
                      <option value="Licensing / Distribution">Licensing / OTT Distribution</option>
                      <option value="Creative Partnership">Creative Partnership (Writer, VFX, Music)</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-300 tracking-wider">
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Please describe your proposal, project overview, or collaboration request..."
                      className="w-full px-4 py-3 rounded-lg bg-[#14151d] border border-[#23201a] focus:border-[#d4af37] text-white text-xs outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-md bg-gradient-to-r from-[#d4af37] via-[#fce080] to-[#b8860b] text-black font-extrabold text-xs tracking-widest uppercase hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-xl"
                  >
                    <span>SEND INQUIRY</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
