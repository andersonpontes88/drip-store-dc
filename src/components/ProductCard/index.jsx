import React from 'react';
import { useCart } from '../../contexts/CartContext'; // Importe o hook
import { Container } from './styles';
import { Link } from 'react-router-dom'; // Import Link


function ProductCard({ product }) {
  const { addToCart } = useCart(); // Use o hook para acessar a função

  // Formatar os preços para exibição em formato R$ XX,XX
  const formatPrice = value => {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleAddToCart = () => {
    // Pass the image URL as 'imageUrl' when adding to cart
    addToCart({ ...product, imageUrl: '/src/assets/images/kseriesv8.png' });
  };

  // Certifique-se de que as props image, name, price e priceDiscount são acessadas a partir de 'product'
  const { image, name, price, priceDiscount } = product;

  return (
    <Container>
      {/* Wrap the product details in a Link component */}
      {/* Corrected path to /produtos/${product.id} */}
      <Link to={`/produtos/${product.id}`} className="product-link">
        <div className='card-product'>
          <div className='discount'>30% Off</div>
          <img src={product.image} alt={product.name} />
        </div>

        <p>Tênis</p>
        <h4>{product.name}</h4>
        <div className='card-info'>
          {/* Se houver um preço com desconto, mostramos o preço original riscado */}
          {product.priceDiscount ? (
            <>
              <p className='original-price'>R$ {formatPrice(product.price)}</p>
              <p className='discount-price'>R$ {formatPrice(product.priceDiscount)}</p>
            </>
          ) : (
            // Se não houver desconto, mostramos apenas o preço normal
            <p>R$ {formatPrice(product.price)}</p>
          )}
        </div>
      </Link>
      {/* Botão Adicionar ao Carrinho - Keep this outside the link if it should not navigate */}
      <button className='add-to-cart-button' onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </Container>
  );
}

export default ProductCard;
