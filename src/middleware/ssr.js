const renderTemplate = require('./renderTemplate');

module.exports = function ssr(req, res, next) {
  res.render = (reactComponent, props) => {
    renderTemplate(reactComponent, { ...props }, res);
  };
  next();
};
