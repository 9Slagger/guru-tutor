import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNewContent } from '../../actions'
import { Link } from 'react-router-dom'
import PrivateMainLayout from '../../components/PrivateMainLayout'
// import Swal from 'sweetalert2'

class ManageHomePage extends Component {
  componentDidMount() {
    this.props.fetchNewContent()
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

  scrollToSection(id) {
    document.getElementById(id).scrollIntoView()
  }

  render() {
    const { newcontent } = this.props
    return (
      <PrivateMainLayout>
        <div id="news" className="text-right">
          <Link className="btn btn-primary" to="/dashboard/managenew/add">
            เพิ่มข่าวสาร
          </Link>
        </div>
        <div className="mt-5 container">
          <h1 className="mb-3">ข่าวสาร</h1>
          {this.props.newcontent && this.renderNews(newcontent)}
        </div>
      </PrivateMainLayout>
    )
  }
}

const mapStateToProps = ({ newcontent }) => {
  return { newcontent }
}

const mapDispatchToProps = {
  fetchNewContent
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageHomePage)
