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
    <div className='flex justify-center items-center my-5'>
    <div className="card bg-base-100 image-full w-200 shadow-sm">
  <figure>
    <img
      src={data.thumbnail}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h1 className="card-title font-bold">{data.title}</h1>
    <p>{data.description}</p>
    <p><b>Brand:</b> {data.brand}</p>
    <p><b>Category:</b> {data.category}</p>
    <p><b>Price:</b> ${data.price}</p>
    <p><b>Rating:</b> {data.rating}</p>
    <p><b>Warranty:</b> {data.warrantyInformation}</p>
    <p><b>ShippingInfo:</b>  {data.shippingInformation}</p>
    <p><b>Sku:</b> {data.sku}</p>
    <p><b>Stock:</b> {data.stock}</p>
    <div className="card-actions justify-end">
    <button className={data.availabilityStatus === 'In Stock' ? "bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300" : "bg-red-600 text-white px-6 py-2 rounded-lg  transition duration-300"}>
          Add to Cart
        </button>
    </div>
  </div>
</div>
</div>
    </>
  )

}

export default SingleProduct