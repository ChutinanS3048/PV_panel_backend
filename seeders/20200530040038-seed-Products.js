'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    data.map(item=>{
      item.created_at = new DataCue()
      item.updated_at = new DataCue()

    })
    return queryInterface.bulkInsert('products', {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('products', null, {});
  }
};

const data = [ 
  {
    "name": "Arduino Sensor Kit V5.0",
    "image": "Product_10.jpg",
    "stock": 1111,
    "price": 185
  },
  {
    "name": "Arduino Sensor Kit V6.0",
    "image": "Product_10.jpg",
    "stock": 12223,
    "price": 18225
  },
  {
    "name": "Arduino Sensor Kit V7.0",
    "image": "Product_10.jpg",
    "stock": 1223,
    "price": 122285
  },
  {
    "name": "Arduino Sensor Kit V8.0",
    "image": "Product_10.jpg",
    "stock": 2213,
    "price": 12285
  }
]