import { Link } from 'react-router-dom';
import styles from './Products.module.css';
import Image from '../Common/Image/Image';
import Price from '../Common/Price/Price';

type Props = {
  id: number;
  thumbnail: string;
  price: number;
  title: string;
};

const ProductsItem = (props: Props) => {
  return (
    <Link to={`/catalog/${props.id}`}>
      <Image className={styles.products__image} src={props.thumbnail} alt={props.title} />
      <h4 className={styles.products__title}>{props.title}</h4>
      <Price value={props.price} />
    </Link>
  );
};

export default ProductsItem;
