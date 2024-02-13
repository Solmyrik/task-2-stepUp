import React from 'react';
import styles from './TextBackdrop.module.css';

type Props = {
  value: string;
  className?: string;
};

const TextBackdrop: React.FC<Props> = (props) => {
  return <div className={`${styles.text} ${props.className}`}>{props.value}</div>;
};

export default TextBackdrop;
