import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../API/auth';
import {Text} from '../../../UI/Text';

export const Auth = ({auth}) => (
  <button className={style.button}>
    {auth ? auth :
      <Text As='a' href={urlAuth}>
        <LoginIcon className={style.svg} width={128} height={128} />
      </Text>
    }
  </button>
);

Auth.propTypes = {
  auth: PropTypes.string
};
