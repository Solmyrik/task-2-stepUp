import React from 'react';
import Header from '../../components/Header/Header';
import Intro from '../../components/Intro/Intro';
import Catalog from '../../components/Catalog/Catalog';
import About from '../../components/About/About';
import Quiz from '../../components/Quiz/Quiz';
import Team from '../../components/Team/Team';
import Faq from '../../components/Faq/Faq';
import Footer from '../../components/Footer/Footer';
import { MainMenuItems } from '../../constans/menu';

type Props = {};

const MainPage = (props: Props) => {
  return (
    <>
      <Header items={MainMenuItems} />
      <main className="main">
        <Intro />
        <Catalog id="catalog" />
        <About id="about" />
        <Quiz id="quiz" />
        <Team id="team" />
        <Faq id="faq" />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
