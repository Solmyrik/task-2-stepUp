import React from 'react';
import styles from './Gallary.module.css';
import Image from '../Common/Image/Image';

type Props = {
  thumbnail: string;
  images: string[];
  alt: string;
};
const Gallary: React.FC<Props> = (props) => {
  return (
    <article className={styles.gallary}>
      <div className={styles.gallary__thumbnail}>
        <Image className={styles.gallery__bigimg} src={props.thumbnail} alt={props.alt} />
      </div>
      <div className={styles.gallary__images}>
        {props.images &&
          props.images.map((img) => (
            <Image className={styles.gallery__img} src={img} alt={props.alt} />
          ))}
      </div>
    </article>
  );
};

export default Gallary;
