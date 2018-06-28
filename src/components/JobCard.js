import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class JobCard extends React.Component {
  render() {
    const title = this.props.jobData.title
    const company = this.props.jobData.company
    return (
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <p className="title">{title}</p>
            <p className="company">{company}</p>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

export default JobCard