import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'

class MyClassPage extends Component {
  render() {
    return (
      <MainLayout>
        <div class="class mt-2">
          <div class="row">
            <div class="col-sm text-center m-5">
              <img
                src="https://www.webythebrain.com/wp-content/uploads/2015/09/med-course-43.jpg"
                class="img-fluid"
                alt="Responsive"
              />
            </div>
            <div class="col-sm mt-5 text-white">
              <h1>คอร์สชีววิทยา ม.ปลาย</h1>4 section 21 lectures 320 hour
              <p />
              <ul>
                <li> ความรู้พื้นฐานทางชีววิทยา</li>
                <li>การศึกษาชีววิทยา</li>
                <li>เคมีที่เป็นพื้นฐานของสิ่งมีชีวิต</li>
                <li>เซลล์ของสิ่งมีชีวิต</li>
                <li>ระบบย่อยอาหารและการสลายสารอาหารเพื่อให้ได้พลังงาน</li>
                <li>การรักษาดุลยภาพในร่างกาย</li>
                <li>การดำ รงชีวิตของพืช</li>
                <li>พันธุศาสตร์</li>
                <li>ความหลากหลายทางชีวภาพ</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container mt-5">
          <div class="card">
            <div class="card-header">ความรู้พื้นฐานทางชีววิทยา</div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">
                  เคมีที่เป็นพื้นฐานของสิ่งมีชีวิต
                </li>
                <li class="list-group-item">เซลล์ของสิ่งมีชีวิต</li>
                <li class="list-group-item">
                  ระบบย่อยอาหารและการสลายสารอาหารเพื่อให้ได้พลังงาน
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container mt-3">
          <div id="accordion">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    ความหลากหลายทางชีวภาพ
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <li class="list-group-item">
                    เคมีที่เป็นพื้นฐานของสิ่งมีชีวิต
                  </li>
                  <li class="list-group-item">เซลล์ของสิ่งมีชีวิต</li>
                  <li class="list-group-item">
                    ระบบย่อยอาหารและการสลายสารอาหารเพื่อให้ได้พลังงาน
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-3">
          <div class="card">
            <div class="card-header">ความรู้พื้นฐานทางชีววิทยา</div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }
}

export default MyClassPage
