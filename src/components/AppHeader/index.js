import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import MenuBeforeSignin from './components/MenuBeforeSignin'
import MenuAfterSignin from './components/MenuAfterSignin'
import { connect } from 'react-redux'

class AppHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            GURU TUTOR
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  หน้าแรก
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/news" className="nav-link">
                  อับเดตข่าว
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/promotion">
                  โปรโมชั้น
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ห้องเรียน
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/roomhighschool">
                    ห้องเรียนมัธยม
                  </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink className="dropdown-item" to="/roomuniversity">
                    ห้องเรียนมหาลวิทยาลัย
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  ติดต่อเรา
                </NavLink>
              </li>
            </ul>
            <div className=" my-2 my-lg-0">
              <ul className="navbar-nav mr-auto">
                {this.props.auth.data && this.props.auth.data.length > 0 ? (
                  <MenuAfterSignin />
                ) : this.props.auth.isFetching ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <MenuBeforeSignin />
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(
  mapStateToProps,
  {}
)(AppHeader)
