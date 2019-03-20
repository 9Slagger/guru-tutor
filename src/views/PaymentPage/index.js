import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'
import { connect } from 'react-redux'
import { fetchOneOrder, VerifyAuth } from '../../actions'
import Progress from '../../components/Progress'
import Swal from 'sweetalert2'
import { api } from '../../actions/api'
import axios from 'axios'

class PaymentPage extends Component {
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
    this.props.fetchOneOrder(this.props.match.params.id)
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
      const url = `${api}/restricted/payment2?idorder=${
        this.props.match.params.id
      }`
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
          this.props.VerifyAuth()
          Swal({
            type: 'success',
            title: 'อัพโหลดหลักฐานการโอนเงิน สำเร็จ'
          })
        })
        .catch(error => {
          console.warn(error.response)
          Swal({
            type: 'error',
            title: 'อัพโหลดหลักฐานการโอนเงิน !'
          })
        })
    }
  }

  render() {
    const { order } = this.props
    if (order.isFetching) {
      return <Progress />
    } else {
      return (
        <MainLayout>
          <div className="container mt-3 text-center">
            <h1>แจ้งชำระเงิน</h1>
            <div className="row mt-3">
              <div className="col-md-6">
                <h2>ข้อมูลคำสั่งซื้อ</h2>
                <div className="card mb-3 p-2">
                  <h6 className="card-title text-left">
                    หมายเลขสั่งซื้อ :<strong>{` ${order.dataone.ID}`}</strong>
                  </h6>
                  <h6 className="card-title text-left">
                    สถานะ :<strong>{` ${order.dataone.status}`}</strong>
                  </h6>
                  <h6 className="card-title text-danger text-left">
                    ยอดรวม :<strong>{` ${order.dataone.total} `}</strong>
                    <i className="fas fa-tag" />
                  </h6>
                  <img
                    alt=""
                    src="http://www.greenerald.com/wp-content/uploads/2014/12/bank.png"
                  />
                  <h3 className="mt-3">พร้อมเพย์</h3>
                  <img
                    className="mt-2"
                    alt=""
                    src={`https://promptpay.io/0994671777/${
                      order.dataone.total
                    }.png`}
                    style={{ height: '500px', width: '500px' }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                {order.dataone.status === 'รอเช็คยอดเงิน' ? (
                  <div>
                    <h2>อัพโหลดหลักฐานการโอน</h2>
                    <h4 className="text-danger">
                      ไม่สามารถอัพโหลดหลักฐานซ้ำได้
                    </h4>
                  </div>
                ) : (
                  <div>
                    <form onSubmit={this.onFormSubmit}>
                      <h2>อัพโหลดหลักฐานการโอน</h2>
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
                    <div className="mt-2">
                      <h4>ตัวอย่างสลิปโอนเงิน</h4>
                      <img
                        style={{ width: '350px' }}
                        alt=""
                        src="https://f.ptcdn.info/821/052/000/ou20kw2efXvlUQ24J4f-o.jpg"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </MainLayout>
      )
    }
  }
}
const mapStateToProps = ({ order }) => {
  return { order }
}

const mapDispatchToProps = {
  fetchOneOrder,
  VerifyAuth
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentPage)
