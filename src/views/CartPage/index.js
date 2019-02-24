import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'
import { connect } from 'react-redux'
import { deleteCourseInCart, createOrder } from '../../actions'
import Swal from 'sweetalert2'
import _ from 'lodash'

class CartPage extends Component {
  deleteItem(userid, data) {
    this.props.deleteCourseInCart(userid, data)
  }

  confirmOrder(userid, cart) {
    if (!_.isEmpty(cart)) {
      this.props.createOrder(userid)
    } else {
      Swal({
        type: 'success',
        title: 'กรุณาหยิบคอร์สใส่ตะกร้า !'
      })
    }
  }

  renderCart(orders, userid) {
    return (
      orders &&
      orders.map((order, index) => (
        <div className="col-md-8" key={index}>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={order.img} alt="..." className="img-thumbnail mr-3" />
              </div>
              <div className="col-md-4">
                <div className="card-body">
                  <h5 className="card-title">{order.name}</h5>
                  <p className="card-text">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => this.deleteItem(userid, { index: index })}
                    >
                      หยิบออกจากตะกร้า
                    </button>
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card-body">
                  <h6 className="card-title text-danger text-right">
                    {'ราคา ' + order.price + ' '}
                    <i className="fas fa-tag" />
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    )
  }

  render() {
    const { auth } = this.props
    var totalprice = 0
    !_.isEmpty(auth.data) &&
      auth.data[0].cart.forEach(data => {
        totalprice += data.price
      })
    return (
      <MainLayout>
        <div className="container mt-3 mb-3">
          <div>
            <div className="">
              <h1>ตะกร้าสินค้า</h1>
            </div>
            <div className="text-left">
              {!_.isEmpty(auth.data) && (
                <div className="row">
                  {this.renderCart(auth.data[0].cart, auth.data[0].ID)}
                  <div className="col-md-4">
                    <div className="card-body">
                      <h6>ยอดสุทธิ:</h6>
                      <h2>{`${totalprice} บาท`}</h2>
                      <button
                        className="btn btn-lg btn-danger"
                        onClick={() =>
                          this.confirmOrder(auth.data[0].ID, auth.data[0].cart)
                        }
                      >
                        สั่งซื้อ
                      </button>
                    </div>
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

const mapDispatchToProps = {
  deleteCourseInCart,
  createOrder
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage)
