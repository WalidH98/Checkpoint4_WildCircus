'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    statue: DataTypes.STRING
  }, {});
  Cart.associate = function(models) {
    Cart.belongsToMany(models.Product,{  through:'CarthasProducts', foreignKey:'product_id', as: 'product' });
    // associations can be defined here
  };
  return Cart;
};