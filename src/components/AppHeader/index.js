import React,{ Component } from 'react'
import { NavLink } from 'react-router-dom'
import MenuBeforeSignin from './components/MenuBeforeSignin'
import MenuAfterSignin from './components/MenuAfterSignin'
import { connect } from 'react-redux'

class AppHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="">
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
                    ห้องเรียนมอปลาย
                  </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink className="dropdown-item" to="#">
                    ห้องเรียนมหาลัย
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link disabled">
                  ติดต่อเรา
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/supportproject" className="nav-link disabled">
                  สนับสนุนโครงการ
                </NavLink>
              </li>
            </ul>
            <div className=" my-2 my-lg-0">
              {this.props.auth ?  <MenuAfterSignin /> : <MenuBeforeSignin /> }
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
