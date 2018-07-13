import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import JobCard from '../components/JobCard.js'
import FilterForm from '../components/FilterForm.js'
class Home extends React.Component {
  render() {
    return (
      <main className="jobs-container">
        <FilterForm onFilterChange={this.props.onFilterChange}/>
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
                <Button onClick={this.props.onPageUp}>Load more</Button>
              </Grid>
          }
        </Grid>
      </main>
    )
  }
}

Home.propTypes = {
  jobs: PropTypes.array,
  onFilterChange: PropTypes.func.isRequired
}

Home.defaultProps = {
  jobs: []
}

export default Home