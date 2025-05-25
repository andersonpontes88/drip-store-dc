import React from 'react';
import './ShoppingCartPage.css';
import { useCart } from '../../contexts/CartContext'; // Importe o hook useCart
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

// Remova os dados mocados
// const mockCartItems = [...];

const ShoppingCartPage = () => {
  // Use o hook useCart para acessar o estado e as funções do carrinho
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate(); // Obtenha a função navigate

  // Calcula o subtotal usando a função do contexto 
  const subtotal = getCartTotal();
  const shipping = 0; // Frete grátis
  // Calcule o desconto de 50% baseado no subtotal
  const discount = subtotal * 0.50; 
  const total = subtotal + shipping - discount;

  const handleContinueShopping = () => {
    navigate('/produtos'); // Redireciona para a página de produtos
  };

  return (
    <div className='shopping-cart-page'>
      <div className='breadcrumb'>
        <span>Home</span> / <span>Carrinho</span>
      </div>

      <h2>Meu Carrinho</h2>

      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className='cart-content'>
          <div className='cart-items-list'>
            {cartItems.map(item => (
              <div key={item.id} className='cart-item'>
                <img
                  src={item.imageUrl=('/src/assets/images/kseriesv8.png')} // Use item.imageUrl conforme definido no contexto
                  alt={item.name}
                  className='cart-item-image'
                />
                <div className='cart-item-details'>
                  <h3>{item.name}</h3>
                  {/* Display original price as R$ 200.00 */}
                  <p>Preço: R$ 200.00</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <div className='cart-item-price'>
                  {/* Calculate item total using R$ 200.00 as base price for display */}
                  <p>R$ {(200.00 * item.quantity).toFixed(2)}</p>
                  <button className='remove-item-btn' onClick={() => removeFromCart(item.id)}>Remover</button>
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
            <button className='continue-shopping-button' onClick={handleContinueShopping}> {/* Adicione o onClick handler */}
              Continuar Comprando
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;