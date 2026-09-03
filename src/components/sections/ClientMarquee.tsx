'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const clientLogos = [
  'hospital-1.webp',
  'hospital-2.webp',
  'hospital-3.webp',
  'hospital-4.webp',
  'hospital-5.webp',
  'hospital-6.webp',
  'hospital-7.webp',
  'hospital-8.webp',
  'hospital-9.webp',
  'hospital-10.webp',
  'hospital-11.webp',
  'hospital-12.webp',
  'hospital-13.webp',
  'hospital-14.webp',
  'hospital-15.webp',
  'hospital-16.webp',
];

export default function ClientMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const animationRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);

  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);

  const [isDragging, setIsDragging] = useState(false);

  /*
   * CONTINUOUS AUTO SCROLL
   */
  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      // Don't auto-scroll while user is dragging
      if (!isDraggingRef.current) {
        const speed = 30;

        container.scrollLeft += (delta / 1000) * speed;

        /*
         * We duplicated the logos.
         * When we reach the end of the first set,
         * move back exactly one set.
         */
        const oneSetWidth = container.scrollWidth / 2;

        if (container.scrollLeft >= oneSetWidth) {
          container.scrollLeft -= oneSetWidth;
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
  }, []);

  /*
   * MOUSE DOWN
   */
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollRef.current;

    if (!container) return;

    isDraggingRef.current = true;
    setIsDragging(true);

    dragStartX.current = e.pageX;
    dragStartScrollLeft.current = container.scrollLeft;
  };

  /*
   * MOUSE MOVE
   */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const container = scrollRef.current;

    if (!container) return;

    e.preventDefault();

    const distance = e.pageX - dragStartX.current;

    container.scrollLeft =
      dragStartScrollLeft.current - distance;
  };

  /*
   * MOUSE UP
   */
  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  /*
   * MOUSE LEAVE
   */
  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  /*
   * TOUCH
   */
  const handleTouchStart = () => {
    isDraggingRef.current = true;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <section
      id="clients"
      className="py-12 md:py-20 bg-white overflow-hidden border-t border-gray-100 relative"
    >
      {/* Heading */}
      <div className="text-center mb-6 md:mb-10">
        <h2 className="text-2xl md:text-4xl font-black mb-3 md:mb-4 text-gray-900 uppercase tracking-tighter">
          Our Valuable{' '}
          <span className="text-brand-600">Clients</span>
        </h2>

        <div className="w-12 md:w-20 h-1 bg-brand-600 mx-auto rounded-full" />

        <p className="text-gray-500 mt-3 md:mt-4 text-[11px] md:text-base max-w-xl mx-auto px-4 text-center font-light">
          Trusted by leading healthcare institutions across India. Drag to
          explore.
        </p>
      </div>

      {/* Logo Marquee */}
      <div className="relative">
        <div
          ref={scrollRef}
          className={`flex gap-8 md:gap-12 overflow-x-auto px-4 py-6 md:py-10 select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="w-28 h-16 md:w-40 md:h-24 relative shrink-0 opacity-80 hover:opacity-100 transition-opacity mx-4"
            >
              <Image
                src={`/images/hospital-logos/${logo}`}
                alt={`Hospital Client ${(i % clientLogos.length) + 1}`}
                fill
                sizes="(max-width: 768px) 112px, 160px"
                className="object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Left fade */}
        <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />

        {/* Right fade */}
        <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

