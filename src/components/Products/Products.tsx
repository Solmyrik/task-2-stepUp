import { useEffect, useState } from 'react';
import styles from './Products.module.css';
import Button from '../Common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchProducts, fetchProductsSkip } from '../../redux/slices/ProductsSlice';
import ProductsItem from './ProductsItem';
import NotFound from '../Common/NotFoundPage/NotFoundPage';

type Props = {};

const Products = (props: Props) => {
  const [skip, setSkip] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const productItems = useSelector((state: RootState) => state.products.products);
  const total = useSelector((state: RootState) => state.products.total);
  const [productsNotFound, setProductsNotFound] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (!productItems.length) {
      setProductsNotFound(true);
    } else {
      setProductsNotFound(false);
    }
  }, [productItems]);

  const onAddNewProduct = () => {
    dispatch(fetchProductsSkip(skip + 9));
    setSkip(skip + 9);
  };

  if (productsNotFound) {
    return (
      <>
        <NotFound>Товары не найдены</NotFound>
      </>
    );
  }

  return (
    <article className={styles.products}>
      <div className={styles.products__body}>
        {productItems &&
          productItems.map((item, index) => (
            <ProductsItem
              key={index}
              id={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              price={item.price}
            />
          ))}
      </div>

      {total > productItems.length && (
        <div className={styles.product__button}>
          <Button type="primary" onClick={() => onAddNewProduct()}>
            Show more
          </Button>
        </div>
      )}
    </article>
  );
};

export default Products;
