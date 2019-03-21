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

var _jsxFileName = "/home/redlentils/git/Data/pages/index.js?entry";


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIm1lc3NhZ2UiLCJ3ZWIzIiwiTGF5b3V0IiwiTGluayIsIkNvbnZvc0luZGV4IiwicHJvcHMiLCJzdGF0ZSIsIm15Q29udm9zQ3JlYXRvcnMiLCJteUNvbnZvc1RpbWUiLCJjb252b0NvdW50Iiwidmlld2FibGVDb252b3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsInJldHVybk15Q29udm9zIiwiY2FsbCIsImZyb20iLCJteUNvbnZvcyIsImNvbnZvX2NvdW50IiwiZ2V0Vmlld2FibGVfQ29udm9zIiwic2V0U3RhdGUiLCJpdGVtcyIsIm1hcCIsInZjb252byIsImluZGV4IiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwiZXh0cmEiLCJmbHVpZCIsInJlbmRlck15Q29udm9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmO3VDQUNKOzt1QkFBQSxBQUFZLE9BQU87d0NBQUE7O2dKQUFBLEFBQ1gsQUFFTjs7VUFBQSxBQUFLO3dCQUFTLEFBQ00sQUFDbEI7b0JBRlksQUFFRSxBQUNkO2tCQUhZLEFBR0EsQUFDWjtzQkFQZSxBQUdqQixBQUFjLEFBSUk7QUFKSixBQUNaO1dBS0g7Ozs7Ozs7Ozs7Ozs7dUJBR3dCLGNBQUEsQUFBSyxJLEFBQUwsQUFBUzs7bUJBQTFCO0E7O3lDQUNpQixBQUFRLFFBQVIsQUFBZ0IsaUJBQWhCLEFBQWlDO3dCQUNoRCxTLEFBRGUsQUFBc0MsQUFDckQsQUFBUztBQUQ0QyxBQUMzRCxpQkFEcUI7O21CQUFqQjtBOzt1QkFHbUIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLGMsQUFBaEIsQUFBOEI7O21CQUFqRDtBOzt5Q0FDdUIsQUFBUSxRQUFSLEFBQWdCLHFCQUFoQixBQUFxQzt3QkFDMUQsUyxBQURxQixBQUEwQyxBQUMvRCxBQUFTO0FBRHNELEFBQ3JFLGlCQUQyQjs7bUJBQXZCO0EsMENBSU47O3FCQUFBLEFBQUs7b0NBQ2UsU0FETixBQUNNLEFBQVMsQUFDM0I7Z0NBQWMsU0FGRixBQUVFLEFBQVMsQUFDdkI7a0NBSEYsQUFBYyxBQUdJO0FBSEosQUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQU1hO21CQUNmOztVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsZUFBWCxBQUEwQixJQUFJLFVBQUEsQUFBQyxRQUFELEFBQVMsT0FBVSxBQUM3RDs7a0JBQ1UsYUFESCxBQUNnQixBQUNyQjt1Q0FDRSxBQUFDLDhCQUFLLG9CQUFOLEFBQXdCO3dCQUF4QjswQkFBQSxBQUNFO0FBREY7V0FBQSxrQkFDRSxjQUFBOzt3QkFBQTswQkFBQTtBQUFBO0FBQUEsYUFKQyxBQUdILEFBQ0UsQUFHSjtnQkFBTSxVQUFVLE9BQUEsQUFBSyxNQUFMLEFBQVcsaUJBUHRCLEFBT1csQUFBNEIsQUFDNUM7aUJBQU8sc0JBQXNCLE9BQUEsQUFBSyxNQUFMLEFBQVcsYUFSbkMsQUFRd0IsQUFBd0IsQUFDckQ7aUJBVEYsQUFBTyxBQVNFLEFBRVY7QUFYUSxBQUNMO0FBRkosQUFBYyxBQWNoQixPQWRnQjs7QUE4QmQ7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBQU8sQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUVBLDhCQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2lCQUFELEFBQ1UsQUFDUjtpQkFGRixBQUVVLEFBQ1I7Y0FIRixBQUdPLEFBQ0w7aUJBSkY7O29CQUFBO3NCQUxOLEFBR0UsQUFDRSxBQUNFLEFBU0g7QUFURztBQUNFLGlCQVJaLEFBQ0UsQUFDRSxBQWNHLEFBQUssQUFJYjs7Ozs7QUFHSCxBLEFBdkYwQjs7a0JBdUYxQixBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3JlZGxlbnRpbHMvZ2l0L0RhdGEifQ==