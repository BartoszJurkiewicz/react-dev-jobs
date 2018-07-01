import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setJobs } from './actions'
import Loader from './components/Loader.js'
import Home from './views/Home'
import JobDetails from './views/JobDetails'
import './App.css';

const mapStateToProps = state => ({
  jobs: state.jobs
})
class App extends Component {
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

  getJobs () {
    return fetch(`http://jobs.github.com/positions.json?page=${this.state.page}`)
    .then(res => {
      res.json()
      .then(data => {
        console.log(data)
        this.props.dispatch(setJobs(data))
      })
    })
  }

  render() {
    return (
      <div className="App">
      {this.props.jobs.length < 1 &&
        <Loader />}
        <Route exact path="/" component={Home} />
        <Route path="/offer/:id" component={JobDetails} />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App))
