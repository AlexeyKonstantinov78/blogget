import {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../API/auth';
import {Text} from '../../../UI/Text';
import {useAuth} from '../../../hooks/useAuth';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useAuth({}, token);
  const [logout, setLogout] = useState(false);

  const delTokenAuth = () => {
    delToken('');
    setAuth({});
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button
            className={style.btn}
            onClick={() => {
              setLogout(!logout);
            }}
          >
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={auth.name} />
          </button>
          {logout &&
            <button
              className={style.logout}
              onClick={() => {
                delTokenAuth();
                setLogout(!logout);
              }}
            >
              <a href="/">Выйти</a>
            </button>}
        </>
      ) :
        (<Text
          className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon className={style.svg} width={128} height={128} />
        </Text>)
      }
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func
};
