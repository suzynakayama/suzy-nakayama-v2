'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const SHOW_AFTER = 600; // px scrolled before the button appears
const WARP_MS = 900;
const RING_RADIUS = 26;
const RING_LENGTH = 2 * Math.PI * RING_RADIUS;
const STAR_COLORS = ['#7c8cff', '#5ccfff', '#eeeaf7', '#ffb020'];

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Star streaks rushing out from the center, like jumping to warp speed
const playWarp = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const dpr = window.devicePixelRatio || 1;
  const w = window.innerWidth;
  const h = window.innerHeight;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.scale(dpr, dpr);

  const cx = w / 2;
  const cy = h / 2;
  const maxDist = Math.hypot(cx, cy);
  const stars = Array.from({ length: 160 }, () => ({
    angle: Math.random() * Math.PI * 2,
    start: Math.random() * maxDist * 0.3,
    speed: 0.6 + Math.random() * 0.9,
    color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
  }));

  const began = performance.now();
  canvas.style.opacity = '1';

  const frame = (now: number) => {
    const t = Math.min((now - began) / WARP_MS, 1);
    const eased = t * t; // accelerate
    // Fade the whole overlay in quickly and out at the end
    const fade = t < 0.15 ? t / 0.15 : t > 0.75 ? (1 - t) / 0.25 : 1;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = `rgba(10, 10, 26, ${0.85 * fade})`;
    ctx.fillRect(0, 0, w, h);
    ctx.lineCap = 'round';

    for (const star of stars) {
      const head = star.start + eased * star.speed * maxDist * 1.2;
      const tail = Math.max(star.start, head - (40 + eased * 260) * star.speed);
      const cos = Math.cos(star.angle);
      const sin = Math.sin(star.angle);
      ctx.strokeStyle = star.color;
      ctx.globalAlpha = fade;
      ctx.lineWidth = 1 + eased * 1.5;
      ctx.beginPath();
      ctx.moveTo(cx + cos * tail, cy + sin * tail);
      ctx.lineTo(cx + cos * head, cy + sin * head);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    if (t < 1) {
      requestAnimationFrame(frame);
    } else {
      ctx.clearRect(0, 0, w, h);
      canvas.style.opacity = '0';
    }
  };

  requestAnimationFrame(frame);
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setVisible(window.scrollY > SHOW_AFTER);
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleClick = () => {
    if (prefersReducedMotion()) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    if (canvasRef.current) playWarp(canvasRef.current);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden='true'
        className='fixed inset-0 z-50 w-full h-full pointer-events-none opacity-0'
      />
      <button
        type='button'
        onClick={handleClick}
        aria-label='Scroll to top'
        tabIndex={visible ? 0 : -1}
        className={`group fixed right-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] z-40 grid place-items-center w-16 h-16 rounded-full cursor-pointer transition-[opacity,transform] duration-300 ${
          visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Scroll progress ring */}
        <svg
          aria-hidden='true'
          viewBox='0 0 64 64'
          className='absolute inset-0 -rotate-90'
        >
          <circle
            cx='32'
            cy='32'
            r={RING_RADIUS}
            fill='none'
            strokeWidth='3'
            className='stroke-ink-line-strong'
          />
          <circle
            cx='32'
            cy='32'
            r={RING_RADIUS}
            fill='none'
            strokeWidth='3'
            strokeLinecap='round'
            strokeDasharray={RING_LENGTH}
            strokeDashoffset={RING_LENGTH * (1 - progress)}
            className='stroke-sky'
          />
        </svg>
        <span className='relative grid place-items-center w-11 h-11 rounded-full bg-marigold text-ink shadow-[0_10px_30px_rgb(255_176_32/0.35)] transition-colors group-hover:bg-sky'>
          <ArrowUp
            className='w-5 h-5 transition-transform group-hover:-translate-y-0.5'
            strokeWidth={2.5}
          />
        </span>
      </button>
    </>
  );
};

export default ScrollToTop;
