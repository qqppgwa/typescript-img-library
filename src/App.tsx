import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import TabsNav from './components/TabsNav';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;

export const TabView = styled.div`
  display: flex;
  flex-direction: column;
`;

/**
 * Renders the main application component.
 * It handles the navigation and renders the tab bar and tab view.
 */
function App() {
  return (
    <Wrapper>
      {/* tab bar */}
      <TabsNav />
      {/* tab view */}
      <Outlet />
    </Wrapper>
  );
}

export default App;
