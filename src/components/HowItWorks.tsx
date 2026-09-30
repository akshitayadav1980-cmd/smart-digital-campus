import React from 'react';
import { motion } from 'framer-motion';
import { LogIn, Search, Network, CheckCircle, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Sign In',
      desc: 'Access your personalized campus dashboard with institutional SSO.',
      detail: 'Secure single-identity authentication for students, teachers and staff with role-based permissions.',
      icon: LogIn,
    },
    {
      step: '02',
      title: 'Choose a Service',
      desc: 'Find academic, administrative or campus services in seconds.',
      detail: 'Unified service directory with instant global search across courses, fees, exams, and amenities.',
      icon: Search,
    },
    {
      step: '03',
      title: 'Connect',
      desc: 'UniOS communicates with the relevant university system.',
      detail: 'Intelligent middleware synchronizes securely with existing ERP, LMS, and department databases.',
      icon: Network,
    },
    {
      step: '04',
      title: 'Get Things Done',
      desc: 'Receive information, submit requests and track progress.',
      detail: 'Get instant digital clearances, track grievance status in real time, and download verified documents.',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Seamless Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            How UniOS Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A friction-free four-step journey designed to replace confusing paperwork and multiple portal logins with one intuitive hub.
          </p>
        </div>

        {/* WORKFLOW CONTAINER: Horizontal on Desktop, Vertical Timeline on Mobile */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-20 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative flex flex-col items-start lg:items-center text-left lg:text-center group"
                >
                  {/* Step Icon & Number Badge */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-blue-100 group-hover:border-blue-600 shadow-md group-hover:shadow-blue-500/20 flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:scale-105 z-10 relative">
                      <IconComp className="w-7 h-7" strokeWidth={2.2} />
                    </div>
                    <span className="absolute -top-2.5 -right-2.5 bg-slate-900 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded-full shadow-xs border border-slate-700">
                      {item.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Primary Description */}
                  <p className="text-sm font-semibold text-slate-800 mb-2 leading-snug">
                    "{item.desc}"
                  </p>

                  {/* Detailed Description */}
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.detail}
                  </p>

                  {/* Mobile Timeline Connector Arrow */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center w-full py-4 text-slate-300">
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Callout Box */}
        <div className="mt-16 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">Zero Campus Disruption</h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Universities keep their existing software vendors. UniOS sits on top as an intelligent unified gateway.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 font-semibold text-xs border border-blue-200/70 shrink-0">
            <span>ISO 27001 & Data Compliant</span>
          </div>
        </div>

      </div>
    </section>
  );
};
