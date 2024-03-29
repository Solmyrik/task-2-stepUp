import React from 'react';
import styles from './Faq.module.css';
import H2Title from '../Common/H2Title/H2Title';
import FaqItem from './FaqItem';
import { faqItems } from '../../constans/faqItems';

type Props = {};

const Faq = (props: Props) => {
  return (
    <section className={styles.faq}>
      <div className={styles.faq__container}>
        <H2Title value="Faq" />
        <div className={styles.faq__items}>
          {faqItems.map((item, index) => (
            <FaqItem key={index} ques={item.ques} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
