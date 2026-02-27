import React from 'react';
import { GraduationCap, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'unaIITM'
  );

  return (
    <footer
      className="relative py-12 px-4 sm:px-6 mt-8"
      style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(10,15,11,0.95) 100%)',
        borderTop: '1px solid rgba(74,158,106,0.15)',
      }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(74,158,106,0.4), transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #2d5a3d, #4a9e6a)',
                  boxShadow: '0 2px 8px rgba(74,158,106,0.3)',
                }}
              >
                <GraduationCap size={14} color="#fff" />
              </div>
              <span
                className="text-lg font-black"
                style={{
                  background: 'linear-gradient(135deg, #4a9e6a, #e8a84a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                unaIITM
              </span>
            </div>
            <p className="text-xs" style={{ color: '#a8c4b0' }}>
              Your all-in-one IIT Madras campus companion
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {['Quick Access', 'Mess Menu', 'Events', 'Notices'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-xs transition-colors duration-200"
                style={{ color: '#a8c4b0' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#5dbf82'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#a8c4b0'; }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-6 h-px"
          style={{ background: 'rgba(74,158,106,0.1)' }}
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#6a8a74' }}>
            © {year} unaIITM. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs" style={{ color: '#6a8a74' }}>
            Built with{' '}
            <Heart size={12} style={{ color: '#e8a84a', fill: '#e8a84a' }} />
            {' '}using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: '#4a9e6a' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#5dbf82'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#4a9e6a'; }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
