import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Users,
  Shield,
  Cpu,
  Database,
  Server,
  ArrowDown,
  Info,
  CheckCircle2,
  Lock,
} from 'lucide-react';

const architectureLayers = [
  {
    id: 'client',
    name: 'Frontend Client (React.js)',
    role: 'Presentation & State',
    details: 'React SPA, Vite, Tailwind CSS, Responsive Role Dashboards, Optimistic UI Updates',
    badge: 'Client Tier',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    icon: Layers,
  },
  {
    id: 'api',
    name: 'API Gateway & Security Middleware',
    role: 'Traffic & Boundary Protection',
    details: 'Express.js Router, Rate Limiting, CORS Policy, Cookie-Parser, Global Error Interceptor',
    badge: 'API Gateway',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/30',
    icon: Shield,
  },
  {
    id: 'auth',
    name: 'Authentication & RBAC Guard',
    role: 'Identity & Access Control',
    details: 'Stateless JWT validation, HTTP-only refresh tokens, Role-Based Access Control (RBAC) gates',
    badge: 'Auth Tier',
    color: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'border-purple-500/30',
    icon: Lock,
  },
  {
    id: 'controllers',
    name: 'Controllers Layer',
    role: 'HTTP Request Orchestration',
    details: 'Input validation (Zod/Joi), HTTP payload sanitization, HTTP status code response formatting',
    badge: 'Transport',
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
    icon: Cpu,
  },
  {
    id: 'services',
    name: 'Business Services Layer',
    role: 'Domain & Procurement Logic',
    details: 'Crop batch lifecycle, order bidding algorithms, warehouse allocation, multi-party dispute resolution',
    badge: 'Core Logic',
    color: 'from-emerald-500/20 to-cyan-500/20',
    borderColor: 'border-emerald-500/40',
    icon: Server,
  },
  {
    id: 'repositories',
    name: 'Repositories & ORM (Prisma)',
    role: 'Data Access Abstraction',
    details: 'Decoupled data access methods, parameterized safe queries, relational transactions',
    badge: 'Data Access',
    color: 'from-blue-500/20 to-purple-500/20',
    borderColor: 'border-blue-500/30',
    icon: Database,
  },
  {
    id: 'database',
    name: 'Relational Database (PostgreSQL)',
    role: 'Persistent Store & Integrity',
    details: 'ACID transactions, indexed foreign keys, crop catalogues, order ledgers, audit trails',
    badge: 'Storage',
    color: 'from-teal-500/20 to-emerald-500/20',
    borderColor: 'border-teal-500/40',
    icon: Database,
  },
];

const stakeholderRoles = [
  {
    name: 'Farmer',
    title: 'Crop Producer',
    desc: 'Lists seasonal crops, defines minimum batch pricing, views inspection grades, schedules warehouse intake.',
    color: '#10B981',
    badge: 'Primary Supplier',
  },
  {
    name: 'Buyer',
    title: 'Institutional Purchaser',
    desc: 'Discovers verified crops, places bids, monitors procurement contracts, executes escrow payments.',
    color: '#06B6D4',
    badge: 'Demand Side',
  },
  {
    name: 'Warehouse',
    title: 'Fulfillment & Storage',
    desc: 'Inspects moisture/grain grade, validates weighbridge data, assigns storage silos, confirms dispatch.',
    color: '#F59E0B',
    badge: 'Quality & Storage',
  },
  {
    name: 'Logistics',
    title: 'Fleet & Transit Partner',
    desc: 'Accepts route dispatch, updates transit checkpoints, logs GPS milestones, delivers to destination.',
    color: '#8B5CF6',
    badge: 'Distribution',
  },
  {
    name: 'Admin',
    title: 'Platform Governance',
    desc: 'Oversees RBAC roles, resolves transaction disputes, monitors system performance, tracks audit logs.',
    color: '#EC4899',
    badge: 'Governance',
  },
];

