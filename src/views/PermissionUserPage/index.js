import React, { Component } from 'react'
import { connect } from 'react-redux'
import { usersFetch, userEditTpye } from '../../actions'
import PrivateMainLayout from '../../components/PrivateMainLayout'
import Swal from 'sweetalert2'

class PermissionUserPage extends Component {
  componentDidMount() {
    this.props.usersFetch()
  }

  userEditTpye(id, name, selectType) {
    this.props.userEditTpye(id, name, selectType)
  }

  async onSelect(e, id, name) {
    const selectType = await e.target.value
    Swal({
      title: 'Are you sure?',
      text: `ต้องการเปลี่ยนสิทธิให้คุณ ${name} เป็น ${selectType} ใช่หรือไม่`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่ !'
    }).then(result => {
      if (result.value) {
        this.userEditTpye(id, name, selectType)
      }
    })
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
            <td>
              <select
                onChange={e =>
                  this.onSelect(
                    e,
                    user.ID,
                    `${user.FirstName} ${user.LastName}`
                  )
                }
                name="selectType"
                className="form-control"
                defaultValue={user.UserType}
              >
                <option value="admin">admin</option>
                <option value="tutor">tutor</option>
                <option value="member">member</option>
              </select>
            </td>
          </tr>
        )
      })
    )
  }

  render() {
    const { users } = this.props
    return (
      <PrivateMainLayout>
        <div className="container-fluid">
          {users.data && users.isFetching ? (
            <h1 className="text-center">กำลังโหลดข้อมูล</h1>
          ) : (
            false
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
              </tr>
            </thead>
            <tbody>
              {users.data &&
                users.data.length > 0 &&
                this.renderUser(users.data)}
            </tbody>
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
  { usersFetch, userEditTpye }
)(PermissionUserPage)
