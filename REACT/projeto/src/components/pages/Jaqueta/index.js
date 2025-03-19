import React from 'react';
import foto1 from '../../../assets/image 30.svg';  // Importando a imagem
import Jaqueta1 from '../../../assets/image (1).svg';  // Importando a imagem
import Jaqueta2 from '../../../assets/image (2).svg';  // Importando a imagem
import Jaqueta3 from '../../../assets/image (3).svg';  // Importando a imagem
import Jaqueta4 from '../../../assets/image (4).svg';  // Importando a imagem
import Jaqueta5 from '../../../assets/Rectangle 16 (1).svg';  // Importando a imagem
import Jaqueta6 from '../../../assets/image.svg';  // Importando a imagem
import Estrelas from '../../../assets/estrelas.svg';  // Importando a imagem
import Jaqueta11 from '../../../assets/image (10).svg';  // Importando a imagem
import Curtida from '../../../assets/curtida.svg';  // Importando a imagem
import Loja from '../../../assets/loja.svg';  // Importando a imagem
import Frame from '../../../assets/Frame 12.svg';  // Importando a imagem

function Jaqueta(){
    return (
        <>
          <section className="banner">
                <img src={foto1} alt="Banner Jaquetas Femininas" />
                <h2>Jaquetas</h2>
                <h2>Femininas</h2>
            </section>
            <nav className="categories">
                <a href="#">Feminino</a>
                <a href="#">Masculino</a>
            </nav>
            <section className="products">
                <div className="product-card">
                    <div className="product-image">
                        <img src={Jaqueta1} alt="Jaqueta de couro" />
                        <span className="wishlist-icon"><img src={Curtida} alt="" /></span>
                        <span className="cart-icon"><img src={Loja} alt="" /></span>
                    </div>
                    <div className="product-info">
                        <h3>Jaqueta de couro sintético vintage</h3>
                        <div className="stars"><img src={Estrelas} alt="" /></div>
                        <p className="price">R$ <span>90,00</span></p>
                        <div className="quantity">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>

                <div className="product-card">
                    <div className="product-image">
                        <img src={Jaqueta2} alt="Jaqueta de couro" />
                        <span className="wishlist-icon"><img src={Curtida} alt="" /></span>
                        <span className="cart-icon"><img src={Loja} alt="" /></span>
                    </div>
                    <div className="product-info">
                        <h3>Jaqueta de couro sintético vintage</h3>
                        <div className="stars"><img src={Estrelas} alt="" /></div>
                        <p className="price">R$ <span>90,00</span></p>
                        <div className="quantity">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>

                <div className="product-card">
                    <div className="product-image">
                        <img src={Jaqueta3} alt="Jaqueta de couro" />
                        <span className="wishlist-icon"><img src={Curtida} alt="" /></span>
                        <span className="cart-icon"><img src={Loja} alt="" /></span>
                    </div>
                    <div className="product-info">
                        <h3>Jaqueta de couro sintético vintage</h3>
                        <div className="stars"><img src={Estrelas} alt="" /></div>
                        <p className="price">R$ <span>90,00</span></p>
                        <div className="quantity">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>

                <div className="product-card">
                    <div className="product-image">
                        <img src={Jaqueta4} alt="Jaqueta de couro" />
                        <span className="wishlist-icon"><img src={Curtida} alt="" /></span>
                        <span className="cart-icon"><img src={Loja} alt="" /></span>
                    </div>
                    <div className="product-info">
                        <h3>Jaqueta de couro sintético vintage</h3>
                        <div className="stars"><img src={Estrelas} alt="" /></div>
                        <p className="price">R$ <span>90,00</span></p>
                        <div className="quantity">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>

                <div className="product-card">
                    <div className="product-image">
                        <img src={Jaqueta5} alt="Jaqueta de couro" />
                        <span className="wishlist-icon"><img src={Curtida} alt="" /></span>
                        <span className="cart-icon"><img src={Loja} alt="" /></span>
                    </div>
                    <div className="product-info">
                        <h3>Jaqueta de couro sintético vintage</h3>
                        <div className="stars"><img src={Estrelas} alt="" /></div>
                        <p className="price">R$ <span>90,00</span></p>
                        <div className="quantity">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={Jaqueta6} alt="Jaqueta de couro" />
                        <span className="wishlist-icon"><img src={Curtida} alt="" /></span>
                        <span className="cart-icon"><img src={Loja} alt="" /></span>
                    </div>
                    <div className="product-info">
                        <h3>Jaqueta de couro sintético vintage</h3>
                        <div className="stars"><img src={Estrelas} alt="" /></div>
                        <p className="price">R$ <span>90,00</span></p>
                        <div className="quantity">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="imagemGrande">
                <img src={Frame} alt="" />
            </div>
            <br /><br /><hr /><br /><br /><br />
            
        </>
    );
}

export default Jaqueta;
