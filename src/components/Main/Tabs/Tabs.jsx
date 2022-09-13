import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {assignId} from '../../../utils/generateRandomId';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as EyeIcon} from './img/eye.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as PostIcon} from './img/post.svg';
import {ReactComponent as SaveIcon} from './img/save.svg';


const LIST = [
  {value: `Главная`, Icon: HomeIcon},
  {value: `Просмотренные`, Icon: EyeIcon},
  {value: `Сохраненные`, Icon: SaveIcon},
  {value: `Мои посты`, Icon: PostIcon},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.wrapperBtn}>
        <button className={style.btn} onClick={
          () => setIsDropdownOpen(!isDropdownOpen)}
        >Add item
          <ArrowIcon width={15} height={15}/>
        </button>
      </div>

      {isDropdownOpen &&
        <ul className={style.list}
          onClick={() => setIsDropdownOpen(false)}
        >
          {LIST.map(({value, id, Icon}) => (
            <li className={style.item} key={id}>
              <button className={style.btn}>
                <a href="/"
                  onClick={(event) => event.preventDefault()}>
                  {value}
                </a>
                {Icon && <Icon width={30} height={30}/>}
              </button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
