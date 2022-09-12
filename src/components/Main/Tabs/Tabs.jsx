import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {assignId} from '../../../utils/generateRandomId';

const LIST = [
  {value: `Главная`},
  {value: `Просмотренные`},
  {value: `Сохраненные`},
  {value: `Мои посты`},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <button onClick={
        () => setIsDropdownOpen(!isDropdownOpen)}
      >Add item</button>
      {isDropdownOpen && <ul className={style.list}>
        {LIST.map(({value, id}) => (
          <li key={id}>
            <button>
              <a href="/">{value}</a>
            </button>
          </li>
        ))}
      </ul>}
    </>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
