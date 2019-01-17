import React from 'react'
import { Link } from 'react-router-dom'

const Card = props => {
  const { src, title, text, btn, btnlink, btn1, btnlink1 } = props
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
        <div className="col-6">
          <Link className="btn btn-primary mb-3" to={btnlink1}>
            {btn1}
          </Link>
        </div>
        <div className="col-6">
          <Link to={btnlink} className="btn btn-warning mb-3">
            {btn}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
