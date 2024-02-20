import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import H2Title from '../../components/Common/H2Title/H2Title';
import { ProductPageMenuItems } from '../../constans/menu';
import { useParams } from 'react-router-dom';
import Product from '../../components/Product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchSingleProduct } from '../../redux/slices/SingleProductSlice';

type Props = {};

const ProductPage = (props: Props) => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => state.product.product);

  useEffect(() => {
    onGetProduct();
  }, []);

  const onGetProduct = () => {
    if (id) {
      dispatch(fetchSingleProduct(id));
    }
  };

  useEffect(() => {
    console.log(product, 'p');
  }, [product]);
  return (
    <>
      <Header items={ProductPageMenuItems} />

      <main className="main catalog-page">
        <div className="container">
          <H2Title value={product.title} />
        </div>
        <Product product={product} />
      </main>
    </>
  );
};

export default ProductPage;
