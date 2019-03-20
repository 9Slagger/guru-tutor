import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { SignoutAuth, fetchOrder } from '../../../actions'
import _ from 'lodash'

class MenuAfterSignin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      order: {},
      auth: {},
      alert: 0
    }
  }

  componentDidMount() {
    this.props.auth.data &&
      this.props.auth.data[0].UserType === 'admin' &&
      this.props.fetchOrder()
  }

  componentWillReceiveProps(nextProps) {
    let alert = 0
    nextProps.order.data &&
      nextProps.order.data.forEach(order => {
        if (order.status === 'รอเช็คยอดเงิน') {
          alert = alert + 1
        }
      })
    this.setState({
      auth: nextProps.auth,
      order: nextProps.order,
      alert: alert
    })
  }

  signout() {
    this.props.SignoutAuth()
  }

  render() {
    const { auth, alert } = this.state
    return (
      <React.Fragment>
        <li className="nav-item">
          <NavLink className="nav-link mr-3" to="/cart">
            <span className="icon">
              <i className="fas fa-shopping-cart" />
            </span>
            {!_.isEmpty(auth.data) && auth.data[0].cart.length > 0 ? (
              <span className="notify-badge-cart">
                {auth.data[0].cart.length}
              </span>
            ) : null}
          </NavLink>
        </li>
        {!_.isEmpty(auth.data) && auth.data[0].UserType === 'admin' ? (
          <li className="nav-item">
            <NavLink className="nav-link mr-3" to="/manage/order">
              <span className="icon">
                <i className="fas fa-bell" />
              </span>
              {alert > 0 ? (
                <span className="notify-badge-cart">{alert}</span>
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
            {!_.isEmpty(auth.data) && auth.data[0].Email}
          </NavLink>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink className="dropdown-item" to="/profile">
              โปรไฟล์
            </NavLink>
            <NavLink className="dropdown-item" to="/myorder">
              ออเดอร์
            </NavLink>
            {!_.isEmpty(auth.data) && auth.data[0].UserType === 'admin' ? (
              <NavLink className="dropdown-item" to="/dashboard">
                จัดการเว็บไซต์
              </NavLink>
            ) : !_.isEmpty(auth.data) && auth.data[0].UserType === 'tutor' ? (
              <NavLink className="dropdown-item" to="/dashboard">
                จัดการเว็บไซต์
              </NavLink>
            ) : (
              false
            )}
            {!_.isEmpty(auth.data) && auth.data[0].UserType === 'admin' ? (
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
