import React, { useState } from 'react';
import {
  CalendarDays,
  CheckSquare,
  BookOpen,
  Coffee,
  MapPin,
  HelpCircle,
  LucideIcon,
} from 'lucide-react';
import SectionHeader from './shared/SectionHeader';
import BottomPanel from './shared/BottomPanel';
import HorizontalScrollRow from './shared/HorizontalScrollRow';

interface QuickTile {
  id: string;
  label: string;
  Icon: LucideIcon;
  gradient: string;
  shadowColor: string;
  content: React.ReactNode;
}

const tiles: QuickTile[] = [
  {
    id: 'timetable',
    label: 'Timetable',
    Icon: CalendarDays,
    gradient: 'linear-gradient(135deg, #2d5a3d, #4a9e6a)',
    shadowColor: 'rgba(74,158,106,0.4)',
    content: (
      <div className="px-6 py-4">
        {[
          { time: '08:00 – 09:00', subject: 'Mathematics III', room: 'LH1' },
          { time: '09:00 – 10:00', subject: 'Physics Lab', room: 'Lab 2B' },
          { time: '10:30 – 11:30', subject: 'Data Structures', room: 'CLT' },
          { time: '14:00 – 15:00', subject: 'Thermodynamics', room: 'LH3' },
          { time: '15:00 – 16:00', subject: 'English', room: 'HSB 101' },
        ].map((cls, i) => (
          <div
            key={i}
            className="flex items-start gap-4 py-4"
            style={{ borderBottom: i < 4 ? '1px solid rgba(74,158,106,0.12)' : 'none' }}
          >
            <div
              className="text-xs font-mono font-semibold px-2 py-1 rounded-lg flex-shrink-0"
              style={{ background: 'rgba(74,158,106,0.12)', color: '#5dbf82' }}
            >
              {cls.time}
            </div>
            <div>
              <div className="font-semibold text-sm" style={{ color: '#e8f0ec' }}>{cls.subject}</div>
              <div className="text-xs mt-0.5" style={{ color: '#a8c4b0' }}>{cls.room}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'attendance',
    label: 'Attendance',
    Icon: CheckSquare,
    gradient: 'linear-gradient(135deg, #1a6b5a, #2a8a72)',
    shadowColor: 'rgba(26,107,90,0.4)',
    content: (
      <div className="px-6 py-4">
        {[
          { subject: 'Mathematics III', attended: 18, total: 20, pct: 90 },
          { subject: 'Physics Lab', attended: 14, total: 16, pct: 87 },
          { subject: 'Data Structures', attended: 19, total: 22, pct: 86 },
          { subject: 'Thermodynamics', attended: 12, total: 18, pct: 67 },
          { subject: 'English', attended: 10, total: 12, pct: 83 },
        ].map((s, i) => (
          <div
            key={i}
            className="py-4"
            style={{ borderBottom: i < 4 ? '1px solid rgba(74,158,106,0.12)' : 'none' }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold" style={{ color: '#e8f0ec' }}>{s.subject}</span>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full"
                style={{
                  background: s.pct >= 75 ? 'rgba(74,158,106,0.2)' : 'rgba(201,125,42,0.2)',
                  color: s.pct >= 75 ? '#5dbf82' : '#e8a84a',
                }}
              >
                {s.pct}%
              </span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(74,158,106,0.15)' }}>
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${s.pct}%`,
                  background: s.pct >= 75
                    ? 'linear-gradient(90deg, #2d5a3d, #4a9e6a)'
                    : 'linear-gradient(90deg, #7a4a15, #c97d2a)',
                }}
              />
            </div>
            <div className="text-xs mt-1" style={{ color: '#a8c4b0' }}>{s.attended}/{s.total} classes</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'library',
    label: 'Library',
    Icon: BookOpen,
    gradient: 'linear-gradient(135deg, #7a4a15, #c97d2a)',
    shadowColor: 'rgba(201,125,42,0.4)',
    content: (
      <div className="px-6 py-4">
        <div
          className="rounded-xl p-4 mb-4"
          style={{ background: 'rgba(201,125,42,0.1)', border: '1px solid rgba(201,125,42,0.2)' }}
        >
          <div className="text-xs font-semibold mb-1" style={{ color: '#e8a84a' }}>Library Hours</div>
          <div className="text-sm" style={{ color: '#e8f0ec' }}>Mon–Fri: 8:00 AM – 11:00 PM</div>
          <div className="text-sm" style={{ color: '#e8f0ec' }}>Sat–Sun: 9:00 AM – 9:00 PM</div>
        </div>
        {['Introduction to Algorithms', 'Engineering Mathematics', 'Fluid Mechanics', 'Organic Chemistry'].map((book, i) => (
          <div
            key={i}
            className="flex items-center gap-3 py-4"
            style={{ borderBottom: i < 3 ? '1px solid rgba(74,158,106,0.12)' : 'none' }}
          >
            <BookOpen size={16} style={{ color: '#c97d2a', flexShrink: 0 }} />
            <span className="text-sm" style={{ color: '#e8f0ec' }}>{book}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'canteen',
    label: 'Canteen',
    Icon: Coffee,
    gradient: 'linear-gradient(135deg, #2d5a3d, #4a9e6a)',
    shadowColor: 'rgba(74,158,106,0.4)',
    content: (
      <div className="px-6 py-4">
        {[
          { item: 'Masala Dosa', price: '₹30', available: true },
          { item: 'Veg Biryani', price: '₹60', available: true },
          { item: 'Samosa (2 pcs)', price: '₹20', available: true },
          { item: 'Filter Coffee', price: '₹15', available: true },
          { item: 'Paneer Wrap', price: '₹50', available: false },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-4"
            style={{ borderBottom: i < 4 ? '1px solid rgba(74,158,106,0.12)' : 'none' }}
          >
            <span className="text-sm font-medium" style={{ color: item.available ? '#e8f0ec' : '#a8c4b0' }}>
              {item.item}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold" style={{ color: '#e8a84a' }}>{item.price}</span>
              {!item.available && (
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(201,125,42,0.15)', color: '#c97d2a' }}>
                  Sold out
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'map',
    label: 'Campus Map',
    Icon: MapPin,
    gradient: 'linear-gradient(135deg, #1a6b5a, #2a8a72)',
    shadowColor: 'rgba(26,107,90,0.4)',
    content: (
      <div className="px-6 py-4">
        {[
          { name: 'Central Library', distance: '200m', direction: 'North' },
          { name: 'Main Canteen', distance: '150m', direction: 'East' },
          { name: 'Sports Complex', distance: '500m', direction: 'South' },
          { name: 'Academic Block', distance: '100m', direction: 'West' },
          { name: 'Hostel Zone', distance: '300m', direction: 'North-East' },
        ].map((loc, i) => (
          <div
            key={i}
            className="flex items-center gap-3 py-4"
            style={{ borderBottom: i < 4 ? '1px solid rgba(74,158,106,0.12)' : 'none' }}
          >
            <MapPin size={16} style={{ color: '#2a8a72', flexShrink: 0 }} />
            <div className="flex-1">
              <div className="text-sm font-semibold" style={{ color: '#e8f0ec' }}>{loc.name}</div>
              <div className="text-xs" style={{ color: '#a8c4b0' }}>{loc.direction} · {loc.distance}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'help',
    label: 'Help & Info',
    Icon: HelpCircle,
    gradient: 'linear-gradient(135deg, #7a4a15, #c97d2a)',
    shadowColor: 'rgba(201,125,42,0.4)',
    content: (
      <div className="px-6 py-4">
        {[
          { q: 'How to register for courses?', a: 'Visit the academic portal at academics.iitm.ac.in' },
          { q: 'Hostel complaint process?', a: 'Submit via the hostel portal or contact your warden' },
          { q: 'Medical emergency?', a: 'Call campus health centre: 044-2257-8888' },
          { q: 'Lost & Found?', a: 'Contact the security office near the main gate' },
        ].map((faq, i) => (
          <div
            key={i}
            className="py-4"
            style={{ borderBottom: i < 3 ? '1px solid rgba(74,158,106,0.12)' : 'none' }}
          >
            <div className="text-sm font-semibold mb-1" style={{ color: '#e8a84a' }}>{faq.q}</div>
            <div className="text-sm leading-relaxed" style={{ color: '#a8c4b0' }}>{faq.a}</div>
          </div>
        ))}
      </div>
    ),
  },
];

const QuickAccess: React.FC = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const activeTile = tiles.find(t => t.id === activePanel);

  return (
    <section id="quick-access" className="section-nature py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Quick Access"
          subtitle="Everything you need, one tap away"
          accent="emerald"
        />

        {/* Canopy pattern background */}
        <div className="canopy-texture relative">
          <HorizontalScrollRow gap={16} paddingX={4}>
            {tiles.map(tile => {
              const { Icon } = tile;
              return (
                <button
                  key={tile.id}
                  onClick={() => setActivePanel(tile.id)}
                  className="flex-shrink-0 flex flex-col items-center gap-3 p-5 rounded-card transition-all duration-300 group"
                  style={{
                    width: 100,
                    minHeight: 110,
                    background: 'rgba(26,58,42,0.55)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(74,158,106,0.22)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 32px rgba(0,0,0,0.4), 0 4px 16px ${tile.shadowColor}`;
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(74,158,106,0.45)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.3)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(74,158,106,0.22)';
                  }}
                >
                  {/* Gradient icon container */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: tile.gradient,
                      boxShadow: `0 4px 12px ${tile.shadowColor}`,
                    }}
                  >
                    <Icon size={20} color="#fff" />
                  </div>
                  {/* Label */}
                  <span
                    className="text-xs font-semibold text-center leading-tight"
                    style={{ color: '#c8ddd2' }}
                  >
                    {tile.label}
                  </span>
                </button>
              );
            })}
          </HorizontalScrollRow>
        </div>
      </div>

      {/* Bottom Panel */}
      {activeTile && (
        <BottomPanel
          isOpen={!!activePanel}
          onClose={() => setActivePanel(null)}
          title={activeTile.label}
          icon={<activeTile.Icon size={18} color="#fff" />}
        >
          {activeTile.content}
        </BottomPanel>
      )}
    </section>
  );
};

export default QuickAccess;
