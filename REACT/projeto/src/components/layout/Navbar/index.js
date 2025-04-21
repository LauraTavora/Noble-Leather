import style from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('usuarioId');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <header className={style.header}>
      <nav className={style.menu}>
        <button className={style.menuBtn}>☰</button>
        <h1>Noble Leather</h1>
        <div className={style.icons}>
          <Link to="/favorito">♡</Link>
          <Link to="/carrinho">🛒</Link>

          {isAuthenticated ? (
            <span onClick={handleLogout} style={{ cursor: 'pointer' }}>🚪</span>
          ) : (
            <Link to="/login">🔐</Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
