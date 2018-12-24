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
      convoCount: "",
      viewableConvos: []
    };
    return _this;
  }

  (0, _createClass3.default)(ConvosIndex, [{
    key: "componentDidMount",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var accounts, myConvos, convoCount, viewableConvos;
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
                _context.next = 11;
                return _message2.default.methods.getViewable_Convos().call({
                  from: accounts[0]
                });

              case 11:
                viewableConvos = _context.sent;

                this.setState({
                  myConvosCreators: myConvos[0],
                  myConvosTime: myConvos[1],
                  viewableConvos: viewableConvos
                });

              case 13:
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

      var items = this.state.viewableConvos.map(function (vconvo, index) {
        return {
          header: "CONVO #:" + vconvo,
          description: _react2.default.createElement(_routes.Link, { route: "/convos/" + vconvo, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          }, "View Convo")),
          meta: "From:" + _this2.state.myConvosCreators[index],
          extra: "Block Time Stamp:" + _this2.state.myConvosTime[index],
          fluid: true
        };
      });

      /*
      renderMyConvos() {
        const items = this.state.myConvosTime.map((time, index) => {
          return {
            header: "BLOCK #:" + time,
            description: (
              <Link route={`/convos/${time}`}>
                <a>View Convo</a>
              </Link>
            ),
            meta: this.state.myConvosCreators[index],
            fluid: true
          };
        });
        */

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "My Convos"), _react2.default.createElement(_routes.Link, { route: "/convos/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: "right",
        content: "Create Convo",
        icon: "add",
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }))), this.renderMyConvos()));
    }
  }]);

  return ConvosIndex;
}(_react.Component);

exports.default = ConvosIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJtZXNzYWdlIiwid2ViMyIsIkxheW91dCIsIkxpbmsiLCJDb252b3NJbmRleCIsInByb3BzIiwic3RhdGUiLCJteUNvbnZvc0NyZWF0b3JzIiwibXlDb252b3NUaW1lIiwiY29udm9Db3VudCIsInZpZXdhYmxlQ29udm9zIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJyZXR1cm5NeUNvbnZvcyIsImNhbGwiLCJmcm9tIiwibXlDb252b3MiLCJjb252b19jb3VudCIsImdldFZpZXdhYmxlX0NvbnZvcyIsInNldFN0YXRlIiwiaXRlbXMiLCJtYXAiLCJ2Y29udm8iLCJpbmRleCIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwibWV0YSIsImV4dHJhIiwiZmx1aWQiLCJyZW5kZXJNeUNvbnZvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjt1Q0FDSjs7dUJBQUEsQUFBWSxPQUFPO3dDQUFBOztnSkFBQSxBQUNYLEFBRU47O1VBQUEsQUFBSzt3QkFBUyxBQUNNLEFBQ2xCO29CQUZZLEFBRUUsQUFDZDtrQkFIWSxBQUdBLEFBQ1o7c0JBUGUsQUFHakIsQUFBYyxBQUlJO0FBSkosQUFDWjtXQUtIOzs7Ozs7Ozs7Ozs7O3VCQUd3QixjQUFBLEFBQUssSSxBQUFMLEFBQVM7O21CQUExQjtBOzt5Q0FDaUIsQUFBUSxRQUFSLEFBQWdCLGlCQUFoQixBQUFpQzt3QkFDaEQsUyxBQURlLEFBQXNDLEFBQ3JELEFBQVM7QUFENEMsQUFDM0QsaUJBRHFCOzttQkFBakI7QTs7dUJBR21CLGtCQUFBLEFBQVEsUUFBUixBQUFnQixjQUFoQixBQUE4QixBOzttQkFBakQ7QTs7eUNBQ3VCLEFBQVEsUUFBUixBQUFnQixxQkFBaEIsQUFBcUM7d0JBQzFELFMsQUFEcUIsQUFBMEMsQUFDL0QsQUFBUztBQURzRCxBQUNyRSxpQkFEMkI7O21CQUF2QjtBLDBDQUlOOztxQkFBQSxBQUFLO29DQUNlLFNBRE4sQUFDTSxBQUFTLEFBQzNCO2dDQUFjLFNBRkYsQUFFRSxBQUFTLEFBQ3ZCO2tDQUhGLEFBQWMsQUFHSTtBQUhKLEFBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FNYTttQkFDZjs7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLGVBQVgsQUFBMEIsSUFBSSxVQUFBLEFBQUMsUUFBRCxBQUFTLE9BQVUsQUFDN0Q7O2tCQUNVLGFBREgsQUFDZ0IsQUFDckI7dUNBQ0UsQUFBQyw4QkFBSyxvQkFBTixBQUF3Qjt3QkFBeEI7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBSkMsQUFHSCxBQUNFLEFBR0o7Z0JBQU0sVUFBVSxPQUFBLEFBQUssTUFBTCxBQUFXLGlCQVB0QixBQU9XLEFBQTRCLEFBQzVDO2lCQUFPLHNCQUFzQixPQUFBLEFBQUssTUFBTCxBQUFXLGFBUm5DLEFBUXdCLEFBQXdCLEFBQ3JEO2lCQVRGLEFBQU8sQUFTRSxBQUVWO0FBWFEsQUFDTDtBQUZKLEFBQWMsQUFjaEIsT0FkZ0I7O0FBOEJkOzs7Ozs7Ozs7Ozs7Ozs7OzJDQUFPLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFFQSw4QkFBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztpQkFBRCxBQUNVLEFBQ1I7aUJBRkYsQUFFVSxBQUNSO2NBSEYsQUFHTyxBQUNMO2lCQUpGOztvQkFBQTtzQkFMTixBQUdFLEFBQ0UsQUFDRSxBQVNIO0FBVEc7QUFDRSxpQkFSWixBQUNFLEFBQ0UsQUFjRyxBQUFLLEFBSWI7Ozs7O0FBcEZ1QixBLEFBdUYxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Qcm9qZWN0cy9EYXRhIn0=