import React from 'react'
import JobCard from '../components/JobCard.js'
import Grid from '@material-ui/core/Grid';

class Home extends React.Component {
  render() {
    // const jobsList = this.props.jobs.map(job =>
    //   <JobCard key={job.id} jobData={job} />
    // )
    return (
      <main className="jobs-container">
        <Grid container className="jobs-list" justify="center">
          <Grid item xs={4}>
            <Grid container spacing={24}>
            </Grid>
          </Grid>
        </Grid>
      </main>
    )
  }
}

export default Home