import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  CheckCircle,
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const Education: React.FC = () => {
  const educationList = PORTFOLIO_CONFIG.education;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-background">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="05"
          badge="ACADEMIC BACKGROUND"
          title="Education & Foundations"
          subtitle="A consistent history of academic dedication and core computer science training."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationList.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-surface border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-black/40 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 ${
                  index === 0
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                    : 'bg-gradient-to-r from-white/10 to-transparent'
                }`}
              />

              <div>
                {/* Year & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-emerald-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-neutral-400 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1">
                  {item.institution}
                </h3>
                
                <p className="text-xs sm:text-sm font-medium text-emerald-400 mb-0.5">
                  {item.degree}
                </p>
                <p className="text-xs text-neutral-400 mb-4 font-mono">
                  {item.field}
                </p>

                {/* Score Banner */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between mb-4">
                  <span className="text-xs text-neutral-400 font-mono">
                    {item.scoreType}
                  </span>
                  <span className="text-lg font-mono font-extrabold text-white">
                    {item.score}
                  </span>
                </div>

                {/* Highlights */}
                {item.highlights && (
                  <div className="space-y-1.5 text-xs text-neutral-400 leading-relaxed">
                    {item.highlights.map((h, i) => (
                      <p key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">›</span>
                        <span>{h}</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Location footer */}
              {item.location && (
                <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
