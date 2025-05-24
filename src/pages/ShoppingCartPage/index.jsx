import React from 'react';
import './ShoppingCartPage.css';
import { useCart } from '../../contexts/CartContext'; // Importe o hook useCart

// Remova os dados mocados
// const mockCartItems = [...];

const ShoppingCartPage = () => {
  // Use o hook useCart para acessar o estado e as funções do carrinho
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  // Calcule o subtotal e o total usando a função do contexto
  const subtotal = getCartTotal();
  const shipping = 0; // Exemplo de frete fixo ou calculado
  const discount = 0; // Exemplo de desconto (ajuste conforme necessário)
  const total = subtotal + shipping - discount;

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
                  src={item.imageUrl} // Use item.imageUrl conforme definido no contexto
                  alt={item.name}
                  className='cart-item-image'
                />
                <div className='cart-item-details'>
                  <h3>{item.name}</h3>
                  <p>Preço: R$ {(item.discountPrice || item.price).toFixed(2)}</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <div className='cart-item-price'>
                  <p>R$ ((item.discountPrice || item.price) * item.quantity).toFixed(2)}</p>
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