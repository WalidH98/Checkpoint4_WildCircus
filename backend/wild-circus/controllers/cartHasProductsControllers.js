const models = require('../models');
const CarthasProducts = models.CarthasProducts;
// use product for class and user for instance


module.exports = {
    index: function (req, res, next) {
        CarthasProducts.findAll(req.params.id)
            .then((cart) => { res.json({ cart }) })
            .catch((error) => { console.log(error); });
    },
    show: function (req, res, next ,) {
        CarthasProducts.findByPk(req.params.id , { include: ['products'] })
            .then((cart) => { res.json({ cart }) })
            .catch((error) => { console.log(error); });
    },
    create: function (req, res, next) {
        CarthasProducts.create({
            cart_id: req.body.cart_id,
            product_id: req.body.product_id,
        })
            .then((cart) => { res.json({ cart }) })
            .catch((error) => { console.log(error); })
    },
    update: function (req, res, next) {
        CarthasProducts.findByPk(req.params.id)
            .then((cart) => {
                carthasProducts.update({
                    statue: DataTypes.STRING
                })
                    .then((updatedcart) => { res.json({ updatedcart }); })
                    .catch((error) => { console.log(error); })
            })
            .catch((error) => { console.log(error); });
    },
    delete: function (req, res, next) {
        CarthasProducts.findByPk(req.params.id)
            .then((cart) => {
                carthasProducts.destroy()
                    .then((destroyedcart) => { res.json({ message:'vote panier est bien DESTROY' }); })
                    .catch((error) => { console.log(error); })
            })
            .catch((error) => { console.log(error); });
    },
};
