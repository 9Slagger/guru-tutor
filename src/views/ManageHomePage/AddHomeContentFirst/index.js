import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchHomeContent,
  fetchOneHomeContent,
  createHomeContentFirst,
  editHomecontentFirst
} from '../../../actions'
import PrivateMainLayout from '../../../components/PrivateMainLayout'
import HomecontentFirstForm from './Components/HomecontentFirstForm'

class AddHomecontentFirst extends Component {
  saveHomecontentFirst = values => {
    this.props.createHomeContentFirst(values)
  }

  componentDidMount() {
    this.props.fetchOneHomeContent(this.props.match.params.id)
  }

  editHomecontentFirst = values => {
    this.props.editHomecontentFirst(this.props.match.params.id, values)
  }

  render() {
    const { formValues, match } = this.props
    console.log(formValues)
    return (
      <PrivateMainLayout>
        <div className="container-fluid">
          <h2 className="text-center">เพิ่มเนื้อหาสไลด์บาร์ของหน้าแรก</h2>
          <HomecontentFirstForm
            onSubmit={
              match.path.indexOf('add') > 0
                ? this.saveHomecontentFirst
                : this.editHomecontentFirst
            }
            Match={match}
          />
        </div>
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
  fetchHomeContent,
  fetchOneHomeContent,
  createHomeContentFirst,
  editHomecontentFirst
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddHomecontentFirst)
