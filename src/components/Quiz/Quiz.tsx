import React from 'react';
import styles from './Quiz.module.css';
import H2Title from '../Common/H2Title/H2Title';
import H3Title from '../Common/H3Title/H3Title';

import QuizItem from './QuizItem';
import Button from '../Common/Button/Button';
import { quizItems } from '../../constans/quizItems';

type Props = {};

const Quiz = (props: Props) => {
  return (
    <section className={styles.quiz}>
      <div className={styles.quiz__container}>
        <div className={styles.quiz__wrapper}>
          <div className={styles.quiz__header}>
            <H2Title
              className={styles.quiz__title}
              value="We will select the perfect product for you"
            />
            <h5 className={styles.quiz__subtitle}>
              Answer three questions and we will send you a catalog with the most suitable products
              for you.
            </h5>
          </div>
          <div className={styles.quiz__body}>
            <H3Title value="We will select the perfect product for you" />
            <div className={styles.quiz__items}>
              {quizItems.map((item, index) => (
                <QuizItem key={index} title={item.title} image={item.image} />
              ))}
            </div>
          </div>
          <div className={styles.quiz__footer}>
            <div className={styles.quiz__progress}>
              <span>1</span>
              <div>of</div>
              <span>3</span>
            </div>
            <Button type="secondary-border" text="Next step" onClick={() => {}} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
