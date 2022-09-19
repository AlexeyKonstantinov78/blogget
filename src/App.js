import Header from './components/Header';
import Main from './components/Main';
import {store} from './store';
import {Provider} from 'react-redux';
import {AuthContextProvider} from './context/authContext';
import {TokenContextProvider} from './context/tokenContext';

function App() {
  return (
    <Provider store={store}>
      <TokenContextProvider>
        <AuthContextProvider>
          <Header />
          <Main />
        </AuthContextProvider>
      </TokenContextProvider>
    </Provider>
  );
}

export default App;
