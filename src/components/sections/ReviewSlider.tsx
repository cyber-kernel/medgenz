'use client';

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export interface ReviewSliderItem {
  name: string;
  role: string;
  hospital: string;
  rating: number;
  quote: string;
}

interface ReviewSliderProps {
  reviews: ReviewSliderItem[];
}

export default function ReviewSlider({ reviews }: ReviewSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const isDraggingRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const moveByCard = (direction: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>('[data-review-card]');
    const amount = card ? card.offsetWidth + 20 : container.clientWidth;
    const nextPosition = container.scrollLeft + direction * amount;
    const maxPosition = container.scrollWidth - container.clientWidth;
    container.scrollTo({ left: nextPosition < 0 ? maxPosition : nextPosition > maxPosition ? 0 : nextPosition, behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = window.setInterval(() => moveByCard(1), 4500);
    return () => window.clearInterval(timer);
  }, []);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartX.current = event.pageX;
    dragStartScrollLeft.current = container.scrollLeft;
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    event.preventDefault();
    scrollRef.current.scrollLeft = dragStartScrollLeft.current - (event.pageX - dragStartX.current);
  };

  const stopDragging = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className={`flex gap-5 overflow-x-auto px-1 py-2 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onTouchStart={() => { isDraggingRef.current = true; }}
        onTouchEnd={stopDragging}
      >
        {reviews.map((review) => (
          <article key={review.name} data-review-card className="w-[min(86vw,330px)] shrink-0 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm md:w-[360px]">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex text-yellow-400" aria-label={`${review.rating} out of 5 stars`}>
                {[...Array(5)].map((_, index) => <Star key={index} className={`h-4 w-4 ${index < review.rating ? 'fill-current' : 'text-slate-200'}`} />)}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Partner feedback</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 font-light">“{review.quote}”</p>
            <div className="mt-5 border-t border-slate-200 pt-4">
              <p className="text-xs font-black uppercase tracking-wider text-slate-900">{review.name}</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-brand-600">{review.role}</p>
              <p className="mt-1 text-xs text-slate-400">{review.hospital}</p>
            </div>
          </article>
        ))}
      </div>
      <button type="button" onClick={() => moveByCard(-1)} aria-label="Previous review" className="absolute -left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:border-brand-600 hover:text-brand-600 md:flex">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button type="button" onClick={() => moveByCard(1)} aria-label="Next review" className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:border-brand-600 hover:text-brand-600 md:flex">
        <ChevronRight className="h-5 w-5" />
      </button>
      <style jsx>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
