const express = require('express')
const Controller = require('../controller/controller')
const router = express.Router()




router.get('/', Controller.home);
router.get('/login', Controller.formLogin);

router.get('/register', Controller.formRegister);
router.post('/register', Controller.postRegister);

router.get('/products', Controller.products);
router.get('/addProduct', Controller.formAddProduct);
router.post('/addProduct', Controller.postAddProduct)

router.get('/profile/:id', Controller.profile);
router.post('/profile/:id', Controller.postEditProfile);

router.get('/cart/:id', Controller.cart);
router.post('/cart/increase/:id', Controller.increaseOrder);
router.post('/cart/decrease/:id', Controller.decreaseOrder);
router.get('/cart/delete/:id', Controller.deleteOrder);

module.exports = router