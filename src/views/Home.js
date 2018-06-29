import React from 'react'
import { connect } from 'react-redux'
import JobCard from '../components/JobCard.js'
import Grid from '@material-ui/core/Grid';

const mapStateToProps = state => ({
  jobs: state.jobs.jobs
})
class Home extends React.Component {
  componentDidMount() {
    console.log('Home', this.props)
  }
  render() {
    return (
      <main className="jobs-container">
        <Grid container className="jobs-list" justify="center">
          <Grid item xs={4}>
            <Grid container spacing={24}>
              {this.props.jobs.map(job =>
                <JobCard key={job.id} jobData={job} />
              )}
            </Grid>
          </Grid>
        </Grid>
      </main>
    )
  }
}

export default connect(mapStateToProps)(Home)