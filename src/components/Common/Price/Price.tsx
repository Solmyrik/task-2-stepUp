import React from 'react';
import styles from './Price.module.css';

type Props = {
  value: number;
};

const Price: React.FC<Props> = (props) => {
  return <span className={styles.price}>{props.value} $</span>;
};

export default Price;
