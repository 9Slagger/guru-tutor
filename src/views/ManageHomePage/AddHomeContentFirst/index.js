import React, { Component } from 'react'
import { connect } from 'react-redux'
import PrivateMainLayout from '../../../components/PrivateMainLayout'
import {
  fetchOneHomeContent,
  createHomeContentFirst,
  editHomecontentFirst
} from '../../../actions'
import HomecontentFirstForm from './Components/HomecontentFirstForm'

class AddHomecontentFirst extends Component {
  saveHomecontentFirst = values => {
    this.props.createHomeContentFirst(values)
  }

  componentDidMount() {
    if (this.props.match.path.indexOf('edit') > 0)
      this.props.fetchOneHomeContent(this.props.match.params.id)
  }

  editHomecontentFirst = values => {
    this.props.editHomecontentFirst(this.props.match.params.id, values)
  }

  render() {
    const { match } = this.props
    return (
      <PrivateMainLayout>
        {match.path.indexOf('add') > 0 ? (
          <div className="container-fluid">
            <h2 className="text-center">เพิ่มเนื้อหาสไลด์บาร์ของหน้าแรก</h2>
            <HomecontentFirstForm onSubmit={this.saveHomecontentFirst} />
          </div>
        ) : (
          <div className="container-fluid">
            <h2 className="text-center">แก้ไขเนื้อหาสไลด์บาร์ของหน้าแรก</h2>
            <HomecontentFirstForm onSubmit={this.editHomecontentFirst} />
          </div>
        )}
      </PrivateMainLayout>
    )
  }
}

const mapStateToProps = ({ form, homecontent }) => {
  return {
    formValues: form.HomecontentFirst,
    homecontent
  }
}

const mapDispatchToProps = {
  fetchOneHomeContent,
  createHomeContentFirst,
  editHomecontentFirst
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddHomecontentFirst)
