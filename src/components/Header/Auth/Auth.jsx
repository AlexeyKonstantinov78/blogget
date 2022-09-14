import {useEffect} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../API/auth';
import {Text} from '../../../UI/Text';
import {URL} from '../../../API/const';

export const Auth = ({token}) => {
  useEffect(() => {
    if (!token) return;

    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }, [token]);

  return (<div className={style.container}>
    {token ? (token) :
      (<Text As='a' href={urlAuth}>
        <LoginIcon className={style.svg} width={128} height={128} />
      </Text>)
    }
  </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
};
