import React, { useEffect, useRef, useState } from 'react';
import styles from './Faq.module.css';
import Paragraph from '../Common/Paragraph/Paragraph';

type Props = {
  ques: string;
  answer: string;
};

const FaqItem = (props: Props) => {
  const myElementRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (myElementRef.current) {
      const heightCurrent = myElementRef.current.scrollHeight;
      setHeight(heightCurrent);
    }
  }, []);
  const maxHeight = active === true ? height : '0px';
  // под вопросом
  //   const paddingBottom = active === true ? '20px' : '30px';

  return (
    <div className={styles.answers}>
      <div className={styles.answers__item}>
        <div className={styles.answers__top}>
          <div className={styles.answers__title}>{props.ques}</div>
        </div>
        <div ref={myElementRef} style={{ maxHeight }} className={styles.answers__body}>
          <Paragraph value={props.answer} color="#24242480" />
        </div>
      </div>
      <div
        onClick={() => setActive(!active)}
        className={active ? [styles.cross, styles.active].join(' ') : styles.cross}></div>
    </div>
  );
};

export default FaqItem;
