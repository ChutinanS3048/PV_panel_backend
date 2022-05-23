'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {

    freezeTableName: true,
    underscoredAll : true,
    underscored: true, 
    createAt: "create_at",
    updateAt: "update_at",
  });
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};