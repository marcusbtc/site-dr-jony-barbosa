"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react';


interface Props {
  id: string;
  title?: string;
  subtitle?: string;
  autoplay?: boolean;
  autoplayInterval?: number;
  children: React.ReactNode;
}

const Slider: React.FC<Props> = ({ 
  id, 
  title, 
  subtitle, 
  autoplay = true, 
  autoplayInterval = 4000,
  children 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      setItemCount(trackRef.current.children.length);
    }
  }, [children]);

  const getItemsPerView = useCallback(() => {
    if (typeof window === 'undefined') return 1;
    const width = window.innerWidth;
    if (width >= 1280) return 4;
    if (width >= 1024) return 3;
    if (width >= 640) return 2;
    return 1;
  }, []);

  const totalDots = Math.ceil(itemCount / getItemsPerView());

  const scrollToIndex = useCallback((index: number) => {
    if (!trackRef.current) return;
    const slider = trackRef.current;
    const itemWidth = slider.children[0]?.getBoundingClientRect().width || 0;
    const gap = parseFloat(getComputedStyle(slider).gap) || 24;
    slider.scrollTo({
      left: index * (itemWidth + gap),
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  }, []);

  const handleNext = useCallback(() => {
    const nextIndex = currentIndex >= totalDots - 1 ? 0 : currentIndex + 1;
    scrollToIndex(nextIndex);
  }, [currentIndex, totalDots, scrollToIndex]);

  const handlePrev = useCallback(() => {
    const prevIndex = currentIndex <= 0 ? totalDots - 1 : currentIndex - 1;
    scrollToIndex(prevIndex);
  }, [currentIndex, totalDots, scrollToIndex]);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(handleNext, autoplayInterval);
    return () => clearInterval(timer);
  }, [autoplay, autoplayInterval, handleNext]);

  return (
    <div className="relative w-full">
      {(title || subtitle) && (
        <div className="text-center mb-16 relative">
          {title && (
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4 relative inline-block">
              <span className="absolute -top-2 -left-4 w-12 h-[2px] bg-gradient-to-r from-secondary to-transparent rounded-full"></span>
              {title}
            </h2>
          )}
          {subtitle && <p className="text-slate-500 text-lg font-light">{subtitle}</p>}
        </div>
      )}

      <div className="relative group">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -left-4 lg:-left-7 z-20 -translate-y-1/2 hidden lg:flex w-14 h-14 rounded-full bg-white border-2 border-secondary shadow-lg items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all transform hover:scale-105 active:scale-95"
          aria-label="Anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <div className="overflow-visible relative">
          <div
            ref={trackRef}
            className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {children}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-4 lg:-right-7 z-20 -translate-y-1/2 hidden lg:flex w-14 h-14 rounded-full bg-white border-2 border-secondary shadow-lg items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all transform hover:scale-105 active:scale-95"
          aria-label="Próximo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>

      {/* Progress Indicator */}
      {totalDots > 1 && (
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2 p-3 bg-white border border-slate-100 rounded-full shadow-sm">
            {Array.from({ length: totalDots }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`h-2 transition-all duration-300 rounded-full ${currentIndex === idx ? 'w-8 bg-secondary' : 'w-2 bg-slate-200 hover:bg-secondary/50'}`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
