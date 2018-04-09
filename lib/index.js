import React from 'react'
import PropTypes from 'prop-types'

class OverlayPage extends React.Component {
  static displayName = 'OverlayPage'

  constructor (props) {
    super(props)
    this.state = {
      show: this.props.isOpen || false,
    }
    this.defaultStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      overscrollBehaviorY: 'contain',
      transitionProperty: 'transform',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }
    this.directions = {
      bottom: 'translateY(100%)',
      top: 'translateY(-100%)',
      left: 'translateX(-100%)',
      right: 'translateX(100%)',
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.isOpen && !nextProps.isOpen) {
      setTimeout(() => {
        if(this.props.isOpen){
          return false;
        }
        this.setState({
          show: false,
        })
      }, this.props.delay || 500)
    }
    else if (!this.props.isOpen && nextProps.isOpen) {
      if(!this.props.isOpen){
        return false;
      }
      this.setState({
        show: true,
      })
    }
  }

  getStyle = () => {
    let {isOpen, children, mountOnRender, defaultStyle, duration, style, zIndex, direction, ...props} = this.props
    let {show} = this.state
    let pageStyle = {
      ...style,
      ...this.defaultStyle,
      zIndex,
    }

    if (!isOpen) {
      pageStyle.transform = this.directions[direction]
    }
    if (show) {
      pageStyle.transitionDuration = duration
    }

    return pageStyle
  }

  render () {
    let {isOpen, children, mountOnRender, style, duration, zIndex, direction, ...props} = this.props
    let {show} = this.state

    const pageStyle = this.getStyle()

    return (
      <div style={pageStyle} {...props}>
        {!mountOnRender ? children : show ? children : null}
      </div>
    )
  }
}

OverlayPage.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  mountOnRender: PropTypes.bool,
  duration: PropTypes.string,
  zIndex: PropTypes.number,
  direction: PropTypes.oneOf(['bottom', 'top', 'right', 'left']),
  style: PropTypes.object
}

OverlayPage.defaultProps = {
  mountOnRender: true,
  duration: '0.3s',
  zIndex: 100,
  direction: 'bottom',
  style: {}
}

export default OverlayPage
