import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Users,
  ShieldCheck,
  ArrowRight,
  Check,
  Calendar,
  Award,
  BookOpen,
  ClipboardList,
  BarChart3,
  Sliders,
  X,
  FileCheck
} from 'lucide-react';

interface RoleData {
  id: string;
  role: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  badge: string;
  primaryColor: string;
  features: string[];
  previewHighlights: { title: string; subtitle: string; icon: React.ElementType }[];
}

export const RoleExperience: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<RoleData | null>(null);

  const roles: RoleData[] = [
    {
      id: 'student',
      role: 'Student',
      tagline: 'Learn, manage, apply and stay connected.',
      badge: 'Academic Journey',
      icon: GraduationCap,
      primaryColor: 'from-blue-600 to-sky-600',
      description:
        'A single daily cockpit for students: attend lectures, register for semester courses, pay fees via MPOnline, apply for hostel outpasses, and track examination hall tickets.',
      features: [
        'Live dynamic timetable and lecture venue alerts',
        'Official marksheet verification & transcript requests',
        'Direct fee settlement with receipt archive',
        'Hostel room allotment & gate pass requests',
        'Access to course syllabi and assignments',
      ],
      previewHighlights: [
        { title: 'Unified Class Timetable', subtitle: 'Syncs with Google/Apple calendar', icon: Calendar },
        { title: 'Credit & CGPA Ledger', subtitle: 'Automated grade point calculations', icon: Award },
        { title: 'One-Tap Campus Pass', subtitle: 'Hostel, library & lab barcode access', icon: FileCheck },
      ],
    },
    {
      id: 'faculty',
      role: 'Faculty',
      tagline: 'Manage academic activities and student information.',
      badge: 'Teaching & Mentorship',
      icon: Users,
      primaryColor: 'from-indigo-600 to-blue-700',
      description:
        'Streamline teaching obligations with instant biometric attendance marking, continuous internal evaluation (CIE) score submissions, and student mentorship records.',
      features: [
        'Single-click lecture attendance logging',
        'Internal assessment & semester grade submission',
        'Digital leave applications & substitute teacher allocation',
        'Student mentee academic performance alerts',
        'Research grant and departmental circular access',
      ],
      previewHighlights: [
        { title: 'Lecture Attendance Grid', subtitle: 'Automated 75% threshold tracking', icon: ClipboardList },
        { title: 'Evaluation & Moderation', subtitle: 'Direct grade sheet lock to examination cell', icon: BookOpen },
        { title: 'Mentee Risk Radar', subtitle: 'Early warning for struggling students', icon: BarChart3 },
      ],
    },
    {
      id: 'admin',
      role: 'Administrator',
      tagline: 'Monitor services, requests and campus operations.',
      badge: 'Governance & Operations',
      icon: ShieldCheck,
      primaryColor: 'from-slate-900 to-blue-900',
      description:
        'Holistic institutional visibility: approve multi-stage student grievances, reconcile fee payments with government gateways, audit compliance, and broadcast notices.',
      features: [
        'University-wide service request resolution queues',
        'Real-time fee reconciliation dashboards',
        'Affiliation and accreditation compliance reports',
        'Campus-wide emergency alerts and circular dispatch',
        'Multi-department audit log tracking and RBAC',
      ],
      previewHighlights: [
        { title: 'Central Grievance Engine', subtitle: 'SLA-tracked student request workflow', icon: Sliders },
        { title: 'Revenue Reconciliation', subtitle: 'MPOnline gateway batch reconciliation', icon: BarChart3 },
        { title: 'Role Access Manager', subtitle: 'Granular campus permission control', icon: ShieldCheck },
      ],
    },
  ];

  return (
    <section id="roles" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wider uppercase mb-3 border border-slate-200">
            <span>Tailored Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Designed for every role{' '}
            <span className="text-blue-600">on campus.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every member of the university ecosystem receives a personalized, clutter-free perspective engineered for their daily responsibilities.
          </p>
        </div>

        {/* 3 Large Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, idx) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Top Subtle Color Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${role.primaryColor}`} />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5 pt-1">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-2xs">
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200/70">
                      {role.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                    {role.role}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 mb-4">
                    "{role.tagline}"
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {role.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                    {role.features.slice(0, 4).map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-200/60">
                          <Check className="w-2.5 h-2.5" strokeWidth={3} />
                        </div>
                        <span className="font-medium leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore Button */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedRole(role)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-800 hover:text-white font-semibold text-xs tracking-wide uppercase transition-all duration-200 group-hover:border-blue-500 border border-slate-200 shadow-2xs"
                  >
                    <span>Explore {role.role} View</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Role Preview Modal */}
      <AnimatePresence>
        {selectedRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative"
            >
              <button
                onClick={() => setSelectedRole(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                  <selectedRole.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{selectedRole.role} Portal Preview</h3>
                  <p className="text-xs text-blue-600 font-semibold">{selectedRole.tagline}</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                {selectedRole.description}
              </p>

              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Dashboard Modules
                </h4>
                {selectedRole.previewHighlights.map((hl) => {
                  const HlIcon = hl.icon;
                  return (
                    <div key={hl.title} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white text-blue-600 flex items-center justify-center shrink-0 border border-slate-200 shadow-2xs">
                        <HlIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">{hl.title}</p>
                        <p className="text-[11px] text-slate-500">{hl.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-400">UniOS Role Architecture</span>
                <button
                  onClick={() => setSelectedRole(null)}
                  className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
