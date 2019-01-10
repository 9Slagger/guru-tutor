import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchOneHomeContentSecond,
  editHomecontentSecond
} from '../../../actions'
import PrivateMainLayout from '../../../components/PrivateMainLayout'
import HomecontentSecondForm from './components/HomecontentSecondForm'

class AddHomecontentSecond extends Component {
  componentDidMount() {
    if (this.props.match.path.indexOf('edit') > 0)
      this.props.fetchOneHomeContentSecond(this.props.match.params.id)
  }

  editHomecontentSecond = values => {
    this.props.editHomecontentSecond(this.props.match.params.id, values)
  }

  render() {
    const { match } = this.props
    return (
      <PrivateMainLayout>
        {match.path.indexOf('add') > 0 ? (
          <div className="container-fluid">
            <h2 className="text-center">เพิ่มเนื้อหาไอคอนของหน้าแรก</h2>
            <HomecontentSecondForm onSubmit={this.editHomecontentSecond} />
          </div>
        ) : (
          <div className="container-fluid">
            <h2 className="text-center">แก้ไขเนื้อหาไอคอนของหน้าแรก</h2>
            <HomecontentSecondForm onSubmit={this.editHomecontentSecond} />
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
  fetchOneHomeContentSecond,
  editHomecontentSecond
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddHomecontentSecond)
