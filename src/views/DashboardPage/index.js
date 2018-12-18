import React, { Component } from 'react'

class DashboardPage extends Component {
  showSettings(event) {
    event.preventDefault()
  }
  closeNav = () => {
    console.log('s')
    document.getElementById('mySidenav').style.width = '0'
    document.getElementById('xxx').style.marginLeft = '0'
    document.getElementById('xxx2').style.visibility = 'visible'
  }
  openNav = () => {
    console.log('s')
    document.getElementById('mySidenav').style.width = '12rem'
    document.getElementById('xxx').style.marginLeft = '12rem'
    document.getElementById('xxx2').style.visibility = 'hidden'
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
          <a className="navbar-brand" href="#">
            Admin Manage
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto" />
            <span className="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
        </nav>
        

        <div>
          <nav id="mySidenav" className=" bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <span>จัดการสมาชิก</span>
                  <a
                    className="d-flex align-items-center text-muted"
                    href="#"
                    onClick={this.closeNav}
                  >
                    <i className="fas fa-times-circle" />
                  </a>
                </h6>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <span data-feather="home" />
                    Dashboard <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={this.closeNav}>
                    <span data-feather="file" />
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="shopping-cart" />
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="users" />
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="bar-chart-2" />
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="layers" />
                    Integrations
                  </a>
                </li>
              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text" />
                    Current month
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text" />
                    Last quarter
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text" />
                    Social engagement
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text" />
                    Year-end sale
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main id="xxx" role="main" className="main pt-3 px-4">
            <button id="xxx2" className="btn b-s" onClick={this.openNav}>
              Button
            </button>
          </main>
        </div>
      </React.Fragment>
    )
  }
}

export default DashboardPage
