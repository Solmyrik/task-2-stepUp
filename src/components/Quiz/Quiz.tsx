import styles from './Quiz.module.css';
import H2Title from '../Common/H2Title/H2Title';
import H3Title from '../Common/H3Title/H3Title';

import QuizItem from './QuizItem';
import Button from '../Common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import Container from '../Common/Container/Container';
import { useEffect, useState } from 'react';
import { QuizProduct, fetchQuiz } from '../../redux/slices/QuizSlice';
import { filterItems } from '../../helpers/filterItems';
import ProductsItem from '../Products/ProductsItem';
import QuizProducts from './QuizProducts';

type Props = {
  id?: string;
};

const Quiz = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.categories.categories);
  const itemsProduct = useSelector((state: RootState) => state.quiz.products);
  const [currentProduct, setCurrentProduct] = useState<QuizProduct[]>([]);
  const [activeItems, setActiveItems] = useState<string[]>([]);
  const [activeProducts, setActiveProducts] = useState<boolean>(false);

  const onChangeActiveItems = (value: string) => {
    if (activeItems.includes(value)) {
      setActiveItems(activeItems.filter((item) => item !== value));
    } else {
      setActiveItems([...activeItems, value]);
    }
  };

  useEffect(() => {
    getItemsProduct();
  }, []);

  const getItemsProduct = () => {
    dispatch(fetchQuiz());
  };

  const onFilterItems = async (active: boolean) => {
    setCurrentProduct(filterItems(itemsProduct, activeItems));
    setActiveProducts(active);
  };

  return (
    <section id={props.id} className={styles.quiz}>
      <Container>
        {activeProducts ? (
          <QuizProducts currentProduct={currentProduct} onFilterItems={onFilterItems} />
        ) : (
          <div className={styles.quiz__wrapper}>
            <div className={styles.quiz__header}>
              <H2Title className={styles.quiz__title}>
                We will select the perfect product for you
              </H2Title>
              <h5 className={styles.quiz__subtitle}>
                Answer three questions and we will send you a catalog with the most suitable
                products for you.
              </h5>
            </div>
            <div className={styles.quiz__body}>
              <H3Title>What type of product are you considering?</H3Title>
              <div className={styles.quiz__items}>
                {categories.map((item, index) => (
                  <QuizItem key={index} title={item} onChangeActiveItems={onChangeActiveItems} />
                ))}
              </div>
            </div>
            <div className={styles.quiz__footer}>
              <div className={styles.quiz__progress}>
                <span>1</span>
                <div>of</div>
                <span>2</span>
              </div>
              <Button
                type="secondary-border"
                onClick={() => {
                  onFilterItems(true);
                }}>
                Next step
              </Button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Quiz;
