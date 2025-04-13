import style from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className={style.header}>
            <nav className={style.menu}>
                <button className={style.menuBtn}>☰</button>
                <h1>Noble Leather</h1>
                <div className={style.icons}>
                <div className={style.icons}>
                    <Link to="/favorito">♡</Link>
                    <Link to="/carrinho">🛒</Link>
                </div>
                </div>
            </nav>
        </header>
    );  
}

export default Navbar;