'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartHasProduct = sequelize.define('CartHasProduct', {
    cartId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  CartHasProduct.associate = function(models) {
    CartHasProduct.belongsTo(models.Product,{  foreignKey:'productId' });
    CartHasProduct.belongsTo(models.Cart,{  foreignKey:'cartId' });
  };
  return CartHasProduct;
};