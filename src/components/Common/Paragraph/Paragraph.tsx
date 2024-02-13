import React from 'react';
import styles from './Paragraph.module.css';

type Props = {
  value: string;
  color: string;
  className?: string;
};

const Paragraph: React.FC<Props> = (props) => {
  return (
    <p className={`${styles.paragraph} ${props.className}`} style={{ color: props.color }}>
      {props.value}
    </p>
  );
};

export default Paragraph;
