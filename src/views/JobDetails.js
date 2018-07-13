import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
class JobDetails extends React.Component {
  static defaultProps = {
    jobData: {
      id: '',
      title: '',
      company: '',
      location: '',
      type: '',
      description: ''
    }
  }
  static propTypes = {
    jobData: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  }
  render () {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper>
            <section className="job-details">
              {this.props.jobData.hasOwnProperty('id') ?
              <div>
                <p>{this.props.jobData.id}</p>
                <p>{this.props.jobData.title}</p>
                <p>{this.props.jobData.company}</p>
                <p>{this.props.jobData.location}</p>
                <p>{this.props.jobData.type}</p>
                <p dangerouslySetInnerHTML={{__html: this.props.jobData.description}}></p>
              </div>
              : <p>Getting job data...</p>      
              }
            </section>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default JobDetails