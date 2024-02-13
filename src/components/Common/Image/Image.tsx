import React from 'react';
import styles from './Image.module.css';

type Props = {
  src: string;
  alt: string;
};

const Image: React.FC<Props> = (props) => {
  return <img className={styles.image} src={props.src} alt={props.alt} />;
};

export default Image;
