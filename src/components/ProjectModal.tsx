import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Layers,
  Shield,
  Database,
  Terminal,
  Cpu,
  Server,
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project || !isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0D0F15] border border-white/10 rounded-2xl shadow-2xl z-10 text-neutral-200"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-5 sm:p-6 bg-[#0D0F15]/95 backdrop-blur-md border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                  Case Study • {project.status}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Subtitle & Summary */}
            <div>
              <h4 className="text-sm sm:text-base font-semibold text-emerald-300 font-mono mb-2">
                // {project.subtitle}
              </h4>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2.5">
                Engineered With:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.05] border border-white/[0.1] text-emerald-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Architectural Highlights */}
            {project.architecture && (
              <div className="p-5 rounded-xl bg-[#090A0E] border border-white/[0.06] space-y-4">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Layered Architecture Highlights</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {project.architecture.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-surface border border-white/[0.04] text-xs text-neutral-300 leading-relaxed flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Core Features & Deliverables */}
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3">
                Key Deliverables & Implemented Capabilities
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs sm:text-sm text-neutral-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions / Links */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white font-medium text-xs sm:text-sm transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code (GitHub)</span>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Preview</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
              >
                Close Case Study [ESC]
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
