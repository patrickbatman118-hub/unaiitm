import React, { useRef } from 'react';

interface HorizontalScrollRowProps {
  children: React.ReactNode;
  gap?: number;
  paddingX?: number;
  className?: string;
}

const HorizontalScrollRow: React.FC<HorizontalScrollRowProps> = ({
  children,
  gap = 16,
  paddingX = 0,
  className = '',
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      className={`flex overflow-x-auto scroll-smooth ${className}`}
      style={{
        gap: `${gap}px`,
        paddingLeft: `${paddingX}px`,
        paddingRight: `${paddingX}px`,
        paddingBottom: '12px',
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
      {React.Children.map(children, child => (
        <div style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default HorizontalScrollRow;
