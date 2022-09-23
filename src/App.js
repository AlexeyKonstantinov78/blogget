import Header from './components/Header';
import Main from './components/Main';
import { useDispatch } from 'react-redux';
import { AuthContextProvider } from './context/authContext';
import { updateToken } from './store/tokenReducer';
import { getToken } from './API/token';
import { store } from './store';

const time = () => dispatch => {
  // eslint-disable-next-line key-spacing
  dispatch({ type:'start' });

  setTimeout(() => {
    // eslint-disable-next-line key-spacing
    dispatch({ type:'END' });
  }, 3000);
};

function App() {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  store.dispatch(time());
  return (
    <AuthContextProvider>
      <Header />
      <Main />
    </AuthContextProvider>
  );
}

export default App;
