'use strict';
module.exports = (sequelize, DataTypes) => {
  const CarthasProducts = sequelize.define('CarthasProducts', {
    cart_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {});
  CarthasProducts.associate = function(models) {
    // associations can be defined here
  };
  return CarthasProducts;
};