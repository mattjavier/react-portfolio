import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  contact: {
    padding: 10,
    color: '#3097a5',
    letterSpacing: 2,
    textAlign: 'center'
  },
  margin: {
    margin: theme.spacing(1),
    background: '#3097a5',
    color: '#ffffff',
    textDecoration: 'none',
    '&:hover': {
      background: '#f55457'
    }
  },
  socialIcon: {
    color: '#fffff',
    margin: theme.spacing(1),
  },
  grow: {
    flexGrow: 1
  }
}))

const Form = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
      className={classes.root}
    >
      <div className={classes.contact}>
        <p className={classes.contact}>
          Connect with me on LinkedIn and GitHub below.
        </p>
      </div>
      <div>
        <Fab 
          variant="round"
          href="http://linkedin.com/in/mattjavier7"
          size="large" 
          target="_blank"
          rel="nopener noreferrer"
          className={classes.margin}
        >
          <LinkedInIcon className={classes.socialIcon} />
        </Fab>
        <Fab 
          variant="round"
          href="http://github.com/mattjavier" 
          target="_blank"
          rel="nopener noreferrer"
          size="large" 
          className={classes.margin}
        >
          <GitHubIcon className={classes.socialIcon} />
        </Fab>
      </div>
      <p className={classes.contact}>matthewrjavier@gmail.com</p>
      <p className={classes.contact}>(281) 543 - 8582</p>
    </Grid>
  )
}

export default Form
