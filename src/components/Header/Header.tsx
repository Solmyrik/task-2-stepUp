import Logo from '../Common/Logo/Logo';
import Menu from '../Common/Menu/Menu';
import { MenuItem } from '../../constans/menu';

import styles from './Header.module.css';
import Container from '../Common/Container/Container';

type Props = {
  items: MenuItem[];
};

const Header: React.FC<Props> = (props) => {
  return (
    <header className={styles.header}>
      <Container className={styles.header__container}>
        <Logo title="Goods4you" />
        <div className={styles.header__left}>
          <Menu items={props.items} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
