import { useEffect, useRef, useState } from 'react';

/**
 * Hook to detect when an element becomes visible in viewport
 * @param {Object} options - Intersection Observer options
 * @returns {Object} - ref and isInView state
 */
export const useScrollInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    const node = ref.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [options]);

  return { ref, isInView };
};

export default useScrollInView;
