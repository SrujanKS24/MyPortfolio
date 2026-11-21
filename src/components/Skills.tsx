import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Cloud,
  Cpu,
  CheckCircle,
  Terminal,
  Layers,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

const categoryIcons: Record<string, React.ReactNode> = {
  'Programming Languages': <Code2 className="w-5 h-5 text-emerald-400" />,
  'Frontend Development': <Layout className="w-5 h-5 text-cyan-400" />,
  'Backend Development': <Server className="w-5 h-5 text-emerald-400" />,
  'Database Management': <Database className="w-5 h-5 text-amber-400" />,
  'Tools & DevOps': <Wrench className="w-5 h-5 text-violet-400" />,
  'Cloud Infrastructure': <Cloud className="w-5 h-5 text-blue-400" />,
  'Core Computer Science Concepts': <Cpu className="w-5 h-5 text-rose-400" />,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = PORTFOLIO_CONFIG.skills;

  const filteredCategories =
    selectedCategory === 'all'
      ? categories
      : categories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="02"
          badge="TECHNICAL ARSENAL"
          title="Skills & Engineering Competencies"
          subtitle="A comprehensive toolkit across systems programming, full-stack development, database architecture, and computer science foundations."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center gap-2 ${
              selectedCategory === 'all'
                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-sm'
                : 'bg-surface border border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/20'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>All Categories ({categories.length})</span>
          </button>

          {categories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                selectedCategory === cat.title
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-sm'
                  : 'bg-surface border border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/20'
              }`}
            >
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="p-6 rounded-2xl bg-surface border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 group flex flex-col justify-between hover:shadow-xl hover:shadow-black/40"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:scale-105 transition-transform duration-200">
                    {categoryIcons[category.title] || <Terminal className="w-5 h-5 text-emerald-400" />}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05]">
                    {category.skills.length} competencies
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white tracking-tight mb-1.5 group-hover:text-emerald-400 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-xs text-neutral-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges (strictly avoiding progress bars) */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`group/skill relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                        skill.highlight
                          ? 'bg-white/[0.06] text-neutral-200 border border-white/[0.12] hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-white'
                          : 'bg-white/[0.02] text-neutral-400 border border-white/[0.05] hover:border-white/20 hover:text-neutral-200'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${skill.highlight ? 'bg-emerald-400' : 'bg-neutral-500'}`} />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom engineering note */}
              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span className="flex items-center gap-1">
                  <Layers className="w-3 h-3 text-neutral-400" /> Production tested
                </span>
                <span className="text-emerald-400 font-semibold">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer philosophy banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-transparent border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Engineering Philosophy</h4>
              <p className="text-xs text-neutral-400">
                Skills are evaluated on real-world system architecture, maintainability, and clean code standards.
              </p>
            </div>
          </div>
          <div className="text-xs font-mono text-emerald-400 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 whitespace-nowrap">
            Zero Fake Progress Bars • 100% Practical
          </div>
        </motion.div>
      </div>
    </section>
  );
};
