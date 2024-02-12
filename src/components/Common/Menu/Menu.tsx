import React from 'react';
import styles from './Menu.module.css';

type Props = {
  items: string[];
};

const Menu: React.FC<Props> = (props) => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {props.items.map((item, id) => (
          <li className={styles.menu__item} key={id}>
            <a className={styles.menu__link} href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
