import React from 'react';
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { setJobs, addJobs } from './actions'
import CircularProgress from '@material-ui/core/CircularProgress';
import Home from './containers/Home'
import JobDetails from './containers/JobDetails'
import './App.css';
class App extends React.Component {
  constructor() {
    super()
    this.toggleLoader = this.toggleLoader.bind(this)
    this.state = {
      loader: true
    }
  }

  toggleLoader() {
    this.setState({
      loader: !this.state.loader
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
        <Route exact path="/" render={props => (<Home toggleLoader={this.toggleLoader} />)} />
        <Route path="/offer/:id" component={JobDetails} />
      </div>
    );
  }
}

App.propTypes = {
  jobs: PropTypes.array
}

App.defaultProps = {
  jobs: [],
}

export default App
