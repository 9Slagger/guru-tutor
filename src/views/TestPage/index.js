import React, { Component } from 'react'
import axios from 'axios'
import { api } from '../../actions/api'

export default class index extends Component {
  register2(user) {
    console.log(user)
    axios
      .post(`${api}/register`, user)
      .then(response => {
        if (response.status === 200) {
          console.log('สมัครสำเร็จ')
        }
      })
      .catch(() => {
        console.log('สมัครล้มเหลว')
      })
  }
  register1() {
    for (let i = 1; i <= 600; i++) {
      let user = {
        Gender: '',
        address: 'd d 30000',
        bday: 2,
        bmonth: 3,
        byear: 1111,
        email: `test${i}@gmail.com`,
        firsname: 'd',
        lastname: 'd',
        nickname: 'd',
        password: '123456',
        telephonenumber: `09${Math.floor(10000000 + Math.random() * 90000000)}`
      }
      this.register2(user)
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.register1()}>สมัคร</button>
      </div>
    )
  }
}
