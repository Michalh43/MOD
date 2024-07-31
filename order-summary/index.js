const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

//  CORS
app.use(cors({
  origin: ['http://localhost:3001', 'http://localhost:3002', 'http://localhost:3004'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

//MongoDB
mongoose.connect('mongodb://localhost:27017/orderSummary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));


const orderSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  category: String
});

const Order = mongoose.model('Order', orderSchema);

// Route 
app.post('/order', async (req, res) => {
  try {
    const orderData = req.body;
    
    const order = new Order(orderData);
    
    await order.save();
    
    res.json({ message: 'Order saved successfully!' });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ message: 'Error saving order' });
  }
});

// listen to 3004
app.listen(3004, () => {
  console.log('Server is running on port 3004');
});
