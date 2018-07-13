import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class FilterForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.state = {
      search: '',
      location: '',
      full_time: ''
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
        <TextField label="Search..." onChange={this.handleTextChange('search')} />
        <TextField label="Location..." onChange={this.handleTextChange('location')} />
        <Select
        value={this.state.full_time}
        onChange={this.handleTextChange('full_time')}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value={1}>Full time</MenuItem>
          <MenuItem value={0}>Part time</MenuItem>
        </Select>
      </form>
    )
  }
}

FilterForm.propTypes = {
  onFilterChange: PropTypes.func.isRequired
}

export default FilterForm