import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'
import Swal from 'sweetalert2'
import { api } from '../../actions/api'
import axios from 'axios'
import { fetchImage } from '../../actions'
import { connect } from 'react-redux'
import Progress from '../../components/Progress'

class UploadImagePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 0,
      file: null,
      error: '',
      statusupload: false,
      size: 0
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  componentDidMount() {
    this.props.fetchImage()
  }
  onFormSubmit(e) {
    e.preventDefault()
    this.fileUpload(this.state.file)
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] })
  }
  async fileUpload(file) {
    const token = await localStorage.getItem('token')
    if (!file) {
      this.setState({ error: 'กรุณาเลือกไฟล์ที่ต้องการอัพโหลด' })
    } else if (file.size / 1024 / 1014 > 10) {
      Swal({
        type: 'warning',
        title: 'ไฟล์ขนาดใหญ่เกิน 10 MB'
      })
    } else {
      this.setState({
        statusupload: true,
        size: (file.size / 1024 / 1014).toFixed(2)
      })
      const url = `${api}/restricted/img`
      const formData = new FormData()
      formData.append('file', file)
      const config = {
        onUploadProgress: progressEvent =>
          this.setState({
            loading: (progressEvent.loaded / progressEvent.total) * 100
          }),
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: token
        }
      }
      axios
        .post(url, formData, config)
        .then(() => {
          this.setState({
            error: 'อัพโหลดสำเร็จ',
            statusupload: false,
            loading: 0
          })
          Swal({
            type: 'success',
            title: 'อัพโหลดรูปภาพ สำเร็จ'
          })
        })
        .catch(error => {
          console.log(error.response)
          Swal({
            type: 'error',
            title: `${error.response.data.message} !`
          })
        })
    }
  }

  renderImage(images) {
    return images.map((image, index) => (
      <img
        style={{ width: '300px' }}
        alt=""
        src={`${api}${image.img}`}
        key={index}
      />
    ))
  }

  render() {
    const { image } = this.props
    if (image.isFetching) {
      return <Progress />
    } else {
      return (
        <MainLayout>
          <div className="container mt-3 text-center">
            <div className="col-md-12">
              <div>
                <form onSubmit={this.onFormSubmit}>
                  <h2>อัพโหลดรูปภาพไว้ใช้ภายในเว็บไซต์</h2>
                  <div className="input-group">
                    <div className="custom-file">
                      <label />
                      <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                        onChange={this.onChange}
                      />
                      <label className="custom-file-label">
                        เลือกรูปที่ต้องการอัพโหลด
                      </label>
                    </div>
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-primary"
                        type="submit"
                        id="inputGroupFileAddon04"
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-12 mt-3">
              {image.data && this.renderImage(image.data)}
            </div>
          </div>
        </MainLayout>
      )
    }
  }
}

const mapStateToProps = ({ image }) => {
  return { image }
}

const mapDispatchToProps = {
  fetchImage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadImagePage)