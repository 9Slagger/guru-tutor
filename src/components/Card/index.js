import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Card extends Component {
  onDelete = () => {
    this.props.delete()
  }

  render() {
    const { src, title, text, btn, btnlink, btn1, btnlink1 } = this.props
    return (
      <div
        className="card col-lg-3 m-3 d-flex align-items-start flex-column"
        style={{ width: '21rem' }}
      >
        <img className="card-img-top mb-auto mt-3" src={src} alt="Card cap" />
        <div className="card-body align-self-start mb-auto p-2">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
        <div className="row">
          {btn1 && btnlink1 ? (
            <div className="col-6 mb-1">
              <Link className="btn btn-primary" to={btnlink1}>
                {btn1}
              </Link>
              <button className="btn btn-danger" onClick={this.onDelete}>
                ลบ
              </button>
            </div>
          ) : (
            false
          )}
          <div className="col-6 mb-3">
            <Link className="btn btn-warning mb-1" to={btnlink}>
              {btn}
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
