import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'

class Contact extends Component {
  render() {
    return (
      <MainLayout>
        <div className="text-center m-5 p-5">
          <h1>ติดต่อเรา</h1>
          <p>
            Page:{' '}
            <a
              href="https://www.facebook.com/GURU-TUTOR-126127154894616"
              target="_blank"
            >
              Fackbook
            </a>
          </p>
          <p>Phone: 0811223344</p>
        </div>
      </MainLayout>
    )
  }
}

export default Contact
