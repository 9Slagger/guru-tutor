import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHomeContent } from '../../../actions'

class Content extends Component {
  renderHomeContentSecond(homecontentseconds) {
    return homecontentseconds.map((homecontentsecond, index) => (
      <div className="col-lg-4" key={index}>
        <i className={homecontentsecond.Icon} />
        <h2>{homecontentsecond.Title}</h2>
        <p>{homecontentsecond.Detail}</p>
        <p>
          <a className="btn btn-secondary" href="#" role="button">
            ดูรายละเอียดเพิ่มเติม &raquo;
          </a>
        </p>
      </div>
    ))
  }

  renderHomeContentThird(homecontentthirds) {
    return homecontentthirds.map((homecontentthird, index) => (
      <React.Fragment key={index}>
        <hr className="featurette-divider" />
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
      <div className="container marketing">
        <div className="row">
          {this.props.homecontent.data.homecontentsecond &&
            this.renderHomeContentSecond(
              this.props.homecontent.data.homecontentsecond
            )}
        </div>
        {this.props.homecontent.data.homecontentthird &&
          this.renderHomeContentThird(
            this.props.homecontent.data.homecontentthird
          )}
      </div>
    )
  }
}

const mapStateToProps = ({ homecontent }) => {
  return { homecontent }
}

export default connect(
  mapStateToProps,
  { fetchHomeContent }
)(Content)
