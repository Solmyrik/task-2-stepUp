import React from 'react';
import styles from './About.module.css';

import figure from '../../assets/image/figure.svg';
import H2Title from '../Common/H2Title/H2Title';
import Paragraph from '../Common/Paragraph/Paragraph';
import img from '../../assets/image/about.png';

type Props = {
  id?: string;
};

const About = (props: Props) => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__decor}>
          <img src={figure} alt="figure" />
        </div>
        <article className={styles.about__content}>
          <H2Title className={styles.about__title} value="About us" />
          <div className={styles.about__texts}>
            <Paragraph
              type="primary"
              value="Every day a person has a choice what to spend his money on. Stores and websites offer an endless list of products."
            />
            <Paragraph type="primary" value="But we will help you make the right choice!" />
          </div>
          <cite className={styles.about__site}>
            <span>Goods4you</span>
          </cite>
        </article>
        <div className={styles.about__image}>
          <img src={img} alt="sneakers" />
        </div>
      </div>
    </section>
  );
};

export default About;
