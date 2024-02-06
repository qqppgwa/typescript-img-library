import { useMemo } from 'react';
import classnames from 'clsx';
import { useCookies } from 'react-cookie';
import { GifOverlayProps } from '@giphy/react-components';

import { Overlay } from './Styled';

type TCookie = Array<String | Number>;

const GifHeartOverlay = ({ gif, isHovered }: GifOverlayProps) => {
  const [cookies, setCookie] = useCookies(['favoriteIds']);

  const favoriteIds = useMemo(() => {
    return (cookies.favoriteIds as TCookie) ?? [];
  }, [cookies.favoriteIds]);

  /** check if the Gif id in cookie */
  const isInfFavoriteIds: boolean = (() => {
    return favoriteIds.some((id) => id === gif.id);
  })();

  /** Add or Remove gif from favorite */
  const handleClick = () => {
    const cookieArr: TCookie = favoriteIds;
    if (isInfFavoriteIds) {
      // remove
      cookieArr.splice(cookieArr.indexOf(gif.id), 1);
    } else {
      // add
      cookieArr.push(gif.id);
    }
    setCookie('favoriteIds', cookieArr);
  };

  return (
    <Overlay
      className={classnames({ like: isInfFavoriteIds })}
      onClick={handleClick}
    />
  );
};

export default GifHeartOverlay;
