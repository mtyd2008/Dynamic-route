import React from 'react'
import { useNavigate } from 'react-router'

const Card = ({src , title , description , id}) => {

  let navigation = useNavigate()

  return (
<div className="card bg-base-100 image-full w-96 shadow-sm">
<figure>
  <img
    src={src}
    alt="Shoes" />
</figure>
<div className="card-body">
  <h2 className="card-title">{title}</h2>
  <p>{description}</p>
  <div className="card-actions justify-end">
  <button className="btn btn-primary" onClick={()=> navigation(`/product/${id}`)}>See more</button>
  </div>
</div>
</div>
  )
}

export default Card