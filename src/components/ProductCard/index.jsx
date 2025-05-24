import React from 'react';
import { useCart } from '../../contexts/CartContext'; // Importe o hook
import { Container } from './styles'; // Supondo que você tenha um styled-component para o container


function ProductCard({ product }) { // Assumindo que o componente recebe os dados do produto como prop
  const { addToCart } = useCart(); // Use o hook para acessar a função

  // Formatar os preços para exibição em formato R$ XX,XX
  const formatPrice = value => {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleAddToCart = () => {
    addToCart(product); // Chame addToCart com os dados do produto
  };

  // Certifique-se de que as props image, name, price e priceDiscount são acessadas a partir de 'product'
  const { image, name, price, priceDiscount } = product;

  return (
    <Container>
      <div className='card-product'>
        <div className='discount'>30% Off</div>
        <img src={image} alt={name} />
      </div>

      <p>Tênis</p>
      <h4>{name}</h4>
      <div className='card-info'>
        {/* Se houver um preço com desconto, mostramos o preço original riscado */}
        {priceDiscount ? (
          <>
            <p className='original-price'>R$ {formatPrice(price)}</p>
            <p className='discount-price'>R$ {formatPrice(priceDiscount)}</p>
          </>
        ) : (
          // Se não houver desconto, mostramos apenas o preço normal
          <p>R$ {formatPrice(price)}</p>
        )}
      </div>
      {/* Botão Adicionar ao Carrinho */}
      <button className='add-to-cart-button' onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </Container>
  );
}

export default ProductCard;
