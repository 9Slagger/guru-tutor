import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHomeContent, createHomeContentFirst } from '../../../actions'
import PrivateMainLayout from '../../../components/PrivateMainLayout'
import HomecontentSecondForm from './components/HomecontentSecondForm'

class AddHomecontentSecond extends Component {
  saveHomecontentSecond = async values => {
    this.props.createHomeContentFirst(values)
  }

  render() {
    return (
      <PrivateMainLayout>
        <div className="container-fluid">
          <h2 className="text-center">เพิ่มเนื้อหาไอคอนของหน้าแรก</h2>
          <HomecontentSecondForm onSubmit={this.saveHomecontentSecond} />
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
)(AddHomecontentSecond)
