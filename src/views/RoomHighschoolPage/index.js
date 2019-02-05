import React, { Component } from 'react'
import { deleteCourse, fetchCourse } from '../../actions'

import Card from '../../components/Card'
import MainLayout from '../../components/MainLayout'
import { connect } from 'react-redux'

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
            btn=""
            btnlink=""
            btn1=""
            btnlink1={`/watch/course/${course.id}`}
            btn2=""
            mes2={course.name}
            management={false}
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
    return (
      <MainLayout>
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
      </MainLayout>
    )
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
