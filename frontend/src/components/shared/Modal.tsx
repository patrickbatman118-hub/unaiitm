import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, icon, children }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative animate-fade-in w-full max-w-lg rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, rgba(26,58,42,0.97) 0%, rgba(15,36,25,0.99) 100%)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(74,158,106,0.25)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.6), 0 4px 16px rgba(74,158,106,0.1)',
          maxHeight: '90vh',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5"
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
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 80px)' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
