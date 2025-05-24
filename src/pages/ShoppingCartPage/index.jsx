import React from 'react';
import './ShoppingCartPage.css'; // Vamos criar este arquivo CSS em seguida

// Dados mocados para o carrinho (substitua com dados reais do estado do aplicativo)
const mockCartItems = [
  {
    id: 1,
    name: 'Tênis Nike Revolution 6 Next Nature Masculino',
    price: 219.0,
    quantity: 1,
    image: '/product-thumb-1.svg', // Caminho para a imagem do produto
  },
  {
    id: 2,
    name: 'Tênis Adidas Ultraboost Light Feminino',
    price: 899.99,
    quantity: 1,
    image: '/product-thumb-2.svg',
  },
];

const ShoppingCartPage = () => {
  const subtotal = mockCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0; // Exemplo de frete fixo ou calculado
  const discount = 30.0; // Exemplo de desconto
  const total = subtotal + shipping - discount;

  return (
    <div className='shopping-cart-page'>
      <div className='breadcrumb'>
        <span>Home</span> / <span>Carrinho</span>
      </div>

      <h2>Meu Carrinho</h2>

      {mockCartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className='cart-content'>
          <div className='cart-items-list'>
            {mockCartItems.map(item => (
              <div key={item.id} className='cart-item'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='cart-item-image'
                />
                <div className='cart-item-details'>
                  <h3>{item.name}</h3>
                  <p>Quantidade: {item.quantity}</p>
                  {/* Adicionar controles para aumentar/diminuir quantidade aqui */}
                </div>
                <div className='cart-item-price'>
                  <p>R$ {item.price.toFixed(2)}</p>
                  <button className='remove-item-btn'>Remover</button>
                </div>
              </div>
            ))}
          </div>

          <div className='cart-summary'>
            <h3>Resumo do Pedido</h3>
            <div className='summary-row'>
              <span>Subtotal:</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>
            <div className='summary-row'>
              <span>Frete:</span>
              <span>R$ {shipping.toFixed(2)}</span>
            </div>
            <div className='summary-row'>
              <span>Desconto:</span>
              <span>- R$ {discount.toFixed(2)}</span>
            </div>
            <div className='summary-row total-row'>
              <span>Total:</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
            <button className='checkout-button'>Ir para o Pagamento</button>
            <button className='continue-shopping-button'>
              Continuar Comprando
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;