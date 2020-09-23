import React, { useState } from 'react'

import { CardContent, makeStyles } from '@material-ui/core'

import clsx from 'clsx'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'

const useStyles = makeStyles((theme) => ({
  image: {
    height: 300,
    width: 300,
  },
  card: {
    textAlign: 'center',
    maxWidth: 300,
  },
  link: {
    textDecoration: 'none',
    color: '#f55457'
  },
  cardAction: {
    backgroundColor: '#1a1a1a'
  },
  expand: {
    color: '#3097a5',
    backgroundColor: '#1a1a1a',
    '&:hover': {
      color: '#f55457'
    },
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  content: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff'
  }
}))

const Project = props => {
  const classes = useStyles()

  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.image}
        image={props.project.imageURL}
        title={props.project.name}
      />
      <CardActions className={classes.cardAction} disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.content}>
          <Typography variant="h6">{props.project.name}</Typography>
          <Typography paragraph>
            {props.project.text}
          </Typography>
          <a 
            href={props.project.deployed}
            target="_blank"
            rel="nopener noreferrer"
            className={classes.link}
          >
            <Typography paragraph>
              View the deployed application
            </Typography>
          </a>
          <hr />
          {
            props.project.github ? 
            <a 
              href={props.project.github}
              target="_blank"
              rel="nopener noreferrer"
              className={classes.link}
            >
              <Typography paragraph>GitHub Repository</Typography>
            </a>
            : null
          }
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default Project