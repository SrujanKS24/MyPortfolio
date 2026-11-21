import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Copy,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Sparkles,
  Info,
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject line';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write a message';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters long';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Prepare mailto link with encoded subject and body
    const emailTo = PORTFOLIO_CONFIG.socialLinks.email;
    const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hello Srujan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent via Portfolio Contact Form`
    );

    const mailtoUrl = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => {
      // Trigger client default mail app
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="09"
          badge="GET IN TOUCH"
          title="Let's build something meaningful."
          subtitle="I'm always interested in connecting with developers, collaborating on projects, and exploring software engineering opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Social Hub */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-white/[0.08] shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Direct Communication
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Whether you have an internship or full-time engineering opportunity, questions regarding my projects, or want to discuss systems architecture, feel free to reach out.
                </p>
              </div>

              {/* Email Card with 1-Click Copy */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2">
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                  Primary Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PORTFOLIO_CONFIG.socialLinks.email}`}
                    className="text-xs sm:text-sm font-mono text-emerald-400 hover:underline truncate"
                  >
                    {PORTFOLIO_CONFIG.socialLinks.email}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-emerald-500/20 text-neutral-300 hover:text-emerald-300 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="text-[11px] font-mono text-emerald-400 block">
                    ✓ Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-1">
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                  Current Base
                </span>
                <div className="flex items-center gap-2 text-neutral-200 text-sm">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{PORTFOLIO_CONFIG.personal.location}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3">
                  Connect On Platforms
                </span>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={PORTFOLIO_CONFIG.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-mono text-xs transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PORTFOLIO_CONFIG.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-mono text-xs transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Backend Integration Note */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-neutral-400 flex items-start gap-3">
              <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-neutral-300 font-semibold block mb-1">
                  How form submission works:
                </span>
                Validates all input fields client-side, then prepares and triggers a clean direct <code className="text-emerald-400">mailto:</code> request. To plug into an automated backend delivery service later, simply point to an API route using Resend, EmailJS, or NodeMailer.
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-white/[0.08] shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>Send a Message</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-300 block">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Chen"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-rose-500/60 focus:border-rose-500'
                          : 'border-white/10 focus:border-emerald-500/50'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-300 block">
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-rose-500/60 focus:border-rose-500'
                          : 'border-white/10 focus:border-emerald-500/50'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-300 block">
                    Subject <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineering Opportunity / AgriOS discussion"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all ${
                      errors.subject
                        ? 'border-rose-500/60 focus:border-rose-500'
                        : 'border-white/10 focus:border-emerald-500/50'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-300 block">
                    Message Content <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your project, team opportunity, or question..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-rose-500/60 focus:border-rose-500'
                        : 'border-white/10 focus:border-emerald-500/50'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-[1.01] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Opening Mail Client...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message (Direct Mail)</span>
                    </>
                  )}
                </button>
              </form>

              {/* Success Notification */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span>
                        Your email client has been triggered with the composed message! If it did not open automatically, you can also write directly to{' '}
                        <strong className="text-white">{PORTFOLIO_CONFIG.socialLinks.email}</strong>.
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
