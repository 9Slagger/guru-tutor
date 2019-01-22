import React, { Component } from 'react'
import { connect } from 'react-redux'
import {} from '../../../actions'
import ProfileFormFields from './components/ProfileFormFields'

class EditProfile extends Component {
  editProfile = values => {
    console.log(values)
  }

  onConfirmClick = () => {
    this.props.edit()
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <button className="btn btn-dark" onClick={this.onConfirmClick}>
            ยกเลิก
          </button>
          <h2 className="text-center">แก้ไข โปรไฟล์</h2>
          <ProfileFormFields onSubmit={this.editProfile} />
        </div>
      </div>
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
)(EditProfile)
