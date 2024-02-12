import { FC } from 'react';
import styles from './Header.module.css';
import Logo from '../Common/Logo/Logo';
import Menu from '../Common/Menu/Menu';
import Cart from '../Common/Cart/Cart';

const menuItems: string[] = [
  'Catalog',
  'About us',
  'Product selection',
  'Our team',
  'Shipping and payment',
  'Contacts',
  'Cart',
];

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <Logo title="Goods4you" />
        <div className={styles.header__left}>
          <Menu items={menuItems} />
          <Cart value={1} />
        </div>
      </div>
    </div>
  );
};

export default Header;
