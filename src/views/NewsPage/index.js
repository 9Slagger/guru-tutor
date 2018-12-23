import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'

class NewsPage extends Component {
  render() {
    return (
      <MainLayout>
        <div className="mt-5 container">
          <h1 className="mb-3">ข่าวสาร</h1>
          <div class="card mb-3">
            <div className="crop">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1528892677828-8862216f3665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt="Card image cap"
              />
            </div>

            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card mb-3">
            <div className="crop">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1482376292551-03dfcb8c0c74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
                alt="Card image cap"
              />
            </div>

            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }
}

export default NewsPage
