import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number counting up from 0 to `target` once `isActive` becomes
 * true. Runs once (re-triggering isActive back to false does nothing) so
 * scroll-reveal hooks that stay true after the first reveal work cleanly.
 * `decimals` controls precision (e.g. 1 for a GPA like 4.0).
 */
export const useCountUp = (target, isActive, { duration = 1200, decimals = 0 } = {}) => {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isActive || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    let frame;

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const factor = Math.pow(10, decimals);
      setValue(Math.round(target * eased * factor) / factor);
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };
    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, [isActive, target, duration, decimals]);

  return decimals > 0 ? value.toFixed(decimals) : value;
};

export default useCountUp;
