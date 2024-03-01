import styles from './Button.module.css';
import { buttonStyles } from './buttonStyles';

type ButtonType =
  | 'primary'
  | 'primary-search'
  | 'primary-big'
  | 'secondary'
  | 'secondary-border'
  | 'tertiary';
type Props = {
  type: ButtonType;
  children: React.ReactNode;
  onClick: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
};

const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={styles.button}
      style={{ ...buttonStyles[props.type] }}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
