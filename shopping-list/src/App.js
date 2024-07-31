// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingList from './features/products/ShoppingList';
import OrderSummary from './features/products/OrderSummary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShoppingList />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
