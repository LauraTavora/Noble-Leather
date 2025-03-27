import React, { useState, useEffect } from 'react';
import image2 from '../../../assets/image (2).svg';
import image26 from '../../../assets/image (26).svg';
import image27 from '../../../assets/image (27).svg';
import image28 from '../../../assets/image (28).svg';
import image42 from '../../../assets/image 42.svg';
import style from './Compra.module.css';
import Navbar from '../../layout/Navbar';

function Compra() {
    const [quantity, setQuantity] = useState(1);
    const [currentImage, setCurrentImage] = useState(image2);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    useEffect(() => {
        const storedImage = sessionStorage.getItem("imagem");
        if (storedImage) {
            setCurrentImage(storedImage);  // Define a imagem atual com a imagem armazenada
        }
    }, []);

    const changeImage = (newImage) => {
        setCurrentImage(newImage);
    };

    return (
        <>
            <Navbar />
            <main>
                <div className={style.product_container}>
                    <div className={style.image_section}>
                        <img src={currentImage} alt="Jaqueta de couro" />
                        <div className={style.color_options}>
                            <img src={image26} alt="Bege" onClick={() => changeImage(image26)} />
                            <img src={image27} alt="Verde" onClick={() => changeImage(image27)} />
                            <img src={image28} alt="Vermelha" onClick={() => changeImage(image28)} />
                            <img src={image42} alt="Roxa" onClick={() => changeImage(image42)} />
                        </div>
                    </div>

                    <div className={style.info_section}>
                        <h2>Jaqueta de couro sintético vintage</h2>
                        <div className={style.stars}>★★★★★</div>
                        <p className={style.price}>R$ 90,00</p>
                        <p><strong>Tipo:</strong> Feminino</p>
                        <p><strong>Frete:</strong> R$10,00</p>
                        <p><strong>Marca:</strong> Uma marca <span className={style.envio}>Envio nacional</span></p>
                        <p><strong>Data de entrega:</strong> 22/03/205</p>
                        <p><strong>Cor:</strong> Preta</p>

                        <div className={style.sizes}>
                            <span>Tamanho:</span>
                            <button>P</button>
                            <button>M</button>
                            <button>G</button>
                        </div>

                        <div className={style.quantity}>
                            <span>Quantidade:</span>
                            <button className={style.minus} onClick={decreaseQuantity}>−</button>
                            <span className={style.quantity_value}>{quantity}</span>
                            <button className={style.plus} onClick={increaseQuantity}>+</button>
                        </div>

                        <div className={style.buttons}>
                            <button className={style.buy}>Comprar</button>
                            <button className={style.cart}>Carrinho</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Compra;
