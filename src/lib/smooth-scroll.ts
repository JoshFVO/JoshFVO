// useSmoothScroll.ts
import { useEffect } from 'react';

export function useSmoothScroll(damping = 0.1) {
  useEffect(() => {
    let current = window.scrollY;
    let target = window.scrollY;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      target = Math.max(
        0,
        Math.min(
          target + e.deltaY,
          document.body.scrollHeight - window.innerHeight
        )
      );
    };

    const animate = () => {
      current += (target - current) * damping;
      window.scrollTo(0, current);
      requestAnimationFrame(animate);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('wheel', onWheel);
    };
  }, [damping]);
}