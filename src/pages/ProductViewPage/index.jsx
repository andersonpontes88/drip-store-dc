import React, { useState } from 'react';
import { Container } from './styles';
import { useCart } from '../../contexts/CartContext'; // Import useCart hook

const ProductViewPage = () => {
  const { addToCart } = useCart(); // Get addToCart from the hook

  // Mock product data (replace with actual data fetching later)
  const product = {
    id: 1,
    name: 'Tênis Nike Revolution 6 Next Nature Masculino',
    price: 200.00,
    priceDiscount: 100.00, // Based on the image, the original price is also 219.00
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    images: [
      '/src/assets/images/tenis.png', 
      '/src/assets/images/tenis.png', 
      '/src/assets/images/tenis.png', 
      '/src/assets/images/tenis.png',  
    ],
    sizes: [39, 40, 41, 42, 43],
    colors: ['#00FFFF', '#FF0000', '#800080', '#000000'], 
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [mainImage, setMainImage] = useState(product.images[0]);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const handleAddToCart = () => {
    // Implement add to cart logic here
    if (selectedSize && selectedColor) {
      addToCart({ // Call addToCart with product details
        ...product,
        selectedSize,
        selectedColor,
        imageUrl: mainImage, // Use the current main image as the cart image
      });
      console.log('Adding to cart:', product.name, 'Size:', selectedSize, 'Color:', selectedColor);
    } else {
      alert('Please select a size and color before adding to cart.'); // Optional: Add user feedback
    }
  };


  // const relatedProducts = Array.from({ length: 4 }, (_, index) => ({
  //   id: index + 101,
  //   name: 'K-Swiss V8 - Masculino',
  //   price: 200,
  //   priceDiscount: 100,
  //   image: '/public/product-thumb-1.svg', // Replace with actual image paths
  // }));

  return (
    <Container>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Home</span> / <span>Produtos</span> / <span>{product.name}</span>
      </div>

      <div className="product-details-section">
        <div className="image-gallery">
          <img src={mainImage} alt={product.name} className="main-image" />
          <div className="thumbnails">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} thumbnail ${index + 1}`}
                className={`thumbnail ${image === mainImage ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(image)}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>
          <div className="rating">
            {/* Add star rating component here */}
            <span>4.7 (90 avaliações)</span>
          </div>
          <div className="price-info">
            {product.priceDiscount < product.price && (
              <span className="original-price">R$ {product.price.toFixed(2)}</span>
            )}
            <span className="current-price">R$ {product.priceDiscount.toFixed(2)}</span>
          </div>
          <p className="description">{product.description}</p>

          <div className="options">
            <div className="size-options">
              <h4>Tamanho</h4>
              <div className="buttons">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`option-button ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="color-options">
              <h4>Cor</h4>
              <div className="color-swatches">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`color-swatch ${selectedColor === color ? 'selected' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorSelect(color)}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <button className="buy-button" onClick={handleAddToCart}>COMPRAR</button>
        </div>
      </div>
    </Container>
  );
};

export default ProductViewPage;
