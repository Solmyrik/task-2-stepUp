import React from 'react';
import styles from './Stars.module.css';

import star from '../../../assets/image/star.svg';

type Props = {
  rating: number;
};

const Stars = (props: Props) => {
  const starArray = Array(props.rating).fill('star');
  return (
    <div className={styles.stars}>
      {starArray &&
        starArray.map((item, index) => {
          return (
            <div key={index}>
              <img src={star} alt="star" />
            </div>
          );
        })}
    </div>
  );
};

export default Stars;
