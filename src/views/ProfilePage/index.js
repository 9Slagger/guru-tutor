import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'
import { connect } from 'react-redux'

class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = { currentEdit: false }
  }
  edit = () => {
    this.setState({ currentEdit: !this.state.currentEdit })
  }
  formatDate(date) {
    var d = new Date(date)
    var month = '' + (d.getMonth() + 1)
    var day = '' + d.getDate()
    var year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [day, month, year].join('-')
  }
  render() {
    const { auth } = this.props
    console.log(auth.data)
    return (
      <MainLayout>
        <div className="m-5 p-5">
          <div class="row">
            <div class="col-5 mx-auto">
              <div class="crop2">
                <img
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
                  alt="..."
                  class=""
                />
              </div>
            </div>
            <div class="col">
              {this.state.currentEdit ? (
                <form>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="ชื่อจริง"
                    />
                    <input
                      type="text"
                      class="form-control"
                      placeholder="นามสกุล"
                    />
                  </div>
                  <br />

                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="อีเมล"
                  />
                  <br />
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="ช่ือเล่น"
                    />
                    <input
                      type="text"
                      class="form-control"
                      placeholder="เบอร์โทร"
                    />
                  </div>
                  <br />

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

                  <button
                    type="submit"
                    class="btn btn-dark mr-2"
                    onClick={this.edit}
                  >
                    save
                  </button>
                  <button
                    type="submit"
                    class="btn btn-dark"
                    onClick={this.edit}
                  >
                    ยกเลิก
                  </button>
                </form>
              ) : (
                <React.Fragment>
                  <h1>
                    {' '}
                    {auth.data.length > 0 &&
                      auth.data[0].FirstName +
                        ' ' +
                        auth.data[0].LastName +
                        ' '}
                    <small>
                      {auth.data.length > 0 && ' @' + auth.data[0].UserType}
                    </small>
                  </h1>
                  <h3> {auth.data.length > 0 && auth.data[0].Email}</h3>
                  <br />
                  <h4>
                    {' '}
                    {auth.data.length > 0 &&
                      auth.data[0].NickName +
                        ' ' +
                        auth.data[0].TelephoneNumber}
                  </h4>
                  <h4>
                    {' '}
                    {auth.data.length > 0 &&
                      'วันเกิด : ' + this.formatDate(auth.data[0].Birthday)}
                  </h4>
                  <h4> {auth.data.length > 0 && auth.data[0].Address}</h4>
                  <br />
                  <button
                    type="button"
                    class="btn btn-dark"
                    onClick={this.edit}
                  >
                    แก้ไขข้อมูลส่วนตัว
                  </button>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(ProfilePage)
