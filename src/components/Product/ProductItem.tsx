import React from 'react';

import styles from './Product.module.css';
import Paragraph from '../Common/Paragraph/Paragraph';
import Stars from '../Common/Stars/Stars';

type Props = {
  identifier: string;
  value?: string | number;
  type?: string;
  rating?: number;
};

const ProductItem: React.FC<Props> = (props) => {
  if (props.type === 'stars') {
    return (
      <div className={styles.product__item}>
        <Paragraph type="primary-opacity">Rating</Paragraph>
        <Stars rating={props.rating || 0} />
      </div>
    );
  }
  return (
    <div className={styles.product__item}>
      <Paragraph type="primary-opacity">{props.identifier}</Paragraph>
      <Paragraph type="secondary">{props.value}</Paragraph>
    </div>
  );
};

export default ProductItem;
