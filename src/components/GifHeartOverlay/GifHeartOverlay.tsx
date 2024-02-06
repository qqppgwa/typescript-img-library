import React from 'react';
import { GifOverlayProps } from '@giphy/react-components';
import { Overlay } from './Styled';

const GifHeartOverlay = ({ gif, isHovered }: GifOverlayProps) => {
  console.log(gif);
  return <Overlay />;
};

export default GifHeartOverlay;
