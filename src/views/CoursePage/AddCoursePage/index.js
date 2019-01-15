import React, { Component } from 'react'
import { connect } from 'react-redux'
import CourseFormFirst from './Components/CourseFormFirst'
import PrivateMainLayout from '../../../components/PrivateMainLayout'

class AddCoursePage extends Component {
  saveCourse = values => {
    this.props.createNewContent(values)
  }

  render() {
    return (
      <PrivateMainLayout>
        <div className="container-fluid">
          <h2 className="text-center">เพิ่มคอร์ส</h2>
          <CourseFormFirst onSubmit={this.saveCourse} />
        </div>
      </PrivateMainLayout>
    )
  }
}

const mapStateToProps = ({ courses }) => {
  return { courses }
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCoursePage)
