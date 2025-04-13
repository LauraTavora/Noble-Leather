import React, { useState } from 'react';
import Banner from '../../../assets/Group 44.svg';
import Image15 from '../../../assets/image (15).svg';
import Image16 from '../../../assets/image (16).svg';
import Image17 from '../../../assets/image (17).svg';
import Image18 from '../../../assets/image (18).svg';
import Image19 from '../../../assets/image (19).svg';
import Image20 from '../../../assets/image (20).svg';
import Image21 from '../../../assets/image (21).svg';
import Image22 from '../../../assets/image (22).svg';
import Image23 from '../../../assets/image (23).svg';
import WishlistIcon from '../../../assets/curtida.svg';
import CartIcon from '../../../assets/loja.svg';
import Stars from '../../../assets/estrelas.svg';
import Style from './Cinto.module.css';
import { useNavigate } from 'react-router-dom';

function Bolsa() {
    const navigate = useNavigate();

    const [quantities, setQuantities] = useState({
        15: 1,
        16: 1,
        17: 1,
        18: 1,
        19: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
    });

    const handleQuantityChange = (id, type) => {
        setQuantities(prev => {
            const newQuantity = type === 'increment' ? prev[id] + 1 : Math.max(1, prev[id] - 1);
            return { ...prev, [id]: newQuantity };
        });
    };

    const handleProductClick = (image) => {
        sessionStorage.setItem('imagem', image);
        navigate('/compra');
    };

    const products = [
        { id: 15, image: Image15, name: "Cinto 1", price: 50 },
        { id: 16, image: Image16, name: "Cinto 2", price: 30 },
        { id: 17, image: Image17, name: "Cinto 3", price: 40 },
        { id: 18, image: Image18, name: "Cinto 4", price: 80 },
        { id: 19, image: Image19, name: "Cinto 5", price: 60 },
        { id: 20, image: Image20, name: "Cinto 6", price: 30 },
        { id: 21, image: Image21, name: "Cinto 7", price: 100 },
        { id: 22, image: Image22, name: "Cinto 8", price: 120 },
        { id: 23, image: Image23, name: "Cinto 9", price: 190 },
    ];

    const handleFavoriteClick = () => {
        navigate('/favorito');
    };

    return (
        <>
            <section className={Style.banner}>
                <img src={Banner} alt="Banner Jaquetas Femininas" />
                <h2>Cintos</h2>
                <h2>Femininas</h2>
            </section>
            <nav className={Style.categories}>
                <a href="#">Feminino</a>
                <a href="#">Masculino</a>
            </nav>
            <section className={Style.products}>
                {products.map(product => (
                    <div key={product.id} className={Style.product_card}>
                        <div className={Style.product_image}>
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                onClick={() => handleProductClick(product.image)}
                            />
                            <span className={Style.wishlist_icon} onClick={(e) => { e.stopPropagation(); handleFavoriteClick(); }}>
                                <img src={WishlistIcon} alt="Favoritar" />
                            </span>          
                            <span className={Style.cart_icon}><img src={CartIcon} alt="" /></span>
                        </div>
                        <div className={Style.product_info}>
                            <h3>{product.name}</h3>
                            <div className={Style.stars}><img src={Stars} alt="" /></div>
                            <p className={Style.price}>R$ <span>{product.price.toFixed(2)}</span></p>
                            <div className={Style.quantity}>
                                <button onClick={() => handleQuantityChange(product.id, 'decrement')}>-</button>
                                <span>{quantities[product.id]}</span>
                                <button onClick={() => handleQuantityChange(product.id, 'increment')}>+</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Bolsa;