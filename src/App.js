import React, { Component } from 'react'
import './App.css'
import Routing from './routes'
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
        <Routing />
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
