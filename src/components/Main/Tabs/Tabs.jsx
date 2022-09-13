import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {assignId} from '../../../utils/generateRandomId';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {useEffect} from 'react';
import {debounceRaf} from '../../../utils/debaunce';
import {Text} from '../../../UI/Text';

const LIST = [
  {value: `Главная`, Icon: HomeIcon},
  {value: `Топ`, Icon: TopIcon},
  {value: `Лучшие`, Icon: BestIcon},
  {value: `Горячие`, Icon: HotIcon},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [tabName, setTabName] = useState('Add item');

  const handleResize = () => {
    if (document.documentElement.clientWidth < 780) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Text As='div' className={style.container}>
      {isDropdown && <Text As='div' className={style.wrapperBtn}>
        <Text As='button' className={style.btn} onClick={
          () => setIsDropdownOpen(!isDropdownOpen)}
        >{tabName}
          <ArrowIcon width={15} height={15}/>
        </Text>
      </Text>}
      {(isDropdownOpen || !isDropdown) &&
        <Text As='ul' className={style.list}
          onClick={() => setIsDropdownOpen(false)}
        >
          {LIST.map(({value, id, Icon}) => (
            <Text As='li'
              className={style.item}
              key={id}
              onClick={() => {
                if (isDropdown) {
                  setTabName(value);
                }
              }}
            >
              <Text As='button' className={style.btn}>
                <Text As='a' href="/"
                  onClick={(event) => event.preventDefault()}>
                  {value}
                </Text>
                {Icon && <Icon width={30} height={30}/>}
              </Text>
            </Text>
          ))}
        </Text>
      }
    </Text>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
