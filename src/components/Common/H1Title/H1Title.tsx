import React from 'react';
import styles from './H1Title.module.css';

type Props = {
  children: React.ReactNode;
  className: string;
};

const H1Title: React.FC<Props> = (props) => {
  return <h1 className={`${styles.h1} ${props.className}`}>{props.children}</h1>;
};

export default H1Title;
