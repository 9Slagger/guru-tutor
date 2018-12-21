import React, { Component } from 'react'
import { connect } from 'react-redux'
import { usersFetch, userDelete } from '../../actions'
import PrivateMainLayout from '../../components/PrivateMainLayout'

class User extends Component {
  componentDidMount() {
    this.props.usersFetch()
  }

  deleteUser(id) {
    this.props.userDelete(id)
  }

  renderUser(users) {
    return (
      users &&
      users.map((user, index) => {
        return (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>
              {user.FirstName} {user.LasttName}
            </td>
            <td>{user.NickName}</td>
            <td>{user.TelephoneNumber}</td>
            <td>{user.Email}</td>
            <td>{user.UserType}</td>
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
      <PrivateMainLayout>
        <div className="container-fluid">
          {users && users.isLoadingData ? (
            <h1 className="text-center">กำลังโหลดข้อมูล</h1>
          ) : (
            ''
          )}
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">ชื่อ สกุล</th>
                <th scope="col">ชื่อเล่น</th>
                <th scope="col">เบอร์โทร</th>
                <th scope="col">E-mail</th>
                <th scope="col">ประเภทผู้ใช้</th>
                <th scope="col">จัดการสมาชิก</th>
              </tr>
            </thead>
            <tbody>{users.length > 0 && this.renderUser(users)}</tbody>
          </table>
        </div>
      </PrivateMainLayout>
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
