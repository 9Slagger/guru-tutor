import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHomeContent, createHomeContentFirst } from '../../../actions'
import PrivateMainLayout from '../../../components/PrivateMainLayout'
import HomecontentFirstForm from './Components/HomecontentFirstForm'

class AddHomecontentFirst extends Component {
  saveHomecontentFirst = async values => {
    this.props.createHomeContentFirst(values)
  }

  render() {
    return (
      <PrivateMainLayout>
        <div className="container-fluid">
          <h2 className="text-center">เพิ่มเนื้อหาสไลด์บาร์ของหน้าแรก</h2>
          <HomecontentFirstForm onSubmit={this.saveHomecontentFirst} />
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
  createHomeContentFirst
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddHomecontentFirst)
