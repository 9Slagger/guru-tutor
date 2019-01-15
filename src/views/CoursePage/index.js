import React, { Component } from 'react'
import Card from '../../components/Card'
import { connect } from 'react-redux'
import PrivateMainLayout from '../../components/PrivateMainLayout'

class AddCoursePage extends Component {
  renderCrad(c) {
    return (
      c &&
      c.map((data, index) => {
        return (
          <Card
            key={index}
            src={data.src}
            title={data.title}
            text={data.text}
            btn={data.btn}
            btnlink={data.btnlink}
          />
        )
      })
    )
  }
  render() {
    return (
      <PrivateMainLayout>
        <div>
          <div className="container mt-5">
            <h1>ห้องเรียนมัธยมต้น</h1>
          </div>

          <div className="card-container row">{this.renderCrad(card)}</div>
          <div className="container mt-5">
            <h1>ห้องเรียนมัธยมปลาย</h1>
          </div>

          <div className="card-container row">{this.renderCrad(card2)}</div>
        </div>
      </PrivateMainLayout>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCoursePage)

const card = [
  {
    src:
      'https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
    title: 'คณิตศาสตร์',
    text:
      '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~',
    btn: 'ลายละเอียด',
    btnlink: '#'
  },
  {
    src:
      'https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
    title: 'วิทยาศาสตร์',
    text:
      '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~',
    btn: 'ลายละเอียด',
    btnlink: '#'
  }
]
const card2 = [
  {
    src:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
    title: 'คณิตศาสตร์',
    text:
      '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~',
    btn: 'ลายละเอียด',
    btnlink: '#'
  },
  {
    src:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
    title: 'ฟิสิกส์',
    text:
      '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~',
    btn: 'ลายละเอียด',
    btnlink: '#'
  },
  {
    src:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
    title: 'เคมี',
    text:
      '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~',
    btn: 'ลายละเอียด',
    btnlink: '#'
  },
  {
    src:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
    title: 'ชีววิทยา',
    text:
      '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~',
    btn: 'ลายละเอียด',
    btnlink: '#'
  }
]
