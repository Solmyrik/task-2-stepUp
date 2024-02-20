import React from 'react';
import styles from './Team.module.css';
import H3Title from '../Common/H3Title/H3Title';
import Paragraph from '../Common/Paragraph/Paragraph';
import Image from '../Common/Image/Image';

type TeamItems = {
  image: string;
  name: string;
  post: string;
};

const TeamItem: React.FC<TeamItems> = (props) => {
  return (
    <article className={styles.team__item}>
      <Image src={props.image} alt={props.name} />
      <div className={styles.team__content}>
        <H3Title value={props.name} className={styles.team__title} />
        <Paragraph value={props.post} type="primary" />
      </div>
    </article>
  );
};

export default TeamItem;
