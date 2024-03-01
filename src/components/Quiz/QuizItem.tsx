import React, { useState } from 'react';

import styles from './Quiz.module.css';
import Paragraph from '../Common/Paragraph/Paragraph';

type Props = {
  title: string;
  onChangeActiveItems: (value: string) => void;
};

const QuizItem: React.FC<Props> = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    props.onChangeActiveItems(props.title);
  };

  return (
    <article className={styles.quiz__item}>
      <label className={styles.quiz__label}>
        <input
          onChange={handleChange}
          checked={checked}
          type="checkbox"
          className={styles.quiz__input}></input>
        <div
          className={
            checked ? [styles.quiz__input_fake, styles.active].join(' ') : styles.quiz__input_fake
          }></div>
        <Paragraph type="secondary">{props.title}</Paragraph>
      </label>
    </article>
  );
};

export default QuizItem;
