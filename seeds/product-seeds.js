const { Product } = require('../models');

const productData = [
  {
    product_name: 'Grey T-Shirt',
    price: 17.99,
    stock: 23,
    category_id: 1,
  },
  {
    product_name: 'Hiking Boots',
    price: 115.0,
    stock: 18,
    category_id: 5,
  },
  {
    product_name: 'Winter Cap',
    price: 36.99,
    stock: 16,
    category_id: 4,
  },
  {
    product_name: 'Stevie Wonder Greatest Hits Vinyl Record',
    price: 15.99,
    stock: 60,
    category_id: 3,
  },
  {
    product_name: 'Purple Shorts',
    price: 30.00,
    stock: 25,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
