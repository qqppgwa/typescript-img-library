import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Main from './containers/Main';

function App() {
  const path = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (path === '/') {
      navigate('/search');
    }
  }, [path, navigate]);
  return <Main />;
}

export default App;
