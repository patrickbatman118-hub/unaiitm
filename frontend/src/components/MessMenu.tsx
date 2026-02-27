import React, { useState } from 'react';
import { Coffee, UtensilsCrossed, Moon, Clock } from 'lucide-react';
import SectionHeader from './shared/SectionHeader';
import HorizontalScrollRow from './shared/HorizontalScrollRow';

interface Meal {
  id: string;
  name: string;
  timing: string;
  items: string[];
  accent: string;
  accentLight: string;
  accentBg: string;
  shadowColor: string;
  Icon: React.ElementType;
  gradient: string;
}

const meals: Meal[] = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    timing: '7:30 AM – 9:30 AM',
    items: ['Idli Sambar', 'Vada', 'Upma', 'Bread & Butter', 'Boiled Eggs', 'Cornflakes & Milk', 'Banana'],
    accent: '#c97d2a',
    accentLight: '#e8a84a',
    accentBg: 'rgba(201,125,42,0.12)',
    shadowColor: 'rgba(201,125,42,0.3)',
    Icon: Coffee,
    gradient: 'linear-gradient(135deg, #7a4a15, #c97d2a)',
  },
  {
    id: 'lunch',
    name: 'Lunch',
    timing: '12:00 PM – 2:30 PM',
    items: ['Rice', 'Dal Tadka', 'Rajma Curry', 'Roti (3)', 'Mixed Veg Sabzi', 'Curd', 'Papad', 'Pickle'],
    accent: '#4a9e6a',
    accentLight: '#5dbf82',
    accentBg: 'rgba(74,158,106,0.12)',
    shadowColor: 'rgba(74,158,106,0.3)',
    Icon: UtensilsCrossed,
    gradient: 'linear-gradient(135deg, #2d5a3d, #4a9e6a)',
  },
  {
    id: 'dinner',
    name: 'Dinner',
    timing: '7:30 PM – 9:30 PM',
    items: ['Chapati (3)', 'Paneer Butter Masala', 'Jeera Rice', 'Dal Makhani', 'Salad', 'Sweet (Halwa)', 'Buttermilk'],
    accent: '#2a8a72',
    accentLight: '#3aaa8a',
    accentBg: 'rgba(26,107,90,0.12)',
    shadowColor: 'rgba(26,107,90,0.3)',
    Icon: Moon,
    gradient: 'linear-gradient(135deg, #0f3d32, #1a6b5a)',
  },
];

const MessMenu: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="mess-menu" className="section-nature py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Mess Menu"
          subtitle="Today's meals — fresh and nutritious"
          accent="amber"
        />

        <HorizontalScrollRow gap={20} paddingX={4}>
          {meals.map(meal => {
            const { Icon } = meal;
            const isHovered = hoveredId === meal.id;

            return (
              <div
                key={meal.id}
                className="flex-shrink-0 rounded-card overflow-hidden transition-all duration-300"
                style={{
                  width: 280,
                  background: 'rgba(26,58,42,0.6)',
                  backdropFilter: 'blur(16px)',
                  border: `1px solid ${isHovered ? meal.accent + '55' : 'rgba(74,158,106,0.22)'}`,
                  boxShadow: isHovered
                    ? `0 16px 48px rgba(0,0,0,0.5), 0 4px 16px ${meal.shadowColor}`
                    : '0 8px 32px rgba(0,0,0,0.4)',
                  transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                }}
                onMouseEnter={() => setHoveredId(meal.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Card header with accent colour */}
                <div
                  className="px-6 pt-6 pb-4"
                  style={{
                    background: `linear-gradient(135deg, ${meal.accentBg}, transparent)`,
                    borderBottom: `1px solid ${meal.accent}22`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: meal.gradient,
                        boxShadow: `0 4px 12px ${meal.shadowColor}`,
                      }}
                    >
                      <Icon size={20} color="#fff" />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-lg leading-tight"
                        style={{ color: meal.accentLight, letterSpacing: '-0.01em' }}
                      >
                        {meal.name}
                      </h3>
                    </div>
                  </div>

                  {/* Timings badge */}
                  <div
                    className="timings-badge"
                    style={{
                      background: `${meal.accent}22`,
                      border: `1px solid ${meal.accent}44`,
                      color: meal.accentLight,
                    }}
                  >
                    <Clock size={11} />
                    {meal.timing}
                  </div>
                </div>

                {/* Food items */}
                <div className="px-6 py-4">
                  {meal.items.map((item, i) => (
                    <div
                      key={i}
                      className="food-item text-sm"
                      style={{ color: '#c8ddd2', lineHeight: 1.65 }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </HorizontalScrollRow>
      </div>
    </section>
  );
};

export default MessMenu;
