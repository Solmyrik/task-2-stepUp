import React from 'react';
import styles from './Team.module.css';
import H2Title from '../Common/H2Title/H2Title';

import image1 from '../../assets/image/team/1.png';
import image2 from '../../assets/image/team/2.png';
import image3 from '../../assets/image/team/3.png';
import image4 from '../../assets/image/team/4.png';
import image5 from '../../assets/image/team/5.png';
import image6 from '../../assets/image/team/6.png';
import decor from '../../assets/image/team/decor.png';
import TeamItem from './TeamItem';

type Props = {};

type TeamItems = {
  image: string;
  name: string;
  post: string;
};

const teamItems: TeamItems[] = [
  {
    image: image1,
    name: 'Maxim',
    post: 'Administrator',
  },
  {
    image: image2,
    name: 'Maxim',
    post: 'Administrator',
  },
  {
    image: image3,
    name: 'Maxim',
    post: 'Administrator',
  },
  {
    image: image4,
    name: 'Maxim',
    post: 'Administrator',
  },
  {
    image: image5,
    name: 'Maxim',
    post: 'Administrator',
  },
  {
    image: image6,
    name: 'Maxim',
    post: 'Administrator',
  },
];

const Team = (props: Props) => {
  return (
    <section className={styles.team}>
      <img className={styles.team__decor} src={decor} alt="decor" />
      <div className={styles.team__container}>
        <H2Title value="Our team" className={styles.team__title} />
        <div className={styles.team__items}>
          {teamItems.map((item, index) => (
            <TeamItem image={item.image} name={item.name} post={item.post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
