// Защита /login и /register от перехода зарег-ых user
module.exports = function notAuth(req, res, next) {
  if (!req.session?.user) {
    next();
  } else {
    res.redirect('/');
  }
};