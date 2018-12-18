import React, { Component } from 'react'
import PrivateMainLayout from '../../components/PrivateMainLayout'

class DashboardPage extends Component {
  showSettings(event) {
    event.preventDefault()
  }
  closeNav = () => {
    document.getElementById('mySidenav').style.width = '0'
    document.getElementById('xxx').style.marginLeft = '0'
    document.getElementById('xxx2').style.visibility = 'visible'
  }
  openNav = () => {
    document.getElementById('mySidenav').style.width = '12rem'
    document.getElementById('xxx').style.marginLeft = '12rem'
    document.getElementById('xxx2').style.visibility = 'hidden'
  }
  render() {
    return (
      <PrivateMainLayout>
        <h1>Dashboard</h1>
      </PrivateMainLayout>
    )
  }
}

export default DashboardPage
