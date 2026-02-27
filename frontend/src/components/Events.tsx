import React, { useState } from 'react';
import { Zap, Calendar, MapPin, Users } from 'lucide-react';
import SectionHeader from './shared/SectionHeader';
import Modal from './shared/Modal';
import HorizontalScrollRow from './shared/HorizontalScrollRow';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  attendees: number;
  categoryColor: string;
  categoryBg: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Shaastra Tech Fest',
    date: 'Mar 15, 2026',
    time: '9:00 AM',
    location: 'Open Air Theatre',
    category: 'Technical',
    description: 'Annual technical festival featuring robotics, coding competitions, and workshops by industry leaders.',
    attendees: 2400,
    categoryColor: '#4a9e6a',
    categoryBg: 'rgba(74,158,106,0.15)',
  },
  {
    id: '2',
    title: 'Saarang Cultural Fest',
    date: 'Mar 22, 2026',
    time: '6:00 PM',
    location: 'CLT Auditorium',
    category: 'Cultural',
    description: 'IIT Madras cultural extravaganza with music, dance, drama, and art exhibitions.',
    attendees: 3200,
    categoryColor: '#e8a84a',
    categoryBg: 'rgba(232,168,74,0.15)',
  },
  {
    id: '3',
    title: 'ML Workshop Series',
    date: 'Mar 18, 2026',
    time: '2:00 PM',
    location: 'CS Department',
    category: 'Workshop',
    description: 'Hands-on machine learning workshop covering deep learning, NLP, and computer vision.',
    attendees: 180,
    categoryColor: '#2a8a72',
    categoryBg: 'rgba(42,138,114,0.15)',
  },
  {
    id: '4',
    title: 'Inter-Hostel Cricket',
    date: 'Mar 20, 2026',
    time: '7:00 AM',
    location: 'Cricket Ground',
    category: 'Sports',
    description: 'Annual inter-hostel cricket tournament. Cheer for your hostel team!',
    attendees: 600,
    categoryColor: '#c97d2a',
    categoryBg: 'rgba(201,125,42,0.15)',
  },
  {
    id: '5',
    title: 'Research Symposium',
    date: 'Mar 25, 2026',
    time: '10:00 AM',
    location: 'IC&SR Hall',
    category: 'Academic',
    description: 'Annual research symposium showcasing cutting-edge research from all departments.',
    attendees: 450,
    categoryColor: '#4a9e6a',
    categoryBg: 'rgba(74,158,106,0.15)',
  },
];

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="events" className="section-nature py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Upcoming Events"
          subtitle="Don't miss what's happening on campus"
          accent="teal"
        />

        <HorizontalScrollRow gap={20} paddingX={4}>
          {events.map(event => {
            const isHovered = hoveredId === event.id;

            return (
              <button
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="flex-shrink-0 rounded-card text-left overflow-hidden transition-all duration-300"
                style={{
                  width: 280,
                  background: 'rgba(26,58,42,0.6)',
                  backdropFilter: 'blur(16px)',
                  border: `1px solid ${isHovered ? 'rgba(74,158,106,0.45)' : 'rgba(74,158,106,0.22)'}`,
                  boxShadow: isHovered
                    ? '0 16px 48px rgba(0,0,0,0.5), 0 4px 16px rgba(74,158,106,0.2)'
                    : '0 8px 32px rgba(0,0,0,0.4)',
                  transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                }}
                onMouseEnter={() => setHoveredId(event.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Top accent bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(90deg, ${event.categoryColor}, transparent)` }}
                />

                <div className="p-6">
                  {/* Category badge + icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: event.categoryBg, color: event.categoryColor }}
                    >
                      {event.category}
                    </span>
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: event.categoryBg }}
                    >
                      <Zap size={16} style={{ color: event.categoryColor }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-bold text-base mb-3 leading-snug"
                    style={{ color: '#e8f0ec', letterSpacing: '-0.01em' }}
                  >
                    {event.title}
                  </h3>

                  {/* Meta */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} style={{ color: '#4a9e6a', flexShrink: 0 }} />
                      <span className="text-xs" style={{ color: '#a8c4b0' }}>
                        {event.date} · {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={13} style={{ color: '#4a9e6a', flexShrink: 0 }} />
                      <span className="text-xs" style={{ color: '#a8c4b0' }}>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={13} style={{ color: '#4a9e6a', flexShrink: 0 }} />
                      <span className="text-xs" style={{ color: '#a8c4b0' }}>{event.attendees.toLocaleString()} attending</span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </HorizontalScrollRow>
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <Modal
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title={selectedEvent.title}
          icon={<Zap size={18} color="#fff" />}
        >
          <div className="px-6 py-6">
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{
                background: selectedEvent.categoryBg,
                color: selectedEvent.categoryColor,
              }}
            >
              {selectedEvent.category}
            </span>

            <p className="text-sm leading-relaxed mb-6" style={{ color: '#c8ddd2', lineHeight: 1.7 }}>
              {selectedEvent.description}
            </p>

            <div className="flex flex-col gap-3">
              {[
                { Icon: Calendar, label: `${selectedEvent.date} at ${selectedEvent.time}` },
                { Icon: MapPin, label: selectedEvent.location },
                { Icon: Users, label: `${selectedEvent.attendees.toLocaleString()} people attending` },
              ].map(({ Icon, label }, i) => (
                <div key={i} className="flex items-center gap-3 py-4" style={{ borderBottom: i < 2 ? '1px solid rgba(74,158,106,0.12)' : 'none' }}>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(74,158,106,0.12)' }}
                  >
                    <Icon size={15} style={{ color: '#4a9e6a' }} />
                  </div>
                  <span className="text-sm" style={{ color: '#c8ddd2' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Events;
