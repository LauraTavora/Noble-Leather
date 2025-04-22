import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Estrelas from '../../../assets/estrelas.svg';
import Curtida from '../../../assets/curtida.svg';
import Loja from '../../../assets/loja.svg';
import Frame from '../../../assets/Frame 12.svg';
import foto1 from '../../../assets/image 30.svg';
import Style from './Jaqueta.module.css';

const userId = 1; // ajuste para vir do seu contexto de autenticação

export default function Jaqueta() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/produtos')
      .then(res => {
        const jaquetas = res.data.filter(p =>
          p.nome.toLowerCase().includes('jaqueta')
        );
        setProdutos(jaquetas);
      })
      .catch(err => console.error('Erro ao buscar jaquetas:', err));
  }, []);

  const handleProductClick = produto => {
    // Salva o objeto inteiro para usar em Compra.jsx
    sessionStorage.setItem('produtoSelecionado', JSON.stringify(produto));
    navigate('/compra');
  };

  const handleFavoriteClick = (e, produto) => {
    e.stopPropagation();
    axios
      .post(
        'http://localhost:8080/api/favoritos',
        null,
        { params: { usuarioId: userId, produtoId: produto.id } }
      )
      .then(() => {
        console.log('Favorito adicionado');
      })
      .catch(err => console.error('Erro ao favoritar:', err));
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
        {produtos.map(prod => (
          <div
            key={prod.id}
            className={Style.product_card}
            onClick={() => handleProductClick(prod)}
          >
            <div className={Style.product_image}>
              <img src={prod.foto} alt={prod.nome} />
              <span
                className={Style.wishlist_icon}
                onClick={e => handleFavoriteClick(e, prod)}
              >
                <img src={Curtida} alt="Favoritar" />
              </span>
              <span className={Style.cart_icon}>
                <img src={Loja} alt="Adicionar ao carrinho" />
              </span>
            </div>
            <div className={Style.product_info}>
              <h3>{prod.nome}</h3>
              <div className={Style.stars}>
                <img src={Estrelas} alt="Avaliação" />
              </div>
              <p className={Style.price}>
                R$ <span>{Number(prod.preco).toFixed(2)}</span>
              </p>
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
        <img src={Frame} alt="Destaque" />
      </div>
    </>
  );
}
