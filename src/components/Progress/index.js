import React, { Component } from 'react'
import MainLayout from '../MainLayout'
import PrivateMainLayout from '../PrivateMainLayout'

export default class Progress extends Component {
  render() {
    const { Private } = this.props
    if (Private) {
      return (
        <PrivateMainLayout>
          <img
            className="image"
            src="https://i.imgur.com/SMSVU5R.png"
            alt=""
            width="120"
            height="120"
          />
        </PrivateMainLayout>
      )
    } else {
      return (
        <MainLayout closeFooter={true}>
          <img
            className="image"
            src="https://i.imgur.com/SMSVU5R.png"
            alt=""
            width="120"
            height="120"
          />
        </MainLayout>
      )
    }
  }
}
