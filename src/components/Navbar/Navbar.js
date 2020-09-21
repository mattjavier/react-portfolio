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
  },
  appBar: {
    background: '#1a1a1a',
  },
  list: {
    background: '#1a1a1a'
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
          >
            <List>
              <ListItem>
                <Link to="/" className={classes.link}>
                  <Button className={classes.linkText}>Home</Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/portfolio" className={classes.link}>
                  <Button className={classes.linkText}>Portfolio</Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/contact" className={classes.link}>
                  <Button className={classes.linkText}>Contact</Button>
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