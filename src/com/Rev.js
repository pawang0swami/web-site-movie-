import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { mrate,db } from '../firebase/Fire'
import { addDoc,doc,updateDoc,query,where,getDocs } from 'firebase/firestore'
import swal from 'sweetalert'

const Rev = ({id,pr,u}) => {

const [rating,setr]=useState(0)
const [form,setf]=useState("")
const [data,setd]=useState([])

const sendr = async()=>{
    await addDoc(mrate,{
        myname:"",
        moveid:id,
        rating:rating,
        time:new Date().getTime(),
        // time   time st
        about:form,
        // rated:rat
        
    })
    const ref= doc (db,"movie",id)
   await  updateDoc(ref,{
         rating: pr+rating,
          rated:u+1
   })
  //  console.log(rated)
   console.log(rating)

    setr(0)
    
    setf("")
    swal({
        title:"done ",
        icon:"success",
        buttons:false,
        timer:3000
})}

useEffect(()=>{
   async function getd() {
    setd([])
     let quer= query(swal,where("moveid",'==',id))
     const q=await getDocs(quer);
     q.forEach((doc)=>[
      setd((pr)=>[...pr,doc.data()])
     ])
   }
   getd()
},[])
// {console.log(about)}


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

 <div className='mt-4'>
       
    
    {data.map((e,i)=>{
      return(
        
        <div className=' p-2 w-full border-b header bg-opacity-50 border-gray-600 mt-2' key={i}>
                        <div className='flex items-center'>
                            <p className='text-blue-500'>name{e.myname}</p>
                            <p className='ml-3 text-xs'>({new Date(e.time).toLocaleString()})</p>
                        </div>
                        <ReactStars
                            size={15}
                            half={true}
                            value={e.rating}
                            edit={false}
                        />

                        <p>{e.about}</p>
                    </div>   


      )
    })}
</div>
    </div>
  )
}

export default Rev
