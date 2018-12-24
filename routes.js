const routes = require("next-routes")();

routes
  .add("convos/new", "/convos/new")
  .add("/convos/:vconvo", "/convos/show");

module.exports = routes;
