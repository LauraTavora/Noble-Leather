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
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function AppContent() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verifica autenticação ao carregar e quando a localização muda
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, [location]);

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        {/* Rotas públicas */}
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/cadastro" element={isAuthenticated ? <Navigate to="/" /> : <Cadastro setIsAuthenticated={setIsAuthenticated} />} />

        {/* Rotas protegidas */}
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/bolsa" element={isAuthenticated ? <Bolsa /> : <Navigate to="/login" />} />
        <Route path="/cinto" element={isAuthenticated ? <Cinto /> : <Navigate to="/login" />} />
        <Route path="/compra" element={isAuthenticated ? <Compra /> : <Navigate to="/login" />} />
        <Route path="/jaqueta" element={isAuthenticated ? <Jaqueta /> : <Navigate to="/login" />} />
        <Route path="/carrinho" element={isAuthenticated ? <Carrinho /> : <Navigate to="/login" />} />
        <Route path="/favorito" element={isAuthenticated ? <Favorito /> : <Navigate to="/login" />} />
      </Routes>
      
      {/* Exibe o Footer apenas se não estiver na página de Favoritos e estiver autenticado */}
      {isAuthenticated && location.pathname !== '/favorito' && <Footer />}
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