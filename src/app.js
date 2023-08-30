const express = require('express');
const ProductManager = require('./ProductManager');

const app = express();
const PORT = 3000;
const productManager = new ProductManager('../products.json');

app.get('/products', (req, res) => {
    const limit = req.query.limit;
    let products = productManager.getAllProducts();
    
    if (limit) {
        products = products.slice(0, limit);
    }
    
    res.json(products);
});

app.get('/products/:pid', (req, res) => {
    const productId = req.params.pid;
    const product = productManager.getProductById(productId);
    
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
