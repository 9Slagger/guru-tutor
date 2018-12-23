import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'

class PromotionPage extends Component {
  render() {
    return (
      <MainLayout>
        <div className="mt-5 px-5 mx-5">
          <h1 className="mb-3">โปรโมชั่น</h1>
          <div className="card bg-dark text-white crop2 mb-2">
            <img
              className="card-img"
              src="https://images.unsplash.com/photo-1524059633949-c157729ae351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="img photo picture"
            />
            <div className="card-img-overlay text_left">
              <h1 className="card-title">Card title</h1>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
          <div className="card bg-dark text-white crop2 mb-2">
            <img
              className="card-img"
              src="https://images.unsplash.com/photo-1531303435785-3853ba035cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="img photo picture"
            />
            <div className="card-img-overlay text_left">
              <h1 className="card-title">Card title</h1>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }
}

export default PromotionPage
