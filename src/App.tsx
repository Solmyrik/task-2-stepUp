import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Catalog from './components/Catalog/Catalog';
import About from './components/About/About';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Intro />
        <Catalog />
        <About />
      </main>
    </div>
  );
}

export default App;
