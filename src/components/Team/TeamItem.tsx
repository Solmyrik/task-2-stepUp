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
        <H3Title className={styles.team__title}>{props.name}</H3Title>
        <Paragraph type="primary">{props.post}</Paragraph>
      </div>
    </article>
  );
};

export default TeamItem;
