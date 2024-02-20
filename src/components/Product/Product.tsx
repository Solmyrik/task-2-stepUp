import React from 'react';
import styles from './Product.module.css';
import H3Title from '../Common/H3Title/H3Title';
import Paragraph from '../Common/Paragraph/Paragraph';
import Stars from '../Common/Stars/Stars';
import { subtractPercentage } from '../../helpers/subtractPercentage';
import Gallary from '../Gallary/Gallary';

type Props = {
  product: any;
};

const Product = (props: Props) => {
  const {
    title,
    id,
    rating,
    price,
    discountPercentage,
    stock,
    brand,
    category,
    description,
    thumbnail,
    images,
  } = props.product;
  const discountPrice = subtractPercentage(price, discountPercentage);

  return (
    <section className={styles.product}>
      <div className={styles.product__container}>
        <div className={styles.product__gallery}>
          <Gallary thumbnail={thumbnail} images={images} alt={title} />
        </div>
        <article className={styles.product__content}>
          <div className={styles.product__header}>
            <H3Title value={title} />
            <div className={styles.product__item}>
              <Paragraph value="SKU ID" type="primary-opacity" />
              <Paragraph value={id} type="secondary" />
            </div>
          </div>
          <div className={styles.product__specifications}>
            <div className={styles.product__item}>
              <Paragraph value="Rating" type="primary-opacity" />
              <Stars rating={rating && Math.floor(rating)} />
            </div>
            <div className={styles.product__item}>
              <Paragraph value="Base price" type="primary-opacity" />
              <Paragraph value={`${price}$`} type="secondary" />
            </div>
            <div className={styles.product__item}>
              <Paragraph value="Discount percentage" type="primary-opacity" />
              <Paragraph value={`${discountPercentage}%`} type="secondary" />
            </div>
            <div className={styles.product__item}>
              <Paragraph value="Discount price" type="primary-opacity" />
              <Paragraph value={`${discountPrice}$`} type="secondary" />
            </div>
            <div className={styles.product__item}>
              <Paragraph value="Stock" type="primary-opacity" />
              <Paragraph value={stock} type="secondary" />
            </div>
            <div className={styles.product__item}>
              <Paragraph value="Brand" type="primary-opacity" />
              <Paragraph value={brand} type="secondary" />
            </div>
            <div className={styles.product__item}>
              <Paragraph value="Category" type="primary-opacity" />
              <Paragraph value={category} type="secondary" />
            </div>
            <div className={styles.product__item}>
              <Paragraph value="Description" type="primary-opacity" />
              <Paragraph value={description} type="secondary" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Product;
