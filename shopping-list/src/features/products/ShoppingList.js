import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './productsSlice';
import { useNavigate } from 'react-router-dom';
import './ShoppingList.scss';

const ShoppingList = () => {
  const [productsByCategory, setProductsByCategory] = useState({});
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5058/api/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        
        const productsByCategory = data.reduce((acc, product) => {
          if (!acc[product.category]) {
            acc[product.category] = [];
          }
          acc[product.category].push(product.name);
          return acc;
        }, {});
    
        setProductsByCategory(productsByCategory);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    
    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    if (productName && quantity > 0) {
      dispatch(addProduct({ name: productName, category, quantity }));
      setProductName('');
      setQuantity(0);
    }
  };

  const handleProceedToOrder = () => {
    navigate('/order-summary');
  };

  return (
    <div className="shopping-list">
      <h1>Shopping List</h1>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>Select Category</option>
          {Object.keys(productsByCategory).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="product">Product</label>
        <select
          id="product"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        >
          <option value="" disabled>Select Product</option>
          {category &&
            productsByCategory[category]?.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
        </select>
      </div>
      <div className="form-group quantity-button">
        <label htmlFor="quantity">Quantity</label>
        <div>
          <button onClick={() => setQuantity(Math.max(0, quantity - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
      </div>
      <div className="button-group">
        <button className="btn btn-primary" onClick={handleAddProduct}>
          Add to Order
        </button>
        <button className="btn btn-success" onClick={handleProceedToOrder}>
          Proceed to Order
        </button>
      </div>
    </div>
  );
};

export default ShoppingList;
