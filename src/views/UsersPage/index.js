import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  usersFetch,
  userDelete,
  usersChangeEditStatus,
  userEditTpye
} from '../../actions'
import PrivateMainLayout from '../../components/PrivateMainLayout'
import Swal from 'sweetalert2'

class User extends Component {
  componentDidMount() {
    this.props.usersFetch()
  }

  userEditTpye(id, name, selectType) {
    this.props.userEditTpye(id, name, selectType)
  }

  async onSelect(e, id, name) {
    const selectType = await e.target.value
    Swal({
      title: 'แก้ไขสิทธิ?',
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

  async ReWriteState(index, status) {
    let tempUser = await this.props.users.data[index]
    const tempUsers = await this.props.users.data
    if (tempUser.EditStatus || !tempUser.EditStatus) {
      tempUser.EditStatus = status
      console.log('debug')
    } else {
      tempUser = Object.assign({ EditStatus: status }, tempUser)
    }
    tempUsers[index] = tempUser
    this.props.usersChangeEditStatus(tempUsers)
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
            {user.EditStatus && user.EditStatus ? (
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
            ) : (
              <td>{user.UserType}</td>
            )}
            <td>
              {user.EditStatus && user.EditStatus ? (
                <button
                  type="button"
                  className="btn btn-success mr-3"
                  onClick={() => this.ReWriteState(index, false)}
                >
                  ยกเลิก
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-warning mr-3"
                  onClick={() => this.ReWriteState(index, true)}
                >
                  แก้ไข
                </button>
              )}
              {user.UserType === 'admin' ? (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.deleteUser(user.ID)}
                  disabled
                >
                  ลบ
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.deleteUser(user.ID)}
                >
                  ลบ
                </button>
              )}
            </td>
          </tr>
        )
      })
    )
  }

  render() {
    const { users } = this.props
    console.log('Re Render')
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
                <th scope="col">จัดการสมาชิก</th>
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

const mapDispatchToProps = {
  usersChangeEditStatus,
  usersFetch,
  userDelete,
  userEditTpye
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
