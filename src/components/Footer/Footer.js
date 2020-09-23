import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Fade from '@material-ui/core/Fade'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  footer: {
    background: '#1a1a1a',
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    color: '#3097a5',
    textDecoration: 'none',
  },
  menuPaper: {
    backgroundColor: '#1a1a1a'
  }
}))

const Footer = () => {

  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar className={classes.footer}>
      <Toolbar>
        <Typography variant="overline">
          &copy; Matthew Javier 2020
        </Typography>
        <div className={classes.grow} />
        <IconButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} edge="end" color="inherit">
          <MoreIcon />
        </IconButton> 
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          classes={{ paper: classes.menuPaper }}
        >
          <MenuItem onClick={handleClose} >
            <a
              className={classes.link} 
              href="https://linkedin.com/in/mattjavier7" target="_blank"
              rel="nopener noreferrer">
              <LinkedInIcon />
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a
              className={classes.link} 
              href="https://github.com/mattjavier" 
              target="_blank"
              rel="nopener noreferrer">
              <GitHubIcon />
            </a>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Footer