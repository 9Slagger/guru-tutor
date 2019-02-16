import React, { Component } from 'react'
import { connect } from 'react-redux'
import CourseFormFirst from './Components/CourseFormFirst'
import {
  createCourse,
  fetchOneCourse,
  editCourse,
  clearCourseOne
} from '../../../actions'
import PrivateMainLayout from '../../../components/PrivateMainLayout'
import _ from 'lodash'

class AddCoursePage extends Component {
  componentDidMount() {
    if (this.props.match.path.indexOf('edit') > 0)
      this.props.fetchOneCourse(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    if (
      !_.isEmpty(nextProps.courses.dataone) &&
      this.props.match.path.indexOf('add') > 0
    ) {
      this.props.clearCourseOne()
      console.log('this.props.clearCourseOne()')
    }
  }

  saveCourse = values => {
    this.props.createCourse(values)
  }

  editCourse = values => {
    this.props.editCourse(this.props.match.params.id, values)
  }

  render() {
    const { match } = this.props
    return (
      <PrivateMainLayout>
        {match.path.indexOf('add') > 0 ? (
          <div className="container-fluid">
            <h2 className="text-center">เพิ่มคอร์ส</h2>
            <CourseFormFirst onSubmit={this.saveCourse} />
          </div>
        ) : (
          <div className="container-fluid">
            <h2 className="text-center">แก้ไขคอร์ส</h2>
            <CourseFormFirst onSubmit={this.editCourse} />
          </div>
        )}
      </PrivateMainLayout>
    )
  }
}

const mapStateToProps = ({ courses }) => {
  return { courses }
}

const mapDispatchToProps = {
  createCourse,
  fetchOneCourse,
  editCourse,
  clearCourseOne
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCoursePage)
