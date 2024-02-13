import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Catalog from './components/Catalog/Catalog';
import About from './components/About/About';
import Quiz from './components/Quiz/Quiz';
import Team from './components/Team/Team';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Intro />
        <Catalog />
        <About />
        <Quiz />
        <Team />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
