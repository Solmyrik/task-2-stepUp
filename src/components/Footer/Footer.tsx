import React from 'react';
import styles from './Footer.module.css';
import Logo from '../Common/Logo/Logo';
import Menu from '../Common/Menu/Menu';

type Props = {};

const menuItems: string[] = [
  'Catalog',
  'About us',
  'Product selection',
  'Our team',
  'Shipping and payment',
  'Contacts',
];

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Logo title="Goods4you" />
        <Menu items={menuItems} />
      </div>
    </footer>
  );
};

export default Footer;
