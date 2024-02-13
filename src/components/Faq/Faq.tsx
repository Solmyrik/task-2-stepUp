import React from 'react';
import styles from './Faq.module.css';
import H2Title from '../Common/H2Title/H2Title';
import FaqItem from './FaqItem';

type Props = {};

const faqItems = [
  { ques: 'Question 1', answer: 'Long answer to the first question' },
  { ques: 'Question 2', answer: 'Long answer to the second question' },
];

const Faq = (props: Props) => {
  return (
    <section className={styles.faq}>
      <div className={styles.faq__container}>
        <H2Title value="Faq" />
        <div className={styles.faq__items}>
          {faqItems.map((item, index) => (
            <FaqItem ques={item.ques} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
