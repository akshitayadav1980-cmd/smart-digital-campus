import React from 'react';
import { GraduationCap, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="about" className="bg-white border-t border-slate-200/90 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200/80">
          
          {/* Brand Info (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                <GraduationCap className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                Uni<span className="text-blue-600">OS</span>
              </span>
            </div>
            
            <p className="text-base font-semibold text-slate-800">
              "One Campus. One Digital Experience."
            </p>

            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Connect academics, administration, communication and campus services through one intelligent digital platform.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>MPOnline Hackathon 2026 Initiative</span>
            </div>
          </div>

          {/* Quick Links: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => scrollTo('home')}
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('platform')}
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  Platform
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('platform')}
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('how-it-works')}
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('unified-campus')}
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  Unified Architecture
                </button>
              </li>
            </ul>
          </div>

          {/* Stakeholders & Roles */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Stakeholders
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => scrollTo('roles')}
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  Student Cockpit
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('roles')}
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  Faculty Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('roles')}
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  Administration Console
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('intelligent-campus')}
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  Campus AI Assistant
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('intelligent-campus')}
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  Operational Insights
                </button>
              </li>
            </ul>
          </div>

          {/* Hackathon & Statement Details */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Hackathon Track
            </h4>
            <div className="space-y-2.5 text-xs text-slate-500">
              <p className="font-semibold text-slate-800">
                MPOnline Idea & Innovation Hackathon 2026
              </p>
              <p className="text-blue-600 font-medium">
                Statement 2 — Smart University Digital Campus
              </p>
              <p className="leading-relaxed">
                Frontend prototype presenting a modern unified campus experience connecting students, teachers, and university administrative systems.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © 2026 UniOS • Smart University Digital Campus • MPOnline Idea & Innovation Hackathon 2026
          </p>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-800 cursor-pointer transition-colors">Privacy Notice</span>
            <span className="hover:text-slate-800 cursor-pointer transition-colors">Security Standards</span>
            <span className="hover:text-slate-800 cursor-pointer transition-colors">API Architecture</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
