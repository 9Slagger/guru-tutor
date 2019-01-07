import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { SignoutAuth } from '../../../actions'

class MenuAfterSignin extends Component {
  signout() {
    this.props.SignoutAuth()
  }

  render() {
    return (
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
          {this.props.auth.data && this.props.auth.data[0].Email}
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="#">
            ตั้งค่าบัญชี
          </NavLink>
          {this.props.auth.data[0].UserType === 'admin' ? (
            <NavLink className="dropdown-item" to="/dashboard">
              จัดการเว็บไซต์
            </NavLink>
          ) : this.props.auth.data[0].UserType === 'tutor' ? (
            <NavLink className="dropdown-item" to="/dashboard">
              จัดการเว็บไซต์
            </NavLink>
          ) : (
            false
          )}
          <div className="dropdown-divider" />
          <button className="dropdown-item" onClick={() => this.signout()}>
            ออกจากระบบ
          </button>
        </div>
      </li>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(
  mapStateToProps,
  { SignoutAuth }
)(MenuAfterSignin)
