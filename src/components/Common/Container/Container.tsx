import React from 'react';
import styles from './Container.module.css';
type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<Props> = (props) => {
  return <div className={`${styles.container} ${props.className}`}>{props.children}</div>;
};

export default Container;
