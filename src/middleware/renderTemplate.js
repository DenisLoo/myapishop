require('@babel/register');
const React = require('react');
const ReactDomServer = require('react-dom/server');

module.exports = function renderTemplate(components, props, res) {
  const home = React.createElement(components, props);
  const html = ReactDomServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
};
