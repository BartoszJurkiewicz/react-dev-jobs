import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Loader from './components/Loader.js'
import Home from './views/Home.js'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.getJobs = this.getJobs.bind(this)
    this.state = {
      page: 0,
      location: '',
      jobs: []
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
        this.setState({jobs: data})
      })
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.state.jobs.length < 1 &&
            <Loader />}
          <Route exact path="/" component={Home} jobs={this.state.jobs} />
        </div>
      </Router>
    );
  }
}

export default App;
