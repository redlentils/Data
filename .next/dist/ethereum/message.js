"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Message = require("./build/Message.json");

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_Message2.default.interface), "0x2305Edf3086c292b80De7b1EfE4c912576a1E63B");

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxtZXNzYWdlLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJNZXNzYWdlIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQW9CLEFBQXBCOzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2YsS0FBSyxBQUFMLE1BQVcsa0JBQVEsQUFBbkIsQUFEZSxZQUVmLEFBRmUsQUFBakIsQUFLQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJtZXNzYWdlLmpzIiwic291cmNlUm9vdCI6IkM6L1Byb2plY3RzL0RhdGEifQ==