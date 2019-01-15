import PropTypes from 'prop-types'
import React from 'react'

export class Filter extends React.Component {
  constructor (props) {
    super()

    this.state = {
      filterText: ''
    }
  }

  _filter = () => {
    const filterText = this.state.filterText.trim()
    const filteredData = this.props.data.filter(value =>
      value.toUpperCase().indexOf(filterText.toUpperCase()) !== -1
    )

    this.props.onFilter(filteredData)
  }

  _onFilterChange = filterText => {
    this.setState({ filterText }, () => {
      this._filter()
    })
  }

  _onFilterKeyDown (keyCode) {
    const escapeKeyCode = 27

    if (keyCode === escapeKeyCode) {
      this._onFilterChange('')
    }
  }

  render () {
    return (
      <div>
        <input
          onChange={event => { event.cancelable || this._onFilterChange(event.target.value) }}
          onKeyDown={event => {
            this._onFilterKeyDown(event.keyCode)

            if (this.state.filterText !== '') {
              event.stopPropagation()
            }
          }}
          value={this.state.filterText}
          placeholder='Filter...'
        />
      </div>
    )
  }
}

Filter.propTypes = {
  data: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired
}

export default Filter
