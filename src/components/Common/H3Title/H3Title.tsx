import React from 'react';
import styles from './H3Title.module.css';

type Props = {
  value: string;
  className?: string;
};

const H3Title: React.FC<Props> = (props) => {
  return <h3 className={`${styles.h3} ${props.className}`}>{props.value}</h3>;
};

export default H3Title;
