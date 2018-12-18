import React, { Component } from 'react'

class DashboardPage extends Component {
  render() {
    return (
      <div class="container pt-5">
        <nav class="nav-justified">
          <div class="nav nav-tabs text-success" id="nav-tab" role="tablist">
            <a
              class="nav-item nav-link active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Home
            </a>
            <a
              class="nav-item nav-link"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Profile
            </a>
            <a
              class="nav-item nav-link"
              id="nav-contact-tab"
              data-toggle="tab"
              href="#nav-contact"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Contact
            </a>
            <a
              class="nav-item nav-link"
              id="nav-contact2-tab"
              data-toggle="tab"
              href="#nav-contact2"
              role="tab"
              aria-controls="nav-contact2"
              aria-selected="false"
            >
              Contact2
            </a>
            
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            ...1
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact2"
            role="tabpanel"
            aria-labelledby="nav-contact2-tab"
          >
            ...2
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardPage
