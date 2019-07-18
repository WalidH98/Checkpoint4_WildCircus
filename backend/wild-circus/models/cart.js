'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    statue: DataTypes.STRING
  }, {});
  Cart.associate = function(models) {
    Cart.belongsToMany(models.Product,{ foreignKey:'product_id', though:'CarthasProducts', as: 'product' });
    // associations can be defined here
  };
  return Cart;
};