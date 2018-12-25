import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'
import { connect } from 'react-redux'
import { fetchNewContent } from '../../actions'

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
              <small className="text-muted">{newcontent.Timestamp}</small>
            </p>
          </div>
        </div>
      ))
    )
  }

  render() {
    const { newcontent } = this.props
    return (
      <MainLayout>
        <div className="mt-5 container">
          <h1 className="mb-3">ข่าวสาร</h1>
          {this.props.newcontent && this.renderNews(newcontent)}
        </div>
      </MainLayout>
    )
  }
}

const mapStateToProps = ({ newcontent }) => {
  return { newcontent }
}

export default connect(
  mapStateToProps,
  { fetchNewContent }
)(NewsPage)
