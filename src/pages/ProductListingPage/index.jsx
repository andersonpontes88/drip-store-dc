import './style.css'
import tenis from "../../assets/images/tenis.png"

const ProductListingPage = () => {
  return (
    <div>
    <div class="container">
      <div className='sect'>
        <span>🎉 </span>
      </div>
      <div class="section">
        <h1>Compra Realizada com sucesso! </h1>

      </div>

      <div class="section">
        <h2>Informações Pessoais</h2>
        <p>Nome Completo:<strong> Francisco Antonio Pereira</strong></p>
        <p>CPF:<strong> 123485913-43</strong></p>
        <p>E-mail:<strong> francisco@gmail.com</strong></p>
        <p>Telefone:<strong> (85) 5555-5555</strong></p>
      </div>

      <div class="section">
        <h2>Informações de Entrega</h2>
        <p>Endereço:<strong> Rua João Pessoa, 333</strong></p>
        <p>Bairro:<strong> Centro</strong></p>
        <p>Cidade:<strong>Fortaleza, Ceará</strong></p>
        <p>CEP:<strong>433-8800</strong></p>
        
      </div>

      <div class="section">
        <h2>Informações de Pagamento</h2>
        <p>Titular do cartão :<strong>FRANCISCO A P</strong></p>
        <p>Final: <strong> **** **** **** 1234</strong></p>

      </div>

      <div class="sectionresumo">
        <h4>Resumo da compra</h4>
        <div class="container-imagem-texto">
          <div class="lado-esquerdo">
            <img src={tenis} alt='Ícone de menu' className='tenis' />
          </div>
          <div class="lado-direito">

            <p>Tênis Nike Revolution 6 Next Nature Masculino </p>

          </div>
        </div>
       </div>
           <div class="container-total-valor">
          <div class="total">
            <span>Total</span>
          </div>
          <div class="valor">
                    
            <span>R$ 219,00</span>
            <p>ou 10x de 21,90 sem juros </p>

          </div>
        </div>
         
<div className='buttonimprimir'>
   
   <a href="">Imprimir recibo</a>
</div>
    
    </div>
    <button className='botao'>Voltar para Home</button>
</div>
  );
  
};

export default ProductListingPage;
