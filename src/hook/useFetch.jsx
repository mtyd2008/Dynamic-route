import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(false)
    const [data , setData] = useState(null)


    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setData(res)
        })
        .catch(error => setError(true))
        .finally(()=>setLoading(false))
    } , [])

    return [loading , error , data]
}

export default useFetch