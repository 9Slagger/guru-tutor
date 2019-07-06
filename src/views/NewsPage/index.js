import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'
import { connect } from 'react-redux'
import { fetchNewContent } from '../../actions'
import Progress from '../../components/Progress'
import moment from 'moment'

class NewsPage extends Component {
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
              <small className="text-muted">{moment(newcontent.Timestamp).format("DD/MM/YYYY HH:mm")}</small>
            </p>
          </div>
        </div>
      ))
    )
  }

  render() {
    const { newcontent } = this.props
    if (newcontent.isFetching) {
      return <Progress />
    } else {
      return (
        <MainLayout>
          <div className="mt-5 container">
            <h1 className="mb-3">ข่าวสาร</h1>
            {this.props.newcontent.data && this.renderNews(newcontent.data)}
          </div>
        </MainLayout>
      )
    }
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
)(NewsPage)
