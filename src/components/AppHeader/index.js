import React from 'react'
import { NavLink } from 'react-router-dom'
import { lifecycle, compose } from 'recompose'

const AppHeader = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="">
          GURU-Tutor
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
            <li className="nav-item active">
              <NavLink className="nav-link active" to="">
                หน้าแรก <span className="sr-only">(current)</span>
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
                <NavLink className="dropdown-item" to="#">
                  แคลคูลัส
                </NavLink>
                <NavLink className="dropdown-item" to="#">
                  ฟิสิกส์ 1
                </NavLink>
                <NavLink className="dropdown-item" to="#">
                  เคมีพื้นฐาน
                </NavLink>
                <NavLink className="dropdown-item" to="#">
                  STATICS
                </NavLink>
                <NavLink className="dropdown-item" to="#">
                  Compro 2
                </NavLink>
                <NavLink className="dropdown-item" to="#">
                  Eng 1
                </NavLink>
                <div className="dropdown-divider" />
                <NavLink className="dropdown-item" to="#">
                  TOEIC
                </NavLink>
                <NavLink className="dropdown-item" to="#">
                  อื่นๆ
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link disabled">
                ติดต่อเรา
              </NavLink>
            </li>
          </ul>
          <div className=" my-2 my-lg-0">
            <NavLink
              to="/"
              className="btn btn-outline-secondary my-2 my-sm-0 mr-2"
            >
              สมัครสมาชิก
            </NavLink>
            <NavLink
              to="signin"
              className="btn btn-outline-success my-2 my-sm-0"
            >
              เข้าสู่ระบบ
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

const withLifecycle = lifecycle({
  componentDidMount() {
    console.log('test')
  }
})

export default compose(withLifecycle)(AppHeader)
