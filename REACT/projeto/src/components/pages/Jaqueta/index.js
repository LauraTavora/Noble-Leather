import React from 'react';
import { useNavigate } from 'react-router-dom';
import Jaqueta1 from '../../../assets/image (1).svg'; 
import Jaqueta2 from '../../../assets/image (2).svg'; 
import Jaqueta3 from '../../../assets/image (3).svg'; 
import Jaqueta4 from '../../../assets/image (4).svg'; 
import Jaqueta5 from '../../../assets/Rectangle 16 (1).svg'; 
import Jaqueta6 from '../../../assets/image.svg'; 
import Estrelas from '../../../assets/estrelas.svg'; 
import Curtida from '../../../assets/curtida.svg'; 
import Loja from '../../../assets/loja.svg'; 
import Frame from '../../../assets/Frame 12.svg'; 
import Style from './Jaqueta.module.css';
import foto1 from '../../../assets/image 30.svg';  // Importando a imagem

const products = [
  {
    id: 1,
    name: 'Jaqueta de couro sintético vintage',
    price: 'R$ 90,00',
    image: Jaqueta1,
  },
  {
    id: 2,
    name: 'Jaqueta de couro sintético vintage',
    price: 'R$ 90,00',
    image: Jaqueta2,
  },
  {
    id: 3,
    name: 'Jaqueta de couro sintético vintage',
    price: 'R$ 90,00',
    image: Jaqueta3,
  },
  {
    id: 4,
    name: 'Jaqueta de couro sintético vintage',
    price: 'R$ 90,00',
    image: Jaqueta4,
  },
  {
    id: 5,
    name: 'Jaqueta de couro sintético vintage',
    price: 'R$ 90,00',
    image: Jaqueta5,
  },
  {
    id: 6,
    name: 'Jaqueta de couro sintético vintage',
    price: 'R$ 90,00',
    image: Jaqueta6,
  },
];

function Jaqueta() {
  const navigate = useNavigate();

  const handleProductClick = (image) => {
    sessionStorage.setItem('imagem', image);  
    navigate('/compra');
  };
  const handleFavoriteClick = () => {
    navigate('/favorito');
  };
  

  return (
    <>
      <section className={Style.banner}>
        <img src={foto1} alt="Banner Jaquetas Femininas" />
        <h2>Jaquetas</h2>
        <h2>Femininas</h2>
      </section>

      <nav className={Style.categories}>
        <a href="#">Feminino</a>
        <a href="#">Masculino</a>
      </nav>

      <section className={Style.products}>
        {products.map((product) => (
          <div
            key={product.id}
            className={Style.product_card}
            onClick={() => handleProductClick(product.image)}
          >
            <div className={Style.product_image}>
              <img src={product.image} alt={product.name} />
              <span className={Style.wishlist_icon} onClick={(e) => { e.stopPropagation(); handleFavoriteClick(); }}>
                <img src={Curtida} alt="Favoritar" />
              </span>
              <span className={Style.cart_icon}><img src={Loja} alt="Adicionar ao carrinho" /></span>
            </div>
            <div className={Style.product_info}>
              <h3>{product.name}</h3>
              <div className={Style.stars}><img src={Estrelas} alt="Estrelas" /></div>
              <p className={Style.price}>R$ <span>{product.price}</span></p>
              <div className={Style.quantity}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className={Style.imagemGrande}>
        <img src={Frame} alt="Frame" />
      </div>
      <br /><br /><hr /><br /><br /><br />
    </>
  );
}

export default Jaqueta;
