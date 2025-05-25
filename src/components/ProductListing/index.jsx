import ProductCard from '../ProductCard';
import { Container } from './styles';

const ProductListing = ({ products }) => {
  return (
    <Container>
      <div className='content-limit'>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product} // Pass the entire product object
          />
        ))}
      </div>
    </Container>
  );
};

export default ProductListing;
