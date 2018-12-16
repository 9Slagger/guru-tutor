import React from 'react'

const Card = props => {
  const { src, title, text, btn, btnlink } = props
  return (
    <div
      class="card col-lg-3 m-3 d-flex align-items-start flex-column"
      style={{ width: '21rem' }}
    >
      <img class="card-img-top mb-auto mt-3" src={src} alt="Card image cap" />
      <div class="card-body align-self-start mb-auto p-2">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{text}</p>
      </div>

      <a href={btnlink} class="btn btn-primary mb-3">
        {btn}
      </a>
    </div>
  )
}

export default Card
