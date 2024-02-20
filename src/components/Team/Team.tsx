import React from 'react';
import styles from './Team.module.css';
import H2Title from '../Common/H2Title/H2Title';

import decor from '../../assets/image/team/decor.png';
import TeamItem from './TeamItem';
import { teamItems } from '../../constans/teamItems';

type Props = {
  id?: string;
};

const Team = (props: Props) => {
  return (
    <section id={props.id} className={styles.team}>
      <img className={styles.team__decor} src={decor} alt="decor" />
      <div className={styles.team__container}>
        <H2Title value="Our team" className={styles.team__title} />
        <div className={styles.team__items}>
          {teamItems.map((item, index) => (
            <TeamItem key={index} image={item.image} name={item.name} post={item.post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
