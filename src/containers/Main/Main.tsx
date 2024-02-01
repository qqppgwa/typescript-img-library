import { Outlet } from 'react-router-dom';
import TabsNav from './TabsNav';
import { Wrapper } from './Styled';

const Main = () => {
  return (
    <Wrapper>
      {/* tab bar */}
      <TabsNav />
      {/* tab view */}
      <Outlet />
    </Wrapper>
  );
};

export default Main;
