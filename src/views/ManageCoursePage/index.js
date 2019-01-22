import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchOneCourse,
  createSection,
  editSection,
  fetchOneSection,
  fetchOneLecture,
  createLecture,
  editLecture,
  deleteSection,
  deleteLecture
} from '../../actions'
import { Link } from 'react-router-dom'
import PrivateMainLayout from '../../components/PrivateMainLayout'
import SectionFormFields from '../ManageSectionPage/AddSectionPage/Components/SectionFormFields'
import VideoFormFields from '../ManageSectionPage/AddSectionPage/Components/VideoFormFields'
import PlayVideo from '../PlayVideoPage'

class ManageCoursePage extends Component {
  componentDidMount() {
    this.props.fetchOneCourse(this.props.match.params.id)
  }

  saveSection = values => {
    this.props.createSection(
      this.props.match.params.id,
      values,
      this.props.match.params.id
    )
  }

  saveVideo = async (id, values) => {
    let temp = await values
    let { time } = await values
    time = await parseInt(time, 10)
    temp.time = time
    this.props.createLecture(id, temp, this.props.match.params.id)
  }

  editVideo = async (id, values) => {
    let temp = await values
    let { time } = await values
    time = await parseInt(time, 10)
    temp.time = time
    this.props.editLecture(id, temp, this.props.match.params.id)
  }

  EditSection = values => {
    this.props.editSection(
      this.props.sections.dataone && this.props.sections.dataone.id,
      values,
      this.props.match.params.id
    )
  }

  RemoveSection(idsec, idcourse) {
    this.props.deleteSection(idsec, idcourse, this.props.match.params.id)
  }

  RemoveLecture(idlec, idsec) {
    this.props.deleteLecture(idlec, idsec, this.props.match.params.id)
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

  renderModalLectureEdit(id) {
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-warning btn-sm float-right ml-2"
          data-toggle="modal"
          data-target=".editvideo"
          onClick={() => this.props.fetchOneLecture(id)}
        >
          แก้ไข Video
        </button>

        <div
          className="modal fade bd-example-modal-xl editvideo"
          role="dialog"
          aria-labelledby="myExtraLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  แก้ไข Video
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
                <VideoFormFields
                  onSubmit={values => this.editVideo(id, values)}
                />
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

  renderModalLectureAdd(id) {
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn-primary btn-sm float-right mr-2"
          data-toggle="modal"
          data-target=".addvideo"
        >
          เพิ่ม Video
        </button>

        <div
          className="modal fade bd-example-modal-xl addvideo"
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
                <VideoFormFields
                  onSubmit={values => this.saveVideo(id, values)}
                />
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

  renderModalSectionEdit(id) {
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-warning btn-sm float-right"
          data-toggle="modal"
          data-target=".editsection"
          onClick={() => this.props.fetchOneSection(id)}
        >
          แก้ไข Section
        </button>
        <div
          className="modal fade bd-example-modal-xl editsection"
          role="dialog"
          aria-labelledby="myExtraLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  แก้ไข Section
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
                <SectionFormFields onSubmit={this.EditSection} />
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
        {this.renderSection(course.section, course.id)}
      </div>
    )
  }

  renderSection(sections, idcourse) {
    return (
      sections &&
      sections.map((section, index) => (
        <div className="card mb-1" key={index}>
          <div className="card-header">
            {section.name}
            <button
              className="btn btn-danger btn-sm float-right ml-2"
              onClick={() => this.RemoveSection(section.id, idcourse)}
            >
              ลบ Section
            </button>
            {this.renderModalSectionEdit(section.id)}
            {this.renderModalLectureAdd(section.id)}
          </div>
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
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-success btn-sm float-right ml-2"
          data-toggle="modal"
          data-target=".playlecture"
        >
          ดู Video
        </button>
        <div
          className="modal fade bd-example-modal-xl playlecture"
          role="dialog"
          aria-labelledby="myExtraLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {lecture.name}
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
                <PlayVideo link={lecture.link} />
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

  renderLecture(lectures, idsec) {
    return lectures.map((lecture, index) => (
      <div className="card-header" key={index}>
        {lecture.name}
        <button
          className="btn btn-danger btn-sm float-right ml-2"
          onClick={() => this.RemoveLecture(lecture.id, idsec)}
        >
          ลบ Video
        </button>
        {this.renderModalLectureEdit(lecture.id)}
        {this.renderPlayerLecture(lecture)}
      </div>
    ))
  }

  render() {
    const { courses } = this.props
    return (
      <PrivateMainLayout>
        {!Array.isArray(courses.dataone) &&
          courses.dataone &&
          this.renderCourse(courses.dataone)}
      </PrivateMainLayout>
    )
  }
}

const mapStateToProps = ({ courses, sections }) => {
  return { courses, sections }
}

const mapDispatchToProps = {
  fetchOneCourse,
  createSection,
  editSection,
  fetchOneSection,
  fetchOneLecture,
  createLecture,
  editLecture,
  deleteSection,
  deleteLecture
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage)
