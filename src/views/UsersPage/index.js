import React, { Component } from 'react'
import {
  userDelete,
  userEditTpye,
  usersChangeEditStatus,
  usersFetch
} from '../../actions'

import Fuse from 'fuse.js'
import PrivateMainLayout from '../../components/PrivateMainLayout'
import SearchUser from './SearchUser'
import Swal from 'sweetalert2'
import { connect } from 'react-redux'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      selectusers: 1,
      stateuser: []
    }
  }

  componentDidMount() {
    this.props.usersFetch()
  }

  componentWillReceiveProps(nextProps) {
    nextProps.form.SearchUser.values &&
      this.setState({ keyword: nextProps.form.SearchUser.values.keyword })
  }

  componentDidUpdate(prevProps) {
    if (this.props.users.data !== prevProps.users.data) {
      this.SelectPage(1, this.props.users.data)
    }
  }

  userEditTpye(id, name, selectType) {
    this.props.userEditTpye(id, name, selectType)
  }

  async onSelect(e, id, name, oldtype) {
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
      } else {
        const index = oldtype === 'admin' ? 0 : oldtype === 'tutor' ? 1 : 2
        document.getElementById(`select${id}`).selectedIndex = index
      }
    })
  }

  async ReWriteState(ID, status) {
    let tempUser = await this.state.stateuser.filter(user => user.ID === ID)
    if (tempUser[0].hasOwnProperty('EditStatus')) {
      tempUser[0].EditStatus = status
    } else {
      tempUser[0] = Object.assign({ EditStatus: status }, tempUser[0])
    }
    let tempUsers = await this.state.stateuser
    this.state.stateuser.forEach((user, index) => {
      if (user.ID === tempUser[0].ID) {
        tempUsers[index] = tempUser[0]
      }
    })
    this.setState({ stateuser: tempUsers })
  }

  deleteUser(id) {
    this.props.userDelete(id)
  }

  SelectPage(value, users) {
    if (value < 1) {
      console.log('ถอยเยอะเกิน')
    } else {
      const DomainUser = value * 50 - 49
      const RangUser = value * 50
      this.setState({
        selectusers: value,
        stateuser: users.filter((user, index) => {
          if (index + 1 >= DomainUser && index + 1 <= RangUser) {
            return user
          } else return false
        })
      })
    }
  }

  renderUser(users) {
    var options = {
      findAllMatches: true,
      includeMatches: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        'FirstName',
        'LastName',
        'NickName',
        'TelephoneNumber',
        'Email',
        'UserType'
      ]
    }
    var fuse = new Fuse(users, options)
    var resultusers = this.state.keyword
      ? fuse.search(this.state.keyword)
      : fuse.search('@')

    let result = resultusers
    result.map(data => {
      if (data.UserType === 'admin') {
        data.sort = 100000000000 + parseInt(data.TelephoneNumber, 10)
        return data
      } else if (data.UserType === 'tutor') {
        data.sort = 200000000000 + parseInt(data.TelephoneNumber, 10)
        return data
      } else {
        data.sort = 300000000000 + parseInt(data.TelephoneNumber, 10)
        return data
      }
    })
    result.sort((a, b) => parseInt(a.sort, 10) - parseInt(b.sort, 10))

    return (
      result &&
      result.map((user, index) => {
        return (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{user.item.FirstName + ' ' + user.item.LastName}</td>
            <td>{user.item.NickName}</td>
            <td>{user.item.TelephoneNumber}</td>
            <td>{user.item.Email}</td>
            {user.item.EditStatus && user.item.EditStatus ? (
              <td>
                <select
                  onChange={e =>
                    this.onSelect(
                      e,
                      user.item.ID,
                      `${user.item.FirstName} ${user.item.LastName}`,
                      user.item.UserType
                    )
                  }
                  name="selectType"
                  id={`select${user.item.ID}`}
                  className="form-control"
                  defaultValue={user.item.UserType}
                >
                  <option value="admin">admin</option>
                  <option value="tutor">tutor</option>
                  <option value="member">member</option>
                </select>
              </td>
            ) : (
              <td>{user.item.UserType}</td>
            )}
            <td>
              {user.item.EditStatus && user.item.EditStatus ? (
                <button
                  type="button"
                  className="btn btn-success mr-3"
                  onClick={() => this.ReWriteState(user.item.ID, false)}
                >
                  ยกเลิก
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-warning mr-3"
                  onClick={() => this.ReWriteState(user.item.ID, true)}
                >
                  แก้ไข
                </button>
              )}
              {user.item.UserType === 'admin' ? (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.deleteUser(user.item.ID)}
                  disabled
                >
                  ลบ
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.deleteUser(user.item.ID)}
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
    const { selectusers, stateuser } = this.state
    const { users } = this.props
    return (
      <PrivateMainLayout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={() =>
                        this.SelectPage(selectusers - 1, users.data)
                      }
                    >
                      Previous
                    </button>
                  </li>
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={() => this.SelectPage(1, users.data)}
                    >
                      1
                    </button>
                  </li>
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={() => this.SelectPage(2, users.data)}
                    >
                      2
                    </button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">...</button>
                  </li>
                  <li className="page-item" />
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={() =>
                        this.SelectPage(
                          Math.ceil(users.data.length / 50, 10),
                          users.data
                        )
                      }
                    >
                      {Math.ceil(users.data.length / 50, 10)}
                    </button>
                  </li>
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={() =>
                        this.SelectPage(selectusers + 1, users.data)
                      }
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-4">
              <SearchUser
                Search={fuse => this.setState({ keyword: fuse.keyword })}
              />
            </div>
          </div>
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
                this.renderUser(stateuser)}
            </tbody>
          </table>
        </div>
      </PrivateMainLayout>
    )
  }
}

const mapStateToProps = ({ users, form }) => {
  return { users, form }
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
