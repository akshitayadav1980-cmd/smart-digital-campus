import React from 'react';
import { motion } from 'framer-motion';
import { Bot, BellRing, LineChart, Sparkles, CheckCircle, ShieldAlert, FileText, ArrowUpRight } from 'lucide-react';

export const IntelligentCampus: React.FC = () => {
  const capabilities = [
    {
      id: 'assistant',
      title: 'AI University Assistant',
      tagline: 'Get answers from authorized university information.',
      icon: Bot,
      accent: 'border-blue-200 group-hover:border-blue-500',
      iconBg: 'bg-blue-50 text-blue-600',
      description:
        'Trained strictly on verified university ordinances, academic bylaws, examination guidelines, and fee circulars. Students and faculty get accurate, cited answers instantly.',
      features: [
        'Cites verified ordinance clauses & official circulars',
        'Multi-lingual query support for local languages',
        'Resolves FAQ inquiries without staff workload',
        'Strict guardrails: No speculation or unverified claims',
      ],
      mockup: {
        query: 'What is the minimum attendance requirement for Sem VI exams?',
        answer: 'Per University Ordinance Section 14.2, students must maintain minimum 75% attendance across all registered courses. Medical waivers require Dean approval within 7 days.',
        citation: 'Source: University Academic Ordinance 2024-25, §14.2',
      },
    },
    {
      id: 'notifications',
      title: 'Smart Notifications',
      tagline: 'Receive relevant academic and administrative updates.',
      icon: BellRing,
      accent: 'border-indigo-200 group-hover:border-indigo-500',
      iconBg: 'bg-indigo-50 text-indigo-600',
      description:
        'Replaces noisy broadcast spam with personalized, role-specific alerts triggered by individual course enrollment, pending documents, or academic milestones.',
      features: [
        'Context-aware delivery based on enrolled courses',
        'Upcoming deadline warnings with direct action links',
        'Eliminates irrelevant university-wide broadcast noise',
        'Omnichannel sync via Portal, Email and SMS',
      ],
      mockup: {
        title: 'Action Required: Mid-Term Admit Card',
        body: 'Admit Card generated for B.Tech CS Sem VI. All library dues verified. Click to verify & download.',
        meta: '2 hours ago • Priority High',
      },
    },
    {
      id: 'insights',
      title: 'Campus Insights',
      tagline: 'Turn university data into useful operational insights.',
      icon: LineChart,
      accent: 'border-sky-200 group-hover:border-sky-500',
      iconBg: 'bg-sky-50 text-sky-600',
      description:
        'Provides university leadership and department heads with clean visual analytics on lecture attendance trends, fee collection status, and facility utilization.',
      features: [
        'Real-time departmental attendance aggregations',
        'Fee reconciliation tracking with MPOnline status',
        'Campus facility & laboratory utilization metrics',
        'Decision-support summaries for academic councils',
      ],
      mockup: {
        metric: '91.4% Fee Reconciliation',
        sub: '4,280 / 4,680 enrolled students reconciled for Spring 2026',
        trend: '+4.2% faster than 2025 cycle',
      },
    },
  ];

  return (
    <section id="intelligent-campus" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Augmented Campus Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            An intelligent layer{' '}
            <span className="text-blue-600">for your campus.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            UniOS leverages transparent, rule-compliant AI to synthesize authorized university information, reduce repetitive administrative overhead, and keep campus stakeholders proactively informed.
          </p>
        </div>

        {/* 3 Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`group bg-white rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:shadow-xl flex flex-col justify-between ${item.accent}`}
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-slate-200/60 ${item.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-blue-600 font-medium">Verified Source AI</p>
                    </div>
                  </div>

                  {/* Supporting Tagline */}
                  <p className="text-sm font-semibold text-slate-800 mb-3">
                    "{item.tagline}"
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Visual Simulation Card */}
                  {item.id === 'assistant' && (
                    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 mb-6 text-xs space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-slate-400 font-mono">Q:</span>
                        <p className="font-semibold text-slate-800">{item.mockup.query}</p>
                      </div>
                      <div className="flex items-start gap-2 bg-blue-50/80 p-2.5 rounded-lg border border-blue-100 text-slate-700">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs leading-relaxed">{item.mockup.answer}</p>
                          <span className="block mt-1 text-[10px] text-blue-700 font-mono font-medium">
                            {item.mockup.citation}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {item.id === 'notifications' && (
                    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 mb-6 text-xs space-y-2">
                      <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-bold text-slate-900 text-xs">{item.mockup.title}</p>
                          <span className="text-[10px] text-blue-600 font-medium">Download</span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-snug">{item.mockup.body}</p>
                        <p className="text-[10px] text-slate-400 mt-1 font-mono">{item.mockup.meta}</p>
                      </div>
                    </div>
                  )}

                  {item.id === 'insights' && (
                    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 mb-6 text-xs space-y-2">
                      <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
                        <p className="text-lg font-extrabold text-slate-900">{item.mockup.metric}</p>
                        <p className="text-[11px] text-slate-600 mt-0.5">{item.mockup.sub}</p>
                        <span className="inline-block mt-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                          {item.mockup.trend}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Bullet points */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {item.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                  <span>Learn more about governance</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Responsible AI Trust Banner (Crucial Requirement: Do not claim autonomous decision-making) */}
        <div className="mt-12 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Responsible AI & Human-in-the-Loop Governance</h4>
              <p className="text-xs text-slate-500">
                UniOS does not make autonomous administrative decisions or grade alterations. All critical approvals remain strictly with authorized university officers.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 shrink-0">
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            <span>Audited Information Only</span>
          </div>
        </div>

      </div>
    </section>
  );
};
