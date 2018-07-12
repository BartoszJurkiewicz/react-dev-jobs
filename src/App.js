import React from 'react';
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
  constructor() {
    super()
    this.getJobs = this.getJobs.bind(this)
    this.pageUp = this.pageUp.bind(this)
    this.state = {
      loader: true,
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

  render() {
    return (
      <div className="App">
      {
        this.state.loader &&
          <div className="App-loader-container">
            <CircularProgress size={50} />
          </div>
      }
        <Route path="/" render={props => (<Home onPageUp={this.pageUp} />)} />
        <Route path="/offer/:id" component={JobDetails} />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App))
