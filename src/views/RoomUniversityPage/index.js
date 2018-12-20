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
    btn: 'ลายละเอียด',
    btnlink: '#'
  },
  {
    src:
      'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
    title: 'แคลคูลัส 2',
    text:
      'เนื้อหารายวิชา การหาพื้นที่ระหว่างเส้นโค้งกับแกน X , แกน Y และพื้นที่ระหว่างโค้ง การหาลิมิตที่อยู่ในรูปแบบที่กำหนดค่าไม่ได้ และ โลปิตาล อื่นๆ',
    btn: 'ลายละเอียด',
    btnlink: '#'
  },
  {
    src:
      'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
    title: 'แคลคูลัส 3',
    text:
      'เนื้อหารายวิชา เวกเตอร์ และ ผิวโค้งในปริภูมิสามมิติ เส้นโค้งในปริภูมิสามมิติ ฟังก์ชันของหลายตัวแปร ปริพันธ์ในสนามเวกเตอร์ อื่นๆ',
    btn: 'ลายละเอียด',
    btnlink: '#'
  },
  {
    src:
      'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
    title: 'ฟิสิกส์',
    text: '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~',
    btn: 'ลายละเอียด',
    btnlink: '#'
  },
  {
    src:
      'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
    title: 'เคมี',
    text: '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~',
    btn: 'ลายละเอียด',
    btnlink: '#'
  },
  {
    src:
      'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
    title: 'statics',
    text: '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~',
    btn: 'ลายละเอียด',
    btnlink: '#'
  },
  {
    src:
      'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
    title: 'compro',
    text: '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~',
    btn: 'ลายละเอียด',
    btnlink: '#'
  },
  {
    src:
      'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
    title: 'toeic',
    text: '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~',
    btn: 'ลายละเอียด',
    btnlink: '#'
  },
  {
    src:
      'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
    title: 'Mechanics of material',
    text: '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~',
    btn: 'ลายละเอียด',
    btnlink: '#'
  },
  {
    src:
      'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
    title: 'อื่นๆ',
    text: '~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~',
    btn: 'ลายละเอียด',
    btnlink: '#'
  }
]
class RoomUniversityPage extends Component {
  renderCrad() {
    return (
      card &&
      card.map((data, index) => {
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
        <div className="container mt-5">
          <h1>ห้องเรียนมหาวิยาลัย</h1>
        </div>
        <div className="card-container row">{this.renderCrad()}</div>
      </MainLayout>
    )
  }
}

export default RoomUniversityPage
