import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Bolsa from './components/pages/Bolsa';
import Carrinho from './components/pages/Carrinho';
import Cinto from './components/pages/Cinto';
import Compra from './components/pages/Compra';
import Favorito from './components/pages/Favorito';
import Home from './components/pages/Home';
import Jaqueta from './components/pages/Jaqueta';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar /> {/* O Navbar estará disponível em todas as páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bolsa" element={<Bolsa />} />
        <Route path="/cinto" element={<Cinto />} />
        <Route path="/compra" element={<Compra />} />
        <Route path="/jaqueta" element={<Jaqueta />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/favorito" element={<Favorito />} />
      </Routes>
      {/* Exibe o Footer apenas se não estiver na página de Favoritos */}
      {location.pathname !== '/favorito' && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;