const router = require('express').Router();
// Импорт jsx
const Homepage = require('../../views/Homepage');
const CartPage = require('../../views/Cart');
const Register = require('../../views/Register');
const Login = require('../../views/Login');

// Импорт middleware защиты ручек
const notAuth = require('../middleware/notAuth');
const isAuth = require('../middleware/isAuth');

// Импорт модели из bd
const { Product, Cart, User } = require('../../db/models');

// Homepage
router.get('/', async (req, res) => {
  console.log('req.session', req.session);
  const products = await Product.findAll();
  res.render(Homepage, { products, user: req.session.user });
});
// Register (отрисовка)
router.get('/register', notAuth, (req, res) => {
  res.render(Register, { user: req.session.user });
});

// Login (отрисовка)
router.get('/login', notAuth, (req, res) => {
  res.render(Login, { user: req.session.user });
});

// cart
router.get('/cart', isAuth, async (req, res) => {
  const productsInCart = await User.findOne({
    where: { id: req.session?.user?.id },
    include: [{ model: Product }],
  });
  res.render(CartPage, { user: req.session.user, productsInCart });
});
module.exports = router;
