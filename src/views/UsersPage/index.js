import React, { Component } from 'react'
import { connect } from 'react-redux'
import { usersFetch, userDelete } from '../../actions'

class User extends Component {
  componentDidMount() {
    this.props.usersFetch()
  }

  deleteUser(id) {
    this.props.userDelete(id)
  }

  renderUser() {
    return (
      this.props.users &&
      this.props.users.map((user, index) => {
        var date = new Date(Date.parse(user.Timestamp))
        return (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{user.FirstName} {user.LasttName}</td>
            <td>{user.NickName}</td>
            <td>{user.TelephoneNumber}</td>
            <td>{user.Address}</td>
            <td>{user.Email}</td>
            <td>{user.UserType}</td>
            <td
            >{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</td>
            <td>
              <button
                type="button"
                className="btn btn-warning mr-3"
                onClick={() => alert('coming soon')}
              >
                แก้ไข
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => this.deleteUser(user.ID)}
              >
                ลบ
              </button>
            </td>
          </tr>
        )
      })
    )
  }

  render() {
    const { users } = this.props
    console.log(users)
    return (
      <div className="container">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ชื่อ สกุล</th>
              <th scope="col">ชื่อเล่น</th>
              <th scope="col">เบอร์โทร</th>
              <th scope="col">ที่อยู่</th>
              <th scope="col">E-mail</th>
              <th scope="col">ประเภทผู้ใช้</th>
              <th scope="col">วันที่เป็นสมาชิก</th>
              <th scope="col">จัดการสมาชิก</th>
            </tr>
          </thead>
          <tbody>{this.renderUser()}</tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return { users }
}

export default connect(
  mapStateToProps,
  { usersFetch, userDelete }
)(User)
