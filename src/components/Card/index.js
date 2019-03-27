import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Card extends Component {
  onDelete = () => {
    this.props.delete()
  }

  render() {
    const {
      src,
      title,
      text,
      btn,
      btnlink,
      btn1,
      btnlink1,
      price,
      management,
      time
    } = this.props
    if (!management) {
      return (
        <Link
          to={time > 0 ? btnlink1 : '#'}
          className="card col-lg-3 m-3 d-flex align-items-start flex-column link-not-active"
          style={{ width: '21rem' }}
        >
          <img className="card-img-top mb-auto mt-3" src={src} alt="Card cap" />
          <div className="card-body align-self-start mb-auto p-2">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
          </div>
          <div className="row">
            <div className="col-12 text-right mt-2">
              {price && <span className="text-left">{price} THB</span>}
              {time && (
                <p
                  className={
                    time > 7
                      ? 'card-text text-primary'
                      : time > 0
                        ? 'card-text text-warning'
                        : 'card-text text-danger'
                  }
                >
                  <i className="fas fa-exclamation-circle" />
                  {time > 0
                    ? ` เหลือเวลา ${time} วัน`
                    : ` หมดเวลาเมื่อ ${time * -1} วันก่อน`}
                </p>
              )}
            </div>
          </div>
        </Link>
      )
    } else {
      return (
        <div
          to={btnlink1}
          className="card col-lg-3 m-3 d-flex align-items-start flex-column"
          style={{ width: '21rem' }}
        >
          <img className="card-img-top mb-auto mt-3" src={src} alt="Card cap" />
          <div className="card-body align-self-start mb-auto p-2">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
          </div>
          <div className="row">
            <div className="col-12 mt-2">
              <h5 className="text-right">{price} THB</h5>
            </div>
            <div className="col-12 mb-1">
              {btn1 && btnlink1 ? (
                <React.Fragment>
                  <Link className="btn btn-primary mr-2" to={btnlink1}>
                    {btn1}
                  </Link>
                  <button
                    className="btn btn-danger mr-2"
                    onClick={this.onDelete}
                  >
                    ลบ
                  </button>
                </React.Fragment>
              ) : (
                false
              )}
              <Link className="btn btn-warning" to={btnlink}>
                {btn}
              </Link>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Card
