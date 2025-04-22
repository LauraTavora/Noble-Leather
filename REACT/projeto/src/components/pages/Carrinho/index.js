import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Carrinho.module.css';
import { useNavigate } from 'react-router-dom';

function Carrinho() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();
  const usuarioId = localStorage.getItem('usuarioId');

  useEffect(() => {
    async function fetchCart() {
      try {
        const res = await axios.get(`http://localhost:8080/api/carrinho/usuario/${usuarioId}`);
        // res.data.produtos vem do seu CarrinhoController.obterCarrinho()
        setProdutos(res.data.produtos.map(fp => ({
          id: fp.produto.id,
          name: fp.produto.nome,
          price: Number(fp.produto.preco),
          type: fp.produto.categoria.nome,   // ou fp.produto.tipo se existir
          color: fp.produto.cor,
          image: fp.produto.foto,
          quantity: 1 // se tiver campo quantidade em fp, use fp.quantidade
        })));
      } catch (err) {
        console.error('Erro ao carregar carrinho:', err);
      }
    }
    fetchCart();
  }, [usuarioId]);

  const remover = async (produtoId) => {
    try {
      await axios.delete('http://localhost:8080/api/carrinho', {
        params: { usuarioId, produtoId }
      });
      setProdutos(p => p.filter(item => item.id !== produtoId));
    } catch (err) {
      console.error('Erro ao remover produto:', err);
    }
  };

  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1>Meu Carrinho</h1>
      </header>

      <main>
        {produtos.length === 0 ? (
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>Carrinho vazio.</p>
        ) : (
          produtos.map(prod => (
            <div key={prod.id} className={style.productCard}>
              <img
                src={prod.image}
                alt={prod.name}
                className={style.productImage}
                onClick={() => {
                  sessionStorage.setItem('produto', JSON.stringify(prod));
                  sessionStorage.setItem('imagem', prod.image);
                  navigate('/compra');
                }}
              />
              <div className={style.productDetails}>
                <h2>{prod.name}</h2>
                <p>R$ {prod.price.toFixed(2)}</p>
                <p>Tipo: {prod.type}</p>
                <p>Cor: {prod.color}</p>
                <div className={style.size}>
                  <button>M</button>
                </div>
                <div className={style.quantity}>
                  <button>-</button>
                  <span>{prod.quantity}</span>
                  <button>+</button>
                </div>
              </div>
              <div className={style.actions}>
                <button className={style.buyButton}>Comprar</button>
                <button
                  className={style.removeButton}
                  onClick={() => remover(prod.id)}
                >
                  Remover
                </button>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

export default Carrinho;
