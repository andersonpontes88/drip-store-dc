import React from 'react';
import './ShoppingCartPage.css';
import { useCart } from '../../contexts/CartContext'; // Importe o hook useCart
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import { InputDefault } from '../../components/Input'; // Modifique esta linha para importação nomeada

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

  const basePrice = 200.00; // Definindo o preço base para facilitar

  return (
    <div className='shopping-cart-page'>
      <div className='breadcrumb'>
        <span>Home</span> / <span>Carrinho</span>
      </div>

      {/* Removido: <h2>Meu Carrinho</h2> */}

      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className='cart-content'>
          <div className='cart-items-and-actions-container'>
            <div className="cart-header">
              <p className="header-product-info">MEU CARRINHO</p> {/* Ajustado para abranger imagem e nome */}
              <p className="header-quantity">QUANTIDADE</p>
              <p className="header-unit-price">UNITÁRIO</p>
              <p className="header-total">TOTAL</p>
            </div>
            <div className='cart-items-list'>
              {cartItems.map(item => (
                <div key={item.id} className='cart-item'>
                  <div className="cart-item-product-info"> {/* Novo container para imagem e nome */}
                    <img
                      src={item.imageUrl || '/src/assets/images/kseriesv8.png'} // Fallback para imagem padrão
                      alt={item.name}
                      className='cart-item-image'
                    />
                    <div className='cart-item-details'>
                      <h3>{item.name}</h3>
                      {/* O preço unitário será exibido em sua própria coluna */}
                    </div>
                  </div>

                  <div className="cart-item-quantity"> {/* Nova div para quantidade */}
                    <div className="quantity-control">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>

                  <div className="cart-item-unit-price"> {/* Nova div para preço unitário */}
                    <p>R$ {basePrice.toFixed(2)}</p>
                  </div>

                  <div className='cart-item-total-price'> {/* Renomeado para clareza e para conter apenas o total */}
                    <p>R$ {(basePrice * item.quantity).toFixed(2)}</p>
                    {/* Botão remover pode ser movido para perto dos detalhes do produto ou ficar aqui, dependendo do design final */}
                    <button className='remove-item-btn' onClick={() => removeFromCart(item.id)}>Remover</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="coupon-shipping-container">
              <div className="coupon-section">
                <h4>Cupom de desconto</h4>
                <div className="coupon-input">
                  <InputDefault placeholder="Insira seu código" />
                  <button className="ok-button">OK</button>
                </div>
              </div>
              <div className="shipping-section">
                <h4>Calcular frete</h4>
                <div className="shipping-input">
                  <InputDefault placeholder="Insira seu CEP" />
                  <button className="ok-button">OK</button>
                </div>
              </div>
            </div>
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