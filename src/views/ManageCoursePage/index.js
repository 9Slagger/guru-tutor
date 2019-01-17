import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOneCourse, createSection } from '../../actions'
import { Link } from 'react-router-dom'
import PrivateMainLayout from '../../components/PrivateMainLayout'
import SectionFormFields from '../ManageSectionPage/AddSectionPage/Components/SectionFormFields'
import VideoFormFields from '../ManageSectionPage/AddSectionPage/Components/VideoFormFields'

class ManageCoursePage extends Component {
  componentDidMount() {
    this.props.fetchOneCourse(this.props.match.params.id)
  }

  saveSection = values => {
    this.props.createSection(this.props.match.params.id, values)
  }

  renderModalSection() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target=".bd-example-modal-xl"
        >
          เพิ่ม Section
        </button>

        <div
          className="modal fade bd-example-modal-xl"
          role="dialog"
          aria-labelledby="myExtraLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  เพิ่ม Section
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <SectionFormFields onSubmit={this.saveSection} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderModalLecture() {
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn-primary btn-sm float-right mr-2"
          data-toggle="modal"
          data-target=".video"
        >
          เพิ่ม Video
        </button>

        <div
          className="modal fade bd-example-modal-xl video"
          role="dialog"
          aria-labelledby="myExtraLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  เพิ่ม Video
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <VideoFormFields onSubmit={this.saveSection} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
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
        <div className="text-right mb-3">{this.renderModalSection()}</div>
        {this.renderSection(course.section)}
      </div>
    )
  }

  renderSection(sections) {
    return sections.map((section, index) => (
      <div className="card mb-1" key={index}>
        <div className="card-header">
          {section.name}
          <button className="btn btn-danger btn-sm float-right ml-2">ลบ</button>
          <button className="btn btn-warning btn-sm float-right ">แก้ไข</button>
          {this.renderModalLecture()}
        </div>
        <div className="text-right mt-2 mr-1" />
        <div className="card-body">
          <div className="card">{this.renderLecture(section.lectures)}</div>
        </div>
      </div>
    ))
  }

  renderLecture(lectures) {
    return lectures.map((lecture, index) => (
      <div className="card-header" key={index}>
        {lecture.name}
        <button className="btn btn-danger btn-sm float-right ml-2">ลบ</button>
        <button className="btn btn-warning btn-sm float-right ml-2">
          แก้ไข
        </button>
      </div>
    ))
  }

  render() {
    const { courses } = this.props
    return (
      <PrivateMainLayout>
        {!Array.isArray(courses.data) &&
          courses.data &&
          this.renderCourse(courses.data)}
      </PrivateMainLayout>
    )
  }
}

const mapStateToProps = ({ courses }) => {
  return { courses }
}

const mapDispatchToProps = {
  fetchOneCourse,
  createSection
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage)
