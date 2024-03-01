import MainPage from './pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ProductPage from './pages/ProductPage/ProductPage';
import './styles/index.css';

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
