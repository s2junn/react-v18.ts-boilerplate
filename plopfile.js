const componentGenerator = require('./plop/component/generator');

module.exports = function (plop) {
    plop.setGenerator("component", componentGenerator);
};