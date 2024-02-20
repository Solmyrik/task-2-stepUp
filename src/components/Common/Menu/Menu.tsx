import React from 'react';
import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

export interface MenuItem {
  value: string;
  link: string;
}

type Props = {
  items: MenuItem[];
};

const Menu: React.FC<Props> = (props) => {
  const scrollToBlock = (id: string) => {
    if (id[0] === '/') return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {props.items.map((item, id) => (
          <li className={styles.menu__item} key={id}>
            <Link
              className={styles.menu__link}
              to={item.link[0] === '/' ? item.link : ''}
              onClick={() => scrollToBlock(item.link)}>
              {item.value}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
