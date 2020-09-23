import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }, 
  link: {
    textDecoration: 'none'
  },
  linkText: {
    color: '#3097a5',
    '&:hover': {
      color: '#f55457'
    },
  },
  typography: {
    letterSpacing: 3,
    fontWeight: 200
  },
  appBar: {
    background: '#1a1a1a',
  },
  list: {
    width: 250
  },
  drawerPaper: {
    backgroundColor: '#1a1a1a'
  }
}))

const Navbar = () => {
  const classes = useStyles()
  
  const [openState, setOpen] = useState({
    open: false
  })

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setOpen({ ...openState, open })
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={openState.open}
            onClose={toggleDrawer(false)}
            classes={{ paper: classes.drawerPaper }}
          >
            <List className={classes.list}>
              <ListItem>
                <Link to="/react-portfolio/" className={classes.link}>
                  <Button 
                    className={classes.linkText}
                    onClick={toggleDrawer(false)}
                  >
                    <Typography 
                      variant="h6"
                      className={classes.typography}
                    >
                      Home
                    </Typography>
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/react-portfolio/portfolio" className={classes.link}>
                  <Button 
                    className={classes.linkText}
                    onClick={toggleDrawer(false)}
                  >
                    <Typography 
                      variant="h6"
                      className={classes.typography}
                    >
                      Portfolio
                    </Typography>
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/react-portfolio/contact" className={classes.link}>
                  <Button 
                    className={classes.linkText}
                    onClick={toggleDrawer(false)}
                  >
                    <Typography 
                      variant="h6"
                      className={classes.typography}
                    >
                      Contact
                    </Typography>
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar