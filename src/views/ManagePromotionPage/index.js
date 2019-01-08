import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPromotionContent } from '../../actions'
import { Link } from 'react-router-dom'
import PrivateMainLayout from '../../components/PrivateMainLayout'
// import Swal from 'sweetalert2'

class ManagePromotionPage extends Component {
  componentDidMount() {
    this.props.fetchPromotionContent()
  }

  renderNews(newcontents) {
    return (
      newcontents &&
      newcontents.map((newcontent, index) => (
        <div className="card mb-3" key={index}>
          <div className="crop">
            <img
              className="card-img-top"
              src={newcontent.Thumbnail}
              alt={newcontent.Title}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{newcontent.Title}</h5>
            <p className="card-text">{newcontent.Detail}</p>
            <p className="card-text">
              <small className="text-muted">{newcontent.Timestamp}</small>
            </p>
            <div id="news" className="text-right">
              <button className="btn btn-outline-warning mt-2 mr-2">
                แก้ไข
              </button>
              <button className="btn btn-outline-danger mt-2">ลบ</button>
            </div>
          </div>
        </div>
      ))
    )
  }

  renderPromotion(promotioncontents) {
    return promotioncontents.map((promotioncontent, index) => (
      <div key={index}>
        <div className="card bg-dark text-white crop2 mb-2">
          <img
            className="card-img"
            src={promotioncontent.Thumbnail}
            alt={promotioncontent.Title}
          />
          <div className="card-img-overlay text_left">
            <h1 className="card-title">{promotioncontent.Title}</h1>
            <p className="card-text">{promotioncontent.Detail}</p>
            <p className="card-text">{promotioncontent.Timestamp}</p>
          </div>
        </div>
        <div id="news" className="text-right mb-2">
          <button className="btn btn-outline-warning mr-2">แก้ไข</button>
          <button className="btn btn-outline-danger">ลบ</button>
        </div>
      </div>
    ))
  }

  scrollToSection(id) {
    document.getElementById(id).scrollIntoView()
  }

  render() {
    const { promotioncontent } = this.props
    return (
      <PrivateMainLayout>
        <div id="news" className="text-right">
          <Link
            className="btn btn-primary"
            to="/dashboard/managehome/homecontentfirst/add"
          >
            เพิ่มโปรโมชัน
          </Link>
        </div>
        <div className="mt-5 px-5 mx-5">
          <h1 className="mb-3">โปรโมชั่น</h1>
          {promotioncontent.data && this.renderPromotion(promotioncontent.data)}
        </div>
      </PrivateMainLayout>
    )
  }
}

const mapStateToProps = ({ promotioncontent }) => {
  return { promotioncontent }
}

const mapDispatchToProps = {
  fetchPromotionContent
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagePromotionPage)
