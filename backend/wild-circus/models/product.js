'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    picture: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    Product.belongsToMany(models.Cart,{  through:'CartHasProduct', foreignKey:'productId', as: 'carts' });
  };
  return Product;
};