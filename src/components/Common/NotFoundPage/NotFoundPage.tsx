import Container from '../Container/Container';
import H2Title from '../H2Title/H2Title';

import styles from './NotFound.module.css';

type Props = {
  children: React.ReactNode;
};

const NotFound: React.FC<Props> = (props) => {
  return (
    <section>
      <Container>
        <H2Title className={styles.notfound}>{props.children}</H2Title>
      </Container>
    </section>
  );
};

export default NotFound;
