import React, { Component } from 'react'
import { fetchCourse } from '../../actions'

import Card from '../../components/Card'
import MainLayout from '../../components/MainLayout'
import { connect } from 'react-redux'
import Progress from '../../components/Progress'

class RoomUniversityPage extends Component {
  componentDidMount() {
    this.props.fetchCourse()
  }

  renderCrad(courses) {
    return (
      courses &&
      courses.map((course, index) => {
        if (course.publish) {
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
            />
          )
        } else return false
      })
    )
  }

  render() {
    const { courses } = this.props
    const university =
      Array.isArray(courses.data) &&
      courses.data &&
      courses.data.filter(course => {
        return course.type === 'university'
      })
    if (courses.isFetching) {
      return <Progress />
    } else {
      return (
        <MainLayout>
          <div className="container mt-5">
            <h1>ห้องเรียนมหาลัย</h1>
          </div>

          <div className="card-container row">
            {Array.isArray(university) &&
              university &&
              this.renderCrad(university)}
          </div>
        </MainLayout>
      )
    }
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
)(RoomUniversityPage)
