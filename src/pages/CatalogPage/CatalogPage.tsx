import Header from '../../components/Header/Header';
import { CatalogPageMenuItems } from '../../constans/menu';
import Products from '../../components/Products/Products';
import H2Title from '../../components/Common/H2Title/H2Title';
import SearchBlock from '../../components/SearchBlock/SearchBlock';

const CatalogPage = () => {
  return (
    <>
      <Header items={CatalogPageMenuItems} />
      <main className="main catalog-page">
        <div className="container">
          <H2Title>All products</H2Title>
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
