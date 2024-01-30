import { useState } from 'react';
import classnames from 'clsx';
import { TAB_SEARCH, TAB_FAVORITE } from '../../../constants';
import { NavWrapper, LogoLink, Tab, Tabs } from './Styled';

type TTab = typeof TAB_SEARCH | typeof TAB_FAVORITE;

const TabsNav = () => {
  const [currentTab, setCurrentTab] = useState<TTab>(TAB_SEARCH);
  const isSearchTab = currentTab === TAB_SEARCH;

  const handleTabChange = () => {};

  return (
    <NavWrapper>
      {/* logo button */}
      <LogoLink>
        Galler
        <span>easy</span>
      </LogoLink>
      {/* Page selector */}
      <Tabs>
        <Tab className={classnames({ active: isSearchTab })}>Search</Tab>
        <Tab className={classnames({ active: !isSearchTab })}>Favorite ()</Tab>
      </Tabs>
    </NavWrapper>
  );
};

export default TabsNav;
