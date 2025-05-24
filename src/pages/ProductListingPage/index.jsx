import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import './ProductListingPage.css';
import { GiButtonFinger } from 'react-icons/gi';

const ProductListingPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    marca: [],
    categoria: [],
    genero: [],
    estado: []
  });

  const [sortBy, setSortBy] = useState('mais-relevantes');

  // Dados mockados dos produtos
  const products = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    name: 'K-Swiss V8 - Masculino',
    price: 200,
    priceDiscount: 100,
    image: '/src/assets/images/kseriesv8.png',
  }));

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  // Função para lidar com a adição ao carrinho
  const handleAddToCart = (product) => {
    console.log('Adicionado ao carrinho:', product);
    // Aqui você implementaria a lógica real para adicionar ao carrinho
    // (por exemplo, atualizar o estado global, chamar uma API, etc.)
  };

  return (
    <div className="product-listing-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
      <div>
            <button className="buy-button">
            <GiButtonFinger className="button-icon" />
              Comprar Agora
              </button>

            </div>
      </div>

      {/* Header com resultados e ordenação */}
      <div className="listing-header">
        <div className="results-info">
          <h2>Resultados para "Nike" - 389 produtos</h2>
        </div>
        <div className="sort-container">
          <label htmlFor="sort">Ordenar por:</label>
          <select 
            id="sort" 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="mais-relevantes">mais relevantes</option>
            <option value="menor-preco">menor preço</option>
            <option value="maior-preco">maior preço</option>
            <option value="mais-vendidos">mais vendidos</option>
          </select>
        </div>
      </div>

      <div className="content-container">
        {/* Sidebar com filtros */}
        <aside className="filters-sidebar">
          <h3>Filtrar por</h3>
          
          
          {/* Filtro por Marca */}
          <div className="filter-group">
            <h4>Marca</h4>
            <div className="filter-options">
              {['Adidas', 'Calenciaga', 'K-Swiss', 'Nike', 'Puma'].map(marca => (
                <label key={marca} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedFilters.marca.includes(marca)}
                    onChange={() => handleFilterChange('marca', marca)}
                  />
                  <span>{marca}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filtro por Categoria */}
          <div className="filter-group">
            <h4>Categoria</h4>
            <div className="filter-options">
              {['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida'].map(categoria => (
                <label key={categoria} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedFilters.categoria.includes(categoria)}
                    onChange={() => handleFilterChange('categoria', categoria)}
                  />
                  <span>{categoria}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filtro por Gênero */}
          <div className="filter-group">
            <h4>Gênero</h4>
            <div className="filter-options">
              {['Masculino', 'Feminino', 'Unissex'].map(genero => (
                <label key={genero} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedFilters.genero.includes(genero)}
                    onChange={() => handleFilterChange('genero', genero)}
                  />
                  <span>{genero}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filtro por Estado */}
          <div className="filter-group">
            <h4>Estado</h4>
            <div className="filter-options">
              {['Novo', 'Usado'].map(estado => (
                <label key={estado} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedFilters.estado.includes(estado)}
                    onChange={() => handleFilterChange('estado', estado)}
                  />
                  <span>{estado}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Grid de produtos */} 
        <main className="products-grid">
          <div className="products-container">
            {products.map(product => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                priceDiscount={product.priceDiscount}
                onAddToCart={() => handleAddToCart(product)} // Passa a função com o produto específico
              />
              
            ))}
            
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductListingPage;
