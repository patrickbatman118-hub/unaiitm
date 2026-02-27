import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: 'emerald' | 'amber' | 'teal';
  className?: string;
}

const accentConfig = {
  emerald: {
    bar: 'linear-gradient(90deg, #4a9e6a, #5dbf82)',
    text: '#4a9e6a',
    subtitleColor: '#a8c4b0',
  },
  amber: {
    bar: 'linear-gradient(90deg, #c97d2a, #e8a84a)',
    text: '#e8a84a',
    subtitleColor: '#a8c4b0',
  },
  teal: {
    bar: 'linear-gradient(90deg, #1a6b5a, #2a8a72)',
    text: '#2a8a72',
    subtitleColor: '#a8c4b0',
  },
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  accent = 'emerald',
  className = '',
}) => {
  const config = accentConfig[accent];

  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex items-center gap-3 mb-2">
        {/* Accent bar */}
        <div
          className="w-1 rounded-full flex-shrink-0"
          style={{
            height: '32px',
            background: config.bar,
            boxShadow: `0 0 8px ${config.text}55`,
          }}
        />
        <div>
          <h2
            className="section-title-accent font-bold"
            style={{
              fontSize: 'clamp(22px, 4vw, 30px)',
              letterSpacing: '-0.01em',
              color: '#e8f0ec',
              lineHeight: 1.2,
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="mt-1 text-sm"
              style={{ color: config.subtitleColor, lineHeight: 1.5 }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {/* Gradient underline */}
      <div
        className="ml-4 h-px rounded-full"
        style={{
          background: `linear-gradient(90deg, ${config.text}44, transparent)`,
          marginTop: '6px',
        }}
      />
    </div>
  );
};

export default SectionHeader;
