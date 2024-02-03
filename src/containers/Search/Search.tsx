import { type ChangeEvent, type KeyboardEvent, useState, useRef } from 'react';
import { fetchSearchGifs } from '../../apis';
import GifsResultsList from '../../components/GifsResultsList';
import { SearchWrapper, ListWrapper } from './Styled';

const Search = () => {
  const [tempKeyword, setTempKeyword] = useState('');
  const [usedKeyword, setUsedKeyword] = useState('');
  const listBoxRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setTempKeyword(value);
  };

  const handleKeyDownEnter = (e: KeyboardEvent) => {
    // 按下 "enter" 才會出現搜尋結果
    if (e.key === 'Enter') setUsedKeyword(tempKeyword);
  };
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
