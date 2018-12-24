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

var _message = require("../ethereum/message");

var _message2 = _interopRequireDefault(_message);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Projects\\Data\\pages\\index.js?entry";


var ConvosIndex = function (_Component) {
  (0, _inherits3.default)(ConvosIndex, _Component);

  function ConvosIndex(props) {
    (0, _classCallCheck3.default)(this, ConvosIndex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConvosIndex.__proto__ || (0, _getPrototypeOf2.default)(ConvosIndex)).call(this, props));

    _this.state = {
      myConvosCreators: [],
      myConvosTime: [],
      convoCount: ""
    };
    return _this;
  }

  (0, _createClass3.default)(ConvosIndex, [{
    key: "componentDidMount",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var accounts, myConvos, convoCount;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context.sent;
                _context.next = 5;
                return _message2.default.methods.returnMyConvos().call({
                  from: accounts[0]
                });

              case 5:
                myConvos = _context.sent;
                _context.next = 8;
                return _message2.default.methods.convo_count().call();

              case 8:
                convoCount = _context.sent;

                console.log(convoCount);

                this.setState({
                  myConvosCreators: myConvos[0],
                  myConvosTime: myConvos[1]
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "renderMyConvos",
    value: function renderMyConvos() {
      var _this2 = this;

      var items = this.state.myConvosTime.map(function (time, index) {
        return {
          header: "BLOCK #:" + time,
          description: _react2.default.createElement(_routes.Link, { route: "/convos/" + time, __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          }, "View Convo")),
          meta: _this2.state.myConvosCreators[index],
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "My Convos"), _react2.default.createElement(_routes.Link, { route: "/convos/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: "right",
        content: "Create Convo",
        icon: "add",
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }))), this.renderMyConvos()));
    }
  }]);

  return ConvosIndex;
}(_react.Component);

exports.default = ConvosIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJtZXNzYWdlIiwid2ViMyIsIkxheW91dCIsIkxpbmsiLCJDb252b3NJbmRleCIsInByb3BzIiwic3RhdGUiLCJteUNvbnZvc0NyZWF0b3JzIiwibXlDb252b3NUaW1lIiwiY29udm9Db3VudCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwicmV0dXJuTXlDb252b3MiLCJjYWxsIiwiZnJvbSIsIm15Q29udm9zIiwiY29udm9fY291bnQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJpdGVtcyIsIm1hcCIsInRpbWUiLCJpbmRleCIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwibWV0YSIsImZsdWlkIiwicmVuZGVyTXlDb252b3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztJQUVmLEE7dUNBQ0o7O3VCQUFBLEFBQVksT0FBTzt3Q0FBQTs7Z0pBQUEsQUFDWCxBQUVOOztVQUFBLEFBQUs7d0JBQVMsQUFDTSxBQUNsQjtvQkFGWSxBQUVFLEFBQ2Q7a0JBTmUsQUFHakIsQUFBYyxBQUdBO0FBSEEsQUFDWjtXQUlIOzs7Ozs7Ozs7Ozs7O3VCQUd3QixjQUFBLEFBQUssSUFBSSxBLEFBQVQ7O21CQUFqQjtBOzt5Q0FDaUIsQUFBUSxRQUFSLEFBQWdCLGlCQUFoQixBQUFpQzt3QkFDaEQsU0FEZSxBQUFzQyxBQUNyRCxBLEFBQVM7QUFENEMsQUFDM0QsaUJBRHFCOzttQkFBakI7QTs7dUJBR21CLGtCQUFBLEFBQVEsUUFBUixBQUFnQixjQUFoQixBLEFBQThCOzttQkFBakQ7QSxzQ0FDTjs7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFFWjs7cUJBQUEsQUFBSztvQ0FDZSxTQUROLEFBQ00sQUFBUyxBQUMzQjtnQ0FBYyxTQUZoQixBQUFjLEFBRUUsQUFBUztBQUZYLEFBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FLYTttQkFDZjs7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLGFBQVgsQUFBd0IsSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVUsQUFDekQ7O2tCQUNVLGFBREgsQUFDZ0IsQUFDckI7dUNBQ0UsQUFBQyw4QkFBSyxvQkFBTixBQUF3Qjt3QkFBeEI7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBSkMsQUFHSCxBQUNFLEFBR0o7Z0JBQU0sT0FBQSxBQUFLLE1BQUwsQUFBVyxpQkFQWixBQU9DLEFBQTRCLEFBQ2xDO2lCQVJGLEFBQU8sQUFRRSxBQUVWO0FBVlEsQUFDTDtBQUZKLEFBQWMsQUFhZCxPQWJjOzsyQ0FhUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBRUEsOEJBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDVSxBQUNSO2lCQUZGLEFBRVUsQUFDUjtjQUhGLEFBR08sQUFDTDtpQkFKRjs7b0JBQUE7c0JBTE4sQUFHRSxBQUNFLEFBQ0UsQUFTSDtBQVRHO0FBQ0UsaUJBUlosQUFDRSxBQUNFLEFBY0csQUFBSyxBQUliOzs7OztBQS9EdUIsQSxBQWtFMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovUHJvamVjdHMvRGF0YSJ9