import React from 'react';
import styles from './Paragraph.module.css';
import { paragraphStyles } from './paragraphStyles';

type Props = {
  children: React.ReactNode;
  className?: string;
  type?: any;
};

const Paragraph: React.FC<Props> = (props) => {
  const style = paragraphStyles[props.type] || {};
  return (
    <p className={`${styles.paragraph} ${props.className}`} style={{ ...style }}>
      {props.children}
    </p>
  );
};

export default Paragraph;