export const ArchitectureDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'roles'>('architecture');
  const [selectedLayer, setSelectedLayer] = useState<string>('services');

  return (
    <div className="rounded-2xl bg-[#090A0E] border border-white/10 p-5 sm:p-6 shadow-2xl overflow-hidden">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
        <div>
          <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
            System Design Specification
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span>AgriOS Engineering Architecture</span>
          </h4>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              activeTab === 'architecture'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Layered Pipeline
            </span>
          </button>

          <button
            onClick={() => setActiveTab('roles')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              activeTab === 'roles'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> Stakeholder Roles
            </span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="pt-6">
        {activeTab === 'architecture' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Pipeline Stack */}
            <div className="lg:col-span-7 space-y-2 relative">
              {architectureLayers.map((layer, index) => {
                const Icon = layer.icon;
                const isSelected = selectedLayer === layer.id;

                return (
                  <React.Fragment key={layer.id}>
                    <motion.div
                      onClick={() => setSelectedLayer(layer.id)}
                      whileHover={{ scale: 1.01 }}
                      className={`cursor-pointer p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                        isSelected
                          ? `bg-gradient-to-r ${layer.color} ${layer.borderColor} ring-1 ring-emerald-400/30 shadow-lg`
                          : 'bg-surface/70 border-white/[0.06] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            isSelected
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-white/[0.04] text-neutral-400'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-semibold text-white">
                              {layer.name}
                            </span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.05] text-neutral-300">
                              {layer.badge}
                            </span>
                          </div>
                          <span className="text-[11px] text-neutral-400 font-mono">
                            {layer.role}
                          </span>
                        </div>
                      </div>

                      <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                        {isSelected && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </motion.div>

                    {/* Downward flow connector */}
                    {index < architectureLayers.length - 1 && (
                      <div className="flex justify-center py-0.5">
                        <ArrowDown className="w-3.5 h-3.5 text-neutral-600 animate-pulse" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Layer Inspector Detail Box */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                {(() => {
                  const current = architectureLayers.find((l) => l.id === selectedLayer);
                  if (!current) return null;
                  const Icon = current.icon;

                  return (
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="p-5 rounded-2xl bg-surface border border-emerald-500/20 shadow-xl space-y-4"
                    >
                      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                        <div className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-emerald-400" />
                          <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
                            Layer Inspector
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">
                          {current.badge}
                        </span>
                      </div>

                      <div>
                        <h5 className="text-base font-bold text-white mb-1">{current.name}</h5>
                        <p className="text-xs font-mono text-cyan-300 mb-3">{current.role}</p>
                        <p className="text-xs text-neutral-300 leading-relaxed bg-black/40 p-3.5 rounded-xl border border-white/[0.04]">
                          {current.details}
                        </p>
                      </div>

                      <div className="space-y-2 pt-1 text-xs">
                        <div className="font-mono text-neutral-400 text-[11px] uppercase tracking-wider">
                          Key Architectural Guarantee:
                        </div>
                        <ul className="space-y-1.5 text-neutral-300 text-xs">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 font-mono">▸</span>
                            <span>Strict decoupling from outer delivery mechanisms</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 font-mono">▸</span>
                            <span>High unit-testability without active DB connection</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 font-mono">▸</span>
                            <span>Centralized error propagation & uniform HTTP responses</span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          /* Stakeholder Roles Grid */
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Multi-Role Procurement Ecosystem
              </span>
              <p className="text-xs text-neutral-400">
                Granular Role-Based Access Control (RBAC) guarantees that each participant accesses strictly authorized workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {stakeholderRoles.map((role) => (
                <div
                  key={role.name}
                  className="p-4 rounded-xl bg-surface border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded"
                        style={{ backgroundColor: `${role.color}15`, color: role.color }}
                      >
                        {role.name}
                      </span>
                    </div>
                    <h5 className="text-xs font-semibold text-white mb-1">{role.title}</h5>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">{role.desc}</p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-white/[0.05] flex items-center gap-1.5 text-[10px] font-mono text-neutral-500">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: role.color }} />
                    <span>RBAC Protected</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Workflow Pipeline Sequence visual */}
            <div className="p-4 rounded-xl bg-surface/50 border border-white/[0.06] flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-neutral-300">
              <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400">Farmer</span>
              <span>→</span>
              <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400">Buyer</span>
              <span>→</span>
              <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400">Warehouse</span>
              <span>→</span>
              <span className="px-2.5 py-1 rounded bg-purple-500/10 text-purple-400">Logistics</span>
              <span>→</span>
              <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-400">Admin</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
