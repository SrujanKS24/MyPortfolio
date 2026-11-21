import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Server,
  Layers,
  Database,
  Lock,
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { EcommerceMockup } from './EcommerceMockup';
import { ProjectModal } from './ProjectModal';
import { PORTFOLIO_CONFIG, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = PORTFOLIO_CONFIG.projects;
  const agrios = projects.find((p) => p.id === 'agrios')!;
  const ecommerce = projects.find((p) => p.id === 'ecommerce-platform')!;

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      {/* Background radial blurs */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <SectionHeading
          number="03"
          badge="FEATURED PROJECTS"
          title="Engineered for Scale & Reliability."
          subtitle="Real-world full-stack systems built with modular architecture, strict security primitives, and clean relational schemas."
        />

        {/* ========================================================
            PROJECT 1: AgriOS (Most Visually Prominent Project)
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-gradient-to-b from-[#10131C] to-[#0B0D14] border border-emerald-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08]">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  FLAGSHIP PROJECT
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/[0.06] text-neutral-300 font-mono text-xs">
                  Status: {agrios.status}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
                {agrios.title}
              </h3>
              
              <p className="text-sm sm:text-base text-emerald-300/90 font-mono">
                // {agrios.subtitle}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleOpenCaseStudy(agrios)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white font-medium text-xs sm:text-sm transition-all hover:scale-[1.02]"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>View Full Case Study</span>
              </button>

              <a
                href={agrios.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface border border-white/10 text-neutral-300 hover:text-white hover:border-emerald-500/40 transition-colors"
                title="View GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>

              {agrios.liveUrl && (
                <a
                  href={agrios.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Description & Specs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-neutral-200 text-base sm:text-lg leading-relaxed font-normal">
                {agrios.description}
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.05] space-y-2">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                  Core Engineering Capabilities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>JWT & HTTP-Only Refresh Tokens</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>Role-Based Access Control (RBAC)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>Farmer → Buyer Procurement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>Warehouse & Logistics Integration</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                  Technology Stack:
                </span>
                <div className="flex flex-wrap gap-2">
                  {agrios.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Architectural summary callout */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-surface/80 border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Server className="w-4 h-4" />
                <span>CLEAN BACKEND ARCHITECTURE</span>
              </div>
              <h4 className="text-sm font-semibold text-white">
                Controllers • Services • Repositories • Middleware
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Centralized error handling, input validation pipelines, parameterized queries via Prisma, and Dockerized multi-stage container deployment.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-cyan-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Trust RBAC Layer Active</span>
              </div>
            </div>
          </div>

          {/* Interactive Animated Architecture Visualization */}
          <div className="mt-8">
            <ArchitectureDiagram />
          </div>
        </motion.div>

        {/* ========================================================
            PROJECT 2: E-Commerce Web Application Platform
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-gradient-to-b from-[#11131C] to-[#0A0C12] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08]">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
                  FULL-STACK APPLICATION
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/[0.06] text-neutral-300 font-mono text-xs">
                  Status: {ecommerce.status}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {ecommerce.title}
              </h3>
              
              <p className="text-sm sm:text-base text-cyan-300/90 font-mono">
                // {ecommerce.subtitle}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleOpenCaseStudy(ecommerce)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white font-medium text-xs sm:text-sm transition-all hover:scale-[1.02]"
              >
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>View Full Case Study</span>
              </button>

              <a
                href={ecommerce.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface border border-white/10 text-neutral-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                title="View GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>

              {ecommerce.liveUrl && (
                <a
                  href={ecommerce.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Grid Layout: Narrative & Interactive Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-neutral-200 text-base sm:text-lg leading-relaxed">
                {ecommerce.description}
              </p>

              <div className="space-y-3">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                  Key Technical Features:
                </span>
                <div className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>Secure token authentication & encrypted user sessions</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>Debounced real-time product search & category filtering</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>Dynamic shopping cart with optimistic balance calculations</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>Atomic inventory management & transaction history logs</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>Automated test suites and cloud container deployment</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                  Technology Stack:
                </span>
                <div className="flex flex-wrap gap-2">
                  {ecommerce.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Mockup */}
            <div className="lg:col-span-7">
              <EcommerceMockup />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Deep Dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
