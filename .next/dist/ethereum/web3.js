"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window != "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser and metamask is running
  web3 = new _web2.default(window.web3.currentProvider);
  console.log("using metamask");
} else {
  // We are on the server OR the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/1d5e3588363b4f5a91ca15573760408c");
  web3 = new _web2.default(provider);
  console.log("using infura");
}

//console.log(web3);

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQUksWUFBSjs7QUFFQSxJQUFJLE9BQU8sQUFBUCxVQUFpQixBQUFqQixlQUFnQyxPQUFPLE9BQU8sQUFBZCxTQUF1QixBQUEzRCxhQUF3RSxBQUN0RTtBQUNBO1NBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDQTtVQUFRLEFBQVIsSUFBWSxBQUFaLEFBQ0Q7QUFKRCxPQUlPLEFBQ0w7QUFDQTtNQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNmLEFBRGUsQUFBakIsQUFHQTtTQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDQTtVQUFRLEFBQVIsSUFBWSxBQUFaLEFBQ0Q7OztBQUVELEFBRUE7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Qcm9qZWN0cy9EYXRhIn0=