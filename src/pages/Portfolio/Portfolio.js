import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Button, makeStyles } from '@material-ui/core'

import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50
  },
  title: {
    letterSpacing: 4
  }
}))

const Portfolio = () => {
  const classes = useStyles()

  return (
    <Grid 
      container
      direction="column"
      justify="space-around"
      alignItems="center"
      className={classes.root}
    >
      <Typography
        variant="h2"
        className={classes.title}
      >
        Projects
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        >
        <Grid item xs={12} sm={6}>
          <Button>
            <CardMedia
              image="../../images/coview/coview-home.png" 
            />
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>

        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        >
        <Grid item xs={12} sm={6}>
          
        </Grid>
        <Grid item xs={12} sm={6}>

        </Grid>
      </Grid>
    </Grid>
  )
}

export default Portfolio