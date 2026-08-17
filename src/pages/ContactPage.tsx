import React, { useState } from 'react';
import { PageId, ContactInquiryForm } from '../types';
import { STUDIO_CONFIG } from '../data/studioConfig';
import { supabase } from '../lib/supabase';
import { Mail, Phone, Send, CheckCircle2, Copy, Check, Loader2, AlertCircle } from 'lucide-react';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (errorMessage) setErrorMessage(null);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const { error } = await supabase.from('contact_messages').insert([
        {
          name: trimmedName,
          email: trimmedEmail,
          phone: formData.phone?.trim() || null,
          company: formData.company?.trim() || null,
          subject: formData.inquiryType || 'General Inquiry',
          message: trimmedMessage
        }
      ]);

      if (error) {
        setErrorMessage("We couldn't send your message right now. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: 'Film / Series',
        message: ''
      });
    } catch {
      setErrorMessage("We couldn't send your message right now. Please try again.");
      setIsSubmitting(false);
    }
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
          LET&apos;S TALK
        </h1>
        <p className="text-xs sm:text-base text-gray-400 max-w-2xl mx-auto">
          For film, production, acting, investment, licensing, commercial projects or creative collaborations, get in touch with Garvi Gujarat AI Studio.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Studio Contact Information */}
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
                {/* Email Address Block */}
                <div className="p-4 rounded-xl bg-[#14151d] border border-[#23201a] flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] text-gray-400 font-mono block">EMAIL ADDRESS</span>
                    <a
                      href={`mailto:${STUDIO_CONFIG.emailPlaceholder}`}
                      className="text-[#d4af37] hover:underline font-mono text-sm block"
                    >
                      {STUDIO_CONFIG.emailPlaceholder}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(STUDIO_CONFIG.emailPlaceholder, 'email')}
                    className="p-2 rounded bg-[#1c1e29] text-gray-300 hover:text-white"
                    title="COPY EMAIL"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Number Block */}
                <div className="p-4 rounded-xl bg-[#14151d] border border-[#23201a] flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] text-gray-400 font-mono block">PHONE NUMBER</span>
                    <a
                      href="tel:+919409682540"
                      className="text-[#d4af37] hover:underline font-mono text-sm block"
                    >
                      {STUDIO_CONFIG.phonePlaceholder}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(STUDIO_CONFIG.phonePlaceholder, 'phone')}
                    className="p-2 rounded bg-[#1c1e29] text-gray-300 hover:text-white"
                    title="COPY PHONE"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Social Links */}
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
                    MESSAGE RECEIVED
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting Garvi Gujarat AI Studio. Your message has been received. Our team will get back to you soon.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setErrorMessage(null);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        inquiryType: 'Film / Series',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded bg-[#1c1d27] text-[#d4af37] border border-[#d4af37]/40 font-bold text-xs uppercase hover:bg-[#d4af37] hover:text-black transition-all"
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

                  {errorMessage && (
                    <div className="p-3.5 rounded-lg bg-red-950/50 border border-red-500/50 text-red-200 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

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
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-md bg-gradient-to-r from-[#d4af37] via-[#fce080] to-[#b8860b] text-black font-extrabold text-xs tracking-widest uppercase hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2 shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>SENDING INQUIRY...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND INQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
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
