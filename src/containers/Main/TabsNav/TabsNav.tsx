import { useState } from 'react';
import classnames from 'clsx';
import { TIsSearchTab } from '../../../types';
import { TAB_SEARCH, TAB_FAVORITE } from '../../../constants';
import { NavWrapper, LogoLink, Tab, Tabs } from './Styled';

const TabsNav = ({ isSearchTab }: TIsSearchTab) => {
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
