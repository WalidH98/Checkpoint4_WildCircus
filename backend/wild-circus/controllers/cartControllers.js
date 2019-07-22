const models = require('../models');
const Cart = models.Cart;
// use product for class and user for instance


module.exports = {
    index: function (req, res, next) {
        Cart.findAll({include: ['products']})
            .then((cart) => { res.json({ cart }) })
            .catch((error) => { console.log(error); });
    },
    show: function (req, res, next ,) {
        Cart.findByPk(req.params.id , { include: ['products'] })
            .then((cart) => { res.json({ cart }) })
            .catch((error) => { console.log(error); });
    },
    create: function (req, res, next) {
        Cart.create({
            
            statue: req.body.statue
        }, { include: ['products'] })
            .then((cart) => {
                if(req.body.productIds){
                    cart.setProducts(req.body.productIds.split(','))
                    .then((associated) => {
                        res.json({cart, message: 'vote panier a bien été Create' })
                    })
                }
                else {
                    res.json({ cart, message: 'vote panier a bien été Create' })
                }
            })
            .catch((error) => { console.log(error); })
    },
    update: function (req, res, next) {
        Cart.findByPk(req.params.id, { include: ['products'] })
            .then((cart) => {
                cart.update({
                    statue: req.body.statue
                })
                    .then((updatedcart) => {
                        if(req.body.productIds){
                            cart.setProducts(req.body.productIds.split(','))
                            .then((associated) => {
                                res.json({cart, message: 'vote panier a bien été Create' })
                            })
                        }
                        else {
                            res.json({ cart, message: 'vote panier a bien été Create' })
                        }
                    })
                    .catch((error) => { console.log(error); })
            })
            .catch((error) => { console.log(error); });
    },
    delete: function (req, res, next) {
        Cart.findByPk(req.params.id)
            .then((cart) => {
                cart.destroy()
                    .then((destroyedcart) => { res.json({ message:'vote panier est bien DESTROY' }); })
                    .catch((error) => { console.log(error); })
            })
            .catch((error) => { console.log(error); });
    },
};
