import React from 'react';
import { GraduationCap, Sparkles, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 30% 30%, #1a3a2a 0%, #0f2419 45%, #0a0f0b 100%)',
      }}
    >
      {/* Ambient glow orbs */}
      <div
        className="glow-orb"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(74,158,106,0.18) 0%, transparent 70%)',
          top: '-10%',
          left: '-10%',
          animationDelay: '0s',
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(26,107,90,0.15) 0%, transparent 70%)',
          top: '20%',
          right: '-5%',
          animationDelay: '3s',
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 250,
          height: 250,
          background: 'radial-gradient(circle, rgba(201,125,42,0.12) 0%, transparent 70%)',
          bottom: '10%',
          left: '20%',
          animationDelay: '5s',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74,158,106,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,158,106,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Hero image overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'url(/assets/generated/hero-bg.dim_1200x800.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'luminosity',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Premium badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: 'rgba(26,58,42,0.7)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(74,158,106,0.3)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
          }}
        >
          <Sparkles size={14} style={{ color: '#e8a84a' }} />
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: '#a8c4b0' }}
          >
            IIT Madras Campus Platform
          </span>
          <Sparkles size={14} style={{ color: '#e8a84a' }} />
        </div>

        {/* Main heading */}
        <h1
          className="font-display font-black mb-6"
          style={{
            fontSize: 'clamp(56px, 12vw, 96px)',
            letterSpacing: '-0.03em',
            lineHeight: 1.0,
            background: 'linear-gradient(135deg, #4a9e6a 0%, #5dbf82 35%, #e8a84a 75%, #c97d2a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          unaIITM
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl mb-4 max-w-xl leading-relaxed"
          style={{ color: '#a8c4b0', lineHeight: 1.7 }}
        >
          Your all-in-one campus companion — timetables, mess menus, events, and more, beautifully unified.
        </p>

        {/* Tagline chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {['Timetable', 'Mess Menu', 'Events', 'Notices', 'Library'].map((tag, i) => {
            const colors = [
              { bg: 'rgba(74,158,106,0.15)', border: 'rgba(74,158,106,0.3)', text: '#5dbf82' },
              { bg: 'rgba(201,125,42,0.15)', border: 'rgba(201,125,42,0.3)', text: '#e8a84a' },
              { bg: 'rgba(26,107,90,0.15)', border: 'rgba(26,107,90,0.3)', text: '#2a8a72' },
              { bg: 'rgba(74,158,106,0.15)', border: 'rgba(74,158,106,0.3)', text: '#5dbf82' },
              { bg: 'rgba(201,125,42,0.15)', border: 'rgba(201,125,42,0.3)', text: '#e8a84a' },
            ];
            const c = colors[i % colors.length];
            return (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
              >
                {tag}
              </span>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#quick-access"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #2d5a3d, #4a9e6a)',
              color: '#fff',
              boxShadow: '0 8px 24px rgba(74,158,106,0.35)',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(74,158,106,0.5)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(74,158,106,0.35)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            <GraduationCap size={18} />
            Explore Campus
          </a>
          <a
            href="#events"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300"
            style={{
              background: 'rgba(26,58,42,0.6)',
              border: '1px solid rgba(74,158,106,0.3)',
              color: '#a8c4b0',
              backdropFilter: 'blur(12px)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(74,158,106,0.6)';
              (e.currentTarget as HTMLElement).style.color = '#5dbf82';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(74,158,106,0.3)';
              (e.currentTarget as HTMLElement).style.color = '#a8c4b0';
            }}
          >
            View Events
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs tracking-widest uppercase" style={{ color: '#a8c4b0' }}>Scroll</span>
        <ArrowDown size={16} style={{ color: '#4a9e6a' }} className="animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
