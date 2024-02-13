import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Catalog from './components/Catalog/Catalog';
import About from './components/About/About';
import Quiz from './components/Quiz/Quiz';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Intro />
        <Catalog />
        <About />
        <Quiz />
      </main>
    </div>
  );
}

export default App;
