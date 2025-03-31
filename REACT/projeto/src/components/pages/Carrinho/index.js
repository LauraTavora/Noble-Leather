import React from 'react';
import style from './Carrinho.module.css';
import Jaqueta1 from '../../../assets/image (12).svg';
import Jaqueta2 from '../../../assets/image (4).svg';
import Image20 from '../../../assets/image (20).svg';
import Jaqueta3 from '../../../assets/image (3).svg';  // Importando a imagem
import Jaqueta4 from '../../../assets/image (4).svg';  // Importando a imagem
import Jaqueta5 from '../../../assets/Rectangle 16 (1).svg';  // Importando a imagem
import Jaqueta6 from '../../../assets/image.svg';  // Importando a imagem
import Image18 from '../../../assets/image (18).svg';
import Image8 from '../../../assets/image (8).svg';
import Image9 from '../../../assets/image (9).svg';
import Image10 from '../../../assets/image (10).svg';

const products = [  
    {
      id: 1,
      name: 'Jaqueta de couro sintético vintage',
      price: 'R$ 90,00',
      type: 'Feminino',
      color: 'Roxa',
      image: Jaqueta1,
    },
    {
      id: 2,
      name: 'Jaqueta de couro sintético vintage',
      price: 'R$ 90,00',
      type: 'Feminino',
      color: 'Roxa',
      image: Jaqueta2,
    },
    {
      id: 3,
      name: 'Jaqueta de couro sintético vintage',
      price: 'R$ 90,00',
      type: 'Feminino',
      color: 'Roxa',
      image: Image20,
    },
    {
      id: 4,
      name: 'Camiseta de algodão básica',
      price: 'R$ 40,00',
      type: 'Masculino',
      color: 'Preto',
      image: Jaqueta3,
    },
    {
      id: 5,
      name: 'Camiseta de algodão básica',
      price: 'R$ 40,00',
      type: 'Masculino',
      color: 'Branca',
      image: Jaqueta4,
    },
    {
      id: 6,
      name: 'Calça jeans masculina',
      price: 'R$ 120,00',
      type: 'Masculino',
      color: 'Azul',
      image: Image18,
    },
    {
      id: 7,
      name: 'Calça jeans feminina',
      price: 'R$ 110,00',
      type: 'Feminino',
      color: 'Preto',
      image: Image8,
    },
    {
      id: 8,
      name: 'Tênis esportivo',
      price: 'R$ 180,00',
      type: 'Unissex',
      color: 'Cinza',
      image: Image9,
    },
    {
      id: 9,
      name: 'Tênis casual',
      price: 'R$ 150,00',
      type: 'Unissex',
      color: 'Branco',
      image: Image10,
    },
    {
      id: 10,
      name: 'Blusa de frio oversized',
      price: 'R$ 130,00',
      type: 'Feminino',
      color: 'Vermelha',
      image: Jaqueta6,
    },
  ];
  

function Carrinho() {
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
        {products.map((product) => (
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
                <span>1</span>
                <button>+</button>
              </div>
            </div>
            <button className={style.buyButton}>Comprar</button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Carrinho;