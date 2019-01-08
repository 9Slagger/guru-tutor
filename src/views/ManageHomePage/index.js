import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHomeContent, createHomeContentFirst } from '../../actions'
import { Link } from 'react-router-dom'
import PrivateMainLayout from '../../components/PrivateMainLayout'

class ManageHomePage extends Component {
  componentDidMount() {
    this.props.fetchHomeContent()
  }

  scrollToSection(id) {
    document.getElementById(id).scrollIntoView()
  }

  renderHomeContentFirst(homecontentfirsts) {
    return homecontentfirsts.map((homecontentfirst, index) => (
      <div
        className={
          index === 0
            ? 'carousel-item active border-top mt-2 mb-3'
            : 'carousel-item border-top mt-2 mb-3'
        }
        key={index}
      >
        <img
          className="d-block w-100"
          src={homecontentfirst.Thumbnail}
          alt={homecontentfirst.Title}
        />
        <div className="carousel-caption d-none d-md-block">
          <button className="btn btn-outline-warning mt-2 mr-2">แก้ไข</button>
          <button className="btn btn-outline-danger mt-2">ลบ</button>
          <h1>{homecontentfirst.Title}</h1>
          <p>{homecontentfirst.Detail}</p>
        </div>
      </div>
    ))
  }

  renderHomeContentsecond(homecontentseconds) {
    return homecontentseconds.map((homecontentsecond, index) => (
      <div className="col-lg-4" key={index}>
        <i className={homecontentsecond.Icon} />
        <h2>{homecontentsecond.Title}</h2>
        <p>{homecontentsecond.Detail}</p>
        <p>
          <a className="btn btn-secondary" href="#" role="button">
            ดูรายละเอียดเพิ่มเติม &raquo;
          </a>
          <button className="btn btn-outline-warning ml-2">แก้ไข</button>
        </p>
      </div>
    ))
  }

  renderHomeContentthird(homecontentthirds) {
    return homecontentthirds.map((homecontentthird, index) => (
      <React.Fragment key={index}>
        <hr className="featurette-divider" />
        <div className="text-right mb-2">
          <button className="btn btn-outline-warning mt-2 mr-2">แก้ไข</button>
          <button className="btn btn-outline-danger mt-2">ลบ</button>
        </div>
        <div className="row featurette">
          <div className={index % 2 === 0 ? 'col-md-7' : 'col-md-7 order-md-2'}>
            <h2 className="featurette-heading">{homecontentthird.Title}</h2>
            <p className="lead">{homecontentthird.Detail}</p>
          </div>
          <div className={index % 2 === 0 ? 'col-md-5' : 'col-md-5 order-md-1'}>
            <img
              className="featurette-image img-fluid mx-auto"
              src={homecontentthird.Thumbnail}
              alt={`Generic placeholder${homecontentthird.ContentNumber}`}
            />
          </div>
        </div>
      </React.Fragment>
    ))
  }

  render() {
    return (
      <PrivateMainLayout>
        <div className="container-fluid">
          <div id="content1" className="text-right">
            <button
              className="btn btn-info mr-2"
              onClick={() => this.scrollToSection('content1')}
              disabled
            >
              ไปที่สไลด์บาร์
            </button>
            <button
              className="btn btn-info mr-2"
              onClick={() => this.scrollToSection('content2')}
            >
              ไปที่คำอธิบาย
            </button>
            <button
              className="btn btn-info mr-2"
              onClick={() => this.scrollToSection('content3')}
            >
              ไปที่คอลัมน์
            </button>
            <Link
              className="btn btn-primary"
              to="/dashboard/managehome/homecontentfirst/add"
            >
              เพิ่มสไลด์บาร์
            </Link>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {this.props.homecontent.data.homecontentfirst &&
                  this.renderHomeContentFirst(
                    this.props.homecontent.data.homecontentfirst
                  )}
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <hr className="featurette-divider" />
          <div id="content2" className="text-right">
            <button
              className="btn btn-info mr-2"
              onClick={() => this.scrollToSection('content1')}
            >
              ไปที่สไลด์บาร์
            </button>
            <button
              className="btn btn-info mr-2"
              onClick={() => this.scrollToSection('content2')}
              disabled
            >
              ไปที่คำอธิบาย
            </button>
            <button
              className="btn btn-info mr-2"
              onClick={() => this.scrollToSection('content3')}
            >
              ไปที่คอลัมน์
            </button>
            <div className="container marketing">
              <div className="row">
                {this.props.homecontent.data.homecontentsecond &&
                  this.renderHomeContentsecond(
                    this.props.homecontent.data.homecontentsecond
                  )}
              </div>
            </div>
          </div>
          <hr className="featurette-divider" />
          <div id="content3" className="text-right">
            <button
              className="btn btn-info mr-2"
              onClick={() => this.scrollToSection('content1')}
            >
              ไปที่สไลด์บาร์
            </button>
            <button
              className="btn btn-info mr-2"
              onClick={() => this.scrollToSection('content2')}
            >
              ไปที่คำอธิบาย
            </button>
            <button
              className="btn btn-info mr-2"
              onClick={() => this.scrollToSection('content3')}
              disabled
            >
              ไปที่คอลัมน์
            </button>
            <Link
              className="btn btn-primary"
              to="/dashboard/managehome/homecontentthird/add"
            >
              เพิ่มคอลัมน์
            </Link>
            {this.props.homecontent.data.homecontentthird &&
              this.renderHomeContentthird(
                this.props.homecontent.data.homecontentthird
              )}
          </div>
        </div>
      </PrivateMainLayout>
    )
  }
}

const mapStateToProps = ({ homecontent }) => {
  return { homecontent }
}

const mapDispatchToProps = {
  fetchHomeContent,
  createHomeContentFirst
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageHomePage)
