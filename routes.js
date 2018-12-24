const routes = require("next-routes")();

routes
  .add("convos/new", "/convos/new")
  .add("/convos/:time", "/convos/show");

module.exports = routes;
