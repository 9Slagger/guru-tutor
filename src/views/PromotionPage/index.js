import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'
import { connect } from 'react-redux'
import { fetchPromotionContent } from '../../actions'
import Progress from '../../components/Progress'
import moment from 'moment'

class PromotionPage extends Component {
  componentDidMount() {
    this.props.fetchPromotionContent()
  }

  renderPromotion(promotioncontents) {
    return promotioncontents.map((promotioncontent, index) => (
      <div className="card bg-dark text-white crop2 mb-2" key={index}>
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
    ))
  }

  render() {
    const { promotioncontent } = this.props
    if (promotioncontent.isFetching) {
      return <Progress />
    } else {
      return (
        <MainLayout>
          <div className="mt-5 px-5 mx-5">
            <h1 className="mb-3">โปรโมชั่น</h1>
            {promotioncontent.data &&
              this.renderPromotion(promotioncontent.data)}
          </div>
        </MainLayout>
      )
    }
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
)(PromotionPage)
