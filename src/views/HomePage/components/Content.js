import React from 'react'

const Content = () => {
  return (
    <div class="container marketing">
      <div class="row">
        <div class="col-lg-4">
          <i class="fas fa-tv fa-8x mb-5" />
          <h2>เรียนรู้ได้ทุกที่ทุกเวลา</h2>
          <p>
            GURU TUTOR คัดสรรคอร์สคุณภาพและหลากหลายเพื่อคุณ
            สามารถเข้าถึงเนื้อหาของเราทุกเมื่อที่คุณต้องการเพียงแค่มีอินเตอร์เน็ต
          </p>
          <p>
            <a class="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
        <div class="col-lg-4">
          <i class="fas fa-graduation-cap fa-8x mb-5" />
          <h2>สอนจากประสบการณ์ตรง</h2>
          <p>
            การสอนที่ปรับใช้จริงไม่ได้ย่อมไม่เกิดประโยชน์ GURU Turot
            เน้นการเรียนรู้ที่ใช้ได้จริงจากประสบการสอนกว่า 10 ปี
          </p>
          <p>
            <a class="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
        <div class="col-lg-4">
          <i class="fas fa-comments fa-8x mb-5" />
          <h2>สอบถามปัญหาได้ทุกเมื่อ</h2>
          <p>
            บริการถามตอบจาก Babel Coder ช่วยให้คำปรึกษาในทุกๆหลักสูตร
            แม้คุณจะไม่ใช่ผู้เรียนของเราก็ตาม
          </p>
          <p>
            <a class="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            คะแนนโทอิคดี ก็มีโอกาสได้งานที่ดี{' '}
            <span class="text-muted">คอร์ส TOEIC รับเพียง 20 คนเท่านั้น</span>
          </h2>
          <p class="lead">
            ราคาเพียง 2,000 บาท เท่านั้นครับ... (แบ่งจ่ายได้ครับผม)
            เรียนทุกวันเสาร์ เวลา 13.00-16.00 น. เริ่มเรียน 15 ธ.ค.61 ครับ
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="featurette-image img-fluid mx-auto"
            src="https://images.unsplash.com/photo-1523000895257-f6ea8a05be6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            alt="Generic placeholder image"
          />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            ศิลปะเด็ก 6-11 ปี <br />
            <span class="text-muted">โดยครูจ้อสสสสสส</span>
          </h2>
          <p class="lead">
            วาดสตูดิโอเปิดคอร์ส “ศิลปะสำหรับเด็ก” มุ่งเน้นให้เกิดจินตนาการ
            และสร้างแรงบันดาลใจ ผ่านงานศิลปะ ให้เด็กได้ “สนุกและมีความสุข”
            มากกว่าทำให้เกิดตัวผลงานเพียงอย่างเดียว
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            class="featurette-image img-fluid mx-auto"
            src="https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="Generic placeholder image"
          />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            Calculus I (แคลคูลัส 1) <br />
            <span class="text-muted">ขั้นเทพ</span>
          </h2>
          <p class="lead">
            เนื้อหารายวิชา ฟังก์ชัน ลิมิต ความต่อเนื่อง และอนุพันธ์ กฎลูกโซ่
            อนุพันธ์อันดับสูง การประยุกต์ของอนุพันธ์ ฟังก์ชันทรานเซนเดลทัล
            การหาอนุพันธ์และอินทิกรัลของฟังก์ชันทรานเซนเดลทัล การอินทิเกรต
            อินทิกรัลจำกัดเขตและอินทิกรัลไม่จำกัดเขต เทคนิคของการอินทิเกรต
            เรขาคณิตวิเคราะห์
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="featurette-image img-fluid mx-auto"
            src="https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
            alt="Generic placeholder image"
          />
        </div>
      </div>
    </div>
  )
}

export default Content
