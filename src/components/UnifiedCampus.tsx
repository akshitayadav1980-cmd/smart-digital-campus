import React from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  GraduationCap,
  BookMarked,
  FileCheck2,
  Wallet,
  UserCheck,
  Building,
  Radio,
  Layers,
  Check,
  RefreshCw
} from 'lucide-react';

interface SystemNode {
  name: string;
  category: string;
  icon: React.ElementType;
  description: string;
}

export const UnifiedCampus: React.FC = () => {
  const systems: SystemNode[] = [
    {
      name: 'ERP System',
      category: 'Enterprise Data',
      icon: Database,
      description: 'Student records, registry, employee and infrastructure databases.',
    },
    {
      name: 'LMS Portal',
      category: 'E-Learning',
      icon: GraduationCap,
      description: 'Moodle, Blackboard, Canvas courseware, assignments & submissions.',
    },
    {
      name: 'Library Management',
      category: 'Knowledge Hub',
      icon: BookMarked,
      description: 'RFID tracking, KOHA integration, digital repositories and IEEE journals.',
    },
    {
      name: 'Examination Cell',
      category: 'Assessments',
      icon: FileCheck2,
      description: 'Hall tickets, grade sheets, external marks moderation and transcripts.',
    },
    {
      name: 'Finance & Accounts',
      category: 'Transactions',
      icon: Wallet,
      description: 'Tuition fees, MPOnline gateway, scholarships, payroll and reimbursements.',
    },
    {
      name: 'Attendance Tracking',
      category: 'Biometrics & Logs',
      icon: UserCheck,
      description: 'Biometric sensors, RFID card taps, lecture registers and leave logs.',
    },
    {
      name: 'Hostel & Facilities',
      category: 'Campus Living',
      icon: Building,
      description: 'Room allotments, mess subscriptions, gate pass approval workflows.',
    },
    {
      name: 'Communication Engine',
      category: 'Broadcasting',
      icon: Radio,
      description: 'SMS gateways, university mailing lists, urgent campus emergency alerts.',
    },
  ];

  return (
    <section id="unified-campus" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3 border border-blue-200/80">
            <Layers className="w-3.5 h-3.5" />
            <span>Integration Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            One interface.{' '}
            <span className="text-blue-600">Multiple university systems.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            UniOS integrates existing university systems rather than replacing them. Universities keep their existing software, while students and faculty experience one unified, modern digital platform.
          </p>
        </div>

        {/* ARCHITECTURE HUB VISUAL */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden border border-slate-800">
          {/* Subtle Grid & Gradient inside dark container */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Core Hub Badge */}
          <div className="flex flex-col items-center justify-center text-center mb-12 relative z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 shadow-xl shadow-blue-500/25 border border-blue-400/40 inline-flex items-center gap-4 max-w-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shrink-0">
                <RefreshCw className="w-6 h-6 animate-spin text-blue-200" style={{ animationDuration: '10s' }} />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white tracking-tight">UniOS Core Integration Engine</h3>
                  <span className="text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-1.5 py-0.5 rounded">
                    Active
                  </span>
                </div>
                <p className="text-xs text-blue-100/90 font-normal">
                  Unified API Mesh • Bi-directional Sync • Zero Data Loss
                </p>
              </div>
            </motion.div>
            
            <p className="text-xs font-mono text-slate-400 mt-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Secure Enterprise Connector Fabric (REST / GraphQL / SAML 2.0 / Webhooks)
            </p>
          </div>

          {/* 8 Connected Satellite Systems Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {systems.map((sys, idx) => {
              const Icon = sys.icon;
              return (
                <motion.div
                  key={sys.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="group bg-slate-800/80 hover:bg-slate-800 rounded-xl p-4 border border-slate-700/80 hover:border-blue-500/60 transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-700/80 group-hover:bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0 border border-slate-600 group-hover:border-blue-500/50 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors truncate">
                          {sys.name}
                        </h4>
                        <span className="text-[9px] font-mono text-slate-400 uppercase bg-slate-900/60 px-1.5 py-0.5 rounded border border-slate-700 shrink-0">
                          Sync
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                        {sys.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Architectural Guarantee Ribbons */}
          <div className="mt-10 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-200">Non-Invasive Deployment</p>
                <p className="text-[11px] text-slate-400">Works alongside existing university IT infrastructure.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-200">Unified Single Sign-On</p>
                <p className="text-[11px] text-slate-400">One secure institutional credential for all campus services.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20 shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-200">Zero Data Duplication</p>
                <p className="text-[11px] text-slate-400">Direct real-time query orchestration with source databases.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
