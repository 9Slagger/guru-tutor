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
        let classN = ''
        if (index === 0) {
          classN = 'carousel-item active'
        } else {
          classN = 'carousel-item'
        }
        return (
          <div className={classN} key={index}>
            <img
              className="d-block w-100"
              src={homecontentfirst.Thumbnail}
              alt={`slide${homecontentfirst.ContentNumber}`}
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
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
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
