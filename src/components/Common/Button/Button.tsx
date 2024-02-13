import React, { useEffect, useState } from 'react';
import styles from './Button.module.css';

const buttonStyles: Record<ButtonType, React.CSSProperties> = {
  primary: {
    backgroundColor: '#F14F4F',
    color: '#ffffff',
    height: '67px',
    fontSize: '16px',
    fontWeight: '400',
    borderRadius: '4px',
  },
  secondary: {
    backgroundColor: '#444B58',
    height: '67px',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '400',
    borderRadius: '4px',
  },
  'secondary-border': {
    backgroundColor: 'transparent',
    color: 'black',
  },
  tertiary: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#444B58',
  },
};

type ButtonType = 'primary' | 'secondary' | 'secondary-border' | 'tertiary';
type Props = { type: ButtonType; width: string; text: string; onClick: () => void };

const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={styles.button}
      style={{ ...buttonStyles[props.type], width: `${props.width}` }}
      onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
