import React from 'react';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class JobCard extends React.Component {
  render() {
    const title = this.props.jobData.title
    const company = this.props.jobData.company
    const location = this.props.jobData.location
    return (
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="headline" component="h2">
              {title} @ {company}
            </Typography>
            <Typography color="textSecondary" component="p">
              {location}
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

export default JobCard