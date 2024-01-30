import { Outlet } from 'react-router-dom';
import TabsNav from './TabsNav';
import { Wrapper } from './Styled';

const Main = () => {
  return (
    <Wrapper>
      <TabsNav />
      <Outlet />
    </Wrapper>
  );
};

export default Main;
