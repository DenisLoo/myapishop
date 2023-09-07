const router = require('express').Router();
// Импорт jsx
const Homepage = require('../../views/Homepage');
const Cart = require('../../views/Cart');
const Register = require('../../views/Register');
const Login = require('../../views/Login');

// Импорт модели из bd
const { Product } = require('../../db/models');

// Homepage
router.get('/', async (req, res) => {
  console.log('req.session', req.session);
  const products = await Product.findAll();
  res.render(Homepage, { products, user: req.session.user });
});
// Register (отрисовка)
router.get('/register', (req, res) => {
  res.render(Register, { user: req.session.user });
});

// Login (отрисовка)
router.get('/login', (req, res) => {
  res.render(Login, { user: req.session.user });
});

// cart
router.get('/cart', (req, res) => {
  res.render(Cart, { user: req.session.user });
});
module.exports = router;
