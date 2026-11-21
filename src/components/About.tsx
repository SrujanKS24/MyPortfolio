import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  MapPin,
  Clock,
  Compass,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  Code,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const About: React.FC = () => {
  const [bengaluruTime, setBengaluruTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in IST (UTC+5:30)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setBengaluruTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="01"
          badge="ABOUT ME"
          title="Engineering systems with precision & purpose."
          subtitle="A dedicated Computer Science Engineer driven by a passion for backend architecture, scalable applications, and reliable engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative Story & Engineering Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-2xl bg-surface/80 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden space-y-4"
            >
              <div className="absolute top-0 left-0 h-1 w-24 bg-gradient-to-r from-emerald-500 to-cyan-500" />

              <p className="text-neutral-200 text-base sm:text-lg leading-relaxed">
                I'm a Computer Science Engineering student at <strong className="text-white font-semibold">BMS Institute of Technology and Management</strong> with a strong interest in software engineering and full-stack development.
              </p>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                I enjoy building applications that solve real-world problems, understanding how systems work behind the scenes, and continuously improving my engineering skills.
              </p>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                My experience includes developing full-stack applications, designing REST APIs, implementing authentication systems, working with databases, and structuring maintainable backend architectures.
              </p>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed pt-2 border-t border-white/[0.06]">
                Currently, I'm focused on strengthening my software engineering fundamentals, backend development skills, and problem-solving abilities while building meaningful projects.
              </p>

              {/* Developer Journey Highlights */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Modular Architecture</h4>
                    <p className="text-[12px] text-neutral-400">Clean Controller-Service-Repository decoupling</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Robust Security</h4>
                    <p className="text-[12px] text-neutral-400">JWTs, HTTP-only cookies & granular RBAC</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Relational Data</h4>
                    <p className="text-[12px] text-neutral-400">PostgreSQL schema design & query integrity</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Algorithmic Problem Solving</h4>
                    <p className="text-[12px] text-neutral-400">Strong foundation in DSA, C++, and OOP</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Core Interests Tag Pills */}
            <div className="p-5 rounded-2xl bg-surface/50 border border-white/[0.06]">
              <span className="text-xs font-mono text-neutral-400 block mb-3 uppercase tracking-wider">
                Key Technical Interests & Domains
              </span>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_CONFIG.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-neutral-300 border border-white/[0.08] hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Metric & Persona Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Education Card */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-surface border border-white/[0.08] hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-white/5">
                  2023 – 2027
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white">BMSIT & Management</h3>
              <p className="text-xs text-neutral-400 mt-1">Bachelor of Engineering</p>
              <p className="text-xs font-mono text-emerald-400 mt-1">Computer Science</p>
            </motion.div>

            {/* CGPA Card */}
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-surface border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all" />
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  Academic Standing
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-white tracking-tight">8.41</span>
                <span className="text-xs font-mono text-neutral-400">/ 10 CGPA</span>
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                Consistent academic track record at BMSIT Computer Science.
              </p>
            </motion.div>

            {/* Location & Time Card */}
            <motion.div
              custom={3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-surface border border-white/[0.08] hover:border-white/20 transition-all duration-300 group sm:col-span-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Bengaluru, India</h3>
                    <p className="text-xs text-neutral-400">India's Premier Tech & Startup Capital</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-cyan-300">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{bengaluruTime || 'Loading...'} IST</span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Operating within the vibrant Indian tech ecosystem, closely collaborating with engineers and building modern software.
              </p>
            </motion.div>

            {/* Current Focus Card */}
            <motion.div
              custom={4}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-gradient-to-br from-surface to-background-elevated border border-white/[0.08] hover:border-white/20 transition-all duration-300 sm:col-span-2"
            >
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-emerald-400">
                <Compass className="w-4 h-4" />
                <span>CURRENT TECHNICAL FOCUS</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">
                Backend Architecture, Scalable APIs & Cloud Workflows
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Delving deep into distributed systems concepts, PostgreSQL query optimization, JWT/session management, and Docker microservices containerization.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
