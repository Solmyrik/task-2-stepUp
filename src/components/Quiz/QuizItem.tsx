import React from 'react';

import styles from './Quiz.module.css';
import Image from '../Common/Image/Image';
import Paragraph from '../Common/Paragraph/Paragraph';

type Props = {
  image?: string;
  title: string;
};

const QuizItem: React.FC<Props> = (props) => {
  return (
    <article className={styles.quiz__item}>
      <label className={styles.quiz__label}>
        <div className={styles.quiz__input}></div>
        <Paragraph value={props.title} type="secondary" />
      </label>
    </article>
  );
};

export default QuizItem;
