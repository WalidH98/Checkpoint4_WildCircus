const models = require ('../models')

const Product = models.Product;
const faker = require('faker');

Product.create({
    name: "Wild Mask",
    description: 'This is a product of Wild Circus',
    picture: 'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/793505',
    price: 30,
    category: 'Mask',
})
.then((product) => {console.log(product);} )
.catch ((error) => {console.log(error);})