import { useRef, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { fetchFavoritesGifs } from '../../apis';
import GifsResultsList from '../../components/GifsResultsList';
import { ListWrapper } from './Styled';

const Favorites = () => {
  const listsBoxRef = useRef<HTMLDivElement>(null);
  const [{ favoriteIds }] = useCookies(['favoriteIds']);

  useEffect(() => {
    if (!listsBoxRef.current) {
      return;
    }
  }, [favoriteIds]);

  return (
    <ListWrapper ref={listsBoxRef}>
      {favoriteIds?.length > 0 && (
        <GifsResultsList
          widthRefEle={listsBoxRef.current}
          handleFetch={() => fetchFavoritesGifs({ ids: favoriteIds })}
        />
      )}
    </ListWrapper>
  );
};

export default Favorites;
