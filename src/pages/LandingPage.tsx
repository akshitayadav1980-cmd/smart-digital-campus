import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { PlatformOverview } from '../components/PlatformOverview';
import { HowItWorks } from '../components/HowItWorks';
import { UnifiedCampus } from '../components/UnifiedCampus';
import { IntelligentCampus } from '../components/IntelligentCampus';
import { RoleExperience } from '../components/RoleExperience';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, ShieldCheck, GraduationCap, CheckCircle } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const [modalInfo, setModalInfo] = useState<{
    isOpen: boolean;
    title: string;
    subtitle: string;
    type: 'login' | 'get-started' | 'explore';
  }>({
    isOpen: false,
    title: '',
    subtitle: '',
    type: 'explore',
  });

  const openModal = (type: 'login' | 'get-started' | 'explore') => {
    if (type === 'login') {
      setModalInfo({
        isOpen: true,
        title: 'UniOS Institutional Single Sign-On (SSO)',
        subtitle: 'Enter your university credentials or identity provider.',
        type: 'login',
      });
    } else {
      setModalInfo({
        isOpen: true,
        title: 'Get Started with UniOS Platform',
        subtitle: 'Empowering universities for MPOnline Idea & Innovation Hackathon 2026',
        type: 'get-started',
      });
    }
  };

  const closeModal = () => {
    setModalInfo((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Sticky Responsive Navbar */}
      <Navbar
        onLoginClick={() => openModal('login')}
        onGetStartedClick={() => openModal('get-started')}
      />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('platform');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onHowItWorksClick={() => {
            const el = document.getElementById('how-it-works');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Section 2: Platform Overview (4 Cards: Academic, Administration, Campus, Communication) */}
        <div id="services">
          <PlatformOverview />
        </div>

        {/* Section 3: How It Works (4-Step Workflow: Sign In, Choose Service, Connect, Get Things Done) */}
        <HowItWorks />

        {/* Section 4: Unified Campus (Hub connected to ERP, LMS, Library, Exam, Finance, Attendance, Hostel, Comm) */}
        <UnifiedCampus />

        {/* Section 5: Intelligent Campus (AI Assistant, Smart Notifications, Campus Insights) */}
        <IntelligentCampus />

        {/* Section 6: Role-Based Experience (Student, Faculty, Administrator) */}
        <RoleExperience />

        {/* Section 7: Final CTA */}
        <CTA
          onExploreClick={() => {
            const el = document.getElementById('platform');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modal for Login & Get Started Walkthrough */}
      <AnimatePresence>
        {modalInfo.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative text-left"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{modalInfo.title}</h3>
                  <p className="text-xs text-slate-500">{modalInfo.subtitle}</p>
                </div>
              </div>

              {modalInfo.type === 'login' ? (
                <div className="space-y-4 my-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      University Institutional Email or Roll No.
                    </label>
                    <input
                      type="text"
                      disabled
                      value="student@university.mponline.gov.in"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-600 text-sm font-mono focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Password or SAML SSO Token
                    </label>
                    <input
                      type="password"
                      disabled
                      value="••••••••••••"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-600 text-sm font-mono focus:outline-none"
                    />
                  </div>

                  <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                    <p className="font-semibold text-blue-900 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      Phase 1 Demonstration Mode
                    </p>
                    <p className="text-[11px] leading-relaxed">
                      Authentication services are intentionally decoupled for Phase 1 landing presentation. Live single sign-on will connect during Phase 2.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3.5 my-6 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Unified Portal Access</p>
                      <p className="text-[11px] text-slate-500">Access academic, administrative and hostel modules under one umbrella.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">No Re-Architecture Required</p>
                      <p className="text-[11px] text-slate-500">Integrates with legacy ERP and database setups seamlessly.</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-[11px] text-slate-400 font-mono">UniOS v1.0 • Hackathon 2026</span>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <span>Close Window</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
