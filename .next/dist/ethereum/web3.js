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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJjb25zb2xlIiwibG9nIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBSSxZQUFKOztBQUVBLElBQUksT0FBTyxBQUFQLFVBQWlCLEFBQWpCLGVBQWdDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTNELGFBQXdFLEFBQ3RFO0FBQ0E7U0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNBO1VBQVEsQUFBUixJQUFZLEFBQVosQUFDRDtBQUpELE9BSU8sQUFDTDtBQUNBO01BQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ2YsQUFEZSxBQUFqQixBQUdBO1NBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNBO1VBQVEsQUFBUixJQUFZLEFBQVosQUFDRDs7O0FBRUQsQUFFQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JlZGxlbnRpbHMvZ2l0L0RhdGEifQ==