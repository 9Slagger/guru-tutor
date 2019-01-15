import React, { Component } from 'react'
import PrivateMainLayout from '../../components/PrivateMainLayout'

class AddCoursePage extends Component {
  render() {
    return (
      <PrivateMainLayout>
        <div>
          <from>
            <div>
              <label>ชื่อคอร์ส</label>
              <input
                className="form-control"
                type="text"
                placeholder="แคลคูลัส"
              />
            </div>
            <div>
              <label>ชั่วโมง</label>
              <input className="form-control" type="number" placeholder="10" />
            </div>
            <div>
              <label>ราคา</label>
              <input
                className="form-control"
                type="number"
                placeholder="9000"
              />
            </div>
          </from>
        </div>
      </PrivateMainLayout>
    )
  }
}

export default AddCoursePage
