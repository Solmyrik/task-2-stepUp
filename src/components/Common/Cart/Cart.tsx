import React from 'react';
import icon from '../../../assets/icons/cart.svg';
import styles from './Cart.module.css';

type Props = {
  value: number;
};

const Cart: React.FC<Props> = (props) => {
  return (
    <button className={styles.cart}>
      <img className={styles.cart__icon} src={icon} alt="cart" />
      <div className={styles.cart__counter}>{props.value}</div>
    </button>
  );
};

export default Cart;
