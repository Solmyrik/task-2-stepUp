import React from 'react';
import H2Title from '../Common/H2Title/H2Title';
import ProductsItem from '../Products/ProductsItem';
import Button from '../Common/Button/Button';
import styles from './Quiz.module.css';
import { QuizProduct } from '../../redux/slices/QuizSlice';

type Props = {
  currentProduct: QuizProduct[];
  onFilterItems: (active: boolean) => void;
};

const QuizProducts: React.FC<Props> = (props) => {
  return (
    <div className={styles.quiz__wrapper}>
      <div className={styles.quiz__header}>
        <H2Title className={styles.quiz__title}>Your selection is ready!</H2Title>
      </div>
      <div className={styles.quiz__products}>
        {props.currentProduct.slice(0, 3).map((item) => (
          <ProductsItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            thumbnail={item.thumbnail}
          />
        ))}
      </div>
      <div className={styles.quiz__footer}>
        <div className={styles.quiz__progress}>
          <span>2</span>
          <div>of</div>
          <span>2</span>
        </div>
        <Button
          type="secondary-border"
          onClick={() => {
            props.onFilterItems(false);
          }}>
          Change selection
        </Button>
      </div>
    </div>
  );
};

export default QuizProducts;
