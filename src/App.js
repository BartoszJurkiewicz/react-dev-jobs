import React from 'react';
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { setJobs, addJobs } from './actions'
import CircularProgress from '@material-ui/core/CircularProgress';
import Home from './containers/Home'
import JobDetails from './containers/JobDetails'
import './App.css';
class App extends React.Component {
  static defaultProps = {
    jobs: [],
  }
  static propTypes = {
    jobs: PropTypes.array
  }
  constructor() {
    super()
    this.getJobs = this.getJobs.bind(this)
    this.pageUp = this.pageUp.bind(this)
    this.onFilterChange = this.onFilterChange.bind(this)
    this.timeout = null
    this.state = {
      loader: true,
      page: 0,
      location: '',
      filters: {
        search: ''
      },
      joinedFilters: () => {
        return Object.keys(this.state.filters).map(key => {
          return `${key}=${this.state.filters[key]}`
        }).join('&')
      },
      query: () => `?page=${this.state.page}&${this.state.joinedFilters()}`
    }
  }

  componentDidMount() {
    this.getJobs('set')
  }

  async getJobs (method) {
    console.log(`${method}Jobs`)
    try {
      const res = await fetch(`http://jobs.github.com/positions.json${this.state.query()}`)
      res.json()
      .then(data => {
        switch(method) {
          case 'set':
            this.props.dispatch(setJobs(data))
            break
          case 'add':
            this.props.dispatch(addJobs(data))
            break
          default:
            break
        }
        this.setState({loader: false})
      })
    } catch(err) {
      console.log(err)
    }
  }

  pageUp () {
    this.setState({
      loader: true,
      page: this.state.page + 1,
      // query: 
    }, () => {
      this.getJobs('add')
    })
  }

  
  onFilterChange (name, value) {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.setState({
        page: 0,
        loader: true,
        filters: Object.assign({}, this.state.filters, {[name]: value})
      }, () => {
        this.getJobs('set')
      })
    }, 300)
  }

  render() {
    return (
      <div className="App">
      {
        this.state.loader &&
          <div className="App-loader-container">
            <CircularProgress size={50} />
          </div>
      }
        <Route exact path="/" render={props => (<Home onPageUp={this.pageUp} onFilterChange={this.onFilterChange} />)} />
        <Route path="/offer/:id" component={JobDetails} />
      </div>
    );
  }
}

export default App
