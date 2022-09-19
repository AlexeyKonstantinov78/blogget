import Header from './components/Header';
import Main from './components/Main';
import {store} from './store';
import {Provider} from 'react-redux';
import {AuthContextProvider} from './context/authContext';

function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Header />
        <Main />
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
