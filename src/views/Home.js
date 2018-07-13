import React from 'react'
import PropTypes from 'prop-types'
import { setJobs, addJobs } from '../actions'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import JobCard from '../components/JobCard.js'
import FilterForm from '../components/FilterForm.js'
class Home extends React.Component {
  constructor() {
    super()
    this.getJobs = this.getJobs.bind(this)
    this.pageUp = this.pageUp.bind(this)
    this.onFilterChange = this.onFilterChange.bind(this)
    this.timeout = null
    this.state = {
      page: 0,
      location: '',
      filters: {},
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
        this.props.toggleLoader()
      })
    } catch(err) {
      console.log(err)
    }
  }

  pageUp () {
    this.props.toggleLoader()
    this.setState({ page: this.state.page + 1 }, () => {
      this.getJobs('add')
    })
  }

  
  onFilterChange (name, value) {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.props.toggleLoader()
      this.setState({
        page: 0,
        filters: Object.assign({}, this.state.filters, {[name]: value})
      }, () => {
        this.getJobs('set')
      })
    }, 300)
  }

  render() {
    return (
      <main className="jobs-container">
        <FilterForm onFilterChange={this.onFilterChange}/>
        <Grid container className="jobs-list" justify="center">
          <Grid item xs={10} lg={6}>
            <Grid container spacing={24}>
              {
                this.props.jobs.map(job =>
                  <JobCard key={job.id} jobData={job} />
                )
              }
            </Grid>
          </Grid>
          {
            this.props.jobs.length > 1 &&
              <Grid item xs={12}>
                <Button onClick={this.pageUp}>Load more</Button>
              </Grid>
          }
        </Grid>
      </main>
    )
  }
}

Home.propTypes = {
  jobs: PropTypes.array,
  toggleLoader: PropTypes.func.isRequired
}

Home.defaultProps = {
  jobs: []
}

export default Home