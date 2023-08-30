const fs = require('fs');

class ProductManager {
    constructor(dataFilePath) {
        this.dataFilePath = dataFilePath;
    }

    getAllProducts() {
        const rawData = fs.readFileSync(this.dataFilePath);
        return JSON.parse(rawData);
    }

    getProductById(pid) {
        const products = this.getAllProducts();
        return products.find(product => product.id === pid);
    }
}

module.exports = ProductManager;
