import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'

import Who from './components/Who'
import What from './components/What'
import Where from './components/Where'

const App = () => {


  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/who" component={Who} />
        <Route path="/what" component={What} />
        <Route path="/where" component={Where} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
