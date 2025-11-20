import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const bigBallRef = useRef<HTMLDivElement>(null);
  const smallBallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bigBall = bigBallRef.current;
    const smallBall = smallBallRef.current;

    if (!bigBall || !smallBall) return;

    // Check if device is mobile/tablet (touch device or small screen)
    const isMobile = window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window;
    
    if (isMobile) return; // Don't initialize cursor on mobile

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Move the cursor
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(bigBall, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.4,
      });
      gsap.to(smallBall, {
        x: e.clientX - 5,
        y: e.clientY - 5,
        duration: 0.1,
      });
    };

    // Hover effects
    const onMouseHover = () => {
      gsap.to(bigBall, {
        scale: 4,
        duration: 0.3,
      });
    };

    const onMouseHoverOut = () => {
      gsap.to(bigBall, {
        scale: 1,
        duration: 0.3,
      });
    };

    // Add listeners
    document.addEventListener('mousemove', onMouseMove);
    
    // Add hover listeners to interactive elements via delegation
    const addHoverListeners = () => {
        const hoverables = document.querySelectorAll('a, button, .hoverable, [role="button"]');
        hoverables.forEach((el) => {
            el.addEventListener('mouseenter', onMouseHover);
            el.addEventListener('mouseleave', onMouseHoverOut);
        });
    };

    // Initial add
    addHoverListeners();

    // Re-add listeners on DOM changes (optional but good for dynamic content)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      
      // Clean up listeners (approximated)
      const hoverables = document.querySelectorAll('a, button, .hoverable, [role="button"]');
      hoverables.forEach((el) => {
          el.removeEventListener('mouseenter', onMouseHover);
          el.removeEventListener('mouseleave', onMouseHoverOut);
      });
    };
  }, []);

  return (
    <div className="cursor pointer-events-none fixed inset-0 z-[9999] mix-blend-difference hidden md:block">
      <div 
        ref={bigBallRef} 
        className="cursor__ball cursor__ball--big fixed top-0 left-0 w-[30px] h-[30px] pointer-events-none"
      >
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0" fill="#f7f8fa"></circle>
        </svg>
      </div>
      
      <div 
        ref={smallBallRef} 
        className="cursor__ball cursor__ball--small fixed top-0 left-0 w-[10px] h-[10px] pointer-events-none"
      >
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0" fill="#f7f8fa"></circle>
        </svg>
      </div>
    </div>
  );
};

