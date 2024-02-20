import React from 'react';
import styles from './Paragraph.module.css';

const paragraphStyles: Record<string, React.CSSProperties> = {
  primary: {
    color: '#ffffff',
  },
  secondary: {
    color: '#444B58',
  },
  'primary-opacity': {
    color: '#B2B5BB',
  },
  tertiary: {
    color: '#808080',
  },
};

type Props = {
  value: string;
  className?: string;
  type?: any;
};

const Paragraph: React.FC<Props> = (props) => {
  const style = paragraphStyles[props.type] || {};
  return (
    <p className={`${styles.paragraph} ${props.className}`} style={{ ...style }}>
      {props.value}
    </p>
  );
};

export default Paragraph;
