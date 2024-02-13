import React, { useState } from 'react';
import styles from './Products.module.css';

import Image from '../Common/Image/Image';
import Price from '../Common/Price/Price';
import Button from '../Common/Button/Button';
import { productItems } from '../../constans/productItems';

type Props = {};

const Products = (props: Props) => {
  return (
    <div className={styles.products}>
      <div className={styles.products__body}>
        {productItems &&
          productItems.map((item, index) => (
            <article key={index}>
              <Image src={item.image} alt={item.title} />
              <h4 className={styles.products__title}>{item.title}</h4>
              <Price value={item.price} />
            </article>
          ))}
      </div>

      <div className={styles.product__button}>
        <Button type="primary" text="Show more" width="171px" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Products;
