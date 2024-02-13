import React from 'react';
import styles from './SideBar.module.css';
import H3Title from '../Common/H3Title/H3Title';
import Paragraph from '../Common/Paragraph/Paragraph';
import Button from '../Common/Button/Button';
import { categoryItems } from '../../constans/categoryItems';

type Props = {};

const SideBar = (props: Props) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__wrapper}>
        <H3Title className={styles.sidebar__title} value="Selection by parameters" />
        <div className={styles.sidebar__body}>
          <Paragraph className={styles.sidebar__subtitle} value="Category" color="#444B58" />
          <div className={styles.sidebar__items}>
            {categoryItems.map((item, index) => (
              <div key={index} className={styles.sidebar__item}>
                <Paragraph value={item} color="#444B58" />
              </div>
            ))}
          </div>
          <div className={styles.sidebar__buttons}>
            <Button type="secondary" width="100%" text="Apply" onClick={() => console.log()} />
            <Button
              type="tertiary"
              width="fit-content"
              text="Reset"
              onClick={() => console.log()}
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
