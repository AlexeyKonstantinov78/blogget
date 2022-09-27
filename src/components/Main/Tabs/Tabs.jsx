import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { assignId } from '../../../utils/generateRandomId';
import { ReactComponent as HomeIcon } from './img/home.svg';
import { ReactComponent as TopIcon } from './img/top.svg';
import { ReactComponent as BestIcon } from './img/best.svg';
import { ReactComponent as HotIcon } from './img/hot.svg';
import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { useEffect } from 'react';
import { debounceRaf } from '../../../utils/debaunce';
import { Text } from '../../../UI/Text';
import { useNavigate } from 'react-router-dom';

const LIST = [
  { value: `Главная`, Icon: HomeIcon, link: 'rising' },
  { value: `Топ`, Icon: TopIcon, link: 'top' },
  { value: `Лучшие`, Icon: BestIcon, link: 'best' },
  { value: `Горячие`, Icon: HotIcon, link: 'hot' },
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [tabName, setTabName] = useState('Главная');
  const navigate = useNavigate();

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
      {isDropdown && (
        <Text As='div' className={style.wrapperBtn}>
          <Text
            As='button'
            className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {tabName}
            <ArrowIcon width={15} height={15} />
          </Text>
        </Text>
      )}
      {(isDropdownOpen || !isDropdown) && (
        <Text
          As='ul'
          className={style.list}
          onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({ value, id, Icon, link }) => (
            <Text
              As='li'
              className={style.item}
              key={id}
              onClick={() => {
                if (isDropdown) {
                  setTabName(value);
                  navigate(`/category/${link}`);
                }
              }}>
              <Text As='button' className={style.btn}>
                <Text
                  As='a'
                  href='/'
                  onClick={(event) => event.preventDefault()}>
                  {value}
                </Text>
                {Icon && <Icon width={30} height={30} />}
              </Text>
            </Text>
          ))}
        </Text>
      )}
    </Text>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
