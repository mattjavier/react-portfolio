import React from 'react'

import { makeStyles } from '@material-ui/core'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'

const useStyles = makeStyles((theme) => ({
  image: {
    height: 300,
    width: 300,
  },
  card: {
    textAlign: 'center',
  },
  buttons: {
    color: '#3097a5',
    backgroundColor: '#1a1a1a',
    '&:hover': {
      color: '#f55457'
    },
  },
  cardAction: {
    backgroundColor: '#1a1a1a'
  }
}))

const Project = props => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.image}
        image={props.project.imageURL}
        title={props.project.name}
      />
      <CardActions className={classes.cardAction}>
        <Button 
          size="small" 
          className={classes.buttons}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Project