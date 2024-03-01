import React from 'react';
import { ProductType } from './Product';
import ProductItem from './ProductItem';
import styles from './Product.module.css';
import Paragraph from '../Common/Paragraph/Paragraph';
import InputText from '../Common/InputText/InputText';
import { subtractPercentage } from '../../helpers/subtractPercentage';
import Button from '../Common/Button/Button';
import { useDispatch } from 'react-redux';
import { fetchUpdateProducts } from '../../redux/slices/SingleProductSlice';
import { AppDispatch } from '../../redux/store';

type Props = {
  product: ProductType;
  setActiveForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductForm: React.FC<Props> = (props) => {
  const { id, rating, price, discountPercentage, stock, brand, category, description } =
    props.product;
  const discountPrice = subtractPercentage(price, discountPercentage);
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: { [key: string]: string | number } = {};
    const formInputs = Array.from(event.currentTarget.elements).filter(
      (element) => element.tagName === 'INPUT',
    );

    formInputs.forEach((item) => {
      if (item instanceof HTMLInputElement) {
        if (item.name === 'price' || item.name === 'stock') {
          data[item.name] = Number(item.value);
        } else {
          data[item.name] = item.value;
        }
      }
    });

    dispatch(fetchUpdateProducts({ obj: data, id: id }));
    props.setActiveForm(false);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.product__form}>
      <ProductItem type="stars" identifier="Rating" rating={rating && Math.floor(rating)} />
      <label className={styles.product__label}>
        <Paragraph type="primary-opacity">Base price</Paragraph>
        <InputText nameInput="price" className={styles.product__input} value={price} />
      </label>
      <label className={styles.product__label}>
        <Paragraph type="primary-opacity">Discount percentage</Paragraph>
        <InputText
          nameInput="discountPercentage"
          className={styles.product__input}
          value={discountPercentage}
        />
      </label>
      <label className={styles.product__label}>
        <Paragraph type="primary-opacity">Discount price</Paragraph>
        <Paragraph type="secondary">{`${discountPrice}$`}</Paragraph>
      </label>
      <label className={styles.product__label}>
        <Paragraph type="primary-opacity">Stock</Paragraph>
        <InputText nameInput="stock" className={styles.product__input} value={stock} />
      </label>
      <label className={styles.product__label}>
        <Paragraph type="primary-opacity">Brand</Paragraph>
        <InputText nameInput="brand" className={styles.product__input} value={brand} />
      </label>
      <label className={styles.product__label}>
        <Paragraph type="primary-opacity">Category</Paragraph>
        <InputText nameInput="category" className={styles.product__input} value={category} />
      </label>
      <label className={styles.product__label}>
        <Paragraph type="primary-opacity">Description</Paragraph>
        <InputText nameInput="description" className={styles.product__input} value={description} />
      </label>
      <Button type="primary-big" onClick={() => console.log()}>
        Save
      </Button>
    </form>
  );
};

export default ProductForm;
