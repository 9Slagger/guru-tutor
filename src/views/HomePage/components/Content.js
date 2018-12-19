import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHomeContent } from '../../../actions'

class Content extends Component {
  renderHomeContentSecond() {
    return (
      this.props.homecontent.homecontentfirst &&
      this.props.homecontent.homecontentfirst.map((homecontentfirst, index) => {
        let classN = ''
        if (index === 0) {
          classN = 'carousel-item active'
        } else {
          classN = 'carousel-item'
        }
        return (
          <div className={classN} key={index}>
            <img
              className="d-block w-100"
              src={homecontentfirst.Thumbnail}
              alt={`slide${homecontentfirst.ContentNumber}`}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>{homecontentfirst.Title}</h1>
              <p>{homecontentfirst.Detail}</p>
            </div>
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4">
            <i className="fas fa-tv fa-8x mb-5" />
            <h2>เรียนรู้ได้ทุกที่ทุกเวลา</h2>
            <p>
              GURU TUTOR คัดสรรคอร์สคุณภาพและหลากหลายเพื่อคุณ
              สามารถเข้าถึงเนื้อหาของเราทุกเมื่อที่คุณต้องการเพียงแค่มีอินเตอร์เน็ต
            </p>
            <p>
              <a className="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <i className="fas fa-graduation-cap fa-8x mb-5" />
            <h2>สอนจากประสบการณ์ตรง</h2>
            <p>
              การสอนที่ปรับใช้จริงไม่ได้ย่อมไม่เกิดประโยชน์ GURU Turot
              เน้นการเรียนรู้ที่ใช้ได้จริงจากประสบการสอนกว่า 10 ปี
            </p>
            <p>
              <a className="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <i className="fas fa-comments fa-8x mb-5" />
            <h2>สอบถามปัญหาได้ทุกเมื่อ</h2>
            <p>
              บริการถามตอบจาก Babel Coder ช่วยให้คำปรึกษาในทุกๆหลักสูตร
              แม้คุณจะไม่ใช่ผู้เรียนของเราก็ตาม
            </p>
            <p>
              <a className="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              คะแนนโทอิคดี ก็มีโอกาสได้งานที่ดี{' '}
              <span className="text-muted">
                คอร์ส TOEIC รับเพียง 20 คนเท่านั้น
              </span>
            </h2>
            <p className="lead">
              ราคาเพียง 2,000 บาท เท่านั้นครับ... (แบ่งจ่ายได้ครับผม)
              เรียนทุกวันเสาร์ เวลา 13.00-16.00 น. เริ่มเรียน 15 ธ.ค.61 ครับ
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="featurette-image img-fluid mx-auto"
              src="https://images.unsplash.com/photo-1523000895257-f6ea8a05be6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
              alt="Generic placeholder"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              ศิลปะเด็ก 6-11 ปี <br />
              <span className="text-muted">โดยครูจ้อสสสสสส</span>
            </h2>
            <p className="lead">
              วาดสตูดิโอเปิดคอร์ส “ศิลปะสำหรับเด็ก” มุ่งเน้นให้เกิดจินตนาการ
              และสร้างแรงบันดาลใจ ผ่านงานศิลปะ ให้เด็กได้ “สนุกและมีความสุข”
              มากกว่าทำให้เกิดตัวผลงานเพียงอย่างเดียว
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="featurette-image img-fluid mx-auto"
              src="https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="Generic placeholder"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Calculus I (แคลคูลัส 1) <br />
              <span className="text-muted">ขั้นเทพ</span>
            </h2>
            <p className="lead">
              เนื้อหารายวิชา ฟังก์ชัน ลิมิต ความต่อเนื่อง และอนุพันธ์ กฎลูกโซ่
              อนุพันธ์อันดับสูง การประยุกต์ของอนุพันธ์ ฟังก์ชันทรานเซนเดลทัล
              การหาอนุพันธ์และอินทิกรัลของฟังก์ชันทรานเซนเดลทัล การอินทิเกรต
              อินทิกรัลจำกัดเขตและอินทิกรัลไม่จำกัดเขต เทคนิคของการอินทิเกรต
              เรขาคณิตวิเคราะห์
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="featurette-image img-fluid mx-auto"
              src="https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
              alt="Generic placeholder"
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ homecontent }) => {
  return { homecontent }
}

export default connect(
  mapStateToProps,
  { fetchHomeContent }
)(Content)
