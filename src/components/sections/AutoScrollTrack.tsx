'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface AutoScrollTrackProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  interval?: number; // Time between slides in ms
}

export default function AutoScrollTrack({
  children,
  className = '',
  contentClassName = '',
  interval = 3000,
}: AutoScrollTrackProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Function to perform the next slide
  const nextSlide = useCallback(() => {
    const el = scrollRef.current;
    if (!el || isInteracting) return;

    // Get the first child of the inner flex container
    const innerContainer = el.firstElementChild as HTMLElement;
    const firstChild = innerContainer?.firstElementChild as HTMLElement;
    if (!firstChild) return;

    // Calculate step: distance between the first and second child's left edge
    const secondChild = firstChild.nextElementSibling as HTMLElement;
    const stepWidth = secondChild
      ? secondChild.offsetLeft - firstChild.offsetLeft
      : firstChild.offsetWidth + 24;

    const maxScroll = el.scrollWidth / 2;

    // If we've reached the midpoint (end of first unique set), jump back instantly
    if (el.scrollLeft >= maxScroll - 5) {
      el.scrollTo({ left: 0, behavior: 'auto' });
      // After jumping back, we wait a tiny bit and then scroll to the first step
      // to keep the rhythm, but simple is often better:
      // Let's just scroll to next.
    }

    el.scrollBy({ left: stepWidth, behavior: 'smooth' });
  }, [isInteracting]);

  // Set up the auto-slide timer
  useEffect(() => {
    if (isInteracting) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(nextSlide, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isInteracting, nextSlide, interval]);

  // Handle manual interaction to pause auto-slide
  const startInteraction = () => setIsInteracting(true);
  const endInteraction = () => {
    // Resume auto-slide after a short delay
    setTimeout(() => setIsInteracting(false), 1000);
  };

  return (
    <div
      ref={scrollRef}
      className={`
        overflow-x-auto
        scrollbar-hide
        snap-x snap-mandatory
        cursor-grab active:cursor-grabbing
        select-none
        ${className}
      `}
      onPointerDown={startInteraction}
      onPointerUp={endInteraction}
      onPointerLeave={endInteraction}
      onTouchStart={startInteraction}
      onTouchEnd={endInteraction}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <div className={`flex w-max ${contentClassName}`}>
        {React.Children.map(children, (child, i) => (
          <div key={i} className="snap-start h-full">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
