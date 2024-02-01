import { useLayoutEffect, useState } from 'react';
import { throttle } from 'throttle-debounce';

const useWindowResize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const windowSizeUpdate = () => {
    setWindowWidth(window.innerWidth);
  };

  const resize = throttle(500, windowSizeUpdate);

  useLayoutEffect(() => {
    window.addEventListener('resize', resize);
  }, [resize]);

  return { windowWidth };
};

export default useWindowResize;
