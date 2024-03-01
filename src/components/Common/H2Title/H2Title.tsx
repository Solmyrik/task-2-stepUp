import React from 'react';
import styles from './H2Title.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const H2Title: React.FC<Props> = (props) => {
  return <h2 className={`${styles.h2} ${props.className}`}>{props.children}</h2>;
};

export default H2Title;
