import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles' 

import Navbar from './components/Navbar'
import Footer from './components/Footer'

const dark = createMuiTheme({
  palette: {
    background: {
      default: '#202020'
    },
    text: {
      primary: '#ffffff'
    },
  }
})

const App = () => {
  return (
    <Router>
      <MuiThemeProvider theme={dark}>
        <div>
          <CssBaseline />
          <Navbar />
          <Switch>
            <Route exact path="/react-portfolio" component={About} />
            <Route path="/react-portfolio/portfolio" component={Portfolio} />
            <Route path="/react-portfolio/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </MuiThemeProvider>
    </Router>
  )
}

export default App