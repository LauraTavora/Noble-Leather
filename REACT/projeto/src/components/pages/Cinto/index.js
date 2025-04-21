import React, { useState, useEffect } from 'react';
import Banner from '../../../assets/Group 44.svg';
import WishlistIcon from '../../../assets/curtida.svg';
import CartIcon from '../../../assets/loja.svg';
import Stars from '../../../assets/estrelas.svg';
import Style from './Cinto.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Cinto() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/api/produtos')
      .then((res) => {
        const cintos = res.data.filter(p => p.nome.toLowerCase().includes('cinto'));
        setProducts(cintos);

        const quantidadeInicial = {};
        cintos.forEach(p => quantidadeInicial[p.id] = 1);
        setQuantities(quantidadeInicial);
      })
      .catch((err) => {
        console.error("Erro ao buscar cintos:", err);
      });
  }, []);

  const handleQuantityChange = (id, type) => {
    setQuantities(prev => {
      const nova = type === 'increment' ? prev[id] + 1 : Math.max(1, prev[id] - 1);
      return { ...prev, [id]: nova };
    });
  };

  const handleProductClick = (image) => {
    sessionStorage.setItem('imagem', image);
    navigate('/compra');
  };

  const handleFavoriteClick = (e, product) => {
    e.stopPropagation();
    const favoritosAtuais = JSON.parse(localStorage.getItem('favoritos')) || [];

    const jaFavoritado = favoritosAtuais.some(item => item.id === product.id);
    if (!jaFavoritado) {
      const novosFavoritos = [...favoritosAtuais, product];
      localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
    }

    navigate('/favorito');
  };

  return (
    <>
      <section className={Style.banner}>
        <img src={Banner} alt="Banner Cintos Femininos" />
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
            <div className={Style.product_image} onClick={() => handleProductClick(product.foto)}>
              <img src={product.foto} alt={product.nome} />
              <span className={Style.wishlist_icon} onClick={(e) => handleFavoriteClick(e, product)}>
                <img src={WishlistIcon} alt="Favoritar" />
              </span>
              <span className={Style.cart_icon}>
                <img src={CartIcon} alt="Adicionar ao carrinho" />
              </span>
            </div>
            <div className={Style.product_info}>
              <h3>{product.nome}</h3>
              <div className={Style.stars}><img src={Stars} alt="Estrelas" /></div>
              <p className={Style.price}>R$ <span>{Number(product.preco).toFixed(2)}</span></p>
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

export default Cinto;
