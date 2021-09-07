const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'jazz music',
  },
  {
    tag_name: 'classical music',
  },
  {
    tag_name: 'ochre',
  },
  {
    tag_name: 'chrome',
  },
  {
    tag_name: 'pink',
  },
  {
    tag_name: 'lavender',
  },
  {
    tag_name: 'turquoise',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
