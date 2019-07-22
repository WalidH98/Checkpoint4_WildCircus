'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    statue: DataTypes.STRING
  }, {});
  Cart.associate = function(models) {
    Cart.belongsToMany(models.Product,{  through:'CartHasProduct', foreignKey:'cartId', as: 'products' });
  };
  return Cart;
};