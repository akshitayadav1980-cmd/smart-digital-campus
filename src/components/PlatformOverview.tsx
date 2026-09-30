import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Building,
  MapPin,
  MessageSquare,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  FileSpreadsheet,
  Receipt,
  FileCheck,
  FolderLock,
  GitPullRequest,
  Library,
  Home,
  Bus,
  Activity,
  Bell,
  Megaphone,
  Radio,
  CalendarRange
} from 'lucide-react';

interface FeatureItem {
  name: string;
  icon: React.ElementType;
}

interface PlatformCard {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  description: string;
  accent: string;
  features: FeatureItem[];
}

export const PlatformOverview: React.FC = () => {
  const cards: PlatformCard[] = [
    {
      id: 'academic',
      title: 'Academic Services',
      category: 'Learning & Progress',
      icon: GraduationCap,
      description: 'Centralized course curriculum, real-time timetable changes, attendance validation and official examination management.',
      accent: 'border-blue-200 hover:border-blue-500/80 group-hover:bg-blue-50/30',
      features: [
        { name: 'Courses & Syllabus', icon: BookOpen },
        { name: 'Dynamic Timetable', icon: CalendarRange },
        { name: 'Attendance Tracking', icon: CalendarCheck },
        { name: 'Exams & Results', icon: FileSpreadsheet },
      ],
    },
    {
      id: 'admin',
      title: 'Administration',
      category: 'Governance & Records',
      icon: Building,
      description: 'Streamlined university fee collections, digital applications, certified document verification, and administrative requests.',
      accent: 'border-indigo-200 hover:border-indigo-500/80 group-hover:bg-indigo-50/30',
      features: [
        { name: 'Online Fees & Dues', icon: Receipt },
        { name: 'Admission Applications', icon: FileCheck },
        { name: 'Certified Documents', icon: FolderLock },
        { name: 'Grievance & Requests', icon: GitPullRequest },
      ],
    },
    {
      id: 'campus',
      title: 'Campus Life',
      category: 'Facilities & Living',
      icon: MapPin,
      description: 'Integrated digital access to central libraries, hostel allotment, campus shuttle transport, and sports or lab facilities.',
      accent: 'border-sky-200 hover:border-sky-500/80 group-hover:bg-sky-50/30',
      features: [
        { name: 'Digital Library & Catalog', icon: Library },
        { name: 'Hostel & Outpass System', icon: Home },
        { name: 'Campus Transport Tracking', icon: Bus },
        { name: 'Facility & Lab Booking', icon: Activity },
      ],
    },
    {
      id: 'communication',
      title: 'Communication Hub',
      category: 'Broadcasts & Alerts',
      icon: MessageSquare,
      description: 'Direct institutional notices, department announcements, calendarized events, and prioritized multichannel alerts.',
      accent: 'border-slate-300 hover:border-blue-500/80 group-hover:bg-blue-50/20',
      features: [
        { name: 'Official University Notices', icon: Megaphone },
        { name: 'Academic & Cultural Events', icon: CalendarRange },
        { name: 'Department Announcements', icon: Radio },
        { name: 'Targeted Smart Alerts', icon: Bell },
      ],
    },
  ];

  return (
    <section id="platform" className="py-20 lg:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wider uppercase mb-3 border border-slate-200">
            <span>Unified Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Everything your campus needs.{' '}
            <span className="text-blue-600">In one place.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            UniOS integrates existing university portals, fragmented departmental databases, and siloed administrative services into one coherent, beautifully designed platform.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-white rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${card.accent}`}
              >
                <div>
                  {/* Top Icon & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-2xs">
                      <IconComponent className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1 block">
                    {card.category}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Sub Features List */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    Core Capabilities
                  </p>
                  <ul className="space-y-2">
                    {card.features.map((item) => {
                      const SubIcon = item.icon;
                      return (
                        <li key={item.name} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <SubIcon className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span>{item.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Bottom subtle accent line */}
                <div className="mt-5 pt-3 flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:gap-2 transition-all">
                  <span>Explore module</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
