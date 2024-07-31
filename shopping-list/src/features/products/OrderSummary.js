import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '../../api';
import { setOrderData } from './productsSlice';
import './OrderSummary.scss';

const OrderSummary = () => {
  const selectedProducts = useSelector((state) => state.products.selectedProducts);
  const orderData = useSelector((state) => state.products.orderData);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(orderData.firstName || '');
  const [lastName, setLastName] = useState(orderData.lastName || '');
  const [address, setAddress] = useState(orderData.address || '');
  const [email, setEmail] = useState(orderData.email || '');

  useEffect(() => {
    dispatch(setOrderData({ firstName, lastName, address, email }));
  }, [firstName, lastName, address, email, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      firstName,
      lastName,
      address,
      email,
      products: selectedProducts,
    };
    const result = await createOrder(order);
    if (result) {
      console.log('Order successfully created:', result);
    } else {
      console.error('Failed to create order');
    }
  };

  return (
    <div className="order-summary">
      <h1>Order Summary</h1>
      <ul>
        {selectedProducts.map((product, index) => (
          <li key={index}>
            {product.name} - {product.category} (Quantity: {product.quantity})
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="button-group">
          <button className="btn btn-secondary" type="button" onClick={() => window.history.back()}>
            Back
          </button>
          <button className="btn btn-success" type="submit">
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderSummary;
