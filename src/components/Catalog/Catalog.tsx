import React from 'react';
import H2Title from '../Common/H2Title/H2Title';

import styles from './Catalog.module.css';
import SideBar from '../SideBar/SideBar';
import Products from '../Products/Products';

type Props = {
  id?: string;
};

const Catalog = (props: Props) => {
  return (
    <section id="catalog" className={styles.catalog}>
      <div className={styles.catalog__container}>
        <H2Title value="Catalog" className={styles.catalog__title} />
        <div className={styles.catalog__wrapper}>
          <SideBar />
          <Products />
        </div>
      </div>
    </section>
  );
};

export default Catalog;
