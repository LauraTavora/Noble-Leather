import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Bolsa from './components/pages/Bolsa';
import Cinto from './components/pages/Cinto';
import Compra from './components/pages/Compra';
import Home from './components/pages/Home';
import Jaqueta from './components/pages/Jaqueta';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar /> {/* O Navbar estará disponível em todas as páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bolsa" element={<Bolsa />} />
        <Route path="/cinto" element={<Cinto />} />
        <Route path="/compra" element={<Compra />} /> {/* A rota da página de compra */}
        <Route path="/jaqueta" element={<Jaqueta />} />
      </Routes>
      <Footer /> {/* O Footer estará disponível em todas as páginas */}
    </Router>
  );
}

export default App;
