import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userCreate } from '../../actions'

class SignupPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      firsname: '',
      lastname: '',
      nickname: '',
      telephonenumber: '',
      District: '',
      Province: '',
      Zipcode: '',
      bday: '',
      month: [
        'มกราคม',
        'กุมภาพันธ์',
        'มีนาคม',
        'เมษายน',
        'พฤษภาคม',
        'มิถุนายน',
        'กรกฎาคม',
        'สิงหาคม',
        'กันยายน',
        'ตุลาคม',
        'พฤษจิกายน',
        'ธันวาคม'
      ],
      bmonth: '',
      byear: '',
      Gender: ''
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  async Signup() {
    if (
      this.state.email &&
      this.state.password &&
      this.state.firsname &&
      this.state.lastname &&
      this.state.nickname &&
      this.state.telephonenumber &&
      this.state.District &&
      this.state.Province &&
      this.state.Zipcode &&
      this.state.bday &&
      this.state.bmonth &&
      this.state.byear
    ) {
      const user = await {
        email: this.state.email,
        password: this.state.password,
        firsname: this.state.firsname,
        lastname: this.state.lastname,
        nickname: this.state.nickname,
        telephonenumber: this.state.telephonenumber,
        address: `${this.state.District} ${this.state.Province} ${
          this.state.Zipcode
        }`,
        bday: parseInt(this.state.bday),
        bmonth: parseInt(this.state.bmonth),
        byear: parseInt(this.state.byear),
        Gender: this.state.Gender
      }
      this.props.userCreate(user)
    }
    else {
      alert('กรุณากรอกข้อมูลให้ครบ')
    }
  }

  render() {
    return (
      <div class="container text-center pt-5">
        <h1 class="my-4 pb-2">ลงทะเบียนสมาชิกใหม่ ฟรี!</h1>
        <form class="form-signup">
          <input
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="อีเมล"
            required
            class="form-control mb-3"
            aria-describedby="emailHelp"
          />

          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="รหัสผ่าน"
            required
            class="form-control mb-3"
          />
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <input
                type="text"
                name="firsname"
                id="firsname"
                value={this.state.firsname}
                onChange={this.handleChange}
                placeholder="ชื่อ"
                required
                class="form-control"
              />{' '}
            </div>
            <div class="col-md-6 mb-3">
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={this.state.lastname}
                onChange={this.handleChange}
                placeholder="นามสกุล"
                required
                class="form-control"
              />
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-4 mb-3">
              <input
                type="text"
                name="nickname"
                id="nickname"
                value={this.state.nickname}
                onChange={this.handleChange}
                placeholder="ชื่อเล่น"
                required
                class="form-control"
              />{' '}
            </div>
            <div class="col-md-8 mb-3">
              <input
                type="text"
                name="telephonenumber"
                id="telephonenumber"
                value={this.state.telephonenumber}
                onChange={this.handleChange}
                placeholder="เบอร์โทร"
                required
                class="form-control mb-3"
              />
            </div>
          </div>

          <div class="text-left">
            <label>ที่อยู่</label>
          </div>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <input
                type="text"
                name="District"
                id="District"
                value={this.state.District}
                onChange={this.handleChange}
                placeholder="อำเภอ/เขต"
                required
                class="form-control"
              />
              <div class="invalid-tooltip">กรุณาป้อน อำเภอ/เขต</div>
            </div>
            <div class="col-md-5 mb-3">
              <input
                type="text"
                name="Province"
                id="Province"
                value={this.state.Province}
                onChange={this.handleChange}
                placeholder="จังหวัด"
                required
                class="form-control"
              />
              <div class="invalid-tooltip">Please provide a valid state.</div>
            </div>
            <div class="col-md-3 mb-3">
              <input
                type="number"
                name="Zipcode"
                id="Zipcode"
                value={this.state.Zipcode}
                onChange={this.handleChange}
                placeholder="รหัสไปรษณีย์"
                required
                class="form-control"
              />
              <div class="invalid-tooltip">Please provide a valid zip.</div>
            </div>
          </div>

          <div class="text-left">
            <label>วันเกิด</label>
          </div>
          <div class="form-row">
            <div class="form-group col-md-2">
              <input
                type="number"
                name="bday"
                id="bday"
                value={this.state.bday}
                onChange={this.handleChange}
                placeholder="วัน"
                required
                class="form-control"
              />
            </div>
            <div class="form-group col-md-6 ">
              <select
                onChange={this.handleChange}
                name="bmonth"
                class="form-control"
              >
                <option value={0} selected>
                  เดือน
                </option>
                <option value={1}>มกราคม</option>
                <option value={2}>กุมภาพันธ์</option>
                <option value={3}>มีนาคม</option>
                <option value={4}>เมษายน</option>
                <option value={5}>พฤษภาคม</option>
                <option value={6}>มิถุนายน</option>
                <option value={7}>กรกฎาคม</option>
                <option value={8}>สิงหาคม</option>
                <option value={9}>กันยายน</option>
                <option value={10}>ตุลาคม</option>
                <option value={11}>พฤษจิกายน</option>
                <option value={12}>ธันวาคม</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <input
                type="number"
                name="byear"
                id="byear"
                value={this.state.byear}
                onChange={this.handleChange}
                placeholder="ปี"
                required
                class="form-control"
              />
            </div>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="customRadioInline1"
              name="customRadioInline1"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="customRadioInline1">
              ชาย
            </label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="customRadioInline2"
              name="customRadioInline1"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="customRadioInline2">
              หญิง
            </label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="customRadioInline3"
              name="customRadioInline1"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="customRadioInline3">
              ไม่ระบุ
            </label>
          </div>
        </form>
        <button
          class="form-signup btn btn-outline-success btn-block mt-3 btn-lg "
          onClick={() => this.Signup()}
        >
          ลงทะเบียน
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(
  mapStateToProps,
  { userCreate }
)(SignupPage)
