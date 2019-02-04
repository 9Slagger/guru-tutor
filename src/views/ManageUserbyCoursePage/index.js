import React, { Component } from 'react'
import {
  fetchOneCourse,
  userDelete,
  userEditTpye,
  usersChangeEditStatus,
  usersFetch
} from '../../actions'

import Fuse from 'fuse.js'
import PrivateMainLayout from '../../components/PrivateMainLayout'
import SearchUser from './SearchUser'
import Swal from 'sweetalert2'
import { api } from '../../actions/api'
import axios from 'axios'
import { connect } from 'react-redux'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: ''
    }
  }

  componentDidMount() {
    this.props.fetchOneCourse(this.props.match.params.id)
    this.props.usersFetch()
  }

  componentWillReceiveProps(nextProps) {
    nextProps.form.SearchUser.values &&
      this.setState({ keyword: nextProps.form.SearchUser.values.keyword })
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

  async ReWriteState(index, status) {
    let tempUser = await this.props.users.data[index]
    const tempUsers = await this.props.users.data
    if (tempUser.EditStatus || !tempUser.EditStatus) {
      tempUser.EditStatus = status
    } else {
      tempUser = Object.assign({ EditStatus: status }, tempUser)
    }
    tempUsers[index] = tempUser
    this.props.usersChangeEditStatus(tempUsers)
  }

  async AddUser(iduser) {
    const data = {
      time: 30
    }
    const token = await localStorage.getItem('token')
    axios
      .post(
        `${api}/restricted/buy?iduser=${iduser}&idcourse=${
          this.props.match.params.id
        }`,
        data,
        {
          headers: { Authorization: token }
        }
      )
      .then(() => {
        Swal({
          type: 'success',
          title: 'WTF!'
        })
      })
      .catch(error => {
        console.log(error)
        Swal({
          type: 'error',
          title: 'WTF ERROR!'
        })
      })
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
    var result = this.state.keyword
      ? fuse.search(this.state.keyword)
      : fuse.search('@')
    return (
      result &&
      result.map((user, index) => {
        if (this.props.courses.dataone.claimuser !== null) {
          var checkby = this.props.courses.dataone.claimuser.filter(claim => {
            if (claim.iduser === user.item.ID) return true
            else return false
          })
        } else {
          checkby = []
        }
        return (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{user.item.FirstName + ' ' + user.item.LastName}</td>
            <td>{user.item.NickName}</td>
            <td>{user.item.TelephoneNumber}</td>
            <td>{user.item.Email}</td>
            {user.item.EditStatus && user.item.EditStatus ? (
              <td />
            ) : (
              <td>{user.item.UserType}</td>
            )}
            <td>
              {checkby === undefined || checkby.length === 0 ? (
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => this.AddUser(user.item.ID)}
                >
                  Add
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => this.AddUser(user.item.ID)}
                  disabled
                >
                  Add
                </button>
              )}
            </td>
          </tr>
        )
      })
    )
  }

  render() {
    const { users, courses } = this.props
    return (
      <PrivateMainLayout>
        <div className="container-fluid">
          <div className="mb-1 text-center">
            <h3>
              เพิ่มผู้ใช้เข้าคอร์ส {courses.dataone && courses.dataone.name}
            </h3>
          </div>
          <SearchUser
            Search={fuse => this.setState({ keyword: fuse.keyword })}
          />
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
              {!users.isFetching &&
                !courses.isFetching &&
                !(
                  Object.entries(courses.dataone).length === 0 &&
                  courses.dataone.constructor === Object
                ) &&
                !(users.data === undefined || users.data.length === 0) &&
                this.renderUser(users.data)}
            </tbody>
          </table>
        </div>
      </PrivateMainLayout>
    )
  }
}

const mapStateToProps = ({ users, form, courses }) => {
  return { users, form, courses }
}

const mapDispatchToProps = {
  usersChangeEditStatus,
  usersFetch,
  userDelete,
  userEditTpye,
  fetchOneCourse
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
