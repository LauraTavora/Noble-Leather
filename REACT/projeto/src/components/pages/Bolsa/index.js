import React, { useState } from 'react';
import Banner from '../../../assets/Group 46.svg';
import Image5 from '../../../assets/image (5).svg';
import Image6 from '../../../assets/image (6).svg';
import Image7 from '../../../assets/image (7).svg';
import Image8 from '../../../assets/image (8).svg';
import Image9 from '../../../assets/image (9).svg';
import Image10 from '../../../assets/image (10).svg';
import Image11 from '../../../assets/image (11).svg';
import Image12 from '../../../assets/image (12).svg';
import Image13 from '../../../assets/image (13).svg';
import WishlistIcon from '../../../assets/curtida.svg';
import CartIcon from '../../../assets/loja.svg';
import Stars from '../../../assets/estrelas.svg';
import Style from './Bolsa.module.css';

function Bolsa() {
  const [quantities, setQuantities] = useState({
    5: 1,
    6: 1,
    7: 1,
    8: 1,
    9: 1,
    10: 1,
    11: 1,
    12: 1,
    13: 1,
  });

  const handleQuantityChange = (id, type) => {
    setQuantities(prev => {
      const newQuantity = type === 'increment' ? prev[id] + 1 : Math.max(1, prev[id] - 1);
      return { ...prev, [id]: newQuantity };
    });
  };

  const products = [
    { id: 5, image: Image5, name: "Jaqueta de couro sintético vintage", price: 90 },
    { id: 6, image: Image6, name: "Jaqueta de couro sintético vintage", price: 90 },
    { id: 7, image: Image7, name: "Jaqueta de couro sintético vintage", price: 90 },
    { id: 8, image: Image8, name: "Jaqueta de couro sintético vintage", price: 90 },
    { id: 9, image: Image9, name: "Jaqueta de couro sintético vintage", price: 90 },
    { id: 10, image: Image10, name: "Jaqueta de couro sintético vintage", price: 90 },
    { id: 11, image: Image11, name: "Jaqueta de couro sintético vintage", price: 90 },
    { id: 12, image: Image12, name: "Jaqueta de couro sintético vintage", price: 90 },
    { id: 13, image: Image13, name: "Jaqueta de couro sintético vintage", price: 90 },
  ];

  return (
    <>
      <section className={Style.banner}>
        <img src={Banner} alt="Banner Jaquetas Femininas" />
        <h2>Jaquetas</h2>
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
              <img src={product.image} alt={product.name} />
              <span className={Style.wishlist_icon}><img src={WishlistIcon} alt="" /></span>
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
