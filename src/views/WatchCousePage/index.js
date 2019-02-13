import React, { Component } from 'react'
import {
  createLecture,
  createSection,
  deleteLecture,
  deleteSection,
  editCoursePublic,
  editLecture,
  editSection,
  fetchOneCoursePublish,
  fetchOneLecture,
  fetchOneSection
} from '../../actions'

import { Link } from 'react-router-dom'
import MainLayout from '../../components/MainLayout'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

class WatchCousePage extends Component {
  constructor() {
    super()
    this.state = { checked: false }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id, checked) {
    this.props.editCoursePublic(id, checked.toString())
  }

  componentDidMount() {
    this.props.fetchOneCoursePublish(this.props.match.params.id)
  }

  renderCourse(course) {
    return (
      <div>
        <div>
          <Link className="btn btn-primary" to="/dashboard/course">
            กลับ
          </Link>
          <div className="text-center">
            <h3>{course.name}</h3>
          </div>
        </div>
        <div className="text-center">
          <img
            className="card-img-top mb-auto w-50 h-50 mt-3"
            src={course.thumbnail}
            alt="Card cap"
            height="100px"
          />
        </div>
        <div className="mt-3">
          <h6>{course.detail}</h6>
          <span className="badge badge-danger">{course.price + ' บาท'}</span>
        </div>
        {this.renderSection(course.section, course.id)}
      </div>
    )
  }

  renderSection(sections, idcourse) {
    return (
      sections &&
      sections.map((section, index) => (
        <div className="card mb-1" key={index}>
          <div className="card-header">{section.name}</div>
          <div className="text-right mt-2 mr-1" />
          <div className="card-body">
            <div className="card">
              {this.renderLecture(section.lectures, section.id)}
            </div>
          </div>
        </div>
      ))
    )
  }

  renderPlayerLecture(lecture) {
    return lecture.link ? (
      <Link
        className="btn btn-success btn-sm float-right ml-2"
        to={`/watch/video/${lecture.id}`}
      >
        ดู Video
      </Link>
    ) : (
      <button
        className="btn btn-warning btn-sm float-right ml-2"
        onClick={() =>
          Swal({
            type: 'warning',
            title: 'สำหรับผู้ที่ซื้อคอร์สเท่านั้น !'
          })
        }
      >
        ดู Video
      </button>
    )
  }

  renderLecture(lectures, idsec) {
    return lectures.map((lecture, index) => (
      <div className="card-header" key={index}>
        {lecture.name}
        {this.renderPlayerLecture(lecture)}
      </div>
    ))
  }

  render() {
    const { courses } = this.props
    return (
      <MainLayout>
        <div className="container mt-5">
          {!Array.isArray(courses.dataone) &&
            courses.dataone &&
            this.renderCourse(courses.dataone)}
        </div>
      </MainLayout>
    )
  }
}

const mapStateToProps = ({ courses, sections }) => {
  return { courses, sections }
}

const mapDispatchToProps = {
  fetchOneCoursePublish,
  createSection,
  editSection,
  fetchOneSection,
  fetchOneLecture,
  createLecture,
  editLecture,
  deleteSection,
  deleteLecture,
  editCoursePublic
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchCousePage)
