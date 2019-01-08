import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowTurn } from 'react-burgers'
import { connect } from 'react-redux'
import { SignoutAuth } from '../../actions'

class PrivateMainLayout extends Component {
  showSettings(event) {
    event.preventDefault()
  }
  state = {
    isActive: true
  }

  toggleButton = () => {
    if (this.state.isActive) {
      this.closeNav()
    } else {
      this.openNav()
    }
    this.setState({
      isActive: !this.state.isActive
    })
  }
  closeNav = () => {
    document.getElementById('mySidenav').style.width = '0'
    document.getElementById('xxx').style.marginLeft = '0'
    // document.getElementById('xxx2').style.visibility = 'visible'
  }
  openNav = () => {
    document.getElementById('mySidenav').style.width = '15rem'
    document.getElementById('xxx').style.marginLeft = '15rem'
    // document.getElementById('xxx2').style.visibility = 'hidden'
  }
  signout() {
    this.props.SignoutAuth()
  }

  ButtonManageWeb() {
    return (
      <NavLink className="dropdown-item" to="/dashboard">
        จัดการเว็บไซต์
      </NavLink>
    )
  }

  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
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
              <NavLink to="/" onClick={this.closeNav}>
                กลับหน้าหลัก
              </NavLink>
            </span>
          </div>
        </nav> */}

        <div>
          <nav id="mySidenav" className="bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <h2 className="ml-3 mb-4">Admin Mamage</h2>
                <li className="nav-item">
                  <NavLink to="/dashboard" className="nav-link">
                    <span data-feather="file" />
                    <h4>Dashbord</h4>
                  </NavLink>
                </li>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-3 mb-1 text-muted">
                  <span>จัดการสมาชิก</span>
                </h6>
                <li className="nav-item">
                  <NavLink to="/dashboard/users" className="nav-link">
                    <span data-feather="file" />
                    จัดการสมาชิก
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/dashboard/userpermission" className="nav-link">
                    <span data-feather="file" />
                    จัดการสิทธิสมาชิก
                  </NavLink>
                </li>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-3 mb-1 text-muted">
                  <span>จัดการเนื้อหาเว็บไซน์</span>
                </h6>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard/managehome">
                    <span data-feather="shopping-cart" />
                    หน้าแรก
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard/managepromotion">
                    <span data-feather="users" />
                    หน้าโปรโมชั่น
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard/managenew">
                    <span data-feather="bar-chart-2" />
                    หน้าข่าวสาร
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard">
                    <span data-feather="layers" />
                    ติดต่อเรา
                  </NavLink>
                </li>
              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-3 mb-1 text-muted">
                <span>จัดการห้องเรียน</span>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashbord">
                    <span data-feather="file-text" />
                    เพิ่มรายวิชา
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashbord">
                    <span data-feather="file-text" />
                    แก้ไขรายวิชา
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashbord">
                    <span data-feather="file-text" />
                    ลบรายวิชา
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashbord">
                    <span data-feather="file-text" />
                    สิทธิการเข้าถึงรายวิชา
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <main id="xxx" role="main" className="main pt-3 px-4">
            <div className="row">
              <div className="col">
                <ArrowTurn
                  active={this.state.isActive}
                  onClick={this.toggleButton}
                />
              </div>
              <div className="col-auto">
                <NavLink to="/" className="ds-link">
                  <h2>หน้าเว็บหลัก</h2>
                </NavLink>
              </div>
              <div className="col text-right">
                {this.props.auth && this.props.auth.length > 0 ? (
                  <div className="nav-item dropdown">
                    <NavLink
                      className="ds-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {this.props.auth && this.props.auth[0].Email}
                    </NavLink>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <NavLink className="dropdown-item" to="#">
                        ตั้งค่าบัญชี
                      </NavLink>
                      {this.props.auth[0].UserType === 'admin'
                        ? this.ButtonManageWeb()
                        : false}
                      <div className="dropdown-divider" />
                      <button
                        className="dropdown-item"
                        onClick={() => this.signout()}
                      >
                        ออกจากระบบ
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="header-nav">{this.props.children}</div>
          </main>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({ auth }) => {
  return { auth }
}
export default connect(
  mapStateToProps,
  { SignoutAuth }
)(PrivateMainLayout)
