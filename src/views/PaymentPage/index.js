import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'
import { connect } from 'react-redux'
class PaymentPage extends Component {
  render() {
    return (
      <MainLayout>
        <div className="container mt-3 text-center">
          <h1>แจ้งชำระเงิน</h1>
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
)(PaymentPage)
