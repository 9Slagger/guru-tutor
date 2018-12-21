import React, { Component } from 'react'
import Content from './components/Content'
import MainLayout from '../../components/MainLayout'
import { connect } from 'react-redux'
import { fetchHomeContent } from '../../actions'

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchHomeContent()
  }

  renderHomeContentFirst() {
    return (
      this.props.homecontent.homecontentfirst &&
      this.props.homecontent.homecontentfirst.map((homecontentfirst, index) => {
        return (
          <div
            className={index === 0 ? 'carousel-item active' : 'carousel-item'}
            key={index}
          >
            <img
              className="d-block w-100"
              src={homecontentfirst.Thumbnail}
              alt={homecontentfirst.Title}
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
      <MainLayout>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {this.props.homecontent && this.renderHomeContentFirst()}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <Content />
      </MainLayout>
    )
  }
}

const mapStateToProps = ({ homecontent }) => {
  return { homecontent }
}

export default connect(
  mapStateToProps,
  { fetchHomeContent }
)(HomePage)
