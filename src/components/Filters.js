import React from 'react'

class Filters extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: this.props.filters.type
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    }, this.props.onChangeType(event.target.value))
  }

  handleClick (event) {
    this.props.onFindPetsClick()
  }

  render () {
    return (
      <div className='ui form'>
        <h3>Animal type</h3>
        <div className='field'>
          <select name='type' id='type' value={this.state.value} onChange={this.handleChange}>
            <option value='all'>All</option>
            <option value='cat'>Cats</option>
            <option value='dog'>Dogs</option>
            <option value='micropig'>Micropigs</option>
          </select>
        </div>

        <div className='field'>
          <button className='ui secondary button' onClick={this.handleClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
