import React from 'react'
import axios from 'axios'

class SimpleReactFileUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 0,
      file: null
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
  fileUpload(file) {
    const url =
      'http://35.247.150.186/restricted/lectures?idsec=5c47054b0016120004518761&quality=1080'
    const formData = new FormData()
    formData.append('file', file)
    const config = {
      onUploadProgress: progressEvent =>
        this.setState({
          loading: (progressEvent.loaded / progressEvent.total) * 100
        }),
      headers: {
        'content-type': 'multipart/form-data',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyVHlwZSI6ImFkbWluIiwiZXhwIjoxNTc0NDM4MjA2LCJpZCI6IjVjMTg4NmNiNmZkMzMzN2UxNmQzY2NhZiJ9.qrmz0ZT3P1eYp0dHG26guDw1VwDTFvg7dvEJ9Acy-qw'
      }
    }
    axios
      .post(url, formData, config)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
        <div>
          <label>กำลังอัพโหลด</label>
          <span>{this.state.loading}</span>
        </div>
      </form>
    )
  }
}

export default SimpleReactFileUpload
