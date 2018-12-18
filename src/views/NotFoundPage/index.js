import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'

class NotFoundPage extends Component {
  render() {
    return (
      <MainLayout>
        <div className="container text-center mt-5">
          <h1>ไม่พบหน้านี้</h1>
          <h4>Not Found 404</h4>
        </div>
      </MainLayout>
    )
  }
}

export default NotFoundPage
