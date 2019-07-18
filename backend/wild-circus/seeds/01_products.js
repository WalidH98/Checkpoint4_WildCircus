const models = require ('../models')

const Product = models.Product;
const faker = require('faker');

Product.create({
    name: faker.commerce.productName(),
    description: 'This is a product of Wild Circus',
    picture: faker.image.business(),
    price: faker.commerce.price(),
    category: 'Goodies',
})
.then((product) => {console.log(product);} )
.catch ((error) => {console.log(error);})