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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Projects\\Data\\pages\\convos\\show.js?entry";


var ConvoShow = function (_Component) {
  (0, _inherits3.default)(ConvoShow, _Component);

  function ConvoShow(props) {
    (0, _classCallCheck3.default)(this, ConvoShow);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConvoShow.__proto__ || (0, _getPrototypeOf2.default)(ConvoShow)).call(this, props));

    _this.state = {
      convo: {}
    };
    return _this;
  }

  (0, _createClass3.default)(ConvoShow, [{
    key: "componentDidMount",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var convo;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _message2.default.methods.convos(this.props.id).call();

              case 2:
                convo = _context.sent;

                this.setState({
                  convo: convo
                });

              case 4:
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
    key: "renderMyConvo",
    value: function renderMyConvo() {
      var items = [{
        header: "SUBJECT:    " + this.state.convo.subject,
        description: "MESSAGE:    " + this.state.convo.message,
        meta: "TIME:    " + this.state.convo.time,
        extra: "VIEWERS:    " + this.state.convo.viewers,
        fluid: true
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Convo Show"), this.renderMyConvo());
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      return {
        id: props.query.vconvo
      };
    }
  }]);

  return ConvoShow;
}(_react.Component);

exports.default = ConvoShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb252b3NcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJHcmlkIiwiQ2FyZCIsIkxheW91dCIsIm1lc3NhZ2UiLCJ3ZWIzIiwiQ29udm9TaG93IiwicHJvcHMiLCJzdGF0ZSIsImNvbnZvIiwibWV0aG9kcyIsImNvbnZvcyIsImlkIiwiY2FsbCIsInNldFN0YXRlIiwiaXRlbXMiLCJoZWFkZXIiLCJzdWJqZWN0IiwiZGVzY3JpcHRpb24iLCJtZXRhIiwidGltZSIsImV4dHJhIiwidmlld2VycyIsImZsdWlkIiwicmVuZGVyTXlDb252byIsInF1ZXJ5IiwidmNvbnZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDtxQ0FDSjs7cUJBQUEsQUFBWSxPQUFPO3dDQUFBOzs0SUFBQSxBQUNYLEFBRU47O1VBQUEsQUFBSzthQUhZLEFBR2pCLEFBQWMsQUFDTDtBQURLLEFBQ1o7V0FFSDs7Ozs7Ozs7Ozs7Ozt1QkFTcUIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLE9BQU8sS0FBQSxBQUFLLE1BQTVCLEFBQWtDLElBQWxDLEEsQUFBc0M7O21CQUFwRDtBLGlDQUVOOztxQkFBQSxBQUFLO3lCQUFMLEFBQWMsQUFDTDtBQURLLEFBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FJWSxBQUNkO1VBQU07Z0JBQ0ksaUJBQWlCLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFEdkIsQUFDNkIsQUFDMUM7cUJBQWEsaUJBQWlCLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFGNUIsQUFFa0MsQUFDL0M7Y0FBTSxjQUFjLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFIbEIsQUFHd0IsQUFDckM7ZUFBTyxpQkFBaUIsS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUp0QixBQUk0QixBQUN6QztlQUxGLEFBQWMsQUFBQyxBQUtOLEFBR1Q7QUFSZSxBQUNiLE9BRFk7OzJDQVFQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0MsQUFDUjs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQyxvQkFITCxBQUNFLEFBRUcsQUFBSyxBQUdYOzs7O29DQWpDc0IsQSxPQUFPLEFBQzVCOztZQUNNLE1BQUEsQUFBTSxNQURaLEFBQU8sQUFDVyxBQUVuQjtBQUhRLEFBQ0w7Ozs7O0FBWGtCLEEsQUE2Q3hCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovUHJvamVjdHMvRGF0YSJ9