import React from 'react';
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addJobs } from './actions'
import CircularProgress from '@material-ui/core/CircularProgress';
import Home from './views/Home'
import JobDetails from './views/JobDetails'
import './App.css';

const mapStateToProps = state => ({
  jobs: state.jobs
})
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
    this.state = {
      loader: true,
      page: 0,
      location: '',
      filters: {
        text: ''
      }
    }
  }

  componentDidMount() {
    this.getJobs()
  }

  async getJobs () {
    try {
      const res = await fetch(`http://jobs.github.com/positions.json?page=${this.state.page}`)
      res.json()
      .then(data => {
        this.props.dispatch(addJobs(data))
        this.setState({loader: false})
      })
    } catch(err) {
      console.log(err)
    }
  }

  pageUp () {
    this.setState({loader: true, page: this.state.page + 1}, () => {
      this.getJobs()
    })
  }

  onFilterChange (name, value) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {[name]: value})
    })
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
        <Route path="/" render={props => (<Home onPageUp={this.pageUp} onFilterChange={this.onFilterChange} />)} />
        <Route path="/offer/:id" component={JobDetails} />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App))
