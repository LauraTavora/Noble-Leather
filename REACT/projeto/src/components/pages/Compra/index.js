import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import style from './Compra.module.css';
import Navbar from '../../layout/Navbar';

function Compra() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const usuarioId = localStorage.getItem('usuarioId');

  useEffect(() => {
    // 1) Recupera o objeto completo do produto salvo no Jaqueta.jsx
    const stored = sessionStorage.getItem('produtoSelecionado');
    if (!stored) {
      alert('Nenhum produto foi selecionado');
      return navigate('/');
    }
    setProduct(JSON.parse(stored));
  }, [navigate]);

  const increaseQuantity = () => setQuantity(q => q + 1);
  const decreaseQuantity = () => setQuantity(q => Math.max(1, q - 1));

  const handleAddToCart = async () => {
    try {
      await axios.post('http://localhost:8080/api/carrinho', null, {
        params: {
          usuarioId,
          produtoId: product.id,
          quantidade: quantity
        }
      });
      alert('Produto adicionado ao carrinho!');
      navigate('/carrinho');
    } catch (err) {
      console.error('Erro ao adicionar ao carrinho:', err);
      alert('Erro ao adicionar ao carrinho.');
    }
  };

  if (!product) return null; // ou um loader

  return (
    <>
      <Navbar />
      <main>
        <div className={style.product_container}>
          <div className={style.image_section}>
            <img src={product.foto} alt={product.nome} />
          </div>

          <div className={style.info_section}>
            <h2>{product.nome}</h2>
            <div className={style.stars}>★★★★★</div>
            <p className={style.price}>
              R$ {Number(product.preco).toFixed(2)}
            </p>
            <p><strong>Tipo:</strong> {product.categoria?.genero}</p>
            <p><strong>Cor:</strong> {product.cor}</p>

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
              <button className={style.cart} onClick={handleAddToCart}>
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Compra;
