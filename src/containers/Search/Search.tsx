import { type ChangeEvent, type KeyboardEvent, useState } from 'react';
import { fetchSearchGifs } from '../../apis';
import GifsResultsContainer from '../../components/GifsResultsContainer';
import { SearchWrapper } from './Styled';

const Search = () => {
  const [tempKeyword, setTempKeyword] = useState('');
  const [usedKeyword, setUsedKeyword] = useState('');

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
      {usedKeyword && (
        <GifsResultsContainer
          handleFetch={fetchSearchGifs}
          keyword={usedKeyword}
        />
      )}
    </>
  );
};

export default Search;
