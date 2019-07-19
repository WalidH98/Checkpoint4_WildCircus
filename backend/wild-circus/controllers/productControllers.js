const models = require('../models');
const Product = models.Product;
// use product for class and user for instance


module.exports = {
    index: function (req, res, next) {
        Product.findAll(req.params.id)
            .then((product) => { res.json({ product }) })
            .catch((error) => { console.log(error); });
    },
    show: function (req, res, next) {
        Product.findByPk(req.params.id)
            .then((product) => { res.json({ product }) })
            .catch((error) => { console.log(error); });
    },
    create: function (req, res, next) {
        Product.create({
            name: req.body.name,
            description: req.body.description,
            picture: req.body.picture,
            price: req.body.price,
            category: req.body.category,
        })
            .then((product) => { res.json({ message:'vote produit a bien été Create' }) })
            .catch((error) => { console.log(error); })
    },
    update: function (req, res, next) {
        Product.findByPk(req.params.id)
            .then((product) => {
                product.update({
                    name: req.body.name,
                    description: req.body.description,
                    picture: req.body.picture,
                    price: req.body.price,
                    category: req.body.category,
                })

                    .then((updatedproduct) => { res.json({ message : 'vote produit a bien été Update' }); })
                    .catch((error) => { console.log(error); })
            })
            .catch((error) => { console.log(error); });
    },
    delete: function (req, res, next) {
        Product.findByPk(req.params.id)
            .then((product) => {
                product.destroy()
                    .then((destroyedproduct) => { res.json({ message:'vote produit a bien été DESTROY' }); })
                    .catch((error) => { console.log(error); })
            })
            .catch((error) => { console.log(error); });
    },
};
