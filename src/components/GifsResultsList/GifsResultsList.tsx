import React from 'react';
import { Grid } from '@giphy/react-components';
import { TGifsResultContainer } from '../../types';
import { MEDIA_ENDPOINT, COLS_MOBILE, COLS_WEB } from '../../constants';
import useWindowResize from '../../hooks/useWindowResize';
import GifHeartOverlay from '../GifHeartOverlay';
import { GridWrapper } from './Styled';

const GifsResultsList = ({
  keyword,
  widthRefEle,
  handleFetch,
}: TGifsResultContainer) => {
  const { windowWidth } = useWindowResize(widthRefEle);

  return (
    <GridWrapper>
      <Grid
        fetchGifs={handleFetch({ keyword })}
        columns={windowWidth > MEDIA_ENDPOINT ? COLS_WEB : COLS_MOBILE}
        gutter={6}
        width={windowWidth}
        overlay={GifHeartOverlay}
        key={keyword}
        noLink
      />
    </GridWrapper>
  );
};

export default GifsResultsList;
