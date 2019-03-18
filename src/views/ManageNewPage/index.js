import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNewContent, deleteNewContent } from '../../actions'
import { Link } from 'react-router-dom'
import PrivateMainLayout from '../../components/PrivateMainLayout'
import Swal from 'sweetalert2'
import Progress from '../../components/Progress'

class ManageHomePage extends Component {
  componentDidMount() {
    this.props.fetchNewContent()
  }

  DeleteNewContent(id) {
    Swal({
      title: 'คุณต้องการลบเนื้อหานี้ใช่หรือไม่?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่ !'
    }).then(result => {
      if (result.value) {
        this.props.deleteNewContent(id)
      }
    })
  }

  renderNews(newcontents) {
    return (
      Array.isArray(newcontents) &&
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
              <Link
                className="btn btn-outline-warning mt-2 mr-2"
                to={`/dashboard/managenew/edit/${newcontent.ID}`}
              >
                แก้ไข
              </Link>
              <button
                className="btn btn-outline-danger mt-2"
                onClick={() => this.DeleteNewContent(newcontent.ID)}
              >
                ลบ
              </button>
            </div>
          </div>
        </div>
      ))
    )
  }

  render() {
    const { newcontent } = this.props
    if (newcontent.isFetching) {
      return <Progress Private={true} />
    } else {
      return (
        <PrivateMainLayout>
          <div id="news" className="text-right">
            <Link className="btn btn-primary" to="/dashboard/managenew/add">
              เพิ่มข่าวสาร
            </Link>
          </div>
          <div className="mt-5 container">
            <h1 className="mb-3">ข่าวสาร</h1>
            {newcontent.data && this.renderNews(newcontent.data)}
          </div>
        </PrivateMainLayout>
      )
    }
  }
}

const mapStateToProps = ({ newcontent }) => {
  return { newcontent }
}

const mapDispatchToProps = {
  fetchNewContent,
  deleteNewContent
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageHomePage)
