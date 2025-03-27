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
    // <Router> {/* Envolve tudo no Router */}
    //   <Navbar />
    //   <Routes> 
    //     <Route path="/" element={<Home />} />
    //     <Route path="/bolsa" element={<Bolsa />} />
    //     <Route path="/cinto" element={<Cinto />} />
    //     <Route path="/jaqueta" element={<Jaqueta />} />
    //   </Routes>
    //   <Footer />
    // </Router>
    <Compra/>
  );
}

export default App;
