var express = require('express');

var router = express.Router();

const productControllers = require('../controllers/productControllers');

/* GET placeslisting. */

router.get('/', productControllers.index);

router.get('/:id', productControllers.show);

router.post('/', productControllers.create);

router.put('/:id', productControllers.update);

router.delete('/:id', productControllers.delete);

module.exports = router;