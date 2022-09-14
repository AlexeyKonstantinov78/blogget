import {useEffect, useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../API/auth';
import {Text} from '../../../UI/Text';
import {URL} from '../../../API/const';

export const Auth = ({token}) => {
  const [auth, setAuth] = useState({});
  useEffect(() => {
    if (!token) return;

    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.err(err);
        setAuth({});
      });
  }, [token]);

  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn}>
          <img
            className={style.img}
            src={auth.img}
            title={auth.name}
            alt={auth.name} />
        </button>
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
};
