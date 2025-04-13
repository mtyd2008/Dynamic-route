import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../hook/useFetch'

const SingleProduct = () => {
  const params = useParams()
  const [loading , error , data] = useFetch(`https://dummyjson.com/products/${params.id}`)

  if(loading){
    return <div className='flex h-[80vh] justify-center items-center'>
      <span className="loading loading-dots loading-xl"></span>
    </div>
  }

  if(error){
    return <div role="alert" className="alert alert-error">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Error! Task failed successfully.</span>
  </div>
  }

  return(
    <>
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={data.thumbnail}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{data.title}</h2>
    <p>{data.description}</p>
    <p>{data.brand}</p>
    <p>{data.category}</p>
    <p>{data.price}</p>
    <p>{data.rating}</p>
    <p>{data.warrantyInformation}</p>
    <div className="card-actions justify-end">
      <h3>{data.availabilityStatus}</h3>
    </div>
  </div>
</div>
    </>
  )

}

export default SingleProduct