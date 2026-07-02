import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HOVER_SELECTOR = 'a, button, [role="button"], .hoverable, input, textarea, select, label';

export const CustomCursor: React.FC = () => {
  const bigRef = useRef<HTMLDivElement>(null);
  const smallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const big = bigRef.current;
    const small = smallRef.current;
    if (!big || !small) return;

    // Only on devices with a real mouse (precise pointer + hover). Skips touch.
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    gsap.set([big, small], { autoAlpha: 0 });

    // Perf-friendly setters (no re-query, no MutationObserver).
    const bx = gsap.quickTo(big, 'x', { duration: 0.4, ease: 'power3' });
    const by = gsap.quickTo(big, 'y', { duration: 0.4, ease: 'power3' });
    const sx = gsap.quickTo(small, 'x', { duration: 0.1, ease: 'power3' });
    const sy = gsap.quickTo(small, 'y', { duration: 0.1, ease: 'power3' });

    let started = false;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (!started) {
        // First move: hide the native cursor, place the balls exactly under the
        // pointer (no top-left flash), then reveal them.
        started = true;
        document.body.style.cursor = 'none';
        gsap.set(big, { x: x - 15, y: y - 15 });
        gsap.set(small, { x: x - 5, y: y - 5 });
        gsap.to([big, small], { autoAlpha: 1, duration: 0.25 });
        return;
      }
      bx(x - 15);
      by(y - 15);
      sx(x - 5);
      sy(y - 5);
    };

    // Hover state via delegation — works for dynamically added content too.
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(HOVER_SELECTOR)) gsap.to(big, { scale: 2.6, duration: 0.3 });
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(HOVER_SELECTOR)) gsap.to(big, { scale: 1, duration: 0.3 });
    };

    // Avoid the cursor getting stuck at the edge when leaving the window.
    const onLeave = () => gsap.to([big, small], { autoAlpha: 0, duration: 0.2 });
    const onEnter = () => {
      if (started) gsap.to([big, small], { autoAlpha: 1, duration: 0.2 });
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  return (
    <div className="cursor pointer-events-none fixed inset-0 z-[9999] mix-blend-difference hidden md:block">
      <div
        ref={bigRef}
        style={{ opacity: 0, visibility: 'hidden' }}
        className="cursor__ball cursor__ball--big fixed top-0 left-0 h-[30px] w-[30px] pointer-events-none"
      >
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0" fill="#f7f8fa"></circle>
        </svg>
      </div>

      <div
        ref={smallRef}
        style={{ opacity: 0, visibility: 'hidden' }}
        className="cursor__ball cursor__ball--small fixed top-0 left-0 h-[10px] w-[10px] pointer-events-none"
      >
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0" fill="#f7f8fa"></circle>
        </svg>
      </div>
    </div>
  );
};
