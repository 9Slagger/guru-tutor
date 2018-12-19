import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHomeContent } from '../../../actions'

class Content extends Component {
  renderHomeContentSecond() {
    return (
      this.props.homecontent.homecontentsecond &&
      this.props.homecontent.homecontentsecond.map(
        (homecontentsecond, index) => (
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
        )
      )
    )
  }

  renderHomeContentThird() {
    return (
      this.props.homecontent.homecontentthird &&
      this.props.homecontent.homecontentthird.map((homecontentthird, index) => {
        let classN1 = ''
        let classN2 = ''
        if (index % 2 === 0) {
          classN1 = 'col-md-7'
          classN2 = 'col-md-5'
        } else {
          classN1 = 'col-md-7 order-md-2'
          classN2 = 'col-md-5 order-md-1'
        }
        return (
          <React.Fragment key={index}>
            <hr className="featurette-divider" />
            <div className="row featurette">
              <div className={classN1}>
                <h2 className="featurette-heading">{homecontentthird.Title}</h2>
                <p className="lead">{homecontentthird.Detail}</p>
              </div>
              <div className={classN2}>
                <img
                  className="featurette-image img-fluid mx-auto"
                  src={homecontentthird.Thumbnail}
                  alt={`Generic placeholder${homecontentthird.ContentNumber}`}
                />
              </div>
            </div>
          </React.Fragment>
        )
      })
    )
  }

  render() {
    return (
      <div className="container marketing">
        <div className="row">
          {this.props.homecontent && this.renderHomeContentSecond()}
        </div>
        {this.props.homecontent && this.renderHomeContentThird()}
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
