import React from 'react';
import styles from './Footer.module.css';
import Logo from '../Common/Logo/Logo';
import Menu from '../Common/Menu/Menu';
import { FooterMenuItems } from '../../constans/menu';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Logo title="Goods4you" />
        <Menu items={FooterMenuItems} />
      </div>
    </footer>
  );
};

export default Footer;
