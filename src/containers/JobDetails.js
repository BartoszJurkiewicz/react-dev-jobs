import { connect } from 'react-redux'
import JobDetails from '../views/JobDetails'

const mapStateToProps = (state, ownProps) => ({
  jobData: state.jobs.find(job => { return job.id === ownProps.match.params.id })
})

export default connect(mapStateToProps)(JobDetails)