import { useState } from 'react';
import TabsNav from './TabsNav';
import Search from '../Search';
import Favorites from '../Favorites';
import { Wrapper, TabView } from './Styled';
import { TAB_SEARCH, TAB_FAVORITE } from '../../constants';

type TTab = typeof TAB_SEARCH | typeof TAB_FAVORITE;

const Main = () => {
  const [currentTab, setCurrentTab] = useState<TTab>(TAB_SEARCH);
  const isSearchTab = currentTab === TAB_SEARCH;

  return (
    <Wrapper>
      <TabsNav isSearchTab={isSearchTab} currentTab={currentTab} />
      <TabView>{isSearchTab ? <Search /> : <Favorites />}</TabView>
    </Wrapper>
  );
};

export default Main;
