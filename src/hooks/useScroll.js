import { useEffect, useState } from 'react';

/**
 * Hook to handle scroll position and detect scroll direction
 * @returns {Object} - scroll position and direction state
 */
export const useScroll = () => {
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
    direction: 'up'
  });

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';

      setScroll({
        x: window.scrollX,
        y: currentScrollY,
        direction
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scroll;
};

export default useScroll;
