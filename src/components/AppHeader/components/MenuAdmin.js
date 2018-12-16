import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MenuAdmin extends Component {
  render() {
    return (
      <p className="nav-item dropdown">
        <NavLink
          className="nav-link dropdown-toggle"
          to="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          your e-mail
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="#">
            ตั้งค่าบัญชี
          </NavLink>
          <NavLink className="dropdown-item" to="#">
            จัดการเว็บไซต์
          </NavLink>
          <div className="dropdown-divider" />
          <button className="dropdown-item" to="#">
            ออกจากระบบ
          </button>
        </div>
      </p>
    )
  }
}

export default MenuAdmin
