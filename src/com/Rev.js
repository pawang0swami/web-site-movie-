import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { mrate,db } from '../firebase/Fire'
import { addDoc,doc,updateDoc } from 'firebase/firestore'
import swal from 'sweetalert'

const Rev = ({id,pr,u}) => {

const [rating,setr]=useState(0)
const [form,setf]=useState("")

const sendr = async()=>{
    await addDoc(mrate,{
        myname:"",
        moveid:id,
        rating:rating,
        time:new Date().getTime(),
        // time   time st
        about:form,
        
    })
    const ref= doc (db,"movie",id)
   await  updateDoc(ref,{
         rating: pr+rating,
          rated:u+1
   })
   console.log(rated)
   console.log(rating)

    setr(0)
    
    setf("")
    swal({
        title:"done ",
        icon:"success",
        buttons:false,
        timer:3000
})}

  return (
    <div className='mt-2 py-1 border-t-2 border-gray-600 w-full '>
        <ReactStars
          size={30}
          half={true}
          value={rating}
        //   edit={true}
          onChange={(n)=>setr(n)}
        />
        {/* {console.log(rate)} */}
<input  
value={form
}
onChange={(e)=>setf(e.target.value)}
    placeholder='share your thought' 
    className='w-full p-2 outline-none headeraa'
/>
 <button onClick={sendr} className='bg bg-green-600 w-full p-1'>share</button>


    </div>
  )
}

export default Rev
