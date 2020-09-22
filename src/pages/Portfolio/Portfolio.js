import React from 'react'

import { makeStyles } from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'

import coviewImg from '../../images/coview/coview-home.png'
import sensifyImg from '../../images/sensify/sensify1.png'
import codeQuizImg from '../../images/code-quiz/quiz-start.png'
import tvtImg from '../../images/tvt/tvt.png'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
    flexGrow: 1,
    paddingBottom: 100
  },
  title: {
    letterSpacing: 4
  },
  projects: {
    paddingTop: 20,
    paddingBottom: 20
  },
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

const Portfolio = () => {
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
        PROJECTS
      </Typography>
      <Grid
        container
        className={classes.projects}
        direction="row"
        justify="space-around"
        alignItems="center"
        spacing={3}
      >
        <Grid 
          item
          container
          direction="row"
          justify="center"
          xs={12} 
          sm={6} 
        >
          <Card className={classes.card}>
            <CardMedia
              className={classes.image}
              image={coviewImg}
              title="Coview-19"
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
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center" 
          xs={12} 
          sm={6}
          >
          <Card className={classes.card}>
            <CardMedia
              className={classes.image}
              image={sensifyImg}
              title="Sensify"
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
        </Grid>
      </Grid>
      
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        spacing={3}
        >
        <Grid
          item
          container
          direction="row"
          justify="center" 
          xs={12} 
          sm={6}
          >
          <Card className={classes.card}>
            <CardMedia
              className={classes.image}
              image={codeQuizImg}
              title="Code Quiz"
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
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          xs={12} 
          sm={6}
          >
          <Card className={classes.card}>
            <CardMedia
              className={classes.image}
              image={tvtImg}
              title="The Vintner's Tavern"
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
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Portfolio