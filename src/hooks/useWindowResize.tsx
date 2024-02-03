import { useLayoutEffect, useState } from 'react';
import { throttle } from 'throttle-debounce';

const useWindowResize = (widthRefEle:any) => {
  const [windowWidth, setWindowWidth] = useState(widthRefEle.clientWidth);

  const windowSizeUpdate = () => {
    setWindowWidth(widthRefEle.clientWidth);
  };

  const resize = throttle(500, windowSizeUpdate);

  useLayoutEffect(() => {
    window.addEventListener('resize', resize);
  }, [resize]);

  return { windowWidth };
};

export default useWindowResize;
