import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainLayout from '../../components/MainLayout'
import _ from 'lodash'

class MyOrderPage extends Component {
  renderOrder(orders) {
    return (
      orders &&
      orders.map((order, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{order.ID}</td>
          <td>{order.timestamp}</td>
          <td>{order.total}</td>
          <td>{order.status}</td>
          <td>
            <button className="btn btn-primary">แจ้งชำระเงิน</button>
          </td>
        </tr>
      ))
    )
  }

  render() {
    const { auth } = this.props
    return (
      <MainLayout>
        <div className="container mt-3 mb-3">
          <div>
            <div className="">
              <h1>ออเดอร์</h1>
            </div>
            <div className="text-left">
              {!_.isEmpty(auth.data) && (
                <div className="row">
                  <div className="col-md-12">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">หมายเลขออเดอร์</th>
                          <th scope="col">เวลาสั่งซื้อ</th>
                          <th scope="col">ยอดรวม(บาท)</th>
                          <th scope="col">สถานะ</th>
                          <th scope="col">จัดการออเดอร์</th>
                        </tr>
                      </thead>
                      <tbody>{this.renderOrder(auth.data[0].order)}</tbody>
                    </table>
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

const mapStateToProps = ({ auth }) => {
  return { auth }
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyOrderPage)
