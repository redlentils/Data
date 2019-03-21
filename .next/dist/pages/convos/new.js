"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _message = require("../../ethereum/message");

var _message2 = _interopRequireDefault(_message);

var _web = require("../../ethereum//web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/redlentils/git/Data/pages/convos/new.js?entry";


var ConvoNew = function (_Component) {
  (0, _inherits3.default)(ConvoNew, _Component);

  function ConvoNew(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, ConvoNew);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConvoNew.__proto__ || (0, _getPrototypeOf2.default)(ConvoNew)).call(this, props));

    _this.onSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true, errorMessage: "" });

                _context.prev = 2;
                _context.next = 5;
                return _message2.default.methods.createConvo(_this.state.viewers.split(","), _this.state.subject, _this.state.message).send({
                  from: _this.state.address,
                  gas: "3000000"
                });

              case 5:

                _routes.Router.pushRoute("/");
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 11:

                _this.setState({ loading: false });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.state = {
      address: "",
      subject: "",
      message: "",
      viewers: "",
      errorMessage: "",
      loading: false
    };
    return _this;
  }

  (0, _createClass3.default)(ConvoNew, [{
    key: "componentDidMount",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context2.sent;

                this.setState({
                  address: accounts[0]
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Create a Convo"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Viewers"), _react2.default.createElement("input", {
        value: this.state.viewers,
        onChange: function onChange(event) {
          return _this3.setState({ viewers: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Subject"), _react2.default.createElement("input", {
        value: this.state.subject,
        onChange: function onChange(event) {
          return _this3.setState({ subject: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Message"), _react2.default.createElement("input", {
        value: this.state.message,
        onChange: function onChange(event) {
          return _this3.setState({ message: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Error", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Store")));
    }
  }]);

  return ConvoNew;
}(_react.Component);

exports.default = ConvoNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnZvcy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIkxheW91dCIsIm1lc3NhZ2UiLCJ3ZWIzIiwiUm91dGVyIiwiQ29udm9OZXciLCJwcm9wcyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsIm1ldGhvZHMiLCJjcmVhdGVDb252byIsInN0YXRlIiwidmlld2VycyIsInNwbGl0Iiwic3ViamVjdCIsInNlbmQiLCJmcm9tIiwiYWRkcmVzcyIsImdhcyIsInB1c2hSb3V0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUTs7QUFDdkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0ksQUFFakI7b0NBQ0o7O29CQUFBLEFBQVksT0FBTztpQkFBQTs7d0NBQUE7OzBJQUFBLEFBQ1g7O1VBRFcsQUFxQm5CLHVCQXJCbUI7MEZBcUJSLGlCQUFBLEFBQU8sT0FBUDtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBRU47O3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBSHRCLEFBR1QsQUFBYyxBQUErQjs7Z0NBSHBDO2dDQUFBO3lDQU1ELEFBQVEsUUFBUixBQUNILFlBQVksTUFBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLE1BRDVCLEFBQ1MsQUFBeUIsTUFBTSxNQUFBLEFBQUssTUFEN0MsQUFDbUQsU0FBUyxNQUFBLEFBQUssTUFEakUsQUFDdUUsU0FEdkUsQUFFSDt3QkFD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