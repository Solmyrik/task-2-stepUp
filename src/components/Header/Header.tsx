import { FC } from 'react';
import styles from './Header.module.css';
import Logo from '../Common/Logo/Logo';
import Menu from '../Common/Menu/Menu';
import Cart from '../Common/Cart/Cart';

export interface MenuItem {
  value: string;
  link: string;
}

type Props = {
  items: MenuItem[];
};

const Header: React.FC<Props> = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Logo title="Goods4you" />
        <div className={styles.header__left}>
          <Menu items={props.items} />
        </div>
      </div>
    </header>
  );
};

export default Header;
