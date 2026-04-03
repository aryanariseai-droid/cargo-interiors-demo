import { useState, useEffect, useCallback, useRef, TouchEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PremiumCarouselProps {
  images: string[];
  alts: string[];
  interval?: number;
}

function usePreloadImages(srcs: string[]) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let cancelled = false;
    const promises = srcs.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.decoding = "sync";
          img.src = src;
          if (img.complete) { resolve(); return; }
          img.onload = () => resolve();
          img.onerror = () => resolve();
        })
    );
    Promise.all(promises).then(() => { if (!cancelled) setReady(true); });
    return () => { cancelled = true; };
  }, [srcs]);
  return ready;
}

export default function PremiumCarousel({ images, alts, interval = 3000 }: PremiumCarouselProps) {
  const ready = usePreloadImages(images);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const touchStartX = useRef(0);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((p) => (p + 1) % images.length);
    }, interval);
  }, [images.length, interval]);

  useEffect(() => {
    if (!ready) return;
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer, ready]);

  const goTo = useCallback((dir: 1 | -1) => {
    setDirection(dir);
    setCurrent((p) => (p + dir + images.length) % images.length);
    resetTimer();
  }, [images.length, resetTimer]);

  const onTouchStart = (e: TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? 1 : -1);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  if (!ready) {
    // Reserve space but show nothing — no skeleton, no spinner
    return <div className="w-full aspect-[4/5]" />;
  }

  return (
    <div className="relative group">
      <div
        className="relative w-full aspect-[4/5] overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={current}
            src={images[current]}
            alt={alts[current] || "Premium interior design project"}
            className="absolute inset-0 w-full h-full object-cover"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            loading="eager"
            decoding="sync"
            width={1280}
            height={1600}
          />
        </AnimatePresence>
      </div>

      {/* Nav buttons */}
      <button
        onClick={() => goTo(-1)}
        aria-label="Previous slide"
        className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-background/60 border border-border backdrop-blur-sm text-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_hsl(40,50%,55%,0.4)]"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => goTo(1)}
        aria-label="Next slide"
        className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-background/60 border border-border backdrop-blur-sm text-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_hsl(40,50%,55%,0.4)]"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); resetTimer(); }}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-5" : "bg-foreground/30 hover:bg-foreground/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
