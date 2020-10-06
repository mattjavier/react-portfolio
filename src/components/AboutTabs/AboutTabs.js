import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles({
  root: {
    padding: 10,
  },
  card: {
    width: '75%',
    backgroundColor: '#1a1a1a',
    color: '#757575',
    margin: 10
  },
  cardTitle: {
    fontSize: 20,
    letterSpacing: 2,
    color: '#f55457'
  },
  alternate: {
    color: '#f55457',
    textDecoration: 'none'
  },
  icons: {
    margin: 5,
    backgroundColor: '#3097a5',
  }
})

const AboutTabs = () => {
  const classes = useStyles()

  return (
    <Grid 
      container
      direction="column"
      justify="space-around"
      alignItems="center"
      className={classes.root}
    >
      <Card className={classes.card}>
        <CardContent>
          <Typography 
            className={classes.cardTitle} 
            gutterBottom
            variant="overline"
          >
            About Me
          </Typography>
          <Typography variant="body2">
            I am currently a student at the UCI Coding Boot Camp, learning to be a full-stack developer.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography 
            className={classes.cardTitle} 
            gutterBottom
            variant="overline"
          >
            Education
          </Typography>
          <Typography variant="body2">
            I attended the University of California at Irvine from 2015-2019, graduating with a B.S. in Computer Science.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography 
            className={classes.cardTitle} 
            gutterBottom
            variant="overline"
          >
            Technical Skills
          </Typography>
          <div>
            <Chip 
              size="small" 
              label="HTML"
              className={classes.icons}
            />
            <Chip 
              size="small" 
              label="Python"
              className={classes.icons}
            />
            <Chip 
              size="small" 
              label="JavaScript"
              className={classes.icons}
            />
            <Chip 
              size="small" 
              label="C++/C"
              className={classes.icons}
            />
            <Chip 
              size="small" 
              label="Java"
              className={classes.icons}
            />
            <Chip 
              size="small" 
              label="CSS"
              className={classes.icons}
            />
            <Chip 
              size="small" 
              label="MySQL"
              className={classes.icons}
            />
            <Chip 
              size="small" 
              label="Node.js"
              className={classes.icons}
            />
            <Chip 
              size="small" 
              label="React"
              className={classes.icons}
            />
          </div>
          <br />
          <Typography variant="body2">
            Click&nbsp;
            <span> 
              <a
                href="https://drive.google.com/file/d/1t5EBD31wOHBL8bLZCW9uPdM0iAqSTSOx/view?usp=sharing"
                target="_blank"
                rel="nopener noreferrer"
                className={classes.alternate}
              >
                here
              </a> 
            </span>
            &nbsp;to view my resume.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default AboutTabs