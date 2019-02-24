import React, { Component } from 'react'
import AppHeader from '../AppHeader'
import AppFooter from '../AppFooter'

class MainLayout extends Component {
  render() {
    const { closeFooter } = this.props
    if (closeFooter) {
      return (
        <div>
          <AppHeader />
          <div className="header-nav">{this.props.children}</div>
        </div>
      )
    } else {
      return (
        <div>
          <AppHeader />
          <div className="header-nav">{this.props.children}</div>
          <AppFooter />
        </div>
      )
    }
  }
}

export default MainLayout
