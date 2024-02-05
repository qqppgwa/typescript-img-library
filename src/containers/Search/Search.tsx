import {
  type ChangeEvent,
  type KeyboardEvent,
  useState,
  useRef,
  useEffect,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchGifs } from '../../apis';
import GifsResultsList from '../../components/GifsResultsList';
import { SearchWrapper, ListWrapper } from './Styled';

const Search = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [tempKeyword, setTempKeyword] = useState<string>('');
  const [usedKeyword, setUsedKeyword] = useState<null | string>('');
  const listBoxRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setTempKeyword(value);
  };

  const handleKeyDownEnter = (e: KeyboardEvent) => {
    /** Press "enter" :
     * 1. update searchParams (add searchParams to URL)
     * 2. trigger `usedKeyword` updated then do  search
     * */
    if (e.key === 'Enter') setSearchParams({ keyword: tempKeyword });
  };

  useEffect(() => {
    // if input is empty, do nothing
    if (!searchParams.get('keyword')) {
      return;
    }

    const key = searchParams.get('keyword');
    setTempKeyword(key!);
    setUsedKeyword(key);
  }, [searchParams]);

  return (
    <>
      <SearchWrapper
        placeholder="Start searching for images!"
        value={tempKeyword}
        onChange={handleInputChange}
        onKeyDown={handleKeyDownEnter}
      />
      <ListWrapper ref={listBoxRef}>
        {usedKeyword && (
          <GifsResultsList
            widthRefEle={listBoxRef.current}
            handleFetch={fetchSearchGifs}
            keyword={usedKeyword}
          />
        )}
      </ListWrapper>
    </>
  );
};

export default Search;
