import React from 'react';
import styles from './Image.module.css';

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const Image: React.FC<Props> = (props) => {
  return <img className={`${styles.image} ${props.className}`} src={props.src} alt={props.alt} />;
};

export default Image;
