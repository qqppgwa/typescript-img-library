import { useCookies } from 'react-cookie';
import { NavWrapper, LogoLink, TabLink, Tabs } from './Styled';

const TabsNav = () => {
  const [{ favoriteIds }] = useCookies(['favoriteIds']);
  const favoriteNum = favoriteIds?.length ?? 0;

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
        <TabLink to="/favorites">Favorite ({favoriteNum})</TabLink>
      </Tabs>
    </NavWrapper>
  );
};

export default TabsNav;
