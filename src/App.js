import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setJobs } from './actions'
import CircularProgress from '@material-ui/core/CircularProgress';
import Home from './views/Home'
import JobDetails from './views/JobDetails'
import './App.css';

const mapStateToProps = state => ({
  jobs: state.jobs
})
class App extends React.Component {
  constructor() {
    super()
    this.getJobs = this.getJobs.bind(this)
    this.state = {
      page: 0,
      location: '',
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
        this.props.dispatch(setJobs(data))
      })
    } catch(err) {
      console.log(err)
    }
  }

  logUp () {
    console.log('pageUp')
  }

  render() {
    return (
      <div className="App">
      {this.props.jobs.length < 1 &&
        <CircularProgress size={50} />}
        <Route exact path="/" component={Home} />
        <Route path="/offer/:id" component={JobDetails} />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App))
