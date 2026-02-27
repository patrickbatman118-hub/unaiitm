import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface BottomPanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const BottomPanel: React.FC<BottomPanelProps> = ({ isOpen, onClose, title, icon, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="relative animate-slide-up rounded-t-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(26,58,42,0.97) 0%, rgba(15,36,25,0.99) 100%)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(74,158,106,0.25)',
          borderBottom: 'none',
          boxShadow: '0 -8px 48px rgba(0,0,0,0.5), 0 -2px 16px rgba(74,158,106,0.1)',
          maxHeight: '85vh',
        }}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-1">
          <div
            className="w-10 h-1 rounded-full"
            style={{ background: 'rgba(74,158,106,0.4)' }}
          />
        </div>

        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: '1px solid rgba(74,158,106,0.15)' }}
        >
          <div className="flex items-center gap-3">
            {icon && (
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #2d5a3d, #4a9e6a)',
                  boxShadow: '0 2px 8px rgba(74,158,106,0.3)',
                }}
              >
                {icon}
              </div>
            )}
            <h3
              className="font-bold text-lg"
              style={{
                background: 'linear-gradient(135deg, #4a9e6a, #e8a84a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.01em',
              }}
            >
              {title}
            </h3>
          </div>
          <button
            className="panel-close-btn p-2 transition-all duration-200"
            style={{ color: '#4a9e6a' }}
            onClick={onClose}
            aria-label="Close panel"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(85vh - 100px)' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BottomPanel;
