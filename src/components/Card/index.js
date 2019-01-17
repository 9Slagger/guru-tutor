import React from 'react'
import { Link } from 'react-router-dom'

const Card = props => {
  const { src, title, text, btn, btnlink, btn1 } = props
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
      <button
        className="btn btn-primary mb-3"
        onClick={() => alert('coming soon')}
      >
        {btn1}
      </button>
      <Link to={btnlink} className="btn btn-warning mb-3">
        {btn}
      </Link>
    </div>
  )
}

export default Card
