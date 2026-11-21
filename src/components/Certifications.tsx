import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cloud, Brain, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

const certIcons: Record<string, React.ReactNode> = {
  'AWS Certified Cloud Practitioner': <Cloud className="w-6 h-6 text-amber-400" />,
  'Large Language Model': <Brain className="w-6 h-6 text-cyan-400" />,
};

export const Certifications: React.FC = () => {
  const certifications = PORTFOLIO_CONFIG.certifications;

  return (
    <section id="certifications" className="py-20 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="06"
          badge="CREDENTIALS"
          title="Certifications & Specializations"
          subtitle="Formally recognized proficiencies across cloud infrastructure and generative AI models."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-6 sm:p-8 rounded-2xl bg-surface border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-black/50 relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all" />

              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.06] group-hover:scale-105 transition-transform">
                  {certIcons[cert.title] || <Award className="w-6 h-6 text-emerald-400" />}
                </div>

                {cert.badge && (
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                    {cert.badge}
                  </span>
                )}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1 group-hover:text-emerald-400 transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-xs sm:text-sm font-mono text-neutral-400 mb-4">
                Issuing Organization: <span className="text-neutral-200 font-semibold">{cert.issuer}</span>
              </p>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                {cert.description}
              </p>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Credential Verified</span>
                </div>
                <span>Industry Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
