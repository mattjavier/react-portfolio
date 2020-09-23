import React from 'react'

import { makeStyles, withStyles } from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'

import meImg from '../../images/IMG_1803.JPG'

import AboutTabs from '../../components/AboutTabs'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
    flexGrow: 1,
    paddingBottom: 100
  },
  title: {
    letterSpacing: 4,
    textAlign: 'center',
    fontWeight: '200'
  },
  subtitle: {
    fontWeight: '400',
    color: '#f55457'
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  badge: {
    margin: 50
  }
}))

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#3097a5',
    color: '#3097a5',
    width: 40,
    height: 40,
    borderRadius: '50%',
    boxShadow: `0 0 0 3px ${'#202020'}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge)

const About = () => {
  const classes = useStyles()

  return (
    <Grid 
      container
      direction="column"
      justify="space-between"
      alignItems="center"
      className={classes.root}
      spacing={5}
    >
      <Typography
        variant="h2"
        className={classes.title}
      >
        Matthew
        <br />
        Javier,
        <br />
        <span className={classes.subtitle}>developer.</span>
      </Typography>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
        className={classes.badge}
      >
        <Avatar 
          alt="Matthew Javier" 
          src={meImg}
          className={classes.large} 
        />
      </StyledBadge>
      <AboutTabs />
    </Grid>
  )
}

export default About