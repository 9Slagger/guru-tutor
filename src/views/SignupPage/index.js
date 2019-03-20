import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userCreate } from '../../actions'
import MainLayout from '../../components/MainLayout'
import Swal from 'sweetalert2'

class SignupPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      firstname: '',
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
      this.state.firstname &&
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
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        nickname: this.state.nickname,
        telephonenumber: this.state.telephonenumber,
        address: `${this.state.District} ${this.state.Province} ${
          this.state.Zipcode
        }`,
        bday: parseInt(this.state.bday, 10),
        bmonth: parseInt(this.state.bmonth, 10),
        byear: parseInt(this.state.byear, 10),
        Gender: this.state.Gender
      }
      this.props.userCreate(user)
    } else {
      Swal.fire({
        type: 'warning',
        title: `กรุณากรอกข้อมูลให้ครบ`
      })
    }
  }

  render() {
    return (
      <MainLayout>
        <div className="container text-center pt-5">
          <h1 className="my-4 pb-2">ลงทะเบียนสมาชิกใหม่ ฟรี!</h1>
          <form className="form-signup">
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="อีเมล"
              required
              className="form-control mb-3"
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
              className="form-control mb-3"
            />
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={this.state.firstname}
                  onChange={this.handleChange}
                  placeholder="ชื่อ"
                  required
                  className="form-control"
                />{' '}
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                  placeholder="นามสกุล"
                  required
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="col-md-4 mb-3">
                <input
                  type="text"
                  name="nickname"
                  id="nickname"
                  value={this.state.nickname}
                  onChange={this.handleChange}
                  placeholder="ชื่อเล่น"
                  required
                  className="form-control"
                />{' '}
              </div>
              <div className="col-md-8 mb-3">
                <input
                  type="number"
                  name="telephonenumber"
                  id="telephonenumber"
                  value={this.state.telephonenumber}
                  onChange={this.handleChange}
                  placeholder="เบอร์โทร"
                  required
                  className="form-control mb-3"
                />
              </div>
            </div>

            <div className="text-left">
              <label>ที่อยู่</label>
            </div>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <input
                  type="text"
                  name="District"
                  id="District"
                  value={this.state.District}
                  onChange={this.handleChange}
                  placeholder="อำเภอ/เขต"
                  required
                  className="form-control"
                />
                <div className="invalid-tooltip">กรุณาป้อน อำเภอ/เขต</div>
              </div>
              <div className="col-md-5 mb-3">
                <input
                  type="text"
                  name="Province"
                  id="Province"
                  value={this.state.Province}
                  onChange={this.handleChange}
                  placeholder="จังหวัด"
                  required
                  className="form-control"
                />
                <div className="invalid-tooltip">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <input
                  type="number"
                  name="Zipcode"
                  id="Zipcode"
                  value={this.state.Zipcode}
                  onChange={this.handleChange}
                  placeholder="รหัสไปรษณีย์"
                  required
                  className="form-control"
                />
                <div className="invalid-tooltip">
                  Please provide a valid zip.
                </div>
              </div>
            </div>

            <div className="text-left">
              <label>วันเกิด</label>
            </div>
            <div className="form-row">
              <div className="form-group col-md-2">
                <input
                  type="number"
                  name="bday"
                  id="bday"
                  value={this.state.bday}
                  onChange={this.handleChange}
                  placeholder="วัน"
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6 ">
                <select
                  onChange={this.handleChange}
                  name="bmonth"
                  className="form-control"
                >
                  <option value={0} hidden>
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
              <div className="form-group col-md-4">
                <input
                  type="number"
                  name="byear"
                  id="byear"
                  value={this.state.byear}
                  onChange={this.handleChange}
                  placeholder="ปี"
                  required
                  className="form-control"
                />
              </div>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline1"
                name="customRadioInline1"
                className="custom-control-input"
              />
              <label className="custom-control-label">ชาย</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline2"
                name="customRadioInline1"
                className="custom-control-input"
              />
              <label className="custom-control-label">หญิง</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline3"
                name="customRadioInline1"
                className="custom-control-input"
              />
              <label className="custom-control-label">ไม่ระบุ</label>
            </div>
          </form>
          <button
            className="form-signup btn btn-outline-success btn-block mt-3 btn-lg "
            onClick={() => this.Signup()}
          >
            ลงทะเบียน
          </button>
        </div>
      </MainLayout>
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
