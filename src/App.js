import Header from './components/Header';
import Main from './components/Main';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {AuthContextProvider} from './context/authContext';
import {CommentContextProvider} from './context/commentContext';
import {TokenContextProvider} from './context/tokenContext';

const initialState = {
  comment: 'Привет Redux',
};

export const updateComment = comment => ({
  type: 'UPDATE_COMMENT',
  comment,
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_COMMENT':
      return {
        ...state,
        comment: action.comment,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);
console.log('store: ', store);

function App() {
  return (
    <Provider store={store}>
      <TokenContextProvider>
        <AuthContextProvider>
          <CommentContextProvider>
            <Header />
            <Main />
          </CommentContextProvider>
        </AuthContextProvider>
      </TokenContextProvider>
    </Provider>
  );
}

export default App;
