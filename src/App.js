import React, { Component } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import Routing from './routes'
import AppFooter from './components/AppFooter'
import { connect } from 'react-redux'
import { VerifyAuth } from './actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.VerifyAuth()
  }
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

const mapStateToProps = ({ auth }) => {
  return { auth }
}

const mapDispatchToProps = {
  VerifyAuth
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
