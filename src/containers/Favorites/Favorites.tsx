import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { fetchFavoritesGifs } from '../../apis';
import GifsResultsList from '../../components/GifsResultsList';
import { ListWrapper } from './Styled';

const Favorites = () => {
  const [widthRefEle, setWidthEl] = useState<HTMLDivElement | null>(null);
  const [{ favoriteIds }] = useCookies(['favoriteIds']);

  return (
    <ListWrapper
      ref={(node) => {
        setWidthEl(node);
      }}
    >
      {favoriteIds?.length > 0 && widthRefEle && (
        <GifsResultsList
          widthRefEle={widthRefEle}
          handleFetch={() => fetchFavoritesGifs({ ids: favoriteIds })}
        />
      )}
    </ListWrapper>
  );
};

export default Favorites;
