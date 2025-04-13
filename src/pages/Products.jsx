import React from 'react'
import useFetch from '../hook/useFetch'
import Card from '../components/Card'

const Products = () => {
  const [loading , error , data] = useFetch('https://dummyjson.com/products')
  
  if(loading){
    return <div className='flex h-[80vh] justify-center items-center'>
      <span className="loading loading-dots loading-xl"></span>
    </div>
  }

  return(
    <div className='flex justify-center items-center flex-wrap gap-5 mx-5 my-5'>
      {data.products.map((item)=>{
        return <Card key={item.id} title={item.title} src={item.thumbnail} description={item.description}
         id={item.id}/>
      })}
    </div>
  )
}

export default Products