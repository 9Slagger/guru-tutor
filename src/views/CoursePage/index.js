import React, { Component } from 'react'
import Card from '../../components/Card'
import { connect } from 'react-redux'
import { fetchCourse } from '../../actions'
import { Link } from 'react-router-dom'
import PrivateMainLayout from '../../components/PrivateMainLayout'

class AddCoursePage extends Component {
  componentDidMount() {
    this.props.fetchCourse()
  }
  renderCrad(courses) {
    return (
      courses &&
      courses.map((course, index) => {
        return (
          <Card
            key={index}
            src={course.thumbnail}
            title={course.name}
            text={course.detail}
            btn1="รายละเอียด"
            btnlink1=""
            btn="แก้ไข"
            btnlink={`/dashboard/course/edit/${course.id}`}
          />
        )
      })
    )
  }
  render() {
    const { courses } = this.props
    const juniorhighschool = courses.data.filter(course => {
      return course.type === 'juniorhighschool'
    })
    const seniorhighschool = courses.data.filter(course => {
      return course.type === 'seniorhighschool'
    })
    const university = courses.data.filter(course => {
      return course.type === 'university'
    })
    return (
      <PrivateMainLayout>
        <div>
          <div className="text-right">
            <Link className="btn btn-primary" to="/dashboard/course/add">
              เพิ่มคอร์ส
            </Link>
          </div>
          <div className="container mt-5">
            <h1>ห้องเรียนมัธยมต้น</h1>
          </div>

          <div className="card-container row">
            {Array.isArray(seniorhighschool) &&
              seniorhighschool &&
              this.renderCrad(juniorhighschool)}
          </div>
          <div className="container mt-5">
            <h1>ห้องเรียนมัธยมปลาย</h1>
          </div>

          <div className="card-container row">
            {Array.isArray(seniorhighschool) &&
              seniorhighschool &&
              this.renderCrad(seniorhighschool)}
          </div>
          <div className="container mt-5">
            <h1>ห้องเรียนมหาวิทยาลัย</h1>
          </div>

          <div className="card-container row">
            {Array.isArray(university) &&
              university &&
              this.renderCrad(university)}
          </div>
        </div>
      </PrivateMainLayout>
    )
  }
}

const mapStateToProps = ({ courses }) => {
  return { courses }
}

const mapDispatchToProps = {
  fetchCourse
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCoursePage)
