// Логика на авторизацию и регистрацию User.
const router = require('express').Router();
const bcrypt = require('bcrypt');

// импорт Модели из DB
const { User } = require('../../db/models');

// Регистрация => данные из формы => запись в базу => запись login и id в req.session
router.post('/register', async (req, res) => {
  const { login, email, password } = req.body;
  try {
    if (!login || !email || !password) {
      return res
        .status(400)
        .json({ message: 'Please fill out fields on the Registration form!' });
    }
    const hashPass = await bcrypt.hash(password, 10);
    const [user, created] = await User.findOrCreate({
      where: { login },
      defaults: {
        login,
        email,
        password: hashPass,
      },
    });

    if (!created) {
      return res.status(401).json({ message: 'Such user is already exist' });
    }
    // console.log('newUser', user);
    // запись из BD => в сессию
    req.session.user = {
      login: user.login,
      id: user.id,
    };
    // User записан в BD => front
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// Логиним user
router.post('/login', async (req, res) => {
  try {
    // получаем данные из формы login
    const { login, password } = req.body;
    if (!login || !password) {
      return res
        .status(400)
        .json({ message: 'Please fill out fields on the Login form!' });
    }
    const user = await User.findOne({
      where: { login },
      raw: true,
    });
    if (!user) {
      return res.status(401).json({ message: 'Such user doesn`t exist' });
    }
    // проверка пароля
    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      req.session.user = {
        login: user.login,
        id: user.id,
      };
      return res.sendStatus(200);
    }
    return res.status(401).json({ message: 'Incorrect password' });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
});

// logout
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.redirect('/');
    } else {
      res.clearCookie('myapishop');
      res.redirect('/');
    }
  });
});

module.exports = router;
