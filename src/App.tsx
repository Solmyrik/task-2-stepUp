import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Intro />
      </main>
    </div>
  );
}

export default App;
