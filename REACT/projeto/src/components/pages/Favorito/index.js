import React, { useEffect, useState } from 'react';
import style from './Favorito.module.css';

function Favorito() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosSalvos = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFavoritos(favoritosSalvos);
  }, []);

  const removerFavorito = (index) => {
    const novosFavoritos = [...favoritos];
    novosFavoritos.splice(index, 1);
    setFavoritos(novosFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
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
        {favoritos.length === 0 ? (
          <p className={style.nenhum}>Nenhum item favoritado ainda.</p>
        ) : (
          favoritos.map((product, index) => (
            <div key={index} className={style.productCard}>
              <img src={product.image} alt={product.name} className={style.productImage} />
              <div className={style.productDetails}>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <p>Tipo: {product.type}</p>
                <p>Cor: {product.color}</p>
                <button className={style.sizeButton}>M</button>
                <div className={style.quantity}>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>
              <div className={style.buttons}>
                <button className={style.buyButton}>Comprar</button>
                <button className={style.removeButton} onClick={() => removerFavorito(index)}>Remover</button>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

export default Favorito;
