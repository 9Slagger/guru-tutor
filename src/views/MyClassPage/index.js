import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'
import Card from '../../components/Card'

const card2 = [
  {
    src:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
    title: 'คณิตศาสตร์',
    text:
      '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~',
    btn: 'เข้าเรียน',
    btnlink: '/myclass/class'
  },
  {
    src:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
    title: 'ฟิสิกส์',
    text:
      '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~',
    btn: 'เข้าเรียน',
    btnlink: '/myclass/class'
  },
  {
    src:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
    title: 'เคมี',
    text:
      '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~',
    btn: 'เข้าเรียน',
    btnlink: '/myclass/class'
  },
  {
    src:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
    title: 'ชีววิทยา',
    text:
      '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~',
    btn: 'เข้าเรียน',
    btnlink: '/myclass/class'
  }
]

class MyClassPage extends Component {
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
      <MainLayout>
        <div className="text-center m-3 p-3">
          <h1>คอร์สเรียนของฉัน</h1>
          <div className="card-container row">{this.renderCrad(card2)}</div>
        </div>
      </MainLayout>
    )
  }
}

export default MyClassPage
