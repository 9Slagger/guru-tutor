import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchOneHomeContentThird,
  editHomecontentThird,
  createHomeContentThird
} from '../../../actions'
import PrivateMainLayout from '../../../components/PrivateMainLayout'
import HomecontentThirdForm from './components/HomecontentThirdForm'

class AddHomecontentFirst extends Component {
  saveHomecontentThird = async values => {
    this.props.createHomeContentThird(values)
  }
  componentDidMount() {
    if (this.props.match.path.indexOf('edit') > 0)
      this.props.fetchOneHomeContentThird(this.props.match.params.id)
  }

  editHomecontentThird = values => {
    this.props.editHomecontentThird(this.props.match.params.id, values)
  }

  render() {
    const { match } = this.props
    return (
      <PrivateMainLayout>
        {match.path.indexOf('add') > 0 ? (
          <div className="container-fluid">
            <h2 className="text-center">เพิ่มเนื้อหาส่วนสุดท้ายของหน้าแรก</h2>
            <HomecontentThirdForm onSubmit={this.editHomecontentThird} />
          </div>
        ) : (
          <div className="container-fluid">
            <h2 className="text-center">แก้ไขเนื้อหาส่วนสุดท้ายของหน้าแรก</h2>
            <HomecontentThirdForm onSubmit={this.editHomecontentThird} />
          </div>
        )}
      </PrivateMainLayout>
    )
  }
}

const mapStateToProps = ({ homecontent }) => {
  return { homecontent }
}

const mapDispatchToProps = {
  fetchOneHomeContentThird,
  editHomecontentThird,
  createHomeContentThird
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddHomecontentFirst)
