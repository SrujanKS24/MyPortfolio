import React from 'react';
import { motion } from 'framer-motion';
import { Users, HeartHandshake, Sparkles, Trophy } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const Activities: React.FC = () => {
  const activities = PORTFOLIO_CONFIG.activities;

  return (
    <section id="activities" className="py-20 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="07"
          badge="LEADERSHIP & SERVICE"
          title="Campus Leadership & Community Outreach"
          subtitle="Contributing to technical community initiatives, hackathon coordination, and voluntary social impact programs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-6 sm:p-8 rounded-2xl bg-surface border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.06] text-cyan-400">
                    {index === 0 ? <Trophy className="w-6 h-6" /> : <HeartHandshake className="w-6 h-6" />}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 px-2.5 py-0.5 rounded bg-white/[0.04]">
                    {item.organization}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-neutral-400 border border-white/[0.06]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
