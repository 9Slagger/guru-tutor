import React, { Component } from 'react'
import { deleteCourse, fetchCourse } from '../../actions'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import PrivateMainLayout from '../../components/PrivateMainLayout'
import { connect } from 'react-redux'
import Progress from '../../components/Progress'

class AddCoursePage extends Component {
  componentDidMount() {
    this.props.fetchCourse()
  }

  onDelete(id) {
    this.props.deleteCourse(id)
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
            btn="แก้ไข"
            btnlink={`/dashboard/course/edit/${course.id}`}
            btn1="รายละเอียด"
            btnlink1={`/dashboard/course/${course.id}`}
            btn2="ลบ"
            mes2={course.name}
            management={true}
            price={course.price}
            delete={() => this.onDelete(course.id)}
          />
        )
      })
    )
  }

  render() {
    const { courses } = this.props
    const juniorhighschool =
      Array.isArray(courses.data) &&
      courses.data &&
      courses.data.filter(course => {
        return course.type === 'juniorhighschool'
      })
    const seniorhighschool =
      Array.isArray(courses.data) &&
      courses.data &&
      courses.data.filter(course => {
        return course.type === 'seniorhighschool'
      })
    const university =
      Array.isArray(courses.data) &&
      courses.data &&
      courses.data.filter(course => {
        return course.type === 'university'
      })
    if (courses.isFetching) {
      return <Progress Private={true} />
    } else {
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
              {Array.isArray(juniorhighschool) &&
                juniorhighschool &&
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
}

const mapStateToProps = ({ courses }) => {
  return { courses }
}

const mapDispatchToProps = {
  fetchCourse,
  deleteCourse
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCoursePage)
