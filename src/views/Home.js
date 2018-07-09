import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import JobCard from '../components/JobCard.js'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const mapStateToProps = state => ({
  jobs: state.jobs
})
class Home extends React.Component {
  static defaultProps = {
    jobs: []
  }
  static propTypes = {
    jobs: PropTypes.array
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <main className="jobs-container">
        <Grid container className="jobs-list" justify="center">
          <Grid item xs={6}>
            <Grid container spacing={24}>
              {/* {this.props.jobs.map(job =>
                <JobCard key={job.id} jobData={job} />
              )} */}
            </Grid>
          </Grid>
          {/* {
            this.props.jobs.length > 1 &&
            <Grid item xs={12}>
              <Button onClick={this.props.onPageUp}>Load more</Button>
            </Grid>
          } */}
        </Grid>
      </main>
    )
  }
}

export default connect(mapStateToProps)(Home)