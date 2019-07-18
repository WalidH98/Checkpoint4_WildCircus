'use strict';
module.exports = (sequelize, DataTypes) => {
  const CarthasProducts = sequelize.define('CarthasProducts', {
    cart_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {});
  CarthasProducts.associate = function(models) {
    CarthasProducts.belongsTo(models.Product,{ foreignKey:'product_id', as: 'product'});
    CarthasProducts.belongsTo(models.Cart,{ foreignKey:'cart_id',as: 'cart'});
    // associations can be defined here
  };
  return CarthasProducts;
};