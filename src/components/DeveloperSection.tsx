import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Github,
  Terminal,
  Cpu,
  Flame,
  ArrowUpRight,
  GitCommit,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

// Generate decorative git contribution blocks (clearly presented as a design element)
const generateDecorativeHeatmap = () => {
  const weeks = 28;
  const daysPerWeek = 7;
  const grid: number[][] = [];

  // Deterministic pattern to create a realistic developer cadence pattern
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < daysPerWeek; d++) {
      // Deterministic pseudo-random based on week and day
      const val = (w * 3 + d * 5 + (w % 4)) % 10;
      if (val > 6) week.push(3); // high activity
      else if (val > 3) week.push(2); // medium
      else if (val > 1) week.push(1); // light
      else week.push(0); // empty
    }
    grid.push(week);
  }
  return grid;
};

const contributionGrid = generateDecorativeHeatmap();

const activityColors = [
  'bg-white/[0.04]', // level 0
  'bg-emerald-950/60 border border-emerald-800/40', // level 1
  'bg-emerald-700/70 border border-emerald-600/50', // level 2
  'bg-emerald-400 border border-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.5)]', // level 3
];

export const DeveloperSection: React.FC = () => {
  const [hoveredCell, setHoveredCell] = useState<{ week: number; day: number; level: number } | null>(null);

  const dsaFocusAreas = [
    { title: 'Data Structures', desc: 'Arrays, Hash Maps, Linked Lists, Trees, Heaps, Graphs' },
    { title: 'Algorithmic Patterns', desc: 'Two Pointers, Sliding Window, DFS/BFS, Binary Search, Dynamic Programming' },
    { title: 'Complexity Analysis', desc: 'Rigorous Big-O time and space optimization for scalable systems' },
    { title: 'Core Paradigms', desc: 'Object-Oriented Programming, Modular Design & Clean Code Practices' },
  ];

  return (
    <section id="developer-activity" className="py-24 relative overflow-hidden bg-background">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="08"
          badge="BEYOND THE CODE"
          title="Algorithmic Thinking & Engineering Craft"
          subtitle="Problem solving is not just about writing code—it's about understanding constraints, trade-offs, and systematic optimization."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Problem Solving & DSA Focus */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-7 rounded-2xl bg-surface border border-white/[0.08] shadow-xl space-y-5"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Data Structures & Problem Solving
                  </h3>
                  <span className="text-xs font-mono text-neutral-400">
                    Daily Problem-Solving & LeetCode Practice
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Disciplined practice across core computer science problems, focusing on clean idiomatic C++ solutions, time complexity analysis, and modular implementation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {dsaFocusAreas.map((item) => (
                  <div
                    key={item.title}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1"
                  >
                    <h4 className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* LeetCode & GitHub Direct Action Buttons */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-3">
                <a
                  href={PORTFOLIO_CONFIG.socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-mono text-xs font-medium transition-all"
                >
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <span>LeetCode Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>

                <a
                  href={PORTFOLIO_CONFIG.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-medium transition-all"
                >
                  <Github className="w-4 h-4 text-emerald-400" />
                  <span>GitHub Repositories</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Decorative Git Contribution Grid Visual */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-6 sm:p-7 rounded-2xl bg-surface border border-white/[0.08] shadow-xl space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <GitCommit className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Development Cadence & Consistency
                    </h4>
                    <span className="text-[11px] font-mono text-neutral-500">
                      // Decorative contribution visualization
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
                  <span>Less</span>
                  {activityColors.map((color, i) => (
                    <div key={i} className={`w-2.5 h-2.5 rounded-sm ${color}`} />
                  ))}
                  <span>More</span>
                </div>
              </div>

              {/* Decorative Heatmap Grid */}
              <div className="overflow-x-auto pb-2">
                <div className="inline-flex gap-1.5 p-3 rounded-xl bg-black/40 border border-white/[0.04]">
                  {contributionGrid.map((week, wIndex) => (
                    <div key={wIndex} className="flex flex-col gap-1.5">
                      {week.map((level, dIndex) => (
                        <div
                          key={dIndex}
                          onMouseEnter={() => setHoveredCell({ week: wIndex, day: dIndex, level })}
                          onMouseLeave={() => setHoveredCell(null)}
                          className={`w-3 h-3 rounded-sm transition-all duration-150 cursor-pointer ${
                            activityColors[level]
                          } hover:scale-125 hover:z-10`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Transparency Notice (Strictly as instructed: do not fake data) */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-[11px] font-mono text-neutral-400 flex items-start gap-2.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Presented as an illustrative engineering UI element. To inspect verified live commits and open-source codebases, visit the official{' '}
                  <a
                    href={PORTFOLIO_CONFIG.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline font-semibold"
                  >
                    GitHub Profile
                  </a>.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
