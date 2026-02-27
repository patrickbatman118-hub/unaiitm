import React, { useState } from 'react';
import { Bell, Calendar, Tag, AlertCircle, Info, CheckCircle } from 'lucide-react';
import SectionHeader from './shared/SectionHeader';
import Modal from './shared/Modal';
import HorizontalScrollRow from './shared/HorizontalScrollRow';

interface Notice {
  id: string;
  title: string;
  date: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  body: string;
}

const notices: Notice[] = [
  {
    id: '1',
    title: 'End Semester Examination Schedule',
    date: 'Feb 25, 2026',
    category: 'Academic',
    priority: 'high',
    body: 'The end semester examinations for the January–May 2026 semester will commence from April 20, 2026. Students are advised to check the detailed timetable on the academic portal.',
  },
  {
    id: '2',
    title: 'Hostel Room Allocation – New Batch',
    date: 'Feb 22, 2026',
    category: 'Hostel',
    priority: 'medium',
    body: 'Room allocation for the new batch of students has been completed. Students can view their allocated rooms on the hostel portal. Reporting date is June 1, 2026.',
  },
  {
    id: '3',
    title: 'Library Fine Waiver Scheme',
    date: 'Feb 20, 2026',
    category: 'Library',
    priority: 'low',
    body: 'The library is offering a one-time fine waiver for all overdue books returned before March 15, 2026. Students are encouraged to return books and clear their dues.',
  },
  {
    id: '4',
    title: 'Campus Wi-Fi Maintenance',
    date: 'Feb 18, 2026',
    category: 'Infrastructure',
    priority: 'medium',
    body: 'Scheduled maintenance of campus Wi-Fi infrastructure will be carried out on March 5, 2026 from 2:00 AM to 6:00 AM. Internet services may be intermittently unavailable.',
  },
  {
    id: '5',
    title: 'Scholarship Application Deadline',
    date: 'Feb 15, 2026',
    category: 'Finance',
    priority: 'high',
    body: 'Applications for the Merit-cum-Means scholarship for the academic year 2026–27 are open. Last date to apply is March 31, 2026 via the student portal.',
  },
];

const priorityConfig = {
  high: {
    color: '#e8a84a',
    bg: 'rgba(232,168,74,0.15)',
    border: 'rgba(232,168,74,0.3)',
    Icon: AlertCircle,
    label: 'High Priority',
  },
  medium: {
    color: '#4a9e6a',
    bg: 'rgba(74,158,106,0.15)',
    border: 'rgba(74,158,106,0.3)',
    Icon: Info,
    label: 'Medium',
  },
  low: {
    color: '#2a8a72',
    bg: 'rgba(42,138,114,0.15)',
    border: 'rgba(42,138,114,0.3)',
    Icon: CheckCircle,
    label: 'Low',
  },
};

const Notices: React.FC = () => {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="notices" className="section-nature py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Notices"
          subtitle="Stay informed with the latest campus announcements"
          accent="emerald"
        />

        <HorizontalScrollRow gap={20} paddingX={4}>
          {notices.map(notice => {
            const pConfig = priorityConfig[notice.priority];
            const PIcon = pConfig.Icon;
            const isHovered = hoveredId === notice.id;

            return (
              <button
                key={notice.id}
                onClick={() => setSelectedNotice(notice)}
                className="flex-shrink-0 rounded-card text-left overflow-hidden transition-all duration-300"
                style={{
                  width: 280,
                  background: 'rgba(26,58,42,0.6)',
                  backdropFilter: 'blur(16px)',
                  border: `1px solid ${isHovered ? pConfig.border : 'rgba(74,158,106,0.22)'}`,
                  boxShadow: isHovered
                    ? `0 16px 48px rgba(0,0,0,0.5), 0 4px 16px ${pConfig.bg}`
                    : '0 8px 32px rgba(0,0,0,0.4)',
                  transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                }}
                onMouseEnter={() => setHoveredId(notice.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Top accent bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(90deg, ${pConfig.color}, transparent)` }}
                />

                <div className="p-6">
                  {/* Priority badge + Bell icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: pConfig.bg, color: pConfig.color }}
                    >
                      <PIcon size={11} />
                      {pConfig.label}
                    </span>
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(74,158,106,0.12)' }}
                    >
                      <Bell size={15} style={{ color: '#4a9e6a' }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-bold text-sm mb-3 leading-snug"
                    style={{ color: '#e8f0ec', letterSpacing: '-0.01em', lineHeight: 1.4 }}
                  >
                    {notice.title}
                  </h3>

                  {/* Body preview */}
                  <p
                    className="text-xs mb-4 leading-relaxed"
                    style={{
                      color: '#a8c4b0',
                      lineHeight: 1.65,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {notice.body}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} style={{ color: '#4a9e6a' }} />
                      <span className="text-xs" style={{ color: '#a8c4b0' }}>{notice.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Tag size={12} style={{ color: '#4a9e6a' }} />
                      <span className="text-xs" style={{ color: '#a8c4b0' }}>{notice.category}</span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </HorizontalScrollRow>
      </div>

      {/* Notice Modal */}
      {selectedNotice && (
        <Modal
          isOpen={!!selectedNotice}
          onClose={() => setSelectedNotice(null)}
          title={selectedNotice.title}
          icon={<Bell size={18} color="#fff" />}
        >
          <div className="px-6 py-6">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  background: priorityConfig[selectedNotice.priority].bg,
                  color: priorityConfig[selectedNotice.priority].color,
                }}
              >
                {selectedNotice.category}
              </span>
              <div className="flex items-center gap-1.5">
                <Calendar size={13} style={{ color: '#4a9e6a' }} />
                <span className="text-xs" style={{ color: '#a8c4b0' }}>{selectedNotice.date}</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: '#c8ddd2', lineHeight: 1.75 }}>
              {selectedNotice.body}
            </p>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Notices;
