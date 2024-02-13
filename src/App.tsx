import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Catalog from './components/Catalog/Catalog';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Intro />
        <Catalog />
      </main>
    </div>
  );
}

export default App;
