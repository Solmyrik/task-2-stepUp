import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Catalog from './components/Catalog/Catalog';
import About from './components/About/About';
import Quiz from './components/Quiz/Quiz';
import Team from './components/Team/Team';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
