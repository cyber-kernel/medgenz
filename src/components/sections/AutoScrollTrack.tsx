'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AutoScrollTrackProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  speed?: number;
}

export default function AutoScrollTrack({
  children,
  className = '',
  contentClassName = '',
  speed = 0.5,
}: AutoScrollTrackProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frameId = 0;
    const tick = () => {
      if (!isPaused && track.scrollWidth > track.clientWidth) {
        track.scrollLeft += speed;
        // If we've scrolled past the first set of items (the content is duplicated)
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [isPaused, speed]);

  return (
    <div
      ref={trackRef}
      className={`overflow-x-auto overscroll-x-contain touch-pan-x scrollbar-hide ${className}`}
      onPointerDown={() => setIsPaused(true)}
      onPointerUp={() => setIsPaused(false)}
      onPointerCancel={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className={`flex w-max ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
}
