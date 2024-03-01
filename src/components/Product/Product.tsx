import styles from './Product.module.css';
import H3Title from '../Common/H3Title/H3Title';
import { subtractPercentage } from '../../helpers/subtractPercentage';
import Gallary from '../Gallary/Gallary';
import ProductItem from './ProductItem';
import Button from '../Common/Button/Button';
import { useState } from 'react';
import ProductForm from './ProductForm';

export type ProductType = {
  title: string;
  id: number;
  rating: number;
  price: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
  description: string;
  thumbnail: string;
  images: string[];
};

type Props = {
  product: ProductType;
  discountPercentage: number;
};

const Product = (props: Props) => {
  const { title, id, rating, price, stock, brand, category, description, thumbnail, images } =
    props.product;
  const discountPrice = subtractPercentage(price, props.discountPercentage);
  const [activeForm, setActiveForm] = useState<boolean>(false);

  console.log(props.discountPercentage);

  return (
    <section className={styles.product}>
      <div className={styles.product__container}>
        <div className={styles.product__gallery}>
          <Gallary thumbnail={thumbnail} images={images} alt={title} />
        </div>
        <div className={styles.product__content}>
          <article className={styles.product__header}>
            <H3Title>{title}</H3Title>
            <ProductItem value={id} identifier="SKU ID" />
          </article>
          {activeForm ? (
            <ProductForm product={props.product} setActiveForm={setActiveForm} />
          ) : (
            <article className={styles.product__body}>
              <div className={styles.product__specifications}>
                <ProductItem
                  type="stars"
                  identifier="Rating"
                  rating={rating && Math.floor(rating)}
                />
                <ProductItem value={`${price}$`} identifier="Base price" />
                <ProductItem
                  value={`${props.discountPercentage}%`}
                  identifier="Discount percentage"
                />
                <ProductItem value={`${discountPrice}$`} identifier="Discount price" />
                <ProductItem value={stock} identifier="Stock" />
                <ProductItem value={brand} identifier="Brand" />
                <ProductItem value={category} identifier="Category" />
                <ProductItem value={description} identifier="Description" />
              </div>
              <Button type="primary-big" onClick={() => setActiveForm(true)}>
                Edit
              </Button>
            </article>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
