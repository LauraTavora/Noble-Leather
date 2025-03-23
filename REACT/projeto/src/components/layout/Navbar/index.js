import style from './Navbar.module.css';

function Navbar() {
    return (
        <header className={style.header}>
            <nav className={style.menu}>
                <button className={style.menuBtn}>☰</button>
                <h1>Noble Leather</h1>
                <div className={style.icons}>
                    <span>♡</span>
                    <span>🛒</span>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
