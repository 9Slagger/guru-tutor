import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainLayout from '../../components/MainLayout'
import _ from 'lodash'

class MyOrderPage extends Component {
  renderOrder(orders, userid) {
    return (
      orders &&
      orders.map((order, index) => (
        <div className="col-md-12" key={index}>
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
                  {this.renderOrder(auth.data[0].cart, auth.data[0].ID)}
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
