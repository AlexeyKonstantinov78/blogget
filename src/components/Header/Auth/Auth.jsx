import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../API/auth';
import {Text} from '../../../UI/Text';

export const Auth = ({token}) => (
  <div className={style.container}>
    {token ? (token) :
      (<Text As='a' href={urlAuth}>
        <LoginIcon className={style.svg} width={128} height={128} />
      </Text>)
    }
  </div>
);

Auth.propTypes = {
  token: PropTypes.string,
};
