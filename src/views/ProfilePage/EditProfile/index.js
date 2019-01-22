import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userEditProfile } from '../../../actions'
import ProfileFormFields from './components/ProfileFormFields'

class EditProfile extends Component {
  editProfile = values => {
    // this.props.userEditProfile(id, values)
    alert('coming soon')
  }

  onEdit = () => {
    this.props.edit()
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <h2 className="text-center">แก้ไข โปรไฟล์</h2>
          <ProfileFormFields onSubmit={this.editProfile} edit={this.onEdit} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

const mapDispatchToProps = { userEditProfile }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile)
