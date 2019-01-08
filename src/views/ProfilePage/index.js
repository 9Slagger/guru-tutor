import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'

class ProfilePage extends Component {
  render() {
    return (
      <MainLayout>
        <div className="m-5 p-5">
          <div class="row">
            <div class="col-sm">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
                alt="..."
                class="img-thumbnail"
              />
            </div>
            <div class="col-sm">One of three columns</div>
          </div>
        </div>
      </MainLayout>
    )
  }
}

export default ProfilePage
