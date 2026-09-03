'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export default function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const [isDragging, setIsDragging] = useState(false);

  const isPausedRef = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);

  // Continuous auto-scroll
  useEffect(() => {
    const container = scrollRef.current;

    if (!container || testimonials.length === 0) {
      return;
    }

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      if (!isPausedRef.current && !isDragging) {
        // Auto-scroll speed
        container.scrollLeft += (delta / 1000) * 35;

        // Seamless infinite loop
        const halfWidth = container.scrollWidth / 2;

        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [testimonials, isDragging]);

  // Mouse drag start
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollRef.current;

    if (!container) return;

    setIsDragging(true);
    isPausedRef.current = true;

    dragStartX.current = e.pageX;
    dragStartScrollLeft.current = container.scrollLeft;
  };

  // Mouse dragging
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const container = scrollRef.current;

    if (!container) return;

    e.preventDefault();

    const distance = e.pageX - dragStartX.current;

    container.scrollLeft = dragStartScrollLeft.current - distance;
  };

  // Mouse release
  const handleMouseUp = () => {
    setIsDragging(false);
    isPausedRef.current = false;
  };

  // Mouse leaves container
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      isPausedRef.current = false;
    }
  };

  // Pause auto-scroll while touching
  const handleTouchStart = () => {
    isPausedRef.current = true;
  };

  // Resume auto-scroll after touching
  const handleTouchEnd = () => {
    isPausedRef.current = false;
  };

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollRef}
        className={`flex gap-4 md:gap-6 overflow-x-auto px-4 py-4 pb-8 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${index}`}
            className="w-[82vw] sm:w-[360px] md:w-[450px] shrink-0 min-h-[280px] md:min-h-[310px] bg-white rounded-3xl p-5 md:p-8 shadow-lg border border-slate-100 relative flex flex-col"
          >
            {/* Stars */}
            <div className="flex text-yellow-400 mb-4 md:mb-6">
              {[...Array(5)].map((_, starIndex) => (
                <Star
                  key={starIndex}
                  className="w-4 h-4 md:w-5 md:h-5 fill-current"
                />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-slate-600 text-sm md:text-base italic leading-relaxed font-light flex-1">
              &quot;{testimonial.text}&quot;
            </p>

            {/* User information */}
            <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6 mt-6 border-t border-slate-50">
              <div className="w-9 h-9 md:w-10 md:h-10 shrink-0 rounded-full bg-brand-100 flex items-center justify-center font-bold text-brand-600 text-base md:text-lg">
                {testimonial.name.charAt(0)}
              </div>

              <div className="min-w-0">
                <h4 className="font-bold text-slate-900 text-xs md:text-sm truncate">
                  {testimonial.name}
                </h4>

                <p className="text-slate-500 text-[10px] md:text-xs font-medium truncate">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

