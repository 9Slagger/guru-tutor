import React, { Component } from 'react'
import AppHeader from '../AppHeader'
import AppFooter from '../AppFooter'

class MainLayout extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        {this.props.children}
        <AppFooter />
      </div>
    )
  }
}

export default MainLayout
