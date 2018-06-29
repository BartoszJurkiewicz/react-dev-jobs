import React from 'react'
import { connect } from 'react-redux'
import { setActiveJob } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  jobData: state.jobs.find(job => { return job.id === ownProps.match.params.id })
})

class JobDetails extends React.Component {
  componentDidMount() {
    console.log('Details', this.props)
  }
  componentDidUpdate() {
    console.log('Details', this.props)
  }
  render () {
    return (
      <section className="job-details">
        details for job
      </section>
    )
  }
}

export default connect(mapStateToProps)(JobDetails)