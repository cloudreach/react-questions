import PropTypes from 'prop-types'
import React from 'react'

export class Accordion extends React.Component {
  constructor (props) {
    super()

    this.state = {
      open: props.open || false,
      hasBeenOpened: props.open || false
    }

    this.toggle = this.toggle.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
    if (props.open !== state.open) {
      return {
        open: props.open || false,
        hasBeenOpened: props.hasBeenOpened || false
      }
    }
    return null
  }

  toggle () {
    this.setState({
      open: !this.state.open,
      hasBeenOpened: true
    })

    if (this.props.onOpen) {
      this.props.onOpen()
    }
  }

  render () {
    const { style } = this.props

    const upperPanel = this.state.open ? style.upperPanelExpanded : style.upperPanelCollapsed
    const lowerPanel = this.state.open ? style.lowerPanelExpanded : style.lowerPanelCollapsed

    let content = this.props.content

    if (!this.state.hasBeenOpened) {
      content = null
    }

    return (
      <section>
        <button className={upperPanel} style={{borderColor: this.props.color}} onClick={this.toggle}>{this.props.title}</button>
        <div className={lowerPanel}>
          {content}
        </div>
      </section>
    )
  }
}

Accordion.propTypes = {
  style: PropTypes.shape({
    upperPanelCollapsed: PropTypes.string.isRequired,
    upperPanelExpanded: PropTypes.string.isRequired,
    lowerPanelCollapsed: PropTypes.string.isRequired,
    lowerPanelExpanded: PropTypes.string.isRequired
  }),
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  color: PropTypes.string.isRequired
}

export default Accordion
