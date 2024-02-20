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
              <Paragraph value="SKU ID" color="#B2B5BB" />
              <Paragraph value={id} color="#444B58" />
            </div>
          </div>
          <div className={styles.product__specifications}>
            <div className={styles.product__item}>
              <Paragraph value="Rating" color="#B2B5BB" />
              <Stars rating={rating && Math.floor(rating)} />
            </div>
            <div className={styles.product__item}>
              <Paragraph value="Base price" color="#B2B5BB" />
              <Paragraph value={`${price}$`} color="#444B58" />
            </div>
            <div className={styles.product__item}>
              <Paragraph value="Discount percentage" color="#B2B5BB" />
              <Paragraph value={`${discountPercentage}%`} color="#444B58" />
            </div>
            <div className={styles.product__item}>
              <Paragraph value="Discount price" color="#B2B5BB" />
              <Paragraph value={`${discountPrice}$`} color="#444B58" />
            </div>
            <div className={styles.product__item}>
              <Paragraph value="Stock" color="#B2B5BB" />
              <Paragraph value={stock} color="#444B58" />
            </div>
            <div className={styles.product__item}>
              <Paragraph value="Brand" color="#B2B5BB" />
              <Paragraph value={brand} color="#444B58" />
            </div>
            <div className={styles.product__item}>
              <Paragraph value="Category" color="#B2B5BB" />
              <Paragraph value={category} color="#444B58" />
            </div>
            <div className={styles.product__item}>
              <Paragraph value="Description" color="#B2B5BB" />
              <Paragraph value={description} color="#444B58" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Product;
