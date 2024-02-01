import React from 'react';
import { Grid } from '@giphy/react-components';
import { TGifsResultContainer } from '../../types';
import { MEDIA_ENDPOINT, COLS_MOBILE, COLS_WEB } from '../../constants';
import useWindowResize from '../../hooks/useWindowResize';

const GifsResultsContainer = ({
  keyword,
  handleFetch,
}: TGifsResultContainer) => {
  const { windowWidth } = useWindowResize();

  return (
    <Grid
      fetchGifs={handleFetch({ keyword })}
      columns={windowWidth > MEDIA_ENDPOINT ? COLS_WEB : COLS_MOBILE}
      gutter={6}
      width={windowWidth}
      key={keyword}
    />
  );
};

export default GifsResultsContainer;
