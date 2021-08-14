import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => {


  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
