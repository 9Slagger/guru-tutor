import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchHomeContent,
  createHomeContentFirst,
  createHomeContentThird
} from '../../../actions'
import PrivateMainLayout from '../../../components/PrivateMainLayout'
import HomecontentThirdForm from './components/HomecontentThirdForm'

class AddHomecontentFirst extends Component {
  saveHomecontentThird = async values => {
    this.props.createHomeContentThird(values)
  }

  render() {
    return (
      <PrivateMainLayout>
        <div className="container-fluid">
          <h2 className="text-center">เพิ่มเนื้อหาส่วนสุดท้ายของหน้าแรก</h2>
          <HomecontentThirdForm onSubmit={this.saveHomecontentThird} />
        </div>
      </PrivateMainLayout>
    )
  }
}

const mapStateToProps = ({ homecontent }) => {
  return { homecontent }
}

const mapDispatchToProps = {
  fetchHomeContent,
  createHomeContentFirst,
  createHomeContentThird
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddHomecontentFirst)
