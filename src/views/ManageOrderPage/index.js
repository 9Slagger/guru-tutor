import React, { Component } from 'react'
import { connect } from 'react-redux'
import PrivateMainLayout from '../../components/PrivateMainLayout'
import _ from 'lodash'
import { fetchOrder, ConfirmOrder } from '../../actions'
import { api } from '../../actions/api'
import Swal from 'sweetalert2'
import moment from 'moment'

class MyOrderPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      order: {}
    }
  }
  componentDidMount() {
    this.props.fetchOrder()
  }
  componentWillReceiveProps(nextProps) {
    let OrderSortbyDate = nextProps.order.data.sort(function(a, b) {
      return new Date(b.timestamp) - new Date(a.timestamp)
    })
    nextProps.order.data = OrderSortbyDate
    this.setState({ order: nextProps.order })
  }
  makeid() {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    return text
  }
  Confirm(orderid) {
    Swal.fire({
      title: 'Are you sure?',
      text: `ยืนยันความถูกต้องการโอนเงินของออเดอร์ ${orderid}`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm !'
    }).then(result => {
      if (result.value) {
        this.props.ConfirmOrder(orderid)
      }
    })
  }
  renderModal(order) {
    const makeid = this.makeid()
    return (
      <React.Fragment>
        {order.status !== 'รอโอนเงิน' ? (
          <button
            type="button"
            className="btn btn-primary mr-2"
            data-toggle="modal"
            data-target={`.${makeid}`}
          >
            ดูสลิปโอนเงิน
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-warning mr-2"
            data-toggle="modal"
            data-target={`.${makeid}`}
          >
            ดูสลิปโอนเงิน
          </button>
        )}
        <div
          className={`modal fade bd-example ${makeid}`}
          role="dialog"
          aria-labelledby="myExtraLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  สลิปโอนเงิน
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  style={{ width: '465px' }}
                  alt=""
                  src={`${api}${order.payment2}`}
                />
              </div>
              <div className="modal-footer">
                {order.status === 'คำสั่งซื้อถูกอนุมัติแล้ว' ? (
                  <button
                    className="btn btn-success mr-2"
                    onClick={() => this.Confirm(order.ID)}
                    disabled
                  >
                    ยืนยัน
                  </button>
                ) : (
                  <button
                    className="btn btn-success mr-2"
                    onClick={() => this.Confirm(order.ID)}
                  >
                    ยืนยัน
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  ปิด
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
  renderOrder(orders) {
    return (
      orders &&
      orders.map((order, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{order.ID}</td>
          <td>{moment(order.timestamp).format("DD/MM/YYYY HH:mm")}</td>
          <td>{order.total}</td>
          <td>{order.status}</td>
          <td>{this.renderModal(order)}</td>
        </tr>
      ))
    )
  }

  render() {
    const { order } = this.state
    return (
      <PrivateMainLayout>
        <div className="container mt-3 mb-3">
          <div>
            <div className="text-left">
              {!_.isEmpty(order.data) && (
                <div className="row">
                  <div className="col-md-12">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">หมายเลขออเดอร์</th>
                          <th scope="col">เวลาแจ้งโอนเงิน</th>
                          <th scope="col">ยอดรวม(บาท)</th>
                          <th scope="col">สถานะ</th>
                          <th scope="col">จัดการออเดอร์</th>
                        </tr>
                      </thead>
                      <tbody>{this.renderOrder(order.data)}</tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </PrivateMainLayout>
    )
  }
}

const mapStateToProps = ({ order }) => {
  return { order }
}

const mapDispatchToProps = {
  fetchOrder,
  ConfirmOrder
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyOrderPage)
