import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class JobCard extends React.Component {
  render() {
    return (
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Typography variant="headline" component="h2">
              {this.props.jobData.title} @ {this.props.jobData.company}
            </Typography>
            <Typography color="textSecondary" component="p">
              {this.props.jobData.location}
            </Typography>
            <Link to={`/offer/${this.props.jobData.id}`}>
              <Button variant="outlined">See more</Button>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

JobCard.propTypes = {
  jobData: PropTypes.shape({
    company: PropTypes.string.isRequired,
    company_logo: PropTypes.string,
    company_url: PropTypes.string,
    created_at: PropTypes.string,
    description: PropTypes.string,
    how_to_apply: PropTypes.string,
    id: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    url: PropTypes.string.isRequired
  })
}

JobCard.defaultProps = {
  jobData: {
    company_logo: '',
    company_url: '',
    created_at: '',
    description: 'Sadly the job description was not provided :(',
    how_to_apply: 'Sadly the "how to apply" section was not provided :(',
    type: 'Sadly the job type was not provided :(',
  }
}

export default JobCard