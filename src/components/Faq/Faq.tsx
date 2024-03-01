import styles from './Faq.module.css';
import H2Title from '../Common/H2Title/H2Title';
import FaqItem from './FaqItem';
import { faqItems } from '../../constans/faqItems';

type Props = {
  id?: string;
};

const Faq = (props: Props) => {
  return (
    <section id={props.id} className={styles.faq}>
      <div className={styles.faq__container}>
        <H2Title>Faq</H2Title>
        <div className={styles.faq__items}>
          {faqItems.map((item, index) => (
            <FaqItem key={index} ques={item.ques} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
