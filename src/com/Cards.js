import { useState,useEffect } from "react"
import React from 'react'
import ReactStars from "react-stars"
import { getDocs } from "firebase/firestore"
import { mall } from "../firebase/Fire"
// import { render } from 'react-dom'

const Cards = () => {
    const [data,setdata]=useState([ ])
    

  useEffect(()=>{
    async function abcd() {
      const _data= await getDocs(mall);
      console.log(_data);
       _data.forEach((a)=>{
          setdata((p)=>[...p,a.data()])
       }) 
    }
    abcd()
  },[]) 

  // get the movie in fire base store and add in screen
    
  return (
    <div className='flex flex-wrap justify-between p-3 mt-2'>
        {data.map((e,i)=>{
            return(
         <div key={i} className='card shadow-lg p-2 hover:-translate-y-3 cursor-pointer  font-bold mt-6 transition-all duration-500'>
                 <img className='h-72' src={e.img}/>
                 <h1><span className='text-gray-500'>Name :</span>{e.name}</h1>
                 <h3 className="flex items-center mr-1"><span className='text-gray-500'>Ranting: </span>  <ReactStars size={20} edit={false} value={e.rating}/></h3>
                 <h3><span className='text-gray-500'>Year :</span>{e.year}</h3>
         </div>
         )
        })
        }
    </div>
  )
}

export default Cards