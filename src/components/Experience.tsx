import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Lock,
  GitBranch,
  Terminal,
  CheckCircle2,
  Calendar,
  Layers,
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { PORTFOLIO_CONFIG, ExperienceItem } from '../data/portfolioData';

const experienceIcons: Record<string, React.ReactNode> = {
  'Full-Stack Project Development': <Layers className="w-5 h-5 text-emerald-400" />,
  'Backend Architecture & Service Design': <Server className="w-5 h-5 text-cyan-400" />,
  'Database Modeling & Query Engineering': <Database className="w-5 h-5 text-amber-400" />,
  'Authentication & Security Systems': <Lock className="w-5 h-5 text-purple-400" />,
  'Software Engineering & Problem Solving': <Code2 className="w-5 h-5 text-rose-400" />,
};

export const Experience: React.FC = () => {
  const experiences = PORTFOLIO_CONFIG.experienceBuilding;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="04"
          badge="HANDS-ON JOURNEY"
          title="Experience Through Building"
          subtitle="Honest, transparent engineering milestones developed by authoring full-stack systems, architectural patterns, and production-tested code."
        />

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-10 border-l border-white/[0.08] ml-2 sm:ml-4">
          {experiences.map((exp: ExperienceItem, index: number) => {
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Node Point */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-[#08090C] border-2 border-emerald-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-7 rounded-2xl bg-surface border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 shadow-xl group-hover:shadow-black/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                        {experienceIcons[exp.title] || <Terminal className="w-5 h-5 text-emerald-400" />}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {exp.title}
                        </h3>
                        <span className="text-xs font-mono text-emerald-400">
                          // {exp.focus}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-neutral-400 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-5">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="pt-3 border-t border-white/[0.05] flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.03] text-neutral-300 border border-white/[0.05]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
