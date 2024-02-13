import React from 'react';
import styles from './H1Title.module.css';

type Props = {
  value: string;
  className: string;
};

const H1Title: React.FC<Props> = (props) => {
  return <h1 className={`${styles.h1} ${props.className}`}>{props.value}</h1>;
};

export default H1Title;
