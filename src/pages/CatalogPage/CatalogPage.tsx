import React from 'react';
import Header from '../../components/Header/Header';
import Catalog from '../../components/Catalog/Catalog';
import { CatalogPageMenuItems } from '../../constans/menu';
import Products from '../../components/Products/Products';
import H2Title from '../../components/Common/H2Title/H2Title';
import SearchBlock from '../../components/SearchBlock/SearchBlock';

type Props = {};

const CatalogPage = (props: Props) => {
  return (
    <>
      <Header items={CatalogPageMenuItems} />

      <main className="main catalog-page">
        <div className="container">
          <H2Title value="All products" />
          <SearchBlock className="catalog-page__search" />
        </div>
        <div className="container">
          <Products />
        </div>
      </main>
    </>
  );
};

export default CatalogPage;
