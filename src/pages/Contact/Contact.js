import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Form from '../../components/Form'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50
  },
  title: {
    letterSpacing: 4
  }
}))

const Contact = () => {
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
        algin="center"
        className={classes.title}
      >
        CONTACT
      </Typography>
      <Form />
    </Grid>
  )
}

export default Contact