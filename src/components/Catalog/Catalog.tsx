import H2Title from '../Common/H2Title/H2Title';
import SideBar from '../SideBar/SideBar';
import Products from '../Products/Products';

import styles from './Catalog.module.css';
import Container from '../Common/Container/Container';

type Props = {
  id?: string;
};

const Catalog = (props: Props) => {
  return (
    <section id="catalog" className={styles.catalog}>
      <Container>
        <H2Title className={styles.catalog__title}>Catalog</H2Title>
        <div className={styles.catalog__wrapper}>
          <SideBar />
          <Products />
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
