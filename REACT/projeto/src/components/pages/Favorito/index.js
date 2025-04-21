import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Style from './Favorito.module.css';

const userId = 1; // ajuste para vir do seu contexto de autenticação

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/favoritos/usuario/${userId}`)
      .then(res => {
        // o serviço retorna o objeto Favoritos, com lista de FavoritosProduto
        // e cada FavoritosProduto tem um campo .produto
        const produtos = res.data.produtos.map(fp => fp.produto);
        setFavoritos(produtos);
      })
      .catch(err => console.error('Erro ao carregar favoritos:', err));
  }, []);

  const removerFavorito = produtoId => {
    axios
      .delete('http://localhost:8080/api/favoritos', {
        params: { usuarioId: userId, produtoId }
      })
      .then(() => {
        setFavoritos(prev => prev.filter(p => p.id !== produtoId));
      })
      .catch(err => console.error('Erro ao remover favorito:', err));
  };

  const irParaCompra = foto => {
    sessionStorage.setItem('imagem', foto);
    navigate('/compra');
  };

  return (
    <div className={Style.container}>
      <header className={Style.header}>
        <h1>Meus Favoritos</h1>
      </header>

      <main>
        {favoritos.length === 0 ? (
          <p className={Style.nenhum}>Nenhum item favoritado ainda.</p>
        ) : (
          favoritos.map(prod => (
            <div key={prod.id} className={Style.productCard}>
              <img
                src={prod.foto}
                alt={prod.nome}
                className={Style.productImage}
                onClick={() => irParaCompra(prod.foto)}
              />
              <div className={Style.productDetails}>
                <h2>{prod.nome}</h2>
                <p>R$ {Number(prod.preco).toFixed(2)}</p>
              </div>
              <div className={Style.buttons}>
                <button
                  className={Style.buyButton}
                  onClick={() => irParaCompra(prod.foto)}
                >
                  Comprar
                </button>
                <button
                  className={Style.removeButton}
                  onClick={() => removerFavorito(prod.id)}
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
