import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Code2,
  Terminal,
  Database,
  Server,
  Layers,
  Sparkles,
  CheckCircle2,
  Copy,
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

const roles = PORTFOLIO_CONFIG.personal.roles;

export const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'architecture' | 'api' | 'metrics'>('architecture');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Grid & Radial Glows */}
      <div className="absolute inset-0 bg-grid opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-10 -left-20 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PORTFOLIO_CONFIG.personal.availability}</span>
            </div>

            {/* Small introductory text & Name */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xs sm:text-sm font-mono tracking-widest text-emerald-400 uppercase font-semibold"
              >
                HELLO, I'M SRUJAN
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white"
              >
                {PORTFOLIO_CONFIG.personal.name}
              </motion.h1>

              {/* Subtitle / Roles */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-base sm:text-xl font-medium text-neutral-300">
                  Computer Science Engineer
                </span>
                <span className="text-neutral-600 hidden sm:inline">•</span>
                <div className="inline-flex items-center h-8 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentRoleIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-base sm:text-xl font-mono font-semibold text-emerald-400 flex items-center gap-1.5"
                    >
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      {roles[currentRoleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="space-y-2"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-100 leading-snug">
                Building digital experiences. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Engineering solutions.
                </span>
              </h2>

              <p className="text-xs sm:text-sm font-mono text-neutral-500 tracking-wider">
                // {PORTFOLIO_CONFIG.personal.headlines.secondary}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed"
            >
              {PORTFOLIO_CONFIG.personal.description}
            </motion.p>

            {/* Buttons / CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] hover:scale-[1.02]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href={PORTFOLIO_CONFIG.socialLinks.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0D0F15] hover:bg-[#131620] border border-white/10 hover:border-white/20 text-neutral-200 font-medium text-sm transition-all duration-200 hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links & Quick Contact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-5 pt-4 border-t border-white/[0.08]"
            >
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Connect:
              </span>

              <div className="flex items-center gap-2">
                <a
                  href={PORTFOLIO_CONFIG.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-surface border border-white/10 text-neutral-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PORTFOLIO_CONFIG.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-surface border border-white/10 text-neutral-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={PORTFOLIO_CONFIG.socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="p-2.5 rounded-lg bg-surface border border-white/10 text-neutral-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-200 font-mono font-bold text-xs flex items-center justify-center w-9 h-9"
                  title="LeetCode"
                >
                  <Code2 className="w-4 h-4" />
                </a>

                <div className="relative">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-white/10 text-neutral-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-200 text-xs font-mono"
                    title="Click to copy email"
                  >
                    <Mail className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{PORTFOLIO_CONFIG.socialLinks.email}</span>
                    {copiedEmail ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3 h-3 text-neutral-400" />
                    )}
                  </button>
                  {copiedEmail && (
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-mono text-emerald-400 bg-black/90 px-2 py-0.5 rounded border border-emerald-500/40 whitespace-nowrap">
                      Copied to clipboard!
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Developer-Themed Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Backlight */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>

            {/* Terminal Window Container */}
            <div className="relative rounded-2xl bg-[#0D0F15] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#08090C] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-neutral-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    srujan@workspace:~
                  </span>
                </div>

                {/* Status Dot */}
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase">SYS: ACTIVE</span>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="flex items-center border-b border-white/[0.06] bg-[#090A0E] px-2 pt-1 gap-1 overflow-x-auto text-xs font-mono">
                <button
                  onClick={() => setActiveCodeTab('architecture')}
                  className={`px-3 py-1.5 rounded-t-md flex items-center gap-1.5 transition-colors ${
                    activeCodeTab === 'architecture'
                      ? 'bg-[#0D0F15] text-emerald-400 border-t-2 border-emerald-400'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>AgriOS.architecture.ts</span>
                </button>
                <button
                  onClick={() => setActiveCodeTab('api')}
                  className={`px-3 py-1.5 rounded-t-md flex items-center gap-1.5 transition-colors ${
                    activeCodeTab === 'api'
                      ? 'bg-[#0D0F15] text-cyan-400 border-t-2 border-cyan-400'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  <Server className="w-3.5 h-3.5" />
                  <span>routes.auth.ts</span>
                </button>
                <button
                  onClick={() => setActiveCodeTab('metrics')}
                  className={`px-3 py-1.5 rounded-t-md flex items-center gap-1.5 transition-colors ${
                    activeCodeTab === 'metrics'
                      ? 'bg-[#0D0F15] text-violet-400 border-t-2 border-violet-400'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>runtime.json</span>
                </button>
              </div>

              {/* Code Snippet Viewer */}
              <div className="p-4 sm:p-5 font-mono text-[12px] sm:text-[13px] leading-relaxed overflow-x-auto min-h-[310px] bg-[#0D0F15]/95">
                {activeCodeTab === 'architecture' && (
                  <motion.div
                    key="architecture"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-1.5"
                  >
                    <div className="text-neutral-500">// Multi-Stakeholder Agricultural Core</div>
                    <div className="text-neutral-300">
                      <span className="text-purple-400">export const</span>{' '}
                      <span className="text-blue-400">AgriOSPipeline</span> = {'{'}
                    </div>
                    <div className="pl-4 text-neutral-300">
                      <span className="text-cyan-400">roles</span>: [
                      <span className="text-emerald-300">'Farmer'</span>,{' '}
                      <span className="text-emerald-300">'Buyer'</span>,{' '}
                      <span className="text-emerald-300">'Warehouse'</span>,{' '}
                      <span className="text-emerald-300">'Logistics'</span>,{' '}
                      <span className="text-emerald-300">'Admin'</span>],
                    </div>
                    <div className="pl-4 text-neutral-300">
                      <span className="text-cyan-400">architecture</span>: {'{'}
                    </div>
                    <div className="pl-8 text-neutral-300">
                      pattern: <span className="text-emerald-300">'Controller → Service → Repository'</span>,
                    </div>
                    <div className="pl-8 text-neutral-300">
                      security: <span className="text-emerald-300">'JWT + HTTP-Only Refresh + RBAC'</span>,
                    </div>
                    <div className="pl-8 text-neutral-300">
                      database: <span className="text-emerald-300">'PostgreSQL (Prisma ORM)'</span>,
                    </div>
                    <div className="pl-4 text-neutral-300">{'}'},</div>
                    <div className="pl-4 text-neutral-300">
                      <span className="text-amber-400">executeOrderWorkflow</span>:{' '}
                      <span className="text-purple-400">async</span> (orderId) =&gt; {'{'}
                    </div>
                    <div className="pl-8 text-emerald-400">
                      <span className="text-neutral-400">await</span> ProcurementService.settle(orderId);
                    </div>
                    <div className="pl-8 text-neutral-400">
                      return {'{ status: '} <span className="text-emerald-300">'SETTLED_200'</span> {'}'};
                    </div>
                    <div className="pl-4 text-neutral-300">{'}'}</div>
                    <div className="text-neutral-300">{'};'}</div>
                  </motion.div>
                )}

                {activeCodeTab === 'api' && (
                  <motion.div
                    key="api"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-1.5"
                  >
                    <div className="text-neutral-500">// RESTful Route Handlers & Guards</div>
                    <div className="text-neutral-300">
                      <span className="text-purple-400">router</span>.
                      <span className="text-amber-400">post</span>(
                      <span className="text-emerald-300">'/api/v1/auth/refresh'</span>,
                    </div>
                    <div className="pl-4 text-neutral-300">
                      verifyHttpOnlyCookie,
                    </div>
                    <div className="pl-4 text-neutral-300">
                      rateLimiter({'{ max: '} <span className="text-orange-400">5</span> {'}'}),
                    </div>
                    <div className="pl-4 text-neutral-300">
                      <span className="text-purple-400">async</span> (req, res, next) =&gt; {'{'}
                    </div>
                    <div className="pl-8 text-neutral-300">
                      <span className="text-purple-400">const</span> token = <span className="text-neutral-400">await</span> AuthService.rotateSession(req.cookies.refreshToken);
                    </div>
                    <div className="pl-8 text-neutral-300">
                      res.status(<span className="text-orange-400">200</span>).json({'{ accessToken: token }'});
                    </div>
                    <div className="pl-4 text-neutral-300">{'}'}</div>
                    <div className="text-neutral-300">);</div>
                  </motion.div>
                )}

                {activeCodeTab === 'metrics' && (
                  <motion.div
                    key="metrics"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-1.5"
                  >
                    <div className="text-neutral-500">// Core Engineering Snapshot</div>
                    <div className="text-neutral-300">{'{'}</div>
                    <div className="pl-4 text-neutral-300">
                      <span className="text-cyan-400">"engineer"</span>: <span className="text-emerald-300">"Srujan K S"</span>,
                    </div>
                    <div className="pl-4 text-neutral-300">
                      <span className="text-cyan-400">"institution"</span>: <span className="text-emerald-300">"BMSIT & M, Bengaluru"</span>,
                    </div>
                    <div className="pl-4 text-neutral-300">
                      <span className="text-cyan-400">"cgpa"</span>: <span className="text-orange-400">8.41</span>,
                    </div>
                    <div className="pl-4 text-neutral-300">
                      <span className="text-cyan-400">"stack"</span>: [<span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"PostgreSQL"</span>, <span className="text-emerald-300">"Docker"</span>],
                    </div>
                    <div className="pl-4 text-neutral-300">
                      <span className="text-cyan-400">"systemHealth"</span>: <span className="text-emerald-400">"OPTIMAL"</span>,
                    </div>
                    <div className="pl-4 text-neutral-300">
                      <span className="text-cyan-400">"latency"</span>: <span className="text-emerald-300">"~14ms"</span>
                    </div>
                    <div className="text-neutral-300">{'}'}</div>
                  </motion.div>
                )}
              </div>

              {/* Status bar */}
              <div className="px-4 py-2.5 bg-[#08090C] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" /> UTF-8
                  </span>
                  <span>TypeScript 5.7</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500">Node: v24.x</span>
                  <span className="text-emerald-400 font-semibold">200 OK</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges around Visual */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 px-3 py-1.5 rounded-lg bg-surface/90 border border-emerald-500/30 backdrop-blur-md shadow-lg flex items-center gap-2 text-xs font-mono text-emerald-300 hidden sm:flex"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
              <span>PostgreSQL + Prisma</span>
            </motion.div>

            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -bottom-5 -left-4 px-3 py-1.5 rounded-lg bg-surface/90 border border-cyan-500/30 backdrop-blur-md shadow-lg flex items-center gap-2 text-xs font-mono text-cyan-300 hidden sm:flex"
            >
              <Server className="w-3.5 h-3.5 text-cyan-400" />
              <span>Layered Architecture</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
