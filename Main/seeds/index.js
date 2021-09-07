const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('Database is seeded');
  await seedCategories();
  console.log('Categories are seeded');

  await seedProducts();
  console.log('Products are seeded');

  await seedTags();
  console.log('Tags are seeded');

  await seedProductTags();
  console.log('Product tags are seeded');

  process.exit(0);
};

seedAll();
