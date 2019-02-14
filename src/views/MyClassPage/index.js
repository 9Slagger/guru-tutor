import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'
import Card from '../../components/Card'
import { connect } from 'react-redux'
import { fetchCourse } from '../../actions'

class MyClassPage extends Component {
  componentDidMount() {
    this.props.fetchCourse()
  }

  renderCrad(courses, auth) {
    auth.data[0].MyCourse.forEach(element => {
      console.log(element.idcourse)
    })
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
          />
        )
      })
    )
  }

  render() {
    const { courses, auth } = this.props
    return (
      <MainLayout>
        <div className="text-center m-3 p-3">
          <h1>คอร์สเรียนของฉัน</h1>
          <div className="card-container row">
            {Array.isArray(courses.data) &&
              courses &&
              auth.data.length > 0 &&
              this.renderCrad(courses.data, auth)}
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
  fetchCourse
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyClassPage)
