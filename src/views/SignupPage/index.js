import React, { Component } from 'react'

class SignupPage extends Component {
  render() {
    return (
      <div class="text-center pt-5">
        <form class="form-signup">
          <input
            type="email"
            class="form-control mb-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="อีเมล"
          />
          <input
            type="password"
            class="form-control mb-3"
            id="exampleInputPassword1"
            placeholder="รหัสผ่าน"
          />

          <input class="form-control mb-3" type="text" placeholder="ชื่อจริง" />
          <input class="form-control mb-3" type="text" placeholder="นามสกุล" />
          <input class="form-control mb-3" type="text" placeholder="เบอร์โทร" />
          <label>วันเกิด</label>
          <div class="form-row">
            <div class="form-group col-md-2">
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="วัน"
              />
            </div>
            <div class="form-group col-md-6 ">
              <select id="inputState" class="form-control">
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
              <input type="text" class="form-control" placeholder="ปี" />
            </div>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default SignupPage
