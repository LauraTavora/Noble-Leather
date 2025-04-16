import React, { useEffect, useState } from 'react';
import style from './Carrinho.module.css';
import { useNavigate } from 'react-router-dom';

function Carrinho() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('carrinho')) || [];
    setProducts(savedCart);
  }, []);

  const removerProduto = (id) => {
    const novoCarrinho = products.filter(produto => produto.id !== id);
    setProducts(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1>Noble Leather</h1>
        <div className={style.icons}>
          <span>Carrinho</span>
          <span>Favoritos</span>
        </div>
      </header>

      <main>
        {products.length === 0 ? (
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>Carrinho vazio.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className={style.productCard}>
              <img src={product.image} alt={product.name} className={style.productImage} />
              <div className={style.productDetails}>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <p>Tipo: {product.type}</p>
                <p>Cor: {product.color}</p>
                <p className={style.size}>Tamanho:</p>
                <button className={style.sizeButton}>M</button>
                <div className={style.quantity}>
                  <button>-</button>
                  <span>{product.quantity}</span>
                  <button>+</button>
                </div>
              </div>
              <div className={style.actions}>
                <button className={style.buyButton}>Comprar</button>
                <button 
                  className={style.removeButton} 
                  onClick={() => removerProduto(product.id)}
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
