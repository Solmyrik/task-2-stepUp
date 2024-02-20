import React, { useEffect, useState } from 'react';
import styles from './SideBar.module.css';
import H3Title from '../Common/H3Title/H3Title';
import Paragraph from '../Common/Paragraph/Paragraph';
import Button from '../Common/Button/Button';
import { categoryItems } from '../../constans/categoryItems';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchAllCategories } from '../../redux/slices/CategoriesSlice';
import { fetchProducts, fetchProductsOfCategories } from '../../redux/slices/ProductsSlice';

type Props = {};

const SideBar = (props: Props) => {
  const [activeCategories, setActiveCategories] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

  const onChangeActiveCategories = (item: string) => {
    setActiveCategories(item);
  };

  const onChangeCategories = () => {
    dispatch(fetchProductsOfCategories(activeCategories));
  };

  const onReset = () => {
    dispatch(fetchProducts());
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__wrapper}>
        <H3Title className={styles.sidebar__title} value="Selection by parameters" />
        <div className={styles.sidebar__body}>
          <Paragraph className={styles.sidebar__subtitle} value="Category" color="#444B58" />
          <div className={styles.sidebar__items}>
            {categories &&
              categories.map((item, index) => (
                <div
                  onClick={() => onChangeActiveCategories(item)}
                  key={index}
                  className={
                    activeCategories === item
                      ? [styles.sidebar__item, styles.active].join(' ')
                      : styles.sidebar__item
                  }>
                  <Paragraph value={item} color="#444B58" />
                </div>
              ))}
          </div>
          <div className={styles.sidebar__buttons}>
            <Button type="secondary" width="100%" text="Apply" onClick={onChangeCategories} />
            <Button type="tertiary" width="fit-content" text="Reset" onClick={onReset} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
