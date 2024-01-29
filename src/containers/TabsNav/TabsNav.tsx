import { NavWrapper, LogoLink, Tab, Tabs } from './Styled';

const TabsNav = () => {
  return (
    <NavWrapper>
      {/* logo button */}
      <LogoLink>
        Galler
        <span>easy</span>
      </LogoLink>
      {/* Page selector */}
      <Tabs>
        <Tab>Search</Tab>
        <Tab>Favorite ()</Tab>
      </Tabs>
    </NavWrapper>
  );
};

export default TabsNav;
