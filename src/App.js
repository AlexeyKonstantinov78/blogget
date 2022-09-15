import Header from './components/Header';
import Main from './components/Main';
import {authContext} from './context/authContext';
import {tokenContext} from './context/tokenContext';
import {useToken} from './hooks/useToken';

function App() {
  const [token, delToken] = useToken('');

  return (
    <tokenContext.Provider value={{token, delToken}}>
      <authContext.Provider value={{}}>
        <Header />
        <Main />
      </authContext.Provider>
    </tokenContext.Provider>
  );
}

export default App;
