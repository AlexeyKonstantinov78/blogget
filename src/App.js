import Header from './components/Header';
import Main from './components/Main';
import {AuthContextProvider} from './context/authContext';
import {CommentContextProvider} from './context/commentContext';
import {TokenContextProvider} from './context/tokenContext';

function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <CommentContextProvider>
          <Header />
          <Main />
        </CommentContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
