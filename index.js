const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let products = [
    { id: 101, name: 'Wireless Headphones', price: 59.99 },
    { id: 102, name: 'Smartwatch', price: 129.99 },
    { id: 103, name: 'Laptop', price: 799.99 }
];

// Route to get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Route to get a single product by id
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Route to add a new product
app.post('/api/products', (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.json(newProduct);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
