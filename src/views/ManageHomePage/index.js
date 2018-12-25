import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchHomeContent,
  createFHomeContent,
  createTHomeContent
} from '../../actions'
import PrivateMainLayout from '../../components/PrivateMainLayout'

class ManageHomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fcontentnumber: '',
      ftitle: '',
      fdetail: '',
      fthumbnail: '',
      scontentnumber: '',
      stitle: '',
      sdetail: '',
      sthumbnail: '',
      tcontentnumber: '',
      ttitle: '',
      tdetail: '',
      tthumbnail: ''
    }
  }

  componentDidMount() {
    this.props.fetchHomeContent()
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  async saveHomecontentFirst(fcontentnumber, ftitle, fdetail, fthumbnail) {
    const data = await {
      contentnumber: parseInt(fcontentnumber, 10),
      title: ftitle,
      detail: fdetail,
      thumbnail: fthumbnail
    }
    this.props.createFHomeContent(data)
  }

  async saveHomecontentThird(fcontentnumber, ftitle, fdetail, fthumbnail) {
    const data = await {
      contentnumber: parseInt(fcontentnumber, 10),
      title: ftitle,
      detail: fdetail,
      thumbnail: fthumbnail
    }
    this.props.createTHomeContent(data)
  }

  render() {
    return (
      <PrivateMainLayout>
        <div className="container-fluid">
          <form>
            <h2>เพิ่มเนื้อหาส่วนที่ 1</h2>
            <div className="form-group">
              <label>ลำดับการแสดงเนื้อหา</label>
              <input
                type="number"
                className="form-control"
                id="fcontentnumber"
                name="fcontentnumber"
                placeholder="ลำดับการแสดงเนื้อหา(ตัวเลข)"
                value={this.state.fcontentnumber}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>หัวข้อ</label>
              <input
                type="text"
                className="form-control"
                id="ftitle"
                name="ftitle"
                placeholder="หัวข้อ"
                value={this.state.ftitle}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>รายละเอียด</label>
              <input
                type="text"
                className="form-control"
                id="fdetail"
                name="fdetail"
                placeholder="รายละเอียด"
                value={this.state.fdetail}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>รูปภาพ</label>
              <input
                type="text"
                className="form-control"
                id="fthumbnail"
                name="fthumbnail"
                placeholder="Link รูปภาพ"
                value={this.state.fthumbnail}
                onChange={this.handleChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                this.saveHomecontentFirst(
                  this.state.fcontentnumber,
                  this.state.ftitle,
                  this.state.fdetail,
                  this.state.fthumbnail
                )
              }
            >
              บันทึก
            </button>
          </form>
          <form>
            <h2>เพิ่มเนื้อหาส่วนที่ 3</h2>
            <div className="form-group">
              <label>ลำดับการแสดงเนื้อหา</label>
              <input
                type="number"
                className="form-control"
                id="tcontentnumber"
                name="tcontentnumber"
                placeholder="ลำดับการแสดงเนื้อหา(ตัวเลข)"
                value={this.state.tcontentnumber}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>หัวข้อ</label>
              <input
                type="text"
                className="form-control"
                id="ttitle"
                name="ttitle"
                placeholder="หัวข้อ"
                value={this.state.ttitle}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>รายละเอียด</label>
              <input
                type="text"
                className="form-control"
                id="tdetail"
                name="tdetail"
                placeholder="รายละเอียด"
                value={this.state.tdetail}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>รูปภาพ</label>
              <input
                type="text"
                className="form-control"
                id="tthumbnail"
                name="tthumbnail"
                placeholder="Link รูปภาพ"
                value={this.state.tthumbnail}
                onChange={this.handleChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                this.saveHomecontentThird(
                  this.state.tcontentnumber,
                  this.state.ttitle,
                  this.state.tdetail,
                  this.state.tthumbnail
                )
              }
            >
              บันทึก
            </button>
          </form>
        </div>
      </PrivateMainLayout>
    )
  }
}

const mapStateToProps = ({ homecontent }) => {
  return { homecontent }
}

export default connect(
  mapStateToProps,
  { fetchHomeContent, createFHomeContent, createTHomeContent }
)(ManageHomePage)
