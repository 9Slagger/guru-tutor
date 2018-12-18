import React, { Component } from 'react'
import Card from '../../components/Card'
import MainLayout from '../../components/MainLayout'

const card = [
  {
    src:
      'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
    title: 'แคลคูลัส 1',
    text:
      'เนื้อหารายวิชา ฟังก์ชัน ลิมิต ความต่อเนื่อง และอนุพันธ์ กฎลูกโซ่ อนุพันธ์อันดับสูง เนื้อหารายวิชา ฟังก์ชัน ลิมิต ความต่อเนื่อง และอนุพันธ์ กฎลูกโซ่ อนุพันธ์อันดับสูง',
    btn: 'BUY NOW',
    btnlink: '#'
  },
  {
    src:
      'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
    title: 'xxxx',
    text: 'sadfasdf;klasdfklasd;f',
    btn: 'BUY NOW',
    btnlink: '#'
  },
  {
    src:
      'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
    title: 'xxxx',
    text:
      'เนื้อหารายวิชา ฟังก์ชัน ลิมิต ความต่อเนื่อง และอนุพันธ์ กฎลูกโซ่ อนุพันธ์อันดับสูง',
    btn: 'BUY NOW',
    btnlink: '#'
  },
  {
    src:
      'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
    title: 'xxxx',
    text: 'sadfasdf;klasdfklasd;f',
    btn: 'BUY NOW',
    btnlink: '#'
  },
  {
    src:
      'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
    title: 'xxxx',
    text: 'sadfasdf;klasdfklasd;f',
    btn: 'Buy',
    btnlink: '#'
  }
]
class RoomUniversityPage extends Component {
  renderCrad() {
    return (
      card &&
      card.map(data => {
        return (
          <Card
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
        <div className="container mt-5">
          <h1>ห้องเรียนมอปลาย</h1>
        </div>
        <div className="card-container row">{this.renderCrad()}</div>
      </MainLayout>
    )
  }
}

export default RoomUniversityPage
