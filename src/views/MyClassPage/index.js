import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'
import Card from '../../components/Card'
import { connect } from 'react-redux'
import { fetchCourse, VerifyAuth } from '../../actions'

class MyClassPage extends Component {
  componentDidMount() {
    this.props.VerifyAuth()
  }

  renderCrad(courses) {
    return (
      courses &&
      courses.map((course, index) => {
        return (
          <Card
            key={index}
            src={course.course.thumbnail}
            title={course.course.name}
            text={course.course.detail}
            btn=""
            btnlink=""
            btn1=""
            btnlink1={`/watch/course/${course.course.id}`}
            btn2=""
            mes2={course.course.name}
            management={false}
            time={course.timeleft}
          />
        )
      })
    )
  }

  render() {
    const { auth } = this.props
    return (
      <MainLayout>
        <div className="text-center m-3 p-3">
          <h1>คอร์สเรียนของฉัน</h1>
          <div className="card-container row">
            {auth.data[0] &&
              Array.isArray(auth.data[0].MyCourse) &&
              auth &&
              auth.data[0].MyCourse.length > 0 &&
              this.renderCrad(auth.data[0].MyCourse)}
          </div>
        </div>
      </MainLayout>
    )
  }
}

const mapStateToProps = ({ courses, auth }) => {
  return { courses, auth }
}

const mapDispatchToProps = {
  fetchCourse,
  VerifyAuth
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyClassPage)
