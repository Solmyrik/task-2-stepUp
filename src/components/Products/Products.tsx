import React, { useState } from 'react';
import styles from './Products.module.css';

import sneakers from '../../assets/image/sneakers.jpeg';
import Image from '../Common/Image/Image';
import Price from '../Common/Price/Price';
import Button from '../Common/Button/Button';

type Props = {};

type ProductItems = {
  image: string;
  title: string;
  price: number;
};

const productItems: ProductItems[] = [
  {
    image: sneakers,
    title: "Nike Air Force 1 '07 QS",
    price: 110,
  },
  {
    image: sneakers,
    title: "Nike Air Force 1 '07 QS",
    price: 110,
  },
  {
    image: sneakers,
    title: "Nike Air Force 1 '07 QS",
    price: 110,
  },
  {
    image: sneakers,
    title: "Nike Air Force 1 '07 QS",
    price: 110,
  },
  {
    image: sneakers,
    title: "Nike Air Force 1 '07 QS",
    price: 110,
  },
  {
    image: sneakers,
    title: "Nike Air Force 1 '07 QS",
    price: 110,
  },
  {
    image: sneakers,
    title: "Nike Air Force 1 '07 QS",
    price: 110,
  },
  {
    image: sneakers,
    title: "Nike Air Force 1 '07 QS",
    price: 110,
  },
  {
    image: sneakers,
    title: "Nike Air Force 1 '07 QS",
    price: 110,
  },
  {
    image: sneakers,
    title: "Nike Air Force 1 '07 QS",
    price: 110,
  },
  {
    image: sneakers,
    title: "Nike Air Force 1 '07 QS",
    price: 110,
  },
  {
    image: sneakers,
    title: "Nike Air Force 1 '07 QS",
    price: 110,
  },
];

const Products = (props: Props) => {
  return (
    <div className={styles.products}>
      <div className={styles.products__body}>
        {productItems &&
          productItems.map((item, index) => (
            <article>
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
