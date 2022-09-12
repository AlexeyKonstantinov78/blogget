import style from './Tabs.module.css';
import PropTypes from 'prop-types';

export const Tabs = ({list}) => {
  console.log();
  return (
    <ul className={style.list}>
      {list.map(({value, id}) => (
        <li key={id}>
          <button>
            <a href="/">{value}</a>
          </button>
        </li>
      ))}
    </ul>);
};

Tabs.propTypes = {
  list: PropTypes.array,
};
