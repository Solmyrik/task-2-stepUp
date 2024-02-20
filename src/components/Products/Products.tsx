import React, { useEffect, useState } from 'react';
import styles from './Products.module.css';

import Image from '../Common/Image/Image';
import Price from '../Common/Price/Price';
import Button from '../Common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchProducts, fetchProductsSkip } from '../../redux/slices/ProductsSlice';
import { Link } from 'react-router-dom';

type Props = {};

const Products = (props: Props) => {
  const [skip, setSkip] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const productItems = useSelector((state: RootState) => state.products.products);
  const total = useSelector((state: RootState) => state.products.total);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const onAddNewProduct = () => {
    dispatch(fetchProductsSkip(skip + 9));
    setSkip(skip + 9);
  };

  return (
    <div className={styles.products}>
      <div className={styles.products__body}>
        {productItems &&
          productItems.map((item, index) => (
            <Link to={`/catalog/${item.id}`} key={index}>
              <Image className={styles.products__image} src={item.thumbnail} alt={item.title} />
              <h4 className={styles.products__title}>{item.title}</h4>
              <Price value={item.price} />
            </Link>
          ))}
      </div>

      {total > productItems.length && (
        <div className={styles.product__button}>
          <Button type="primary" text="Show more" width="171px" onClick={() => onAddNewProduct()} />
        </div>
      )}
    </div>
  );
};

export default Products;
