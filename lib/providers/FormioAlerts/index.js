'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormioAlerts = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reduxInjector = require('redux-injector');

var _factories = require('../../factories');

var _reducers = require('./reducers');

var _views = require('./views');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormioAlerts = exports.FormioAlerts = function () {
  function FormioAlerts(_ref) {
    var appUrl = _ref.appUrl,
        _ref$loginForm = _ref.loginForm,
        loginForm = _ref$loginForm === undefined ? 'user/login' : _ref$loginForm,
        _ref$registerForm = _ref.registerForm,
        registerForm = _ref$registerForm === undefined ? 'user/register' : _ref$registerForm,
        _ref$forceAuth = _ref.forceAuth,
        forceAuth = _ref$forceAuth === undefined ? false : _ref$forceAuth,
        _ref$authState = _ref.authState,
        authState = _ref$authState === undefined ? '/' : _ref$authState,
        _ref$anonState = _ref.anonState,
        anonState = _ref$anonState === undefined ? '/auth' : _ref$anonState,
        _ref$allowedStates = _ref.allowedStates,
        allowedStates = _ref$allowedStates === undefined ? ['/auth'] : _ref$allowedStates;

    _classCallCheck(this, FormioAlerts);

    this.Alerts = _views.Alerts;

    this.appUrl = appUrl;
    this.loginForm = loginForm;
    this.registerForm = registerForm;
    this.forceAuth = forceAuth;
    this.authState = authState;
    this.anonState = anonState;
    this.allowedStates = !forceAuth || allowedStates;

    var reducer = this.getReducers();
    (0, _reduxInjector.injectReducer)('formio.alerts', reducer);
    (0, _factories.addReducer)('alerts', reducer);
    (0, _factories.addRoute)(this.getRoutes());
  }

  _createClass(FormioAlerts, [{
    key: 'getReducers',
    value: function getReducers() {
      return (0, _reducers.alertsReducer)();
    }
  }, {
    key: 'getRoutes',
    value: function getRoutes() {
      var Alerts = this.Alerts(this);
      return _react2.default.createElement(
        'div',
        { className: 'formio-alerts' },
        _react2.default.createElement(_reactRouter.Match, { pattern: '/', component: this.Alerts(this) })
      );
    }
  }]);

  return FormioAlerts;
}();