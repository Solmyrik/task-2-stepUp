import { introTexts } from '../../constans/intro';
import { scrollToBlock } from '../../helpers/scrollToBlock';
import Button from '../Common/Button/Button';
import Container from '../Common/Container/Container';
import H1Title from '../Common/H1Title/H1Title';
import Paragraph from '../Common/Paragraph/Paragraph';
import TextBackdrop from '../Common/TextBackdrop/TextBackdrop';
import styles from './Intro.module.css';
import { FC } from 'react';

const Intro: FC = () => {
  return (
    <section className={styles.intro}>
      <Container>
        <H1Title className={styles.intro__title}>{introTexts.title}</H1Title>
        <Paragraph className={styles.intro__subtitle} type="primary">
          {introTexts.subTitle}
        </Paragraph>
        <Button onClick={() => scrollToBlock('catalog')} type="primary">
          Go to shopping
        </Button>
        <TextBackdrop className={styles.intro__text}>Goods4you</TextBackdrop>
      </Container>
    </section>
  );
};

export default Intro;
