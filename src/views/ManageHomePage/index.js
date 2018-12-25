import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHomeContent, createHomeContent } from '../../actions'
import PrivateMainLayout from '../../components/PrivateMainLayout'

class ManageHomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fcontentnumber: '',
      ftitle: '',
      fdetail: '',
      fthumbnail: ''
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
    this.props.createHomeContent(data)
  }

  render() {
    return (
      <PrivateMainLayout>
        <div className="container-fluid">
          <form>
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
  { fetchHomeContent, createHomeContent }
)(ManageHomePage)
