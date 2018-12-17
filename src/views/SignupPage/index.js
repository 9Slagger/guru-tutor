import React, { Component } from 'react'

class SignupPage extends Component {
  render() {
    return (
      <div class="container text-center pt-5">
        <h1 class="my-4 pb-2">ลงทะเบียนสมาชิกใหม่ ฟรี!</h1>
        <form class="form-signup">
          <input
            type="email"
            class="form-control mb-3"
            aria-describedby="emailHelp"
            placeholder="อีเมล"
            required
          />

          <input
            type="password"
            class="form-control mb-3"
            id="exampleInputPassword1"
            placeholder="รหัสผ่าน"
            required
          />

          <input
            class="form-control mb-3"
            type="text"
            placeholder="ชื่อ"
            required
          />
          <input
            class="form-control mb-3"
            type="text"
            placeholder="นามสกุล"
            required
          />
          <input
            class="form-control mb-3"
            type="text"
            placeholder="เบอร์โทร"
            required
          />
          <div class="text-left">
            <label>ที่อยู่</label>
          </div>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <input
                type="text"
                class="form-control"
                id="validationTooltip03"
                placeholder="อำเภอ/เขต"
                required
              />
              <div class="invalid-tooltip">กรุณาป้อน อำเภอ/เขต</div>
            </div>
            <div class="col-md-5 mb-3">
              <input
                type="text"
                class="form-control"
                id="validationTooltip04"
                placeholder="จังหวัด"
                required
              />
              <div class="invalid-tooltip">Please provide a valid state.</div>
            </div>
            <div class="col-md-3 mb-3">
              <input
                type="text"
                class="form-control"
                id="validationTooltip05"
                placeholder="รหัสไปรษณีย์"
                required
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
                type="text"
                class="form-control"
                placeholder="วัน"
                required
              />
            </div>
            <div class="form-group col-md-6 ">
              <select class="form-control">
                <option selected>เดือน</option>
                <option>มกราคม</option>
                <option>กุมภาพันธ์</option>
                <option>มีนาคม</option>
                <option>เมษายน</option>
                <option>พฤษภาคม</option>
                <option>มิถุนายน</option>
                <option>กรกฎาคม</option>
                <option>สิงหาคม</option>
                <option>กันยายน</option>
                <option>ตุลาคม</option>
                <option>พฤษจิกายน</option>
                <option>ธันวาคม</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <input
                type="text"
                class="form-control"
                placeholder="ปี"
                required
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
          <button
            type="submit"
            class="btn btn-outline-success btn-block mt-3 btn-lg "
          >
            ลงทะเบียน
          </button>
        </form>
      </div>
    )
  }
}

export default SignupPage
