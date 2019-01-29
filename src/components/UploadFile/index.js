import React from 'react'
import axios from 'axios'
import { Progress } from 'react-sweet-progress'
import 'react-sweet-progress/lib/style.css'
import { api } from '../../actions/api'
import { connect } from 'react-redux'
import { fetchOneCourse } from '../../actions'
class SimpleReactFileUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 0,
      file: null,
      error: '',
      statusupload: false
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
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
    } else {
      this.setState({ statusupload: true })
      const url = `${api}/restricted/lectures?idsec=${
        this.props.idlec
      }&quality=1080`
      const formData = new FormData()
      formData.append('file', file)
      const config = {
        onUploadProgress: progressEvent =>
          this.setState({
            loading: (progressEvent.loaded / progressEvent.total) * 100
          }),
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      }
      axios
        .post(url, formData, config)
        .then(res => {
          console.log(res)
          this.setState({ error: 'อัพโหลดสำเร็จ' })
          this.props.fetchOneCourse(this.props.idcourse)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  render() {
    const percent = parseInt(this.state.loading, 10)
    const { error, statusupload } = this.state
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <div className="input-group">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              onChange={this.onChange}
            />
            <label className="custom-file-label">
              เลือกไฟล์ที่ต้องการอัพโหลด
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
        <div>{error && <p className="text-danger">{error}</p>}</div>
        <div>
          <label>กำลังอัพโหลด</label>
          {statusupload ? (
            <Progress
              percent={percent}
              status="error"
              theme={{
                error: {
                  symbol: percent + '%',
                  color: this.state.loading === 100 ? '#00ff00' : '#fbc630'
                }
              }}
            />
          ) : (
            false
          )}
        </div>
      </form>
    )
  }
}

const mapStateToProps = ({ courses, sections }) => {
  return { courses, sections }
}

const mapDispatchToProps = {
  fetchOneCourse
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleReactFileUpload)
