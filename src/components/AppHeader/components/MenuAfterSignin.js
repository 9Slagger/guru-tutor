import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { SignoutAuth, fetchOrder } from '../../../actions'

class MenuAfterSignin extends Component {
  componentDidMount() {
    this.props.fetchOrder()
  }

  signout() {
    this.props.SignoutAuth()
  }

  render() {
    return (
      <React.Fragment>
        <li className="nav-item">
          <NavLink className="nav-link mr-3" to="/cart">
            <span className="icon">
              <i className="fas fa-shopping-cart" />
            </span>
            {this.props.auth.data[0].cart.length > 0 ? (
              <span className="notify-badge-cart">
                {this.props.auth.data[0].cart.length}
              </span>
            ) : null}
          </NavLink>
        </li>
        {this.props.auth.data &&
        this.props.auth.data[0].UserType === 'admin' ? (
          <li className="nav-item">
            <NavLink className="nav-link mr-3" to="/manage/order">
              <span className="icon">
                <i className="fas fa-bell" />
              </span>
              {this.props.order.data.length > 0 ? (
                <span className="notify-badge-cart">
                  {this.props.order.data.length}
                </span>
              ) : null}
            </NavLink>
          </li>
        ) : (
          false
        )}
        <li className="nav-item">
          <NavLink className="nav-link" to="/myclass">
            คอร์สเรียนของฉัน
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
            {this.props.auth.data && this.props.auth.data[0].Email}
          </NavLink>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink className="dropdown-item" to="/profile">
              โปรไฟล์
            </NavLink>
            <NavLink className="dropdown-item" to="/myorder">
              ออเดอร์
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
            {this.props.auth.data[0].UserType === 'admin' ? (
              <NavLink className="dropdown-item" to="/upload/image">
                อัพโหลดรูป
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
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ auth, order }) => {
  return { auth, order }
}

export default connect(
  mapStateToProps,
  { SignoutAuth, fetchOrder }
)(MenuAfterSignin)
