import React, { Component } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import Routing from './routes'
import AppFooter from './components/AppFooter'

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Routing />
        <AppFooter />
      </div>
    )
  }
}

export default App
