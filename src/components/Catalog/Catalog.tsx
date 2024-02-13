import React from 'react';
import H2Title from '../Common/H2Title/H2Title';

import styles from './Catalog.module.css';
import SideBar from '../SideBar/SideBar';

type Props = {};

const Catalog = (props: Props) => {
  return (
    <section id="catalog" className={styles.catalog}>
      <div className={styles.catalog__container}>
        <H2Title value="Catalog" className={styles.catalog__title} />
        <div className={styles.catalog__wrapper}>
          <SideBar />
        </div>
      </div>
    </section>
  );
};

export default Catalog;
