import React from 'react'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'

const Project = props => {
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
}

export default Project