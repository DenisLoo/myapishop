// Защита ручки на Cart
module.exports = function isAuth(req, res, next) {
  if (req.session?.user) {
    next();
  } else {
    res.redirect('/');
  }
};
