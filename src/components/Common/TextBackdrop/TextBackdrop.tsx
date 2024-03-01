import React from 'react';
import styles from './TextBackdrop.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const TextBackdrop: React.FC<Props> = (props) => {
  return <p className={`${styles.text} ${props.className}`}>{props.children}</p>;
};

export default TextBackdrop;
