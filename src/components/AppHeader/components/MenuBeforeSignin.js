import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MenuBeforeSignin extends Component {
  render() {
    return (
      <div>
        <NavLink
          to="signup"
          className="btn btn-outline-secondary my-2 my-sm-0 mr-2"
        >
          สมัครสมาชิก
        </NavLink>
        <NavLink to="signin" className="btn btn-outline-success my-2 my-sm-0">
          เข้าสู่ระบบ
        </NavLink>
      </div>
    )
  }
}

export default MenuBeforeSignin
