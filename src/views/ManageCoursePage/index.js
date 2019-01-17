import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOneCourse } from '../../actions'
import { Link } from 'react-router-dom'
import PrivateMainLayout from '../../components/PrivateMainLayout'

class ManageCoursePage extends Component {
  componentDidMount() {
    this.props.fetchOneCourse(this.props.match.params.id)
  }

  renderCourse() {
    return (
      <div>
        <div>
          <h3>{makedata.name}</h3>
        </div>
        <div>
          <img
            className="card-img-top mb-auto mt-3"
            src={makedata.thumbnail}
            alt="Card cap"
          />
        </div>
        <div className="mt-3">
          <h6>{makedata.detail}</h6>
        </div>
        {this.renderSection(makedata.section)}
      </div>
    )
  }

  renderSection(sections) {
    return sections.map((section, index) => (
      <div className="row" key={index}>
        <div className="col-10">
          <h3>{section.name}</h3>
        </div>
        <div className="col-2">
          <button className="btn btn-warning">แก้ไข Section</button>
        </div>
        <div className="col-12">{this.renderLecture(section.lectures)}</div>
      </div>
    ))
  }

  renderLecture(lectures) {
    return lectures.map((lecture, index) => (
      <div className="form-inline" key={index}>
        <span className="input-group-btn">
          <Link className="" to="">
            {lecture.name}
          </Link>
          <h6>เวลา {lecture.time}</h6>
        </span>
      </div>
    ))
  }

  render() {
    return <PrivateMainLayout>{this.renderCourse()}</PrivateMainLayout>
  }
}

const makedata = {
  id: '5c3f019f6fd3337e169f0d75',
  name: 'แคล1',
  hour: '400',
  creator: {
    ID: '5c1886cb6fd3337e16d3ccaf',
    UserType: 'admin',
    Email: 'test123@gmail.com',
    FirstName: 'พีระพงศ์',
    LastName: ' วิชชุวัชรากร',
    NickName: 'จ้อส',
    TelephoneNumber: '0973243399',
    Address:
      '111, ถนน มหาวิทยาลัย ตำบล สุรนารี อำเภอเมืองนครราชสีมา นครราชสีมา 30000',
    Birthday: '2019-01-04T00:00:00Z',
    Timestamp: '2018-12-18T05:34:03.244Z'
  },
  price: '90000',
  type: 'university',
  detail: 'แคลๅ ง่ายๆ แค่ฉีกเติมน้ำร้อน รอ 3 นาที ก็ได้Aแคล ได้ง่ายๆ ',
  thumbnail:
    'https://images.unsplash.com/photo-1484415063229-3d6335668531?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1988&q=80',
  section: [
    {
      id: '5c3f01b2e3b5dfe974f8e219',
      name: 'ตรีโกนมิติ 1',
      lectures: [
        {
          id: '5c3f0765e3b5dfecc6c5e879',
          name: 'หามุม',
          time: 21.3,
          link: 'https://www.youtube.com/watch?v=8LhONcvskPg',
          comment: []
        }
      ]
    }
  ],
  Timestamp: '0001-01-01T00:00:00Z'
}

const mapStateToProps = ({ courses }) => {
  return { courses }
}

const mapDispatchToProps = {
  fetchOneCourse
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage)
