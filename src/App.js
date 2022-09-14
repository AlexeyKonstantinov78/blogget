import {useEffect} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import {URL} from './API/const';
import {useToken} from './hooks/useToken';

function App() {
  const [token] = useToken('');
  console.log(token);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
  }, [token]);

  return (
    <>
      <Header token={token}/>
      <Main />
    </>
  );
}

export default App;
