import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

class FilterForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.state = {
      search: 'this is text'
    }
  }

  handleTextChange = name => e => {
    this.setState({
      [name]: e.target.value
    }, () => {
      this.props.onFilterChange(name, this.state[name])
    })
  }
  
  render () {
    return (
      <form>
        <TextField label="Search" value={this.props.text} onChange={this.handleTextChange('search')} />
      </form>
    )
  }
}

FilterForm.propTypes = {
  onFilterChange: PropTypes.func.isRequired
}

export default FilterForm