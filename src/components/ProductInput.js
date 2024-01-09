import React, { useState } from 'react';

export default function ProductInput() {
  const [product, setProduct] = useState({
    id: '',
    price: '',
    productName: '',
    category: 'electronic',
  });

  const inputHandler = (event) => {
    event.preventDefault();

    const newProduct = {
      id: event.target.id.value,
      price: event.target.price.value,
      productName: event.target.productName.value,
      category: event.target.category.value,
    };

    localStorage.setItem(newProduct.id, JSON.stringify(newProduct));

    setProduct({
      id: '',
      price: '',
      productName: '',
      category: 'electronic',
    });
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [id]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={inputHandler}>
        <label htmlFor="id">Product ID :</label>
        <input
          type="number"
          id="id"
          value={product.id}
          onChange={handleInputChange}
        />

        <label htmlFor="price">Selling Price :</label>
        <input
          type="number"
          id="price"
          value={product.price}
          onChange={handleInputChange}
        />

        <label htmlFor="productName">Product Name :</label>
        <input
          type="text"
          id="productName"
          value={product.productName}
          onChange={handleInputChange}
        />

        <label htmlFor="category">Choose a Category :</label>
        <select
          id="category"
          value={product.category}
          onChange={handleInputChange}
        >
          <option value="electronic">Electronic</option>
          <option value="food">Food</option>
          <option value="skinCare">Skin Care</option>
        </select>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
