import React from 'react';
import { useNavigate } from 'react-router-dom';
import foto1 from '../../../assets/image 30.svg';  // Importando a imagem
import Jaqueta1 from '../../../assets/image (1).svg';  // Importando a imagem
import Jaqueta2 from '../../../assets/image (2).svg';  // Importando a imagem
import Jaqueta3 from '../../../assets/image (3).svg';  // Importando a imagem
import Jaqueta4 from '../../../assets/image (4).svg';  // Importando a imagem
import Jaqueta5 from '../../../assets/Rectangle 16 (1).svg';  // Importando a imagem
import Jaqueta6 from '../../../assets/image.svg';  // Importando a imagem
import Estrelas from '../../../assets/estrelas.svg';  // Importando a imagem
import Curtida from '../../../assets/curtida.svg';  // Importando a imagem
import Loja from '../../../assets/loja.svg';  // Importando a imagem
import Frame from '../../../assets/Frame 12.svg';  // Importando a imagem
import Style from './Jaqueta.module.css';

function Jaqueta() {
  const navigate = useNavigate();


  // Função para redirecionar para a página de compra
    // Altere o seguinte código em Jaqueta.js
    const handleProductClick = (image) => {
        sessionStorage.setItem("imagem", image);  // Corrigido: armazena a imagem no sessionStorage
        navigate(`/compra`);
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
      <div className={Style.product_card} onClick={() => handleProductClick(Jaqueta1)}>
          <div className={Style.product_image}>
            <img src={Jaqueta1} alt="Jaqueta de couro" />
            <span className={Style.wishlist_icon}><img src={Curtida} alt="" /></span>
            <span className={Style.cart_icon}><img src={Loja} alt="" /></span>
          </div>
          <div className={Style.product_info}>
            <h3>Jaqueta de couro sintético vintage</h3>
            <div className={Style.stars}><img src={Estrelas} alt="" /></div>
            <p className={Style.price}>R$ <span>90,00</span></p>
            <div className={Style.quantity}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className={Style.product_card} onClick={() => handleProductClick(Jaqueta2)}>
          <div className={Style.product_image}>
            <img src={Jaqueta2} alt="Jaqueta de couro" />
            <span className={Style.wishlist_icon}><img src={Curtida} alt="" /></span>
            <span className={Style.cart_icon}><img src={Loja} alt="" /></span>
          </div>
          <div className={Style.product_info}>
            <h3>Jaqueta de couro sintético vintage</h3>
            <div className={Style.stars}><img src={Estrelas} alt="" /></div>
            <p className={Style.price}>R$ <span>90,00</span></p>
            <div className={Style.quantity}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className={Style.product_card} onClick={() => handleProductClick(Jaqueta3)}>
          <div className={Style.product_image}>
            <img src={Jaqueta3} alt="Jaqueta de couro" />
            <span className={Style.wishlist_icon}><img src={Curtida} alt="" /></span>
            <span className={Style.cart_icon}><img src={Loja} alt="" /></span>
          </div>
          <div className={Style.product_info}>
            <h3>Jaqueta de couro sintético vintage</h3>
            <div className={Style.stars}><img src={Estrelas} alt="" /></div>
            <p className={Style.price}>R$ <span>90,00</span></p>
            <div className={Style.quantity}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className={Style.product_card} onClick={() => handleProductClick(Jaqueta4)}>
          <div className={Style.product_image}>
            <img src={Jaqueta4} alt="Jaqueta de couro" />
            <span className={Style.wishlist_icon}><img src={Curtida} alt="" /></span>
            <span className={Style.cart_icon}><img src={Loja} alt="" /></span>
          </div>
          <div className={Style.product_info}>
            <h3>Jaqueta de couro sintético vintage</h3>
            <div className={Style.stars}><img src={Estrelas} alt="" /></div>
            <p className={Style.price}>R$ <span>90,00</span></p>
            <div className={Style.quantity}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className={Style.product_card} onClick={() => handleProductClick(Jaqueta5)}>
          <div className={Style.product_image}>
            <img src={Jaqueta5} alt="Jaqueta de couro" />
            <span className={Style.wishlist_icon}><img src={Curtida} alt="" /></span>
            <span className={Style.cart_icon}><img src={Loja} alt="" /></span>
          </div>
          <div className={Style.product_info}>
            <h3>Jaqueta de couro sintético vintage</h3>
            <div className={Style.stars}><img src={Estrelas} alt="" /></div>
            <p className={Style.price}>R$ <span>90,00</span></p>
            <div className={Style.quantity}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className={Style.product_card} onClick={() => handleProductClick(Jaqueta6)}>
          <div className={Style.product_image}>
            <img src={Jaqueta6} alt="Jaqueta de couro" />
            <span className={Style.wishlist_icon}><img src={Curtida} alt="" /></span>
            <span className={Style.cart_icon}><img src={Loja} alt="" /></span>
          </div>
          <div className={Style.product_info}>
            <h3>Jaqueta de couro sintético vintage</h3>
            <div className={Style.stars}><img src={Estrelas} alt="" /></div>
            <p className={Style.price}>R$ <span>90,00</span></p>
            <div className={Style.quantity}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
        </div>
      </section>

      <div className={Style.imagemGrande}>
        <img src={Frame} alt="" />
      </div>
      <br /><br /><hr /><br /><br /><br />
    </>
  );
}

export default Jaqueta;
