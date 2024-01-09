import React, { useEffect, useState } from 'react';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const productData = JSON.parse(localStorage.getItem(key));
        storedProducts.push(productData);
      }
    }
    setProducts(storedProducts);
  }, []);

  const handleDelete = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    localStorage.removeItem(id);
  };

  return (
    <div>
      <div>
        <h2>Electronic Items</h2>
        <ul>
          {products.map((product) =>
            product.category === 'electronic' ? (
              <li key={product.id}>
                <strong>ID:</strong> {product.id}, 
                <strong>Price:</strong> {product.price},{' '}
                <strong>Name:</strong> {product.productName}, 
                <strong>Category:</strong>{' '}
                {product.category}
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </li>
            ) : null
          )}
        </ul>
      </div>

      <div>
        <h2>Food Items</h2>
        <ul>
          {products.map((product) =>
            product.category === 'food' ? (
              <li key={product.id}>
                <strong>ID:</strong> {product.id}, 
                <strong>Price:</strong> {product.price},{' '}
                <strong>Name:</strong> {product.productName}, 
                <strong>Category:</strong>{' '}
                {product.category}
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </li>
            ) : null
          )}
        </ul>
      </div>

      <div>
        <h2>Skin Care Items</h2>
        <ul>
          {products.map((product) =>
            product.category === 'skinCare' ? (
              <li key={product.id}>
                <strong>ID:</strong> {product.id}, 
                <strong>Price:</strong> {product.price},{' '}
                <strong>Name:</strong> {product.productName}, 
                <strong>Category:</strong>{' '}
                {product.category}
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
