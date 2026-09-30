import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Calendar,
  Clock,
  CheckCircle2,
  Bell,
  BookOpen,
  CreditCard,
  Building2,
  ChevronRight,
  TrendingUp,
  FileText
} from 'lucide-react';

interface HeroProps {
  onExploreClick?: () => void;
  onHowItWorksClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onHowItWorksClick }) => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Background Subtle Ambient Glow & Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-100/40 via-sky-100/30 to-indigo-100/30 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO HEADLINE & CTAS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wide uppercase shadow-2xs mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>SMART UNIVERSITY DIGITAL CAMPUS</span>
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6">
              Your University,{<br className="hidden sm:inline" />}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Connected.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
              One unified platform for students, faculty and administrators to access academic, administrative and campus services seamlessly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                onClick={onExploreClick ? onExploreClick : () => handleScroll('platform')}
                className="flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all duration-200 group text-base"
              >
                <span>Explore Platform</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onHowItWorksClick ? onHowItWorksClick : () => handleScroll('how-it-works')}
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3.5 rounded-xl border border-slate-300/90 hover:border-slate-400 text-base shadow-2xs transition-all duration-200"
              >
                <span>See How It Works</span>
              </button>
            </div>

            {/* Trust / Feature Line */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 pt-2 border-t border-slate-200/80 w-full max-w-lg">
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                Academic
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                Administrative
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                Campus Services
              </span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: SOPHISTICATED DASHBOARD MOCKUP */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            {/* Ambient Background Glow Behind Dashboard */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-sky-500/10 rounded-3xl blur-2xl -z-10" />

            {/* FLOATING CARD 1: Attendance 86% (Top Left/Center) */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -top-6 -left-2 sm:-left-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-slate-200/80 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs border border-emerald-100">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-900">Attendance 86%</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-[11px] text-slate-500 font-medium">Eligible for Sem Exam</p>
              </div>
            </motion.div>

            {/* FLOATING CARD 2: Next Class 10:30 AM (Top Right) */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="absolute -top-7 right-0 sm:-right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-slate-200/80 flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Next Class 10:30 AM</p>
                <p className="text-[11px] text-slate-500 font-medium">Algorithms • Room 402</p>
              </div>
            </motion.div>

            {/* FLOATING CARD 3: 3 New Notifications (Bottom Left/Center) */}
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-5 left-4 sm:left-8 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-slate-200/80 flex items-center gap-2.5"
            >
              <div className="relative">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
                  <Bell className="w-4 h-4" />
                </div>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-rose-500 ring-2 ring-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">3 New Notifications</p>
                <p className="text-[11px] text-slate-500 font-medium">Exam form & library clearance</p>
              </div>
            </motion.div>

            {/* MAIN DASHBOARD MOCKUP CONTAINER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              {/* Window Title Bar */}
              <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                    unios.campus.edu/portal/student
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-blue-400 bg-blue-950/70 border border-blue-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Live Portal Mockup
                  </span>
                </div>
              </div>

              {/* Dashboard Content Canvas */}
              <div className="p-4 sm:p-5 bg-slate-50/60 space-y-4">
                {/* Top Profile Strip */}
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-2xs flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                      AS
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-slate-900">Aarav Sharma</h4>
                        <span className="text-[10px] font-semibold bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded border border-blue-200/60">
                          B.Tech CSE • Sem VI
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-mono">ID: MP-2023-89410 • University Campus</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-col items-end">
                    <span className="text-[11px] font-medium text-slate-500">Academic Standing</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      Good Standing (CGPA 8.74)
                    </span>
                  </div>
                </div>

                {/* 2-Column Metric Tiles: Timetable & Academic Status */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Today's Timetable */}
                  <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-2xs">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                        <Calendar className="w-3.5 h-3.5 text-blue-600" />
                        <span>Today's Timetable</span>
                      </div>
                      <span className="text-[10px] text-blue-600 font-semibold">3 Lectures</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-blue-50/70 border border-blue-100">
                        <div>
                          <p className="text-xs font-semibold text-slate-900">Distributed Systems</p>
                          <p className="text-[10px] text-slate-500">10:30 AM • Hall 402</p>
                        </div>
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-100/80 px-1.5 py-0.5 rounded">
                          Current
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <div>
                          <p className="text-xs font-medium text-slate-800">Data Science Lab</p>
                          <p className="text-[10px] text-slate-500">02:00 PM • Lab 2</p>
                        </div>
                        <span className="text-[10px] text-slate-400">Upcoming</span>
                      </div>
                    </div>
                  </div>

                  {/* Attendance & Upcoming Exam */}
                  <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                          <span>Academic Status</span>
                        </div>
                        <span className="text-[10px] text-emerald-600 font-semibold font-mono">86% Overall</span>
                      </div>

                      <div className="space-y-1.5 mb-2.5">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-600 font-medium">Semester Attendance</span>
                          <span className="text-slate-900 font-bold">124 / 144 Hours</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                          <div className="bg-blue-600 h-2 rounded-full w-[86%]" />
                        </div>
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-amber-50/70 border border-amber-200/80 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <div>
                          <p className="text-[11px] font-bold text-amber-900">Mid-Term Exams</p>
                          <p className="text-[10px] text-amber-700">Starts Oct 14, 2026</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded">
                        Admit Card Ready
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Fee Status & Quick Services */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  {/* Fee Status Card */}
                  <div className="sm:col-span-5 bg-white p-3 rounded-xl border border-slate-200/90 shadow-2xs">
                    <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                        <CreditCard className="w-3.5 h-3.5 text-blue-600" />
                        <span>University Fees</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                        Cleared
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600">Sem VI Academic Tuition: <strong className="text-slate-900">Paid</strong></p>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">Ref: MPON-2026-9932 • ₹0 Dues</p>
                  </div>

                  {/* Quick Services Pill Buttons */}
                  <div className="sm:col-span-7 bg-white p-3 rounded-xl border border-slate-200/90 shadow-2xs">
                    <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                        <Building2 className="w-3.5 h-3.5 text-blue-600" />
                        <span>Quick Campus Services</span>
                      </div>
                      <span className="text-[10px] text-slate-400">One-Click</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                      <div className="text-[11px] font-medium text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 px-2 py-1 rounded border border-slate-200 flex items-center justify-between transition-colors">
                        <span>Digital ID & Pass</span>
                        <ChevronRight className="w-3 h-3 text-slate-400" />
                      </div>
                      <div className="text-[11px] font-medium text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 px-2 py-1 rounded border border-slate-200 flex items-center justify-between transition-colors">
                        <span>Library Portal</span>
                        <ChevronRight className="w-3 h-3 text-slate-400" />
                      </div>
                      <div className="text-[11px] font-medium text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 px-2 py-1 rounded border border-slate-200 flex items-center justify-between transition-colors">
                        <span>Hostel Outpass</span>
                        <ChevronRight className="w-3 h-3 text-slate-400" />
                      </div>
                      <div className="text-[11px] font-medium text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 px-2 py-1 rounded border border-slate-200 flex items-center justify-between transition-colors">
                        <span>Grade Marksheet</span>
                        <ChevronRight className="w-3 h-3 text-slate-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Status Ribbon */}
              <div className="bg-slate-100/90 px-4 py-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  UniOS Gateway Connected • Latency 14ms
                </span>
                <span className="text-slate-400">Unified Student Portal v1.0</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
