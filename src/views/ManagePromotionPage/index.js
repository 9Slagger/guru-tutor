import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPromotionContent, deletePromotionContent } from '../../actions'
import { Link } from 'react-router-dom'
import PrivateMainLayout from '../../components/PrivateMainLayout'
import Swal from 'sweetalert2'
import Progress from '../../components/Progress'
import moment from 'moment'

class ManagePromotionPage extends Component {
  componentDidMount() {
    this.props.fetchPromotionContent()
  }

  DeletePromotionContent(id) {
    Swal({
      title: 'คุณต้องการลบเนื้อหานี้ใช่หรือไม่?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่ !'
    }).then(result => {
      if (result.value) {
        this.props.deletePromotionContent(id)
      }
    })
  }

  renderPromotion(promotioncontents) {
    return (
      Array.isArray(promotioncontents) &&
      promotioncontents &&
      promotioncontents.map((promotioncontent, index) => (
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
              <p className="card-text">
                {moment(promotioncontent.Timestamp).format('DD/MM/YYYY HH:mm')}
              </p>
            </div>
          </div>
          <div id="news" className="text-right mb-2">
            <Link
              className="btn btn-outline-warning mr-2"
              to={`/dashboard/managepromotion/edit/${promotioncontent.ID}`}
            >
              แก้ไข
            </Link>
            <button
              className="btn btn-outline-danger"
              onClick={() => this.DeletePromotionContent(promotioncontent.ID)}
            >
              ลบ
            </button>
          </div>
        </div>
      ))
    )
  }

  scrollToSection(id) {
    document.getElementById(id).scrollIntoView()
  }

  render() {
    const { promotioncontent } = this.props
    if (promotioncontent.isFetching) {
      return <Progress Private={true} />
    } else {
      return (
        <PrivateMainLayout>
          <div id="news" className="text-right">
            <Link
              className="btn btn-primary"
              to="/dashboard/managepromotion/add"
            >
              เพิ่มโปรโมชัน
            </Link>
          </div>
          <div className="mt-5 px-5 mx-5">
            <h1 className="mb-3">โปรโมชั่น</h1>
            {promotioncontent.data &&
              this.renderPromotion(promotioncontent.data)}
          </div>
        </PrivateMainLayout>
      )
    }
  }
}

const mapStateToProps = ({ promotioncontent }) => {
  return { promotioncontent }
}

const mapDispatchToProps = {
  fetchPromotionContent,
  deletePromotionContent
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagePromotionPage)
