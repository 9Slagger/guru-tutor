import React, { Component } from 'react'
import {
  createLecture,
  createSection,
  deleteLecture,
  deleteSection,
  editCoursePublic,
  editLecture,
  editSection,
  fetchOneCourse,
  fetchOneLecture,
  fetchOneSection
} from '../../actions'

import { Link } from 'react-router-dom'
import PlayVideo from '../PlayVideoPage'
import PrivateMainLayout from '../../components/PrivateMainLayout'
import SectionFormFields from '../ManageSectionPage/AddSectionPage/Components/SectionFormFields'
import Switch from 'react-switch'
import UploadFile from '../../components/UploadFile'
import VideoFormFields from '../ManageSectionPage/AddSectionPage/Components/VideoFormFields'
import { connect } from 'react-redux'
import Progress from '../../components/Progress'

class ManageCoursePage extends Component {
  constructor() {
    super()
    this.state = { checked: false }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id, checked) {
    this.props.editCoursePublic(id, checked.toString())
  }

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
    temp.time = await time
    temp.publish = await this.props.form.VideoFormFields.values.publish
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

  makeid() {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    return text
  }

  renderModalSection(id) {
    return (
      <div>
        <div>
          {this.props.courses.dataone &&
          this.props.courses.dataone.publish === true ? (
            <Switch
              onChange={checked => this.handleChange(id, checked)}
              checked={this.props.courses.dataone.publish}
              id="normal-switch"
            />
          ) : this.props.courses.dataone &&
          this.props.courses.dataone.publish === false ? (
            <Switch
              onChange={checked => this.handleChange(id, checked)}
              checked={this.props.courses.dataone.publish}
              id="normal-switch"
            />
          ) : (
            false
          )}
        </div>
        <button
          type="button"
          className="btn btn-primary mr-2"
          data-toggle="modal"
          data-target=".bd-example-modal-xl"
        >
          เพิ่ม Section
        </button>
        <Link
          className="btn btn-primary"
          to={`/dashboard/adduserforcourse/${id}`}
        >
          เพิ่ม User
        </Link>
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

  renderModalLectureEdit(lecture) {
    const { id, name } = lecture
    const targetname = name.split(' ')
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-warning btn-sm float-right ml-2"
          data-toggle="modal"
          data-target={`.${targetname[0]}`}
          onClick={() => this.props.fetchOneLecture(id)}
        >
          แก้ไข Video
        </button>

        <div
          className={`modal fade bd-example-modal-xl ${targetname[0]}`}
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
          data-target={`.addvi${id}`}
        >
          เพิ่ม Video
        </button>

        <div
          className={`modal fade bd-example-modal-xl addvi${id}`}
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
                <UploadFile idlec={id} idcourse={this.props.match.params.id} />
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
        <div className="text-right mb-3">
          {this.renderModalSection(course.id)}
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
    const name = this.makeid()
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-success btn-sm float-right ml-2"
          data-toggle="modal"
          data-target={`.${name}`}
        >
          ดู Video
        </button>
        <div
          className={`modal fade bd-example-modal-xl ${name}`}
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
        {this.renderModalLectureEdit(lecture)}
        {this.renderPlayerLecture(lecture)}
      </div>
    ))
  }

  render() {
    const { courses } = this.props
    if (courses.isFetching) {
      return <Progress Private={true} />
    } else {
      return (
        <PrivateMainLayout>
          {!Array.isArray(courses.dataone) &&
            courses.dataone &&
            this.renderCourse(courses.dataone)}
        </PrivateMainLayout>
      )
    }
  }
}

const mapStateToProps = ({ courses, sections, form }) => {
  return { courses, sections, form }
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
  deleteLecture,
  editCoursePublic
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage)
