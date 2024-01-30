import { NavWrapper, LogoLink, TabLink, Tabs } from './Styled';

const TabsNav = () => {
  // const handleTabChange = () => {};

  return (
    <NavWrapper>
      {/* logo button */}
      <LogoLink>
        Galler
        <span>easy</span>
      </LogoLink>
      {/* Page selector */}
      <Tabs>
        <TabLink to="/search">Search</TabLink>
        <TabLink to="/favorites">Favorite ()</TabLink>
      </Tabs>
    </NavWrapper>
  );
};

export default TabsNav;
