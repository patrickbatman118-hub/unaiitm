import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const navLinks = [
  { label: 'Quick Access', href: '#quick-access' },
  { label: 'Mess Menu', href: '#mess-menu' },
  { label: 'Events', href: '#events' },
  { label: 'Notices', href: '#notices' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{
        background: 'rgba(15,36,25,0.88)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(74,158,106,0.2)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #2d5a3d, #4a9e6a)',
                boxShadow: '0 2px 8px rgba(74,158,106,0.4)',
              }}
            >
              <GraduationCap size={16} color="#fff" />
            </div>
            <span
              className="text-xl font-black tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #4a9e6a 0%, #5dbf82 40%, #e8a84a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              unaIITM
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ color: '#a8c4b0' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(74,158,106,0.1)';
                  (e.currentTarget as HTMLElement).style.color = '#5dbf82';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = '#a8c4b0';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-all duration-200 panel-close-btn"
            style={{ color: '#4a9e6a' }}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: 'rgba(10,15,11,0.97)',
            backdropFilter: 'blur(24px)',
            borderColor: 'rgba(74,158,106,0.15)',
          }}
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link-hover px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ color: '#a8c4b0' }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
