import React, { Component } from 'react'
import { connect } from 'react-redux'
import { usersFetch, userEditTpye } from '../../actions'
import PrivateMainLayout from '../../components/PrivateMainLayout'

class PermissionUserPage extends Component {
  componentDidMount() {
    this.props.usersFetch()
  }

  userEditTpye(id, name, selectType) {
    this.props.userEditTpye(id, name, selectType)
  }

  onSelect(e, id, name) {
    const selectType = e.target.value
    this.userEditTpye(id, name, selectType)
  }

  renderUser() {
    return (
      this.props.users &&
      this.props.users.map((user, index) => {
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
    return (
      <PrivateMainLayout>
        <div className="container-fluid">
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
            <tbody>{this.renderUser()}</tbody>
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
