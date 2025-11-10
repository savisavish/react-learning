import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useCart } from '../context/Product_context';
import './product.css'
import Skeletonloader from '../loaders/Skeletonloaders';

function Shopping() {
  const url = 'https://dummyjson.com/products';
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit] = useState(8); // products per fetch
  const [skip, setSkip] = useState(0); // track how many already loaded
  const [total, setTotal] = useState(0);

  const { addToCart } = useCart();

  const fetchProducts = async (append = false) => {
    try {
      const result = await fetch(`${url}?limit=${limit}&skip=${skip}`);
      const productsData = await result.json();
      setTotal(productsData.total);

      if (append) {
        setProducts((prev) => [...prev, ...productsData.products]);
      } else {
        setProducts(productsData.products);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // fetch first batch on mount

  const handleShowMore = () => {
    setSkip((prev) => {
      const newSkip = prev + limit;
      fetchProducts(true); // append new products
      return newSkip;
    });
  };

  return (
    <>
      {loading ? (
        <Skeletonloader count={limit} />
      ) : (
        <div className="product-content">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.images[0]} alt={product.title} />
              <span className="title">{product.title}</span>
              <span className="price">${product.price}</span>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => addToCart(product)}
              >
                ADD
              </Button>
            </div>
          ))}
        </div>
      )}

      {products.length < total && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button variant="outlined" onClick={handleShowMore}>
            Show More
          </Button>
        </div>
      )}
    </>
  );
}

export default Shopping;
