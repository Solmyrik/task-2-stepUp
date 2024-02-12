import React from 'react';
import styles from './Logo.module.css';

type Props = {
  title: string;
};

const Logo: React.FC<Props> = (props) => {
  return <div className={styles.logo}>{props.title}</div>;
};

export default Logo;
