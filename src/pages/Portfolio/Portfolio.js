import React from 'react'

import { makeStyles } from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import plyrImg from '../../images/plyr2/plyr2.png'
import coviewImg from '../../images/coview/coview-home.png'
import sensifyImg from '../../images/sensify/sensify1.png'
import codeQuizImg from '../../images/code-quiz/quiz-start.png'
import tvtImg from '../../images/tvt/tvt.png'
import burgerImg from '../../images/burger/burger1.png'

import Project from '../../components/Project'

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
}))

const plyr2 = {
  imageURL: plyrImg,
  name: 'plyr 2',
  deployed: 'https://plyr-2.herokuapp.com/',
  github: 'https://github.com/mattjavier/plyr-2',
  test: 'Plyr2 is a social media platform made by gamers for gamers. Gaming has become one of the top means of social interaction, and this application will help gamers connect with each other based on their mutual interests in game titles and genres. Plyr2 allows for a user to personalize their profile with an avatar, highlight video, handles and usernames across all major consoles, favorite game titles, and preferred genres. Using our algorithm, the application then shows you matches to other users that share similar interests as yourself which will then give you the option to add those users as friends. Lastly, there is a global chat feature which can fix the everlasting issue of looking for gamers to play with at any given second. All users logged in will have the option to participate in the global chat which is used to post when a user is looking to either join a lobby or invite others who are available into their own.'
}

const coview = {
  imageURL: coviewImg,
  name: 'COVIEW-19',
  deployed: 'https://sleepy-forest-03534.herokuapp.com/',
  github: 'https://github.com/mattjavier/coview-19',
  text: 'COVIEW-19 is an application that allows users to review local businesses based on COVID-19 guidelines. Users can search through city, state, business type, or/ and business name. Reviewing a business includes rating the following: mask usage, social distancing, sanitization, overall rating and any comments specific to that business. Reviews will be connected to that business for all users to see.',
}

const sensify = {
  imageURL: sensifyImg,
  name: 'Sensify',
  deployed: 'https://daniellehillman.github.io/Sensify/',
  github: 'https://github.com/daniellehillman/Sensify',
  text: 'Sensify, a Spotify Web API application. Developed with JavaScript, jQuery, HTML, CSS, and Materialize.'
}

const codeQuiz = {
  imageURL: codeQuizImg,
  name: 'Code Quiz',
  deployed: 'https://mattjavier.github.io/code-quiz/',
  github: 'https://github.com/mattjavier/code-quiz',
  text: 'This a web browser app that tests a user on JavaScript concepts. It is multiple choice and has a time constraint. The user can then enter their initials to the leaderboard and view all high scores.'
}

const tvt = {
  imageURL: tvtImg,
  name: "The Vintner's Tavern",
  deployed: 'http://thevintnerstavern.com/',
  github: null,
  text: "The website for The Vintner's Tavern restaurant located in Chino, CA."
}

const burger = {
  imageURL: burgerImg,
  name: 'Eat-Da-Burger',
  deployed: 'https://mysterious-everglades-88130.herokuapp.com/',
  github: 'https://github.com/mattjavier/burger',
  text: 'Eat-Da-Burger, a database web application. Developed with JavaScript, HTML, CSS, Express, MySQL, and Handlebars.'
}

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
          <Project project={plyr2} />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center" 
          xs={12} 
          sm={6}
          >
          <Project project={coview} />
        </Grid>
      </Grid>
      
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
          <Project project={sensify} />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          xs={12} 
          sm={6}
          >
          <Project project={codeQuiz} />
        </Grid>
      </Grid>
      
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
          <Project project={tvt} />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          xs={12} 
          sm={6}
          >
          <Project project={burger} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Portfolio