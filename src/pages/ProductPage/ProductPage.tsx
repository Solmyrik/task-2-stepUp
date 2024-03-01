import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import H2Title from '../../components/Common/H2Title/H2Title';
import { ProductPageMenuItems } from '../../constans/menu';
import { useParams } from 'react-router-dom';
import Product from '../../components/Product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchSingleProduct } from '../../redux/slices/SingleProductSlice';
import Container from '../../components/Common/Container/Container';
import NotFound from '../../components/Common/NotFoundPage/NotFoundPage';

type Props = {};

const ProductPage = (props: Props) => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => state.product.product);
  const [productNotFound, setProductNotFound] = useState(false);

  useEffect(() => {
    onGetProduct();
  }, []);

  const onGetProduct = () => {
    if (id) {
      dispatch(fetchSingleProduct(id)).then((response) => {
        if (!response.payload) {
          setProductNotFound(true);
        }
      });
    }
  };

  useEffect(() => {
    console.log(product, 'p');
  }, [product]);

  if (productNotFound) {
    return (
      <>
        <Header items={ProductPageMenuItems} />
        <NotFound>Страница не найдена</NotFound>
      </>
    );
  }
  return (
    <>
      <Header items={ProductPageMenuItems} />

      <main className="main catalog-page">
        <Container>
          <H2Title>{product.title}</H2Title>
        </Container>
        <Product product={product} />
      </main>
    </>
  );
};

export default ProductPage;
