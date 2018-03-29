var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

var OverlayPage = function (_React$Component) {
  _inherits(OverlayPage, _React$Component);

  function OverlayPage(props) {
    _classCallCheck(this, OverlayPage);

    var _this = _possibleConstructorReturn(this, (OverlayPage.__proto__ || Object.getPrototypeOf(OverlayPage)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      show: _this.props.isOpen || false
    };
    _this.defaultStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      overscrollBehaviorY: 'contain',
      transitionProperty: 'transform',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    };
    _this.directions = {
      bottom: 'translateY(100%)',
      top: 'translateY(-100%)',
      left: 'translateX(-100%)',
      right: 'translateX(100%)'
    };
    return _this;
  }

  _createClass(OverlayPage, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.props.isOpen && !nextProps.isOpen) {
        setTimeout(function () {
          _this2.setState({
            show: false
          });
        }, this.props.delay || 500);
      } else if (!this.props.isOpen && nextProps.isOpen) {
        this.setState({
          show: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          children = _props.children,
          mountOnRender = _props.mountOnRender,
          style = _props.style,
          duration = _props.duration,
          zIndex = _props.zIndex,
          direction = _props.direction,
          props = _objectWithoutProperties(_props, ['isOpen', 'children', 'mountOnRender', 'style', 'duration', 'zIndex', 'direction']);

      var show = this.state.show;


      var pageStyle = this.getStyle();

      return React.createElement(
        'div',
        Object.assign({ style: pageStyle }, props),
        !mountOnRender ? children : show ? children : null
      );
    }
  }]);

  return OverlayPage;
}(React.Component);

OverlayPage.displayName = 'OverlayPage';

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.getStyle = function () {
    var _props2 = _this3.props,
        isOpen = _props2.isOpen,
        children = _props2.children,
        mountOnRender = _props2.mountOnRender,
        defaultStyle = _props2.defaultStyle,
        duration = _props2.duration,
        style = _props2.style,
        zIndex = _props2.zIndex,
        direction = _props2.direction,
        props = _objectWithoutProperties(_props2, ['isOpen', 'children', 'mountOnRender', 'defaultStyle', 'duration', 'style', 'zIndex', 'direction']);

    var show = _this3.state.show;

    var pageStyle = Object.assign({}, style, _this3.defaultStyle, {
      zIndex: zIndex
    });

    if (!isOpen) {
      pageStyle.transform = _this3.directions[direction];
    }
    if (show) {
      pageStyle.transitionDuration = duration;
    }

    return pageStyle;
  };
};

OverlayPage.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  mountOnRender: PropTypes.bool,
  duration: PropTypes.string,
  zIndex: PropTypes.number,
  direction: PropTypes.oneOf(['bottom', 'top', 'right', 'left']),
  style: PropTypes.object
};

OverlayPage.defaultProps = {
  mountOnRender: true,
  duration: '0.3s',
  zIndex: 100,
  direction: 'bottom',
  style: {}
};

export default OverlayPage;